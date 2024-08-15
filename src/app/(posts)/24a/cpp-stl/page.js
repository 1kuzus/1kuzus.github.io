import X from 'src/component/X';
import metas from 'src/app/_metas';

const path = '/24a/cpp-stl/';
export const {metadata} = metas[path];

export default function Post() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[path].title}</X.Title>
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
            <X.Uli>`str.insert(pos,n,ch)`：向`str`中插入`n`个字符`ch`，第一个字符的下标是`pos`。</X.Uli>
            <X.Uli>`str1.insert(pos,str2)`：向`str`中插入字符串`str2`，`str2`的首位在`str1`中下标是`pos`。</X.Uli>
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
            <X.Uli>`str.replace(pos,n1,n2,ch)`：将`str`从下标`pos`开始连续的`n1`个字符替换成`n2`个`ch`。</X.Uli>
            <X.Uli>`str1.replace(pos,n,str2)`：将`str1`从下标`pos`开始连续的`n`个字符替换成`str2`。</X.Uli>
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
            <X.Uli>`str.erase(pos,n)`：将`str`从下标`pos`开始的`n`个字符删除。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2<<endl; //hello1111world
                str2.erase(5,4);
                cout<<str2<<endl; //helloworld
                `}
            />
            <X.H2>切片：substr()</X.H2>
            <X.Uli>`str.substr(pos)`：取`str`从下标`pos`开始到结尾的字符串。</X.Uli>
            <X.Uli>`str.substr(pos,n)`：取`str`从下标`pos`开始的`n`个字符。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<str2.substr(2)<<endl; //lloworld
                cout<<str2.substr(2,6)<<endl; //llowor
                `}
            />
            <X.H2>查找：find()</X.H2>
            <X.Uli>`str.find(sub)`：在`str`中查找`sub`第一次出现的位置。</X.Uli>
            <X.Uli>`str.find(sub,pos)`：在`str`中从下标`pos`开始查找`sub`第一次出现的位置。</X.Uli>
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
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入vector
                #include <vector>
                ...
                `}
            />
            <X.H2>初始化、访问、遍历</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                vector<int> v1;
                vector<string> v2={"one","two","three"};
                //也可以是vector<string> v2{"one","two","three"};
                //也可以是vector<string> v2({"one","two","three"});

                vector<int> v3(20); //创建20个元素，它们的默认初始值都为0
                vector<int> v4(20,-1); //创建20个元素，它们的初始值都为-1

                cout<<v2[1]<<' '<<v3[1]<<' '<<v4[1]<<endl; //two 0 -1
                cout<<v2.back()<<endl; //three
                `}
            />
            <X.P>也可以与`string`一样使用下标、迭代器和`auto`关键字访问。</X.P>
            <X.H2>尾部添加元素</X.H2>
            <X.P>`push_back()`和C++11新增加的`emplace_back()`作用相同，但是底层实现的机制不同，`emplace_back()`效率更高。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                v1.push_back(123);
                v1.emplace_back(456);
                cout<<v1[0]<<' '<<v1[1]<<endl; //123 456
                `}
            />
            <X.H2>插入元素</X.H2>
            <X.Uli>`insert(it,x)`：在迭代器`it`指定的位置之前插入新元素`x`，并返回新插入元素位置的迭代器。</X.Uli>
            <X.Uli>`insert(it,n,x)`：在迭代器`it`指定的位置之前插入`n`个新元素`x`，并返回第一个新插入元素位置的迭代器。</X.Uli>
            <X.Uli>`emplace(it,...args)`：和`insert(it,x)`用法类似，`...args`是与新插入元素的构造函数相对应的多个参数。同样效率更高，不过`emplace()`每次只能插入一个元素。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                v1={0,1,2,3,4,5,6};

                auto it=v1.insert(v1.begin()+2,99);
                for(auto v:v1) cout<<v<<' '; //0 1 99 2 3 4 5 6
                cout<<endl<<*it<<endl; //99

                it=v1.insert(v1.begin()+4,5,-1);
                for(auto v:v1) cout<<v<<' '; //0 1 99 2 -1 -1 -1 -1 -1 3 4 5 6
                cout<<endl<<*it<<endl; //-1

                v1.emplace(v1.begin(),5);
                cout<<v1[0]<<' '<<*it<<endl; //5 5
                `}
            />
            <X.H2>关于内存管理和shrink_to_fit</X.H2>
            <X.P>vector可以看作是一个动态数组，会动态的申请内存空间。`size`是容器的实际大小，`capacity`是大小的上限。当`vector`满载需要进行扩容时，会完全弃用旧空间，申请更大的新空间，再将元素复制到新空间中。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                vector<int> v5;
                for(int i=0;i<6;i++)
                {
                    v5.push_back(i);
                    cout<<v5.size()<<' '<<v5.capacity()<<endl;
                }
                /*
                1 1
                2 2
                3 4
                4 4
                5 8
                6 8
                */
                `}
            />
            <X.P>因此，此前保存的迭代器可能在重新分配后失效！</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                it=v5.begin(); //假设我们保存了容器首部的迭代器
                cout<<*it<<endl; //v[0]=0
                cout<<v5.size()<<' '<<v5.capacity()<<endl; //6 8

                v5.insert(it,3,0); //原来size=6，capacity=8，插入3个会引起扩容
                cout<<v5.size()<<' '<<v5.capacity()<<endl; //9 12
                cout<<*it<<endl; //14032400 失效了

                //使用shrink_to_fit释放没有使用的内存(同样会完全重新分配内存)
                v5.shrink_to_fit();
                cout<<v5.size()<<' '<<v5.capacity()<<endl; //9 9
                `}
            />
            <X.H2>删除元素与清空、判空</X.H2>
            <X.Uli>`pop_back()`：删除`vector`容器中最后一个元素。该容器的大小`size`会减`1`，但容量`capacity`不变。</X.Uli>
            <X.Uli>`erase(it)`：删除`vector`容器中迭代器`it`指定的元素，并返回指向被删除元素下一个位置元素的迭代器。`size`会减`1`，但`capacity`不变。</X.Uli>
            <X.Uli>`erase(it1,it2)`：删除`vector`容器中位于迭代器{'`[it1,it2)`'}指定区域内的所有元素，并返回指向被删除区域下一个位置元素的迭代器。`size`会减小，但`capacity`不变。</X.Uli>
            <X.Uli>`clear()`：删除`vector`容器中所有的元素。`size`变为`0`，但`capacity`不变。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                v1={0,1,2,3,4,5,6,7,8,9,10};

                v1.pop_back();
                cout<<v1.size()<<' '<<v1.capacity()<<endl; //10 14

                it=v1.erase(v1.begin()+5);
                for(auto v:v1) cout<<v<<' '; //0 1 2 3 4 6 7 8 9
                cout<<endl<<*it<<endl; //6
                cout<<v1.size()<<' '<<v1.capacity()<<endl; //9 14

                it=v1.erase(v1.begin()+3,v1.begin()+6);
                for(auto v:v1) cout<<v<<' '; //0 1 2 7 8 9
                cout<<endl<<*it<<endl; //7
                cout<<v1.size()<<' '<<v1.capacity()<<endl; //6 14
                `}
            />
            <X.P>同样可以用`empty()`判空。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                v1.clear();
                cout<<v1.empty()<<endl; //1
                cout<<v1.size()<<' '<<v1.capacity()<<endl; //0 14
                `}
            />
            <X.H2>排序</X.H2>
            <X.P>严格来说不属于C++ STL的范畴，需要用到`sort()`函数。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入algorithm
                #include <algorithm>
                ...
                `}
            />
            <X.CodeBlock
                language="cpp"
                code={`
                v1={1,4,5,2,6,8};
                sort(v1.begin(),v1.end());
                for(auto v:v1) cout<<v<<' '; //1 2 4 5 6 8
                `}
            />
            <X.H1>关于元组</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入tuple
                #include <tuple>
                ...
                `}
            />
            <X.H2>pair 二元组</X.H2>
            <X.P>`pair`将两个数据组合，它是由结构体实现，元素分别为`first`和`second`。</X.P>
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
            <X.P>序列式容器`vector`储存的元素都是“值”的概念，关联式容器储存的元素是“键值对”的概念。如果已知目标元素的键值，则直接通过键就可以找到目标元素，不需要遍历整个容器。</X.P>
            <X.P>关联式容器存储的元素，默认会根据键值做升序排序。STL标准库在实现时底层选用的数据结构是`红黑树`。</X.P>
            <X.H2>初始化、访问、遍历</X.H2>
            <X.P>`map`中的元素默认按照键的顺序进行*从小到大*排序</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                map<string,double> m1;
                map<string,double> m2={
                    {"one",1},
                    {"two",2},
                    {"three",3},
                };
                //也可以是map<string,double> m2{{"one",1},{"two",2},{"three",3}};
                //也可以是map<string,double> m2({{"one",1},{"two",2},{"three",3}});

                m1["a"]=6;
                m1["b"]=5;
                m1["c"]=4;
                m1["d"]=3; //这里相当于创建了m1["d"]
                m1["e"]=2;
                m1["d"]=1; //这里相当于修改
                //实际上只要使用[key]取值，并且传入的key是新键，就会创建一个新键值对，值为类型默认值

                cout<<m1["c"]<<endl; //4

                for(auto it1=m1.begin();it1!=m1.end();it1++)
                {
                    cout<<it1->first<<' '<<it1->second<<endl;
                }
                /*
                a 6
                b 5
                c 4
                d 1
                e 2
                */
                `}
            />
            <X.H2>插入元素</X.H2>
            <X.Uli>`insert(pair)`：插入一个键值对`pair=(key,value)`。\n如果成功，返回`(新插入的val的迭代器,true)`；\n如果失败，说明已经有键为`key`的键值对，返回`(此元素的迭代器,false)`。</X.Uli>
            <X.Uli>`emplace(...args)`：传入键值对的构造参数即可。同样效率更高，不过`emplace()`每次只能插入一个元素。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                auto it1=m1.begin();
                pair<decltype(m1)::iterator,bool> res;

                res=m1.insert(make_pair("f",99));
                it1=res.first;
                cout<<it1->first<<' '<<it1->second; //f 99
                cout<<' '<<res.second<<endl; //1

                res=m1.insert({"f",88});
                it1=res.first;
                cout<<it1->first<<' '<<it1->second; //f 99
                cout<<' '<<res.second<<endl; //0

                res=m1.emplace("g",55);
                it1=res.first;
                cout<<it1->first<<' '<<it1->second; //g 55
                cout<<' '<<res.second<<endl; //1
                `}
            />
            <X.H2>删除元素与清空、判空</X.H2>
            <X.Uli>`erase(key)`：删除`key`键对应的键值对。</X.Uli>
            <X.Uli>`clear()`：清空`map`。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<m1.size()<<endl; //7

                m1.erase("g");
                cout<<m1.size()<<endl; //6
                cout<<m1.empty()<<endl; //0

                m1.clear();
                cout<<m1.size()<<endl; //0
                cout<<m1.empty()<<endl; //1
                `}
            />
            <X.H2>查找</X.H2>
            <X.Uli>`find(key)`：查找键为`key`的元素，返回该元素的迭代器，找不到则返回迭代器`end()`。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                m1["a"]=100;
                m1["b"]=200;
                m1["c"]=300;

                it1=m1.find("a");
                if(it1!=m1.end())
                {
                    cout<<it1->first<<' '<<it1->second<<endl;
                }
                else
                {
                    cout<<"not found."<<endl;
                }//a 100

                it1=m1.find("d");
                if(it1!=m1.end())
                {
                    cout<<it1->first<<' '<<it1->second<<endl;
                }
                else
                {
                    cout<<"not found."<<endl;
                }//not found.
                `}
            />
            <X.H2>二分查找</X.H2>
            <X.Uli>`lower_bound(key)`返回指向第一个键值*大于等于*`key`的位置的迭代器，找不到则返回迭代器`end()`。</X.Uli>
            <X.Uli>`upper_bound(key)`返回指向第一个键值*大于*`key`的位置的迭代，找不到则返回迭代器`end()`。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                m1.clear();
                m1["a"]=1;
                m1["b"]=2;
                m1["c"]=3;
                m1["x"]=4;
                m1["y"]=5;

                it1=m1.lower_bound("b");
                cout<<it1->first<<' '<<it1->second<<endl;//b 2
                it1=m1.upper_bound("b");
                cout<<it1->first<<' '<<it1->second<<endl;//c 3
                it1=m1.lower_bound("j");
                cout<<it1->first<<' '<<it1->second<<endl;//x 4
                it1=m1.upper_bound("j");
                cout<<it1->first<<' '<<it1->second<<endl;//x 4
                it1=m1.upper_bound("y");
                cout<<(it1==m1.end())<<endl;//1
                `}
            />
            <X.H2>对于结构体类型</X.H2>
            <X.P>如果`key`是结构体类型，需要定义比较函数。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                struct POINT{
                    double x,y;
                    //假如想按照平方距离从大到小排序
                    //默认的排序方式是从小到大，把小于号重载成"大于"的含义相当于打破这种默认
                    //或者理解为，排序方式是从小到大，那么我们就要把期望的结果定义为"小"的
                    friend bool operator <(POINT a,POINT b)
                    {
                        double da=a.x*a.x+a.y*a.y;
                        double db=b.x*b.x+b.y*b.y;
                        //我们期望"平方距离大"的元素在这种含义下是"小的"
                        //因此返回(da>db)的值，也就是这个条件为1的时候，我们认为前者是"小的"
                        return da>db;
                    }
                };
                struct POINTDETAIL{
                    string name; //点的名字
                    vector<int> v; //假设每个点还对应了一些需要用vector储存的信息
                };
                `}
            />
            <X.CodeBlock
                language="cpp"
                code={`
                map<POINT,POINTDETAIL> m3;

                //不同的插入方式
                m3[{3,4}]={"A点",{1,2,3}};
                m3.insert(
                    make_pair(
                        (POINT){4,5},
                        (POINTDETAIL){"B点",{4,5,6}}
                    )
                );
                m3.insert(
                    { {1,5},{"C点",{7,8,9,10}} }
                );
                m3.emplace(
                    (POINT){4,4},
                    (POINTDETAIL){"D点",{2,3,5,7}}
                );

                for(auto it1=m3.begin();it1!=m3.end();it1++)
                {
                    //it1指向一个键值对(key,val)
                    //it1->first是键key，key是一个POINT类型，具有x,y属性
                    //it1->second是值val，val是一个POINTDETAIL类型，具有name属性和v向量
                    cout<<it1->second.name<<": "<<it1->first.x<<' '<<it1->first.y;
                    cout<<"   v=[";
                    for(auto v:it1->second.v) cout<<v<<',';
                    cout<<"\\b]"<<endl;
                }
                /*
                B点: 4 5   v=[4,5,6]
                D点: 4 4   v=[2,3,5,7]
                C点: 1 5   v=[7,8,9,10]
                A点: 3 4   v=[1,2,3]
                */

                m3[{4,3}]={"E点",{5,6,7}};//E点
                cout<<m3[{3,4}].name<<endl;
                //因为定义的是平方和作为判断依据，{3,4}和{4,3}被视为同一个键而发生了重新赋值
                `}
            />
            <X.H2>multimap</X.H2>
            <X.P>`multimap`允许键值重复。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                multimap<string,int> mm1;
                //multimap没有重载[]方法
                mm1.emplace("a",3);
                mm1.emplace("a",1);
                mm1.emplace("a",2);
                mm1.emplace("b",4);
                mm1.emplace("b",5);
                `}
            />
            <X.P>`find(key)`返回找到的第一个值。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                auto it2=mm1.find("a");
                if(it2!=mm1.end())
                {
                    cout<<it2->first<<' '<<it2->second<<endl;
                }
                else
                {
                    cout<<"not found."<<endl;
                }//a 3
                `}
            />
            <X.P>`count(key)`返回键的数量（这个普通的`map`也可以用）。</X.P>
            <X.CodeBlock language="cpp" code={`cout<<mm1.count("a")<<endl; //3`} />
            <X.P>`erase(key)`会擦除`key`对应的所有值。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                mm1.erase("b");
                it2=mm1.find("b");
                if(it2!=mm1.end())
                {
                    cout<<it2->first<<' '<<it2->second<<endl;
                }
                else
                {
                    cout<<"not found."<<endl;
                }//not found.
                `}
            />
            <X.H1>关联式容器：set 集合</X.H1>
            <X.P>使用`set`容器存储的各个键值对，要求键`key`和值`value`必须相等。实际上这可以看作，`set`容器只需要一个`key`信息，即可成功将元素存储起来。同样的，`set`也会对元素进行默认从小到大的排序。</X.P>
            <X.H2>初始化、访问、遍历</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                set<string> s1={"a","world","b","hello","a"};
                //也可以是set<string> s1{"a","world","b","hello","a"};
                //也可以是set<string> s1({"a","world","b","hello","a"});

                for(auto it=s1.begin();it!=s1.end();it++)
                {
                    cout<<*it<<endl;
                }
                /*
                a
                b
                hello
                world
                */
                `}
            />
            <X.H2>插入元素</X.H2>
            <X.Uli>`insert(x)`：插入一个元素`x`。\n如果成功，返回`(新插入的x的迭代器,true)`；\n如果失败，说明已经有元素`x`，返回`(x的迭代器,false)`。</X.Uli>
            <X.Uli>`emplace(...args)`：传入键值对的构造参数即可。同样效率更高，不过`emplace()`每次只能插入一个元素。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                auto it1=s1.begin();
                pair<decltype(s1)::iterator,bool> res;

                res=s1.insert("c");
                it1=res.first;
                cout<<*it1<<' '<<res.second<<endl; //c 1

                res=s1.emplace("c");
                it1=res.first;
                cout<<*it1<<' '<<res.second<<endl; //c 0
                `}
            />
            <X.H2>删除元素与清空、判空</X.H2>
            <X.Uli>`erase(x)`：删除元素`x`。</X.Uli>
            <X.Uli>`clear()`：清空`set`。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<s1.size()<<endl; //5

                s1.erase("hello");
                cout<<s1.size()<<endl; //4
                cout<<s1.empty()<<endl; //0

                s1.clear();
                cout<<s1.size()<<endl; //0
                cout<<s1.empty()<<endl; //1
                `}
            />
            <X.H2>查找</X.H2>
            <X.Uli>`find(x)`：查找元素`x`，返回该元素的迭代器，找不到则返回迭代器`end()`。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                s1.insert("a");
                s1.insert("b");
                s1.insert("c");

                it1=s1.find("a");
                if(it1!=s1.end())
                {
                    cout<<*it1<<endl;
                }
                else
                {
                    cout<<"not found."<<endl;
                }//a

                it1=s1.find("d");
                if(it1!=s1.end())
                {
                    cout<<*it1<<endl;
                }
                else
                {
                    cout<<"not found."<<endl;
                }//not found.
                `}
            />
            <X.H2>二分查找</X.H2>
            <X.P>用法与`map`一致，见`map`。</X.P>
            <X.H2>应用：数组去重</X.H2>
            <X.HighlightBlock>
                <X.P>这个方法去重顺便还排了序，注意效率！</X.P>
            </X.HighlightBlock>
            <X.CodeBlock
                language="cpp"
                code={`
                vector<int> arr1={2,1,3,2,5,1,4,2,3,6,2,1,5,2,3,6,1};
                for(auto v:arr1) cout<<v<<' '; //2 1 3 2 5 1 4 2 3 6 2 1 5 2 3 6 1
                cout<<endl;
                set<int> s_arr1(arr1.begin(),arr1.end());
                vector<int> arr2(s_arr1.begin(),s_arr1.end());
                for(auto v:arr2) cout<<v<<' '; //1 2 3 4 5 6
                cout<<endl;
                `}
            />
            <X.H2>multiset</X.H2>
            <X.P>`multiset`允许元素重复。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                multiset<int> ms1;
                ms1.emplace(1);
                ms1.emplace(2);
                ms1.emplace(2);
                ms1.emplace(2);
                ms1.emplace(3);
                `}
            />
            <X.P>`find()`、`count()`、`erase()`与`multimap`类似。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                cout<<(ms1.find(1)==ms1.end())<<endl; //0
                cout<<(ms1.find(5)==ms1.end())<<endl; //1
                cout<<ms1.count(2)<<endl; //3
                cout<<ms1.size()<<endl; //5
                ms1.erase(2);
                cout<<ms1.size()<<endl; //2
                `}
            />
            <X.H1>无序容器</X.H1>
            <X.P>无序容器也使用“键值对”的方式存储数据。由于不需要维持有序，无序容器的底层实现采用的是`哈希表`。</X.P>
            <X.P>无序容器包括无序映射`unordered_map`和无序集合`unordered_set`等。它们用法与`map`和`set`类似，但是不会维持键值有序。</X.P>
            <X.P>如果使用自定义结构体作为键值，需要提供一个哈希函数。C++标准库提供了`hash`模板类，可以用于自定义类型的哈希函数。本文不对无序容器进行展开介绍。</X.P>
            <X.H1>stack 栈</X.H1>
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入stack
                #include <stack>
                ...
                `}
            />
            <X.Uli>`size()`：获取元素数量。</X.Uli>
            <X.Uli>`empty()`：判空。</X.Uli>
            <X.Uli>`push(x)`：压入一个元素`x`。</X.Uli>
            <X.Uli>`top()`：返回栈顶元素。</X.Uli>
            <X.Uli>`pop()`：弹出栈顶元素。</X.Uli>
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
            <X.Uli>`size()`：获取元素数量。</X.Uli>
            <X.Uli>`empty()`：判空。</X.Uli>
            <X.Uli>`push(x)`：压入一个元素`x`。</X.Uli>
            <X.Uli>`front()`：返回队首元素。</X.Uli>
            <X.Uli>`back()`：返回队尾元素。</X.Uli>
            <X.Uli>`pop()`：弹出队首元素。</X.Uli>
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
            <X.P>优先队列是一种特殊的队列，它的出队顺序是按照元素的优先级来的。优先队列默认是`大根堆`。</X.P>
            <X.CodeBlock
                language="cpp"
                code={`
                //需要引入queue
                #include <queue>
                ...
                `}
            />
            <X.Uli>`size()`：获取元素数量。</X.Uli>
            <X.Uli>`empty()`：判空。</X.Uli>
            <X.Uli>`push(x)`：压入一个元素`x`。</X.Uli>
            <X.Uli>`top()`：返回堆顶元素。</X.Uli>
            <X.Uli>`pop()`：弹出堆顶元素。</X.Uli>
            <X.CodeBlock
                language="cpp"
                code={`
                priority_queue<int> q1;
                q1.push(7);
                q1.push(2);
                q1.push(5);
                q1.push(6);
                q1.push(4);
                q1.push(1);
                q1.push(3);

                while(!q1.empty())
                {
                    int x=q1.top();
                    q1.pop();
                    cout<<x<<endl;
                }
                /*
                7
                6
                5
                4
                3
                2
                1
                */
                `}
            />
            <X.H2>对于结构体类型</X.H2>
            <X.CodeBlock
                language="cpp"
                code={`
                struct DATE {
                    int y,m,d;
                    //默认的优先队列是大根堆，把小于号重载成"大于"的含义相当于打破这种默认，变成小根堆
                    friend bool operator <(DATE a,DATE b)
                    {
                        if(a.y!=b.y) return a.y>b.y;
                        if(a.m!=b.m) return a.m>b.m;
                        return a.d>b.d;
                    }
                };
                `}
            />
            <X.CodeBlock
                language="cpp"
                code={`
                priority_queue<DATE> q2;
                q2.push({2028,12,23});
                q2.push({2028,11,28});
                q2.push({2035,1,1});
                q2.push({2029,1,1});
                q2.push({2028,12,25});

                while(!q2.empty())
                {
                    DATE date=q2.top();
                    q2.pop();
                    cout<<date.y<<'-'<<date.m<<'-'<<date.d<<endl;
                }
                /*
                2028-11-28
                2028-12-23
                2028-12-25
                2029-1-1
                2035-1-1
                */
                `}
            />
        </>
    );
}
