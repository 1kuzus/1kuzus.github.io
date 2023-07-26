import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import blogCategories from '../../blogs/blogCategories';
import './BlogLists.css';

function BlogList(props) {
    const [expand, setExpand] = useState(true);
    const {blogCategory, navigate} = props;
    return (
        <div className="bloglist">
            <div className="bloglist-head">
                <h3 className='bloglist-head-title'>{blogCategory.category}</h3>
                <button
                    onClick={() => {
                        setExpand(!expand);
                    }}
                >
                    expand
                </button>
            </div>
            <ul className="bloglist-ul" style={{maxHeight: expand ? '1000px' : '0'}}>
                {blogCategory.blogs.map((blog) => (
                    <li className="bloglist-li" onClick={() => navigate('blogname')}>
                        {blog}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function BlogLists() {
    const navigate = useNavigate();
    return (
        <div className='bloglists'>
            {blogCategories.map((blogCategory, index) => (
                // 需要key
                <BlogList blogCategory={blogCategory} navigate={navigate} />
            ))}
        </div>
    );
}
