import X from 'src/component/X';

export default function Post() {
    return (
        <>
            <X.H1>Rev/Bilingual</X.H1>
            <X.P>需要输入一个`12`位密码，并通过`4`个`check`函数：</X.P>
            <X.P>`check1`: `password[0]="H"`</X.P>
            <X.P>`check2`:</X.P>
            <X.Uli>`(ord(password[8 - 3]) + 3) ^ 0x7a == 9`</X.Uli>
            <X.Uli>`(ord(password[9 - 3]) + 3) + 9 == 116`</X.Uli>
            <X.Uli>也就是`password[5]="p", pasword[6]="h"`</X.Uli>
            <X.P>`check3`:</X.P>
            <X.CodeBlock
                language="python"
                code={String.raw`
                def check_three(password):
                    return check_ex(password, "Check3")

                def check_four(password):
                    return check_ex(password, "Check4")

                def check_ex(password, func):
                    GetIntCallbackFn = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.c_wchar_p)

                    class CallbackTable(ctypes.Structure):
                        _fields_ = [("E", GetIntCallbackFn)]

                    @GetIntCallbackFn
                    def eval_int(v):
                        print(func, ":", v)  # <--
                        return int(eval(v))

                    table = CallbackTable(E=eval_int)
                    helper = get_helper()
                    helper[func].argtypes = [ctypes.POINTER(CallbackTable)]
                    helper[func].restype = ctypes.c_int
                    return helper[func](ctypes.byref(table))
                `}
            />
            <X.P>`check3`会调用`eval_int`函数，所以加一个`print`语句打印出参数，发现`eval`了`password`一些位置的值，以及一个表达式：</X.P>
            <X.Uli>
                <X.P>当输入`password="Hxxxxphxxxxx"`：</X.P>
                <X.CodeBlock language="text" code="Check3 : 120 + 2 == 120 and 120 == 120 and (120 - x) == 120  and 120 > 48 and 120 < 57 and 120 > 48 and 120 < 57 and 120 > 48 and 120 < 57" />
            </X.Uli>
            <X.Uli>
                <X.P>当输入`password="Hefghphklmno"`：</X.P>
                <X.CodeBlock language="text" code="Check3 : 108 + 2 == 111 and 107 == 108 and (111 - h) == 111  and 107 > 48 and 107 < 57 and 108 > 48 and 108 < 57 and 111 > 48 and 111 < 57" />
            </X.Uli>
            <X.P>其中第二个密码的构造使得表达式中`100+i`刚好与`password[i]`位置对应；如果记`p[i] = ord(password(i))`则有`check3`的规则为：</X.P>
        </>
    );
}
