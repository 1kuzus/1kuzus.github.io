import archives from './_archives.json';

const BASE_URL = 'https://1kuzus.github.io';

const metas = {};
for (let path in archives) {
    metas[path] = {
        title: archives[path].title, //post title
        metadata: {
            title: archives[path].title + ' - 铃木的网络日记', //page title
            alternates: {
                canonical: BASE_URL + path,
            },
        },
    };
}

export default metas;
