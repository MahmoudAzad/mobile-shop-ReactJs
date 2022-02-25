import React, { useState } from 'react';

const CreateComment = (props) => {
    const [state,setState] = useState({comment : {} , errors : {}});
                                                                                            
    const submitHandler = event =>{
        event.preventDefault();
        if(formIsValid()){
            console.log("state submited" , state.comment);
            props.onComment(state.comment);
            
            setState({comment :{} , errors : {}});
        }
    }



    const formIsValid = () =>{
        const errors = {};
        if(!state.comment.author){
            errors.author = "description is required"
        }
        if(!state.comment.description){
            errors.description ="description is required"
        }
        setState({...state , errors});
        return !(errors.author || errors.description)
    }


    const changeHandler = event =>{
        const formData = {[event.target.name] : event.target.value};
        setState({...state,comment:{...state.comment , ...formData }});
        console.log("state" , state);
    }

     
    return (
        <form onSubmit={submitHandler}>
            <div class="form-group">
                <label >Name</label>
                <input value={state.comment.author || ""} type="text" class="form-control" name="author" onChange={changeHandler}/>
                <small class="form-text text-muted">{state.errors.author}</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Enter your reviw</label>
                <textarea value={state.comment.description || ""} className="form-control" rows="5" name="description" onChange={changeHandler}></textarea>
                <small class="form-text text-muted">{state.errors.description}</small>
            </div>

            <button type="submit" class="btn btn-primary">submit</button>
        </form>
    );
}

export default CreateComment;