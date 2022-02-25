import React from 'react';
import CommentItem from './commentItem';

const CommentList = ({comments}) => {
    return (        
        <ul className="list-group list-group-flush"> 
        {comments.map((comment,index) =>
            <li className="list-group-item" key={index}>
                <CommentItem  {...comment}/>
            </li>
        )}
        </ul>
     );
}
 
export default CommentList;