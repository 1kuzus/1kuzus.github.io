import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import blogClasses from '../../blogs/blogClasses';
import './BlogLists.css';

function BlogList(props) {
    const [showList, setShowList] = useState(true);
    const {blogClass, navigate} = props;
    return (
        <div className={`bloglist${showList ? ' showlist' : ''}`}>
            <div
                className="bloglist-head"
                style={{borderBottomWidth: showList ? '1px' : '0', marginBottom: showList ? '12px' : '-4px'}}
            >
                <h3 className="bloglist-head-title">{blogClass.classTitle + `  (${blogClass.blogs.length})`}</h3>
                <button
                    onClick={() => {
                        setShowList(!showList);
                    }}
                >
                    expand
                </button>
            </div>
            <ul
                className="bloglist-ul"
                style={{height: showList ? 6 + 56 * blogClass.blogs.length + 'px' : '0', opacity: showList ? '1' : '0'}}
            >
                {blogClass.blogs.map((blog) => (
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
        <div className="bloglists">
            {blogClasses.map((blogClass, index) => (
                // 需要key
                <BlogList blogClass={blogClass} navigate={navigate} />
            ))}
        </div>
    );
}
