// import { Link } from "react-router-dom";
// import { categories } from "../data"
// import '../styles/categories.scss';

// export default function Categories() {
//     return (
//         <div className='categories'>
//             <h1>Explore Top Categories</h1>
//             <p>Discover a curated selection of top destinations and accommodations tailored to your preferences. Whether you seek serene getaways, vibrant city stays, or adventurous escapes, find your perfect retreat with ease and confidence. Explore and book your next unforgettable experience effortlessly.
//             </p>

//             <div className='categories-list'>
//                 {categories?.slice(1, 7).map((categories, index) => (
//                     <Link to=''>
//                         <div className='category' key={index}>
//                             <img src={categories.img} alt={'categories.label'} />
//                             <div className='overlay'></div>
//                             <div className='category-text'>
//                                 <div className='text-icon'>{categories.icon}</div>
//                                 <p>{categories.label}</p>
//                             </div>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }

import { Link } from "react-router-dom";
import { categories } from "../data";
import '../styles/categories.scss';

const Categories = () => {
    return (
        <div className='categories'>
            <h1>Explore Top Categories</h1>
            <p>Discover a curated selection of top destinations and accommodations tailored to your preferences. Whether you seek serene getaways, vibrant city stays, or adventurous escapes, find your perfect retreat with ease and confidence. Explore and book your next unforgettable experience effortlessly.</p>

            <div className='categories_list'>
                {categories?.slice(1, 7).map((category, index) => (
                    <Link to='/' key={index} className='category_link'>
                        <div className='category'>
                            <img src={category.img} alt={category.label} />
                            <div className='overlay'></div>
                            <div className='category_text'>
                                <div className='category_text_icon'>{category.icon}</div>
                                <p>{category.label}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Categories;