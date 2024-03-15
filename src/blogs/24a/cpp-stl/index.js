import X from 'src/component/X';

export default function Blog({title}) {
    return (
        <>
            <X.Title>{title}</X.Title>
            <X.H1>string 字符串</X.H1>
            <X.H2>初始化</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                string str1="hello";
                string str2("hello");
                char str3[10]="hello";
                char str4[10]="hello";

                //string类型可以用等号判断值相等，char数组不能 
                cout<<(str1==str2)<<endl; //1
                cout<<(str3==str4)<<endl; //0
                cout<<(str1==str3)<<endl; //1
                cout<<(str1==str4)<<endl; //1
                `}
            />
            <X.HighlightBlock>
                <X.P>字符串常量不能相加。</X.P>
                <X.CodeBlock
                    language="cpp"
                    code={`
                    cout<<"a"+"b";
                    //[Error] invalid operands of types 'const char [2]' and 'const char [2]' to binary 'operator+'
                    `}
                />
            </X.HighlightBlock>
            <X.H2>访问与遍历</X.H2>
            <X.H3>下标访问</X.H3>
            <X.CodeBlock language="cpp" code="cout<<str1[1]<<endl; //e" />
            <X.H3>访问最后一位</X.H3>
            <X.CodeBlock language="cpp" code="cout<<str1.back()<<endl; //o" />
            <X.H3>下标遍历</X.H3>
            <X.CodeBlock
                language="cpp"
                code={`
                for(int i=0;i<str1.size();i++)
                {
                    cout<<str1[i]<<' ';
                }
                //h e l l o
                `}
            />
            <X.H3>迭代器遍历</X.H3>
            <X.CodeBlock
                language="cpp"
                code={`
                for(string::iterator it=str1.begin();it!=str1.end();it++)
                {
                    cout<<*it<<' ';
                }
                //h e l l o
                `}
            />
            <X.P>可以使用auto关键字简化编码，省略迭代器的类型。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                for(auto it=str1.begin();it!=str1.end()-2;it++)
                {
                    //用法和指针一样 
                    cout<<*(it+2)<<' ';
                }
                //l l o
                `}
            />
            <X.H3>使用auto关键字</X.H3>
            <X.CodeBlock
                language="cpp"
                code={`
                for(auto ch:str1)
                {
                    cout<<ch<<' ';
                }
                //h e l l o
                `}
            />
            <X.H2>获取长度：length()和size()</X.H2>
            <X.P>`length()`是沿用C语言的习惯，`size()`是考虑到兼容STL容器，二者作用一致。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str1.size()<<endl; //5
                cout<<str1.length()<<endl; //5
                `}
            />
            <X.HighlightBlock>
                <X.P>这两个函数的返回值是无符号整数，直接和负数比较可能导致潜在问题。</X.P>
                <X.CodeBlock
                    language="cpp"
                    code={`
                    cout<<(str1.size()>-1)<<endl; //0

                    //转成int类型就可以比了 
                    int s1=str1.size();
                    cout<<(s1>-1)<<endl; //1
                    `}
                />
            </X.HighlightBlock>
            <X.H2>清空、判断空串：clear()和empty()</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<"*"<<str1<<' '<<str1.empty()<<endl; //*hello 0
                str1.clear();
                cout<<"*"<<str1<<' '<<str1.empty()<<endl; //* 1
                `}
            />
            <X.H2>插入：insert()</X.H2>
            <X.Uli>`str.insert(pos,n,ch)`：向`str`中插入`n`个字符`ch`，第一个字符的下标是`pos`</X.Uli>
            <X.Uli>`str1.insert(pos,str2)`：向`str`中插入字符串`str2`，`str2`的首位在`str1`中下标是`pos`</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2<<endl; //hello
                str2.insert(str2.size(),"world");
                str2.insert(5,1,' ');
                cout<<str2<<endl; //hello world
                `}
            />
            <X.H2>替换：replace()</X.H2>
            <X.Uli>`str.replace(pos,n1,n2,ch)`：将`str`从下标`pos`开始连续的`n1`个字符替换成`n2`个`ch`</X.Uli>
            <X.Uli>`str1.replace(pos,n,str2)`：将`str1`从下标`pos`开始连续的`n`个字符替换成`str2`</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2<<endl; //hello world
                str2.replace(5,1,3,'0');
                cout<<str2<<endl; //hello000world
                str2.replace(5,3,"1111");
                cout<<str2<<endl; //hello1111world
                `}
            />
            <X.H2>删除：erase()</X.H2>
            <X.Uli>`str.erase(pos,n)`：将`str`从下标`pos`开始的`n`个字符删除</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2<<endl; //hello1111world
                str2.erase(5,4);
                cout<<str2<<endl; //helloworld
                `}
            />
            <X.H2>切片：substr()</X.H2>
            <X.Uli>`str.substr(pos)`：取`str`从下标`pos`开始到结尾的字符串</X.Uli>
            <X.Uli>`str.substr(pos,n)`：取`str`从下标`pos`开始的`n`个字符</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2.substr(2)<<endl; //lloworld 
                cout<<str2.substr(2,6)<<endl; //llowor
                `}
            />
            <X.H2>查找：find()</X.H2>
            <X.Uli>`str.find(sub)`：在`str`中查找`sub`第一次出现的位置</X.Uli>
            <X.Uli>`str.find(sub,pos)`：在`str`中从下标`pos`开始查找`sub`第一次出现的位置</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2<<endl; //helloworld
                cout<<str2.find("world")<<endl; //5 (5是'w'的在str2中的下标)

                //没找到会返回string::npos，在int类型下是-1 
                cout<<str2.find("abc")<<' '<<string::npos<<endl; //18446744073709551615 18446744073709551615
                int idx=str2.find("abc");
                cout<<idx<<endl; //-1

                //指定查找起点
                cout<<str2.find("o")<<endl; //4
                cout<<str2.find("o",5)<<endl; //6
                `}
            />
            <X.H3>应用：查找所有的字母'l'</X.H3>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2<<endl; //helloworld
                for(int idx=str2.find('l');idx!=-1;idx=str2.find('l',idx+1))
                {
                    printf("str2[%d]=%s\\n",idx,"l");
                }
                /*
                str2[2]=l
                str2[3]=l
                str2[8]=l
                */
                `}
            />
            <X.H2>类型转换</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<stoi("234")+1<<endl; //235
                cout<<stoi("-234.8")+1<<endl; //-233
                cout<<stoi("00012")<<endl; //12
                `}
            />
            <X.H3>应用：删去字符串前导0</X.H3>
            <X.P>手写时需要注意一个细节：如果字符串是全`0`，则需要至少保留一个`0`。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<to_string(stoi("-00001"))<<endl; //-1
                cout<<to_string(stoi("00000"))<<endl; //0
                `}
            />
            <X.H1>序列式容器：vector 动态数组</X.H1>
            <X.H1>关于元组</X.H1>
            <X.H2>pair 二元组</X.H2>
            <X.P>`pair`将两个数据组合，它是由结构体实现，元素分别为`first`和`second`。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                //使用pair需要引入utility
                #include <utility>
                ...
                `}
            />
            <X.P>定义和初始化：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                pair<int,int> p1;
                cout<<p1.first<<' '<<p1.second<<endl; //0 0

                pair<int,double> p2(1,3.14);
                //也可以是pair<int,double> p2{1,3.14};
                //也可以是pair<int,double> p2={1,3.14};
                //也可以是pair<int,double> p2({1,3.14});
                cout<<p2.first<<' '<<p2.second<<endl; //1 3.14
                `}
            />
            <X.P>进行比较时，先比较`pair.first`元素的大小，如果相等则继续比较`pair.second`元素的大小：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                pair<int,double> p3(1,3.14);
                pair<int,double> p4(1,2);
                cout<<(p2==p3)<<endl; //1
                cout<<(p3==p4)<<endl; //0

                pair<int,int> p5(1,1);
                pair<int,int> p6(1,2);
                pair<int,int> p7(2,0);
                cout<<(p7>p6)<<endl; //1
                cout<<(p6>p5)<<endl; //1
                `}
            />
            <X.P>C++中可以对元组进行解构赋值：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                //使用tie()需要引入tuple
                #include <tuple>
                ...
                `}
            />
            <X.CodeBlock
                language="cpp"
                code={`
                string name;
                double value;
                pair<string,double> p8("pi",3.14);

                tie(name,value)=p8;
                cout<<name<<' '<<value<<endl; //pi 3.14
                `}
            />
            <X.H3>应用：让函数返回多个值</X.H3>
            <X.CodeBlock
                language="cpp"
                code={`
                //输入(x,y)，输出(y,x) 
                pair<int,int> swapxy(pair<int,int> p)
                {
                    return make_pair(p.second,p.first);
                }
                `}
            />
            <X.CodeBlock
                language="cpp"
                code={`
                //make_pair可以直接生成一个pair常量值 
                p1=swapxy(make_pair(2,7));
                cout<<p1.first<<' '<<p1.second<<endl; //7 2
                `}
            />
            <X.H2>tuple 多元组</X.H2>
            <X.P>`tuple`的用法类似，但不限制元素数量。</X.P>
            <X.CodeBlock language="cpp" code="tuple<int,int,int,double> t1(1,2,3,9.99);" />
            <X.P>取第`i`个元素：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                //取第i个元素使用get<i>(t)
                cout<<get<0>(t1)<<' '<<get<3>(t1)<<endl; //1 9.99
                `}
            />
            <X.HighlightBlock>
                <X.P>上述方法的`i`必须传入一个常量！</X.P>
            </X.HighlightBlock>
            <X.P>获取元组的大小：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                //获取tuple大小
                cout<<tuple_size<tuple<int,int,int>>::value<<endl; //3
                //decltype(t1)实际是取了t1的类型 
                cout<<tuple_size<decltype(t1)>::value<<endl; //4
                `}
            />
            <X.P>解构的操作是一样的：</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                int a,b,c;
                double d;
                tie(a,b,c,d)=t1;
                cout<<a<<' '<<b<<' '<<c<<' '<<d<<endl; //1 2 3 9.99
                `}
            />
            <X.H1>关联式容器：map 映射</X.H1>
            <X.P>
                序列式容器`vector`储存的元素都是“值”的概念，关联式容器储存的元素是“键值对”的概念。---
                如果已知目标元素的键值，则直接通过键就可以找到目标元素，不需要遍历整个容器。
            </X.P>
            <X.P>关联式容器存储的元素，默认会根据键值做升序排序。STL标准库在实现时底层选用的数据结构是`红黑树`。</X.P>
            <X.H1>关联式容器：set 集合</X.H1>
            <X.H1>无序容器</X.H1>
            <X.P>无序容器也使用“键值对”的方式存储数据。由于不需要维持有序，无序容器的底层实现采用的是`哈希表`。</X.P>
            <X.P>
                无序容器包括无序映射`unordered_map`和无序集合`unordered_set`等。它们用法与`map`和`set`类似，但是不会维持键值有序。
            </X.P>
            <X.P>
                如果使用自定义结构体作为键值，需要提供一个哈希函数。C++标准库提供了`hash`模板类，可以用于自定义类型的哈希函数。本文不对无序容器进行展开介绍。
            </X.P>
            <X.H1>stack 栈</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入stack
                #include <stack>
                ...
                `}
            />
            <X.Uli>`size()`:获取元素数量</X.Uli>
            <X.Uli>`empty()`:判空</X.Uli>
            <X.Uli>`push(x)`:压入一个元素`x`</X.Uli>
            <X.Uli>`top()`:返回栈顶元素</X.Uli>
            <X.Uli>`pop()`:弹出栈顶元素</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                stack<int> s;
                s.push(1); 
                s.push(2); 
                s.push(3);

                while(!s.empty())
                {
                    int x=s.top();
                    s.pop();
                    cout<<x<<endl;
                }
                /*
                3
                2
                1
                */ 
                `}
            />
            <X.H1>queue 队列</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入queue
                #include <queue>
                ...
                `}
            />
            <X.Uli>`size()`:获取元素数量</X.Uli>
            <X.Uli>`empty()`:判空</X.Uli>
            <X.Uli>`push(x)`:压入一个元素`x`</X.Uli>
            <X.Uli>`front()`:返回队首元素</X.Uli>
            <X.Uli>`back()`:返回队尾元素</X.Uli>
            <X.Uli>`pop()`:弹出队首元素</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                queue<int> q;
                q.push(1); 
                q.push(2); 
                q.push(3);

                while(!q.empty())
                {
                    int x=q.front();
                    q.pop();
                    cout<<x<<endl;
                }
                /*
                1
                2
                3
                */ 
                `}
            />
            <X.H1>priority_queue 优先队列</X.H1>
        </>
    );
}
