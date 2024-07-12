// const posts = require('./_posts.json');

// console.log(posts);

// a=[]
// for (const [key, value] of Object.entries(posts)) {
//     obj={path:key,title:value.title}
//     if(value.time){
//         obj.time=value.time
//     }
//     a.push(obj)
// }

// const stringCompare = (a, b) => {
//     return a.time > b.time ? -1 : 1;
// }


// a.sort((a,b)=>stringCompare(a,b))

// b={}

// for(let i=0;i<a.length;i++){
//     b[a[i].path]=a[i]
//     //remove key
//     delete b[a[i].path].path
// }

// //write a into _posts.json
// const fs = require('fs')
// fs.writeFileSync('./_posts2.json', JSON.stringify(b, null, 4))

// process.exit(0)




const archives = [
    {
        categoryName: '网络杂识',
        blogs: [
            '/23d/database-3nf/',
            '/23d/github-linguist-vendored/',
            '/24a/deepl-shortcut-setting/',
            '/24a/git-merge-allow-unrelated-histories/',
            '/24b/injective-surjective-bijective/',
        ],
    },
    {
        categoryName: 'Web',
        blogs: [
            '/23d/hust-cas-login/',
            '/24b/learn-cwes/',
            '/24b/cross-site-scripting/',
            '/24b/cross-site-request-forgery/',
        ],
        /*todo:注释掉时因为读不到page.title导致不能build*/
    },
    {
        categoryName: '算法',
        blogs: [
            '/24b/leetcode-4/',
            '/24b/leetcode-30/',
            '/24b/leetcode-37/',
            '/24c/leetcode-42/',
            '/24b/leetcode-60/',
            '/24b/leetcode-65/',
            '/24b/leetcode-84/',
            '/24c/leetcode-85/',
            '/24b/leetcode-312/',
            '/24b/leetcode-1373/',
            '/24b/leetcode-1739/',
        ],
    },
    {
        categoryName: '深度学习',
        blogs: [
            '/longtime/papers-dl/',
            '/23d/r2plus1d/',
            '/23d/object-detection-map/',
            '/23d/learn-rnn-lstm/',
            '/24a/reproduce-nerf-rpn/',
            '/24b/yolov5-obb-nms-rotated/',
        ],
    },
    {
        categoryName: 'Python学习',
        blogs: ['/24a/torch-numpy-topk/', '/24a/object-oriented-programming-python/'],
    },
    {
        categoryName: '前端与JavaScript',
        blogs: ['/23c/js-array/', '/23d/css-auto-height-transition/'],
    },
    {
        categoryName: '课程',
        blogs: [
            '/24b/rank-inequality/',
            '/23c/pattern-recognition-1/',
            '/23c/pattern-recognition-2/',
            '/23c/pattern-recognition-3/',
            '/23d/pattern-recognition-4/',
            '/23d/protocols/',
            '/24a/machine-learning-exercises/',
            '/24a/games101-01-transformation/',
            '/24a/games101-02-rasterization/',
            '/24a/games101-03-shading/',
            '/24a/games101-04-geometry/',
            '/24b/by-questions/',
        ],
    },
    {
        categoryName: '其他',
        blogs: ['/longtime/demo/', '/longtime/updates/'],
    },
];

function savearchives() {
    const fs = require('fs');
    fs.writeFileSync('./_categories.json', JSON.stringify(archives, null, 4));
}
savearchives()

process.exit(0);
archives.forEach((category) => {
    category.blogs = category.blogs.map((path) => {
        // const post = posts.find((post) => post.path === blog);
        return {
            path,
            title: posts[path].title,
            time: posts[path].time,
        };
    });
});
// a.map((category) => {
//     category.blogs = category.blogs.map((blog) => ({
//         2:2,
//     }));
//     return category;
// });

console.log(archives[0]);

// export default archives;
