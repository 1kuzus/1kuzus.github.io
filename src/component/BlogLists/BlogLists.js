import React from 'react';
import {useNavigate} from 'react-router-dom';
import blogCategories from '../../blogs/blogCategories';
import './BlogLists.css';

export default function BlogLists() {
    const navigate = useNavigate();
    return (
        <>
            {blogCategories.map((blogCategory) => (
                // 需要key
                <ul className="bloglists-ul">
                    <h3>{blogCategory.category}</h3>
                    {blogCategory.blogs.map((blog) => (
                        <li className="bloglists-li" onClick={() => navigate('/blogname')}>
                            {blog}
                        </li>
                    ))}
                </ul>
            ))}
        </>
    );
}
