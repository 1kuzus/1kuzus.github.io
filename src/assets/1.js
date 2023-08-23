const person = 'Mike';
const age = 28;

function myTag(strings, personExp, ageExp) {
    const str0 = strings[0]; // "That "
    const str1 = strings[1]; // " is a "
    const str2 = strings[2]; // "."

    const ageStr = ageExp > 99 ? 'centenarian' : 'youngster';

    // 我们甚至可以返回使用模板字面量构建的字符串
    return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

// console.log(output);
// That Mike is a youngster.

function fmt(strings) {
    let lines = String.raw(strings).split('\n').map((line) => line.trimEnd());
    if (!lines[0]) lines = lines.slice(1);
    const indent = lines[0].length - lines[0].trimStart().length;
    lines = lines.map((line) => line.slice(indent));
    return lines.join('\n');
}
const pure = `
            #include <iostream>
            using namespace std;

            int main(int argc, char *argv[]) {
                printf("\t1 + 2 is %d \n",3);
                /* An annoying "Hello World" example */
                for (auto i = 0; i < 0xFFFF; i++)
                    cout << "Hello, World!" << endl;
                
                char c = '\n';
                unordered_map <string, vector<string> > m;
                m["key"] = "\\\\"; // this is an error
                
                return -2e3 + 12l;
            }`;
const code = fmt`
                #include <iostream>
                using namespace std;

                int main(int argc, char *argv[]) {
                    printf("\t1 + 2 is %d \n",3);
                    /* An annoying "Hello World" example */
                    for (auto i = 0; i < 0xFFFF; i++)
                        cout << "Hello, World!" << endl;

                    char c = '\n';
                    unordered_map <string, vector<string> > m;
                    m["key"] = "\\\\"; // this is an error

                    return -2e3 + 12l;
                }`;
console.log(code);
