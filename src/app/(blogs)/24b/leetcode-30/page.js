import X from 'src/component/X';
import metas from 'src/app/_metas';

const pathname = '/24b/leetcode-30/';
export const metadata = {
    title: metas[pathname].pagetitle,
    alternates: {
        canonical: metas.baseurl + pathname,
    },
};

export default function Blog() {
    return (
        <>
            <X.TOC />
            <X.Title>{metas[pathname].blogtitle}</X.Title>
            <X.HighlightBlock>
                <X.P>
                    原题链接：@串联所有单词的子串[https://leetcode.cn/problems/substring-with-concatenation-of-all-words/description/]@
                </X.P>
            </X.HighlightBlock>
            <X.P>
                维护两个指针，用`mp`记录单词的出现次数，如果某个单词出现次数超过了给定的次数，就右移左指针，直到该单词的出现次数符合要求；---
                如果某个单词不在`mp`中，就放弃当前维护的所有内容，即左指针移到右指针，然后重置`mp`。
            </X.P>
            <X.P>注意要从`0`到`wl-1`循环偏移量，以考虑所有可能的情况。</X.P>
            <X.CodeBlock
                language="python"
                code={`
                class Solution:
                def findSubstring(self, s: str, words: List[str]) -> List[int]:
                    wl=len(words[0]) # word length
                    ans=[]
                    for offset in range(wl):
                        i=offset
                        mp=Counter(words)
                        for j in range(offset+wl,len(s)+1,wl):
                            word=s[j-wl:j]
                            if word in mp:
                                mp[word]-=1
                                while mp[word]<0:
                                    i+=wl
                                    word_del=s[i-wl:i]
                                    mp[word_del]+=1
                            else:
                                i=j
                                mp=Counter(words)
                            if sum([v for k,v in mp.items()])==0:
                                ans.append(i)
                    return ans
                `}
            />
        </>
    );
}
