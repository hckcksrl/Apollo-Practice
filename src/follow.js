import React from 'react';
import { Query } from "react-apollo";
import { Follower ,Following } from "./queries";

export const Followers = (
    {
        match : {
            params : from_id
        }
    }
) => <Query query={Follower} variables={from_id}>
        {({loading , data , error }) => {
            if(loading) return "loading"
            if(error) return "something happened"
            return data.follower.map(follower => 
                <h2 key={follower.id}>
                    from_id : {follower.from_id} /
                    to_id : {follower.to_id}
                </h2>
            )
        }}
    </Query>

export const Followings =(
    {
        match : {
            params : to_id
        }
    }
) => <Query query={Following} variables={to_id}>
        {({loading , data , error }) => {
            if(loading) return "loading"
            if(error) return "something happened"
            return data.following.map(following => 
                <h2 key={following.id}>
                    to_id : {following.to_id} /
                    from_id : {following.from_id}
                </h2>
            )
        }}
    </Query>


