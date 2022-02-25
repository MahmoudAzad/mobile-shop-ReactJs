import React, { useEffect, useState } from 'react';
import Loading from '../common/loading';
import { CategoriesAction } from '../redux/actions/categoriesAction';
import { Store } from '../redux/store/store';

const Categories = () => {

    const[categories , setCategories] = useState("")

    useEffect(()=>{
        const sendReq = async ()=>{
            await Store.dispatch(CategoriesAction());
            const data = await Store.getState().Categories;
            
            setCategories(data);
        }
        sendReq();
    },[])
    
    if (!categories) { return <Loading /> }
    console.log("Categories => " , categories);
    return ( 
        <div>

                <h5 className="container mt-4 mb-1 text-left font-weight-bold">Product categories</h5>
        <div className="categories-container container">
                
                {categories.map((category)=>(
            <div className="categories-box">
                      <div className="categories-item">
                             <img  src={`http://localhost:1337${category.img.url}`} />
                             <h6 className="mb-3">{category.title}</h6>
                     </div>
            </div>
                    ))}

        </div>
        </div>

     );
}
 
export default Categories;