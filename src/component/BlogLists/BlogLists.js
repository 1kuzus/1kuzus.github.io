import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import categories from '../../blogs/categories';
import './BlogLists.css';

function BlogList(props) {
    const {category, navigate} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`bloglist${showList ? ' showlist' : ''}`}>
            <div
                className="bloglist-head"
                onClick={() => {
                    setShowList(!showList);
                }}
            >
                <h3 className="bloglist-title">{category.categoryName + `  (${category.blogs.length})`}</h3>
            </div>
            <ul className="bloglist-ul" style={{height: showList ? 4 + 54 * category.blogs.length + 'px' : '0'}}>
                {category.blogs.map((blog, index) => (
                    <li className="bloglist-li" key={index} onClick={() => navigate('/blogname')}>
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
                <BlogList key={index} category={category} navigate={navigate} className="vvv"/>
            ))}
        </div>
    );
}
