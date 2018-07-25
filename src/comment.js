import React from "react";
import { Query, Mutation } from "react-apollo";
import { Comment_page,Image_comment, Create_comment } from "./queries";

export const Comment = () => 
    <Query query={Comment_page}>
        {({loading , data , error}) => {
            if(loading) return 'loading'
            if(error) return 'something happened'
            return data.allComment.map(comment => 
                <h2 key={comment.comment_id}>
                    image_id : {comment.image_id} /
                    Message : {comment.message} / 
                    Comment_username : {comment.username}
                </h2>)
        }}
    </Query>;

export const Image_Comment = (
    {
        match : {
            params : image_id
        }
    }
) => 
    <Query query={Image_comment} variables={image_id}>
        {({loading , data , error}) => {
            if(loading) return 'loading'
            if(error) return 'something happened'
            return data.image_comment.map(comment => 
                <h2 key={comment.comment_id}>
                    image_id : {comment.image_id} /
                    Message : {comment.message} / 
                    Comment_username : {comment.username}
                </h2>
            )
        }}
    </Query>;


export const Create_Comment = () => {
    let image_id , username , message;
    return(
        <Mutation mutation={Create_comment}>
            {(getComment , {loading , error }) => (
                <div>
                    <form onSubmit ={e => {
                        e.preventDefault()
                        getComment({
                            refetchQueries : [{
                                query : Comment_page
                            }]
                            ,
                            variables : {
                                image_id : image_id.value,
                                username : username.value,
                                message : message.value
                            }
                        })
                        image_id.value = "";
                        username.value = "";
                        message.value = "";
                    }}>
                        <input type="text" placeholder="image_id" ref={node => {image_id = node}} /><br/><br/>
                        <input type="text" placeholder="username" ref={node => {username = node}} /><br/><br/>
                        <textarea placeholder="message" ref={node => {message = node}} /><br/><br/>
                        <button type="submit">Create Comment</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again )</p>}    
                </div>
            )}
        </Mutation>
    )
}