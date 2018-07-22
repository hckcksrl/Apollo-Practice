import React from "react";
import { Query } from "react-apollo";
import { Comment_page,Image_comment } from "./queries";

export const Comment = () => 
    <Query query={Comment_page}>
        {({loading , data , error}) => {
            if(loading) return 'loading'
            if(error) return 'something happened'
            return data.allComment.map(comment => 
                <h2 key={comment.comment_id}>
                    image_id : {comment.image_id} /
                    Message : {comment.message} / 
                    Comment_user_id : {comment.user_id}
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
                    Comment_user_id : {comment.user_id}
                </h2>
            )
        }}
    </Query>;