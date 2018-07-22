import gql from "graphql-tag";

export const Images_Page = gql`
{
    allImage{
        image_id
        user_id
        file
        location
    }
}
`;

export const Comment_page = gql`
{
    allComment{
        comment_id
        user_id
        message
        image_id
    }
}
` 
export const Like_page = gql`
{
    allLike{
        like_id
        user_id
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
query getUserImage($user_id: Int!){
    images(user_id :$user_id){
        image_id
        user_id
        file
        location
    }
}
`

export const Image_comment = gql`
query getImageComent($image_id:Int!){
    image_comment(image_id:$image_id){
        comment_id
        user_id
        message
        image_id
    }
}
`

export const Image_like = gql`
query getImageLike($image_id:Int!){
    image_like(image_id:$image_id){
        like_id
        user_id
        image_id
    }
}
`

export const Follower = gql`
query getFollower($from_id:Int!){
    follower(from_id:$from_id){
        id
        from_id
        to_id
    }
}
`
export const Following = gql`
query getFollowing($to_id:Int!){
    following(to_id:$to_id){
        id
        from_id
        to_id
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