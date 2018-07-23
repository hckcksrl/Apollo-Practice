import gql from "graphql-tag";

export const Images_Page = gql`
{
    allImage{
        image_id
        username
        file
        location
    }
}
`;

export const Comment_page = gql`
{
    allComment{
        comment_id
        username
        message
        image_id
    }
}
` 
export const Like_page = gql`
{
    allLike{
        like_id
        username
        image_id
    }
}
`

export const User_page = gql`
{
    allUser{
        user_id
        username
        password
        bio
    }
}
`

export const User_image = gql`
query getUserImage($username: String!){
    images(username :$username){
        image_id
        username
        file
        location
    }
}
`

export const Image_comment = gql`
query getImageComent($image_id:Int!){
    image_comment(image_id:$image_id){
        comment_id
        username
        message
        image_id
    }
}
`

export const Image_like = gql`
query getImageLike($image_id:Int!){
    image_like(image_id:$image_id){
        like_id
        username
        image_id
    }
}
`

export const Follower = gql`
query getFollower($from_username:String!){
    follower(from_username:$from_username){
        id
        from_username
        to_username
    }
}
`
export const Following = gql`
query getFollowing($to_username:String!){
    following(to_username:$to_username){
        id
        from_username
        to_username
    }
}
`

export const Profiles = gql`
query getUserProfile($username:String!){
    user_profile(username:$username){
        user_id
        username
        password
    }
}
`

export const Create_image = gql`
mutation getImage($location:String , $file:String! , $username:String!){
    CreateImage(location:$location , file:$file , username:$username){
        image_id
        username
        file
        location
    }
}
`

export const Create_comment = gql`
mutation getComment($image_id:Int! , $message:String! , $username:String!){
    CreateComment(image_id:$image_id , message:$message , username:$username){
        comment_id
        username
        message
        image_id
    }
}
`

export const Create_like = gql`
mutation getLike($image_id:Int! , $username:String!){
    CreateLike(image_id:$image_id , username:$username){
        like_id
        username
        image_id
    }
}
`

export const Create_user = gql`
mutation getUser($username:String! , $password:String!){
    CreateUser(username:$username , password:$password){
        user_id
        username
        password
        email
        name
        bio
        gender
        phone
        website
        profile_image
    }
}
`

export const Create_follower = gql`
mutation getFollow($from_username:String! , $to_username:String!){
    CreateFollower(from_username:$from_username , to_username:$to_username){
        id
        from_username
        to_username
    }
}
`