import React from 'react'
import { Query } from "react-apollo";
import { User_page , Profiles } from "./queries";


export const User_Page = () =>
    <Query query={User_page}>
        {({loading , data , error}) => {
            if(loading) return 'loading'
            if(error) return 'something happened'
            return console.log(data.allUser)
            // return data.allUser.map(user =>
            // <h2 key={user.user_id}>
            //     username : {user.username} /
            //     password : {user.password}
            // </h2>)
        }}
    </Query>

export const Profile = (
    {
        match : {
            params : username
        }
    }
) => <Query query={Profiles} variables={username}>
        {({loading , data , error}) => {
            if(loading) return 'loading'
            if(error) return 'something happened'
            return (
                <h2>
                    username : {data.user_profile.username}  /
                    password : {data.user_profile.password}
                </h2>
            )
        }}
    </Query>