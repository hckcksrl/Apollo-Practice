import React, { Component } from 'react';
import client from './client'
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router , Route } from "react-router-dom";
import {Image , User_Image  , Create_Image} from './image'
import {Comment , Image_Comment, Create_Comment} from './comment'
import {Like , Image_Like , Create_Like} from './like'
import {Followers ,Followings , Create_Follower } from "./follow";
import { User_Page , Profile , Create_User } from "./user";

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Route exact={true} path={"/"} component={Image} />
            <Route exact={true} path={"/comment"} component={Comment} />
            <Route exact={true} path={"/comment/:image_id"} component={Image_Comment} />
            <Route exact={true} path={"/like/"} component={Like} />
            <Route exact={true} path={"/like/:image_id"} component={Image_Like} />
            <Route exact={true} path={"/image/:username"} component={User_Image} />
            <Route exact={true} path={"/follower/:from_username"} component={Followers} />
            <Route exact={true} path={"/following/:to_username"} component={Followings} />
            <Route exact={true} path={"/users/"} component={User_Page} />
            <Route exact={true} path={"/users/:username"} component={Profile} />
            <Route exact={true} path={"/create/image"} component={Create_Image} />
            <Route exact={true} path={"/create/comment"} component={Create_Comment} />
            <Route exact={true} path={"/create/like"} component={Create_Like} />
            <Route exact={true} path={"/create/user"} component={Create_User} />
            <Route exact={true} path={"/create/follow"} component={Create_Follower} />
          </div> 
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
