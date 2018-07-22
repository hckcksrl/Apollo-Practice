import React from 'react';
import { Query } from "react-apollo";
import { Like_page , Image_like } from "./queries";

export const Like = () => <Query query={Like_page}>
    {({loading , data , error}) => {
		if(loading) return 'loading'
		if(error) return 'something happened'
        return data.allLike.map(like => 
            <h2 key={like.like_id}>
                image_id : {like.image_id} / 
                like_user_id : {like.user_id}
            </h2>)
	}}
</Query>

export const Image_Like = ({
    match : {
        params : image_id
    }
}) => 
    <Query query={Image_like} variables={image_id}>
        {({loading , data , error }) => {
            if(loading) return "loading"
            if(error) return "something happened"
            return data.image_like.map(like => 
                <h2 key={like.like_id}>
                    image_id : {like.image_id} /
                    like_user_id : {like.user_id}
                </h2>
            )
        }}
    </Query>