import React from 'react';

const CommentItem = (props) => {
    return ( 
        <div className="row"> 
            <div className="col-2"> 
                 <img src="/images/comment/maleUser.png" className='w-100' />
            </div>
            <div className="col-10">
                <h3 className="heading">{props.Name}</h3>
                <p >{props.CommentDesc}</p>
            </div>
        </div>
     );
}
 
export default CommentItem;