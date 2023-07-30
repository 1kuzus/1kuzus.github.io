import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import categories from '../../blogs/categories';
import './SideBar.css';

function SideBarList(props) {
    const {category, navigate} = props;
    const [showList, setShowList] = useState(true);
    return (
        <div className={`sidebarlist${showList ? ' showlist' : ''}`}>
            <div className="sidebarlist-head">
                <h3 className="sidebarlist-title">{category.categoryName + `  (${category.blogs.length})`}</h3>
            </div>
            <ul className="sidebarlist-ul">
                {category.blogs.map((blog, index) => (
                    <li className="sidebarlist-li" key={index} onClick={() => navigate('/blogname2')}>
                        {blog}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <div id="sidebar">
            {categories.map((category, index) => (
                <SideBarList key={index} category={category} navigate={navigate} />
            ))}
        </div>
    );
}
