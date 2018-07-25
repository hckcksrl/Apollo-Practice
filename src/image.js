import React from "react";
import { Query , Mutation} from "react-apollo";
import { Images_Page , User_image , Create_image} from "./queries";

export const Image = () => <Query query={Images_Page}>
	{({loading , data , error}) => {
		if(loading) return 'loading'
		if(error) return 'something happened'
		return data.allImage.map(image => 
				<h2 key={image.image_id}>
					image_file : {image.file} /
					image_username : {image.username}
				</h2>
			)
	}}
</Query>

export const User_Image = (
	{
		match : {
			params : username
		}
	}
) => <Query query={User_image} variables={username}>
	{({loading , data , error}) =>{
		if(loading) return 'loading'
		if(error) return 'something happened'
		return data.images.map(image => 
			<h2 key={image.image_id}>
				image_file : {image.file} /
				image_username :  {image.username}
			</h2>
		)
	}}
</Query>



export const Create_Image = () =>{
	let location , file , username
	return(
		<Mutation 
			mutation={Create_image}
		>
			{(getImage , {loading , data , error}) => 
				(
					<div>
						<form onSubmit={e => {
							e.preventDefault();
							getImage(
								{	
									refetchQueries : [{
										query: Images_Page
									}]
									,
									variables : { 
										location :location.value ,
										file :file.value ,
										username : username.value,
									},
								}
							)
							location.value = "";
							file.value = "";
							username.value = "";
						}}>
							<input type="text" placeholder="location" ref={node => {location = node}} /><br/><br/>
							<input type="file" placeholder="file" ref={node => {file = node}} /><br/><br/>
							<input type="text" placeholder="username" ref={node => {username = node}} /><br/><br/>
							<button type="submit">Create Image</button>
						</form>
						{loading && <p>Loading...</p>}
						{error && <p>Error :( Please try again )</p>}
					</div>
				)
			}
		</Mutation>
	)
}
