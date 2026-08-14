import archives from './archives.json';
import rawCategories from './categories.json';

const isDev = process.env.NODE_ENV === 'development';

// 线上环境，归档页面不展示inactive文章，文章页也不导出inactive文章
let activeArchives = archives;
if (!isDev) activeArchives = Object.fromEntries(Object.entries(archives).filter(([_, post]) => !post.inactive));

// 无论开发/线上环境，均从categories的原分类中移除inactive文章
const categories = rawCategories.map((category) => ({
    ...category,
    posts: category.posts.filter((post) => !archives[post].inactive),
}));

// 开发环境，将inactive文章添加到一个新的分类中
if (isDev) {
    categories.push({
        categoryName: '隐藏的文章',
        posts: Object.keys(archives).filter((path) => archives[path].inactive),
    });
}

export {archives, activeArchives, categories};
