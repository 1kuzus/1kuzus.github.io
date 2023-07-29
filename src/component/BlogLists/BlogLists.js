import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import categories from '../../blogs/categories';
import './BlogLists.css';

function BlogList(props) {
    const [showList, setShowList] = useState(true);
    const {category, navigate} = props;
    return (
        <div className={`bloglist${showList ? ' showlist' : ''}`}>
            <div
                className="bloglist-head"
                onClick={() => {
                    setShowList(!showList);
                }}
            >
                <h3 className="bloglist-head-title">{category.categoryName + `  (${category.blogs.length})`}</h3>
            </div>
            <ul className="bloglist-ul" style={{height: showList ? 4 + 54 * category.blogs.length + 'px' : '0'}}>
                {category.blogs.map((blog, index) => (
                    <li className="bloglist-li" key={index} onClick={() => navigate('blogname')}>
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
        <div id="bloglists">
            {categories.map((category, index) => (
                <BlogList key={index} category={category} navigate={navigate} />
            ))}
        </div>
    );
}
