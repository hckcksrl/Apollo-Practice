import React from 'react';
import { Query , Mutation} from "react-apollo";
import { Follower ,Following ,Create_follower} from "./queries";

export const Followers = (
    {
        match : {
            params : from_username
        }
    }
) => <Query query={Follower} variables={from_username}>
        {({loading , data , error }) => {
            if(loading) return "loading"
            if(error) return "something happened"
            return data.follower.map(follower => 
                <h2 key={follower.id}>
                    from_username : {follower.from_username} /
                    to_username : {follower.to_username}
                </h2>
            )
        }}
    </Query>

export const Followings =(
    {
        match : {
            params : to_username
        }
    }
) => <Query query={Following} variables={to_username}>
        {({loading , data , error }) => {
            if(loading) return "loading"
            if(error) return "something happened"
            return data.following.map(following => 
                <h2 key={following.id}>
                    to_username : {following.to_username} /
                    from_username : {following.from_username}
                </h2>
            )
        }}
    </Query>

export const Create_Follower = () => {
    let from_username , to_username
    return (
        <Mutation mutation={Create_follower}>
            {(getFollow , {loading , error}) => (
                <div>
                    <form onSubmit={ e => {
                        e.preventDefault()
                        getFollow({
                            variables : {
                                from_username : from_username.value,
                                to_username : to_username.value,
                            }
                        })
                        from_username.value = "";
                        to_username.value = "";
                    }}>
                        <input type="text" placeholder="Follower" ref={node => {from_username=node}} /><br/><br/>
                        <input type="text" placeholder="Following" ref={node => {to_username=node}} /><br/><br/>
                        <button type="submit">Create Follow</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again )</p>}    
                </div>
            )}
        </Mutation>
    )
}
