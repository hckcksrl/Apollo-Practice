import React from 'react'
import { Query, Mutation } from "react-apollo";
import { User_page , Profiles ,Create_user } from "./queries";


export const User_Page = () =>
    <Query query={User_page}>
        {({loading , data , error}) => {
            if(loading) return 'loading'
            if(error) return 'something happened'
            return data.allUser.map(user =>
            <h2 key={user.user_id}>
                username : {user.username} /
                password : {user.password}
            </h2>)
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

export const Create_User = () => {
    let username , password
    return (
        <Mutation mutation={Create_user}>
            {(getUser , {loading , error}) => (
                <div>
                    <form onSubmit={e => {
                        e.preventDefault()
                        getUser({
                            variables : {
                                username : username.value,
                                password : password.value
                            }
                        })
                        username.value = "";
                        password.value = "";
                    }}>
                        <input type="text" placeholder="username" ref={node => {username=node}} /><br/><br/>
                        <input type="password" placeholder="password" ref={node => {password=node}} /><br/><br/>
                        <button type="submit">Create User</button>
                    </form>
                    {loading && <p>Loading...</p>}
                    {error && <p>Error :( Please try again )</p>}    
                </div>
            )}
        </Mutation>
    )
}