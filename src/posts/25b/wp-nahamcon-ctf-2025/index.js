import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>Web/Outcast</X.H1>
            <X.P>The challenge gives part of the source code in `/modules/apicaller.php.orig`:</X.P>
            <X.CodeBlock
                language="php"
                code={String.raw`
                <?php

                class APICaller {
                    private $url =  'http://localhost/api/';
                    private $path_tmp = '/tmp/';
                    private $id;

                    public function __construct($id, $path_tmp = '/tmp/') {
                        $this->id = $id;
                        $this->path_tmp = $path_tmp;

                    }

                    public function __call($apiMethod, $data = array()) {
                        $url = $this->url . $apiMethod;
                        $data['id'] = $this->id;

                        foreach ($data as $k => &$v) {
                            if ( ($v) && (is_string($v)) && str_starts_with($v, '@') ) {
                                $file = substr($v, 1);

                                if ( str_starts_with($file, $this->path_tmp) ) {
                                    $v = file_get_contents($file);
                                }
                            }
                            if (is_array($v) || is_object($v)) {
                                $v = json_encode($v);
                            }
                        }

                        // Call the API server using the given configuraions
                        $ch = curl_init($url);
                        curl_setopt_array($ch, array(
                            CURLOPT_POST           => true,
                            CURLOPT_POSTFIELDS     => $data,
                            CURLOPT_RETURNTRANSFER => true,
                            CURLOPT_HTTPHEADER     => array('Accept: application/json'),
                        ));
                        $response = curl_exec($ch);
                        $error  = curl_error($ch);
                        
                        curl_close($ch);

                        if (!empty($error)) {
                            throw new Exception($error);
                        }

                        return $response;
                    }
                }
                `}
            />
            <X.P>By appending an extra `\r\\n` to the `method` parameter, the server throws an error and responds with the error message. Note that the error message reflects the value of parameters.</X.P>
            <X.Image src="1.jpg" width="100%" filterDarkTheme />
            <X.P>This can also be used for file existence enumeration. (And found `/flag.txt` exists.)</X.P>
            <X.Image src="2.jpg" width="100%" filterDarkTheme />
            <X.P>According to `apicaller.php.orig`, parameters like `@/tmp/[file]` will be parsed as file contents, and there is a path traversal vulnerability in both `method` and `parameters`.</X.P>
            <X.P>Make a request to the `../test/` API again, set the `method` parameter to a value that causes the error, like `1\r\\n`, and set the `parameters` parameter to `@/tmp/../flag.txt`. The server will reflect the contents of the file, which is the flag.</X.P>
            <X.Image src="3.jpg" width="100%" filterDarkTheme />
            <X.CodeBlock language="text" code="FLAG{ch41ning_bug$_1s_W0nd3rful!}" />
            <X.H1>Rev/What's a base amongst friends?</X.H1>
            <X.P>This is a custom Base32 encoding. After some dynamic debugging, the custom alphabet is `ybndrfg8ejkmcpqxot1uwisza345h769`, and the encoded flag is `m7xzr7muqtxsr3m8pfzf6h5ep738ez5ncftss7d1cftskz49qj4zg7n9cizgez5upbzzr7n9cjosg45wqjosg3mu`.</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                # findings
                # length: 5n -> 8n
                # custom base32 alphabet: ybndrfg8ejkmcpqxot1uwisza345h769

                # tests
                # 00000 -> gyadycbo
                # 00001 -> gyadycbt
                # 11111 -> grauncjt
                # aaaaa -> cfosnamb

                # target
                # ??? -> m7xzr7muqtxsr3m8pfzf6h5ep738ez5ncftss7d1cftskz49qj4zg7n9cizgez5upbzzr7n9cjosg45wqjosg3mu

                import base64

                b32_alphabet = "abcdefghijklmnopqrstuvwxyz234567"
                custom_base32_alphabet = "ybndrfg8ejkmcpqxot1uwisza345h769"
                table_enc = str.maketrans(b32_alphabet, custom_base32_alphabet)
                table_dec = str.maketrans(custom_base32_alphabet, b32_alphabet)


                def custom_base32_encode(data):
                    result = base64.b32encode(data)
                    result = result.decode().lower()
                    return result.translate(table_enc)


                def custom_base32_decode(result):
                    result = result.translate(table_dec)
                    result = result.encode().upper()
                    data = base64.b32decode(result)
                    return data


                print(custom_base32_encode(b"00000"))  # gyadycbo
                print(custom_base32_encode(b"aaaaa"))  # cfosnamb

                print(custom_base32_decode("gyadycbo"))  # b'00000'
                print(custom_base32_decode("cfosnamb"))  # b'aaaaa'

                target = "m7xzr7muqtxsr3m8pfzf6h5ep738ez5ncftss7d1cftskz49qj4zg7n9cizgez5upbzzr7n9cjosg45wqjosg3mu"
                print(custom_base32_decode(target))  # __rust_begin_short_backtrace__rust_end_short_backtraces

                # Congratulations! flag{50768fcb270edc499750ea64dc45ee92}
                `}
            />
            <X.CodeBlock language="text" code="flag{50768fcb270edc499750ea64dc45ee92}" />
            <X.H1>Rev/It's Locked</X.H1>
            <X.P>The given `flag.sh` script contains a lot of unreadable binary or non-printable characters. But we can still barely recognize the following part:</X.P>
            <X.Image src="4.jpg" width="100%" />
            <X.P>Which is:</X.P>
            <X.CodeBlock language="bash" code='LANG=C perl -pe "s/[^print:]//g" | openssl base64 -A -d' />
            <X.P>And `s/[^print:]//g` means to remove all non-printable characters, which inspires us to extract the printable characters from the script. We use the following script:</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                with open("flag.sh", "rb") as f:
                    content = f.read()

                simplified = b""

                for ch in content:
                    if 32 <= ch <= 126:
                        simplified += bytes([ch])

                with open("flag_simplified.sh", "wb") as f:
                    f.write(simplified)
                `}
            />
            <X.P>And get `flag_simplified.sh` which includes a long Base64 string. We can decode it into the following content:</X.P>
            <X.CodeBlock
                language="text"
                code={String.raw`
                _bcl_verify_dec ()
                {
                    [ "TEST-VALUE-VERIFY" != "$(echo "$BCV" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "B-\${1}-\${UID}" -a -A 2> /dev/null)" ] && return 255;
                    echo "$1-\${UID}"
                }
                _bcl_verify() { _bcl_verify_dec "$@"; }
                _bcl_get ()
                {
                    [ -z "$UID" ] && UID="$(id -u 2> /dev/null)";
                    [ -f "/etc/machine-id" ] && _bcl_verify "$(cat "/etc/machine-id" 2> /dev/null)" && return;
                    command -v dmidecode > /dev/null && _bcl_verify "$(dmidecode -t 1 2> /dev/null | LANG=C perl -ne '/UUID/ && print && exit')" && return;
                    _bcl_verify "$({ ip l sh dev "$(LANG=C ip route show match 1.1.1.1 | perl -ne 's/.*dev ([^ ]*) .*/\1/ && print && exit')" | LANG=C perl -ne 'print if /ether / && s/.*ether ([^ ]*).*/\1/'; } 2> /dev/null)" && return;
                    _bcl_verify "$({ blkid -o export | LANG=C perl -ne '/^UUID/ && s/[^[:alnum:]]//g && print && exit'; } 2> /dev/null)" && return;
                    _bcl_verify "$({ fdisk -l | LANG=C perl -ne '/identifier/i && s/[^[:alnum:]]//g && print && exit'; } 2> /dev/null)" && return;
                }
                _bcl_gen_p ()
                {
                    local _k;
                    local str;
                    [ -z "$BC_BCL_TEST_FAIL" ] && _k="$(_bcl_get)" && _P="$(echo "$1" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "$_k" -a -A 2> /dev/null)";
                    [ -n "$_P" ] && return 0;
                    [ -n "$fn" ] && {
                        unset BCL BCV _P P S fn;
                        unset -f _bcl_get _bcl_verify _bcl_verify_dec;
                        return 255
                    };
                    BCL="$(echo "$BCL" | openssl base64 -d -A 2> /dev/null)";
                    [ "$BCL" -eq "$BCL" ] 2> /dev/null && exit "$BCL";
                    str="$(echo "$BCL" | openssl base64 -d -A 2> /dev/null)";
                    BCL="\${str:-$BCL}";
                    exec /bin/sh -c "$BCL";
                    exit 255
                }
                BCL='aWQgLXUK'
                BCV='93iNKe0zcKfgfSwQoHYdJbWGu4Dfnw5ZZ5a3ld5UEqI='
                P=llLvO8+J6gmLlp964bcJG3I3mY27I9ACsJTvXYCZv2Q=
                S='lRwuwaugBEhK488I'
                C=3eOcpOICWx5iy2UuoJS9gQ==
                for x in openssl perl gunzip; do
                    command -v "$x" >/dev/null || { echo >&2 "ERROR: Command not found: $x"; return 255; }
                done
                unset fn _err
                if [ -n "$ZSH_VERSION" ]; then
                    [ "$ZSH_EVAL_CONTEXT" != "\${ZSH_EVAL_CONTEXT%":file:"*}" ] && fn="$0"
                elif [ -n "$BASH_VERSION" ]; then
                    (return 0 2>/dev/null) && fn="\${BASH_SOURCE[0]}"
                fi
                fn="\${BC_FN:-$fn}"
                XS="\${BASH_EXECUTION_STRING:-$ZSH_EXECUTION_STRING}"
                [ -z "$XS" ] && unset XS
                [ -z "$fn" ] && [ -z "$XS" ] && [ ! -f "$0" ] && {
                    echo >&2 'ERROR: Shell not supported. Try "BC_FN=FileName source FileName"'
                    _err=1
                }
                _bc_dec() {
                    _P="\${PASSWORD:-$BC_PASSWORD}"
                    unset _ PASSWORD
                    if [ -n "$P" ]; then
                        if [ -n "$BCV" ] && [ -n "$BCL" ]; then
                            _bcl_gen_p "$P" || return
                        else
                            _P="$(echo "$P"|openssl base64 -A -d)"
                        fi
                    else
                        [ -z "$_P" ] && {
                            echo >&2 -n "Enter password: "
                            read -r _P
                        }
                    fi
                    [ -n "$C" ] && {
                        local str
                        str="$(echo "$C" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "C-\${S}-\${_P}" -a -A 2>/dev/null)"
                        unset C
                        [ -z "$str" ] && {
                            [ -n "$BCL" ] && echo >&2 "ERROR: Decryption failed."
                            return 255
                        }
                        eval "$str"
                        unset str
                    }
                    [ -n "$XS" ] && {
                        exec bash -c "$(printf %s "$XS" |LANG=C perl -e '<>;<>;read(STDIN,$_,1);while(<>){s/B3/\n/g;s/B1/\x00/g;s/B2/B/g;print}'|openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "\${S}-\${_P}" 2>/dev/null|LANG=C perl -e "read(STDIN,\$_, \${R:-0});print(<>)"|gunzip)"
                    }
                    [ -z "$fn" ] && [ -f "$0" ] && {
                        zf='read(STDIN,\$_,1);while(<>){s/B3/\n/g;s/B1/\\x00/g;s/B2/B/g;print}'
                        prg="perl -e '<>;<>;$zf'<'\${0}'|openssl enc -d -aes-256-cbc -md sha256 -nosalt -k '\${S}-\${_P}' 2>/dev/null|perl -e 'read(STDIN,\\\$_, \${R:-0});print(<>)'|gunzip"
                        LANG=C exec perl '-e$^F=255;for(319,279,385,4314,4354){($f=syscall$_,$",0)>0&&last};open($o,">&=".$f);open($i,"'"$prg"'|");print$o(<$i>);close($i)||exit($?/256);$ENV{"LANG"}="'"$LANG"'";exec{"/proc/$$/fd/$f"}"'"\${0:-python3}"'",@ARGV' -- "$@"
                    }
                    [ -f "\${fn}" ] && {
                        unset -f _bcl_get _bcl_verify _bcl_verify_dec
                        unset BCL BCV _ P _err
                        eval "unset _P S R fn;$(LANG=C perl -e '<>;<>;read(STDIN,$_,1);while(<>){s/B3/\n/g;s/B1/\x00/g;s/B2/B/g;print}'<"\${fn}"|openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "\${S}-\${_P}" 2>/dev/null|LANG=C perl -e "read(STDIN,\$_, \${R:-0});print(<>)"|gunzip)"
                        return
                    }
                    [ -z "$fn" ] && return
                    echo >&2 "ERROR: File not found: $fn"
                    _err=1
                }
                [ -z "$_err" ] && _bc_dec "$@"
                unset fn
                unset -f _bc_dec
                if [ -n "$_err" ]; then
                    unset _err
                    false
                else
                    true
                fi
                `}
            />
            <X.P>`_bcl_get` function tries a series of machine-unique identifiers to generate a key, and then decrypts the `BCV` variable using the key. And this challenge gives us an important hint:</X.P>
            <X.HighlightBlock background="gray">
                <X.P>All I know is that this came from a machine with a cryptic ID of just 'hello'.</X.P>
            </X.HighlightBlock>
            <X.P>So we then try to brute force the `UID`:</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                import subprocess

                BCV = "93iNKe0zcKfgfSwQoHYdJbWGu4Dfnw5ZZ5a3ld5UEqI="

                for uid in range(0, 10000):
                    cmd = f'echo "{BCV}" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "B-hello-{uid}" -a -A'
                    result = subprocess.run(cmd, shell=True, capture_output=True)
                    if result.returncode == 0:
                        print(f"UID {uid} succeeded: {result.stdout}")

                # UID 83 succeeded: b'B\x87\xe5\xb5\xa5\x1d\xc9\`Ww+3\x8d\xb8\xa9\x06\x7f\x0f\x1dY\xa3\xe5\xf3\x080I&/\x98N\x01'
                # UID 1094 succeeded: b'\x10CU1\\\xe3E\xbf\x9e\x83\xa7\xbb\xf6\xda\xc6\x90\xb3\x17O\x9e\xf5\x1c\xbe\x92\xad\xbd}\xd1\x82\x84H'
                # UID 1338 succeeded: b'TEST-VALUE-VERIFY\n'
                # UID 1417 succeeded: b'\xe0b[\xc2.\x08W\xb5\x15\xc9?\xf0an0W4I\xa3+\xdbb\x0f\xa8\n"\xd2\'\x85yj'
                # ...
                `}
            />
            <X.P>And get the first key: `"B-hello-1338"`.</X.P>
            <X.P>`_bcl_get` function returns the second key `"hello-1338"` by `echo`, which is `_k` used in:</X.P>
            <X.CodeBlock language="text" code='_k="$(_bcl_get)" && _P="$(echo "$1" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "$_k" -a -A 2> /dev/null)";' />
            <X.CodeBlock
                language="python"
                code={String.raw`
                import subprocess

                P = "llLvO8+J6gmLlp964bcJG3I3mY27I9ACsJTvXYCZv2Q="
                _k = "hello-1338"  # from dec-1.py

                cmd = f'echo "{P}" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "{_k}" -a -A'
                result = subprocess.run(cmd, shell=True, capture_output=True)

                print(result.stdout)  # b'QHh4K9JfgoACd2f4\n'
                `}
            />
            <X.P>Then we can get the string `"QHh4K9JfgoACd2f4"` by running the above command, which is `_P` used in the third key:</X.P>
            <X.CodeBlock language="text" code='str="$(echo "$C" | openssl enc -d -aes-256-cbc -md sha256 -nosalt -k "C-${S}-${_P}" -a -A 2>/dev/null)"' />
            <X.P>Here `str` turns out to be `"R=2105\\n\\n"`.</X.P>

            <X.P>...</X.P>
        </>
    );
}
