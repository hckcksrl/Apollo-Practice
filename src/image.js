import React from "react";
import { Query } from "react-apollo";
import { Images_Page , User_image} from "./queries";


export const Image = () => <Query query={Images_Page}>
	{({loading , data , error}) => {
		if(loading) return 'loading'
		if(error) return 'something happened'
		return data.allImage.map(image => 
			<h2 key={image.image_id}>
			image_file : {image.file} /
			image_user_id : {image.user_id}
			</h2>)
	}}
</Query>

export const User_Image = (
	{
		match : {
			params : user_id
		}
	}
) => <Query query={User_image} variables={user_id}>
	{({loading , data , error}) =>{
		if(loading) return 'loading'
		if(error) return 'something happened'
		return data.images.map(image => 
			<h2 key={image.image_id}>
				image_file : {image.file} /
				image_user_id :  {image.user_id}
			</h2>
		)
	}}
</Query>
