import React from 'react';
import { Query, Mutation } from "react-apollo";
import { Like_page , Image_like , Create_like} from "./queries";

export const Like = () => <Query query={Like_page}>
    {({loading , data , error}) => {
		if(loading) return 'loading'
		if(error) return 'something happened'
        return data.allLike.map(like => 
            <h2 key={like.like_id}>
                image_id : {like.image_id} / 
                like_username : {like.username}
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
                    like_username : {like.username}
                </h2>
            )
        }}
    </Query>

export const Create_Like = () => {
    let image_id , username
    return (
        <Mutation mutation={Create_like}>
            {(getLike , {loading , error}) => (
                <div>
                    <form onSubmit={e => {
                        e.preventDefault()
                        getLike({
                            variables: {
                                image_id : image_id.value,
                                username : username.value
                            }
                        })
                        image_id.value = "";
                        username.value = "";
                    }}>
                        <input type="text" placeholder="image_id" ref={node => {image_id=node}} /><br/><br/>
                        <input type="text" placeholder="username" ref={node => {username=node}} /><br/><br/>
                        <button type="submit">Create Like</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again )</p>}    
                </div>
            )}

        </Mutation>
    )
}