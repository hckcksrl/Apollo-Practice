import React, { Component } from 'react';
import client from './client'
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router , Route } from "react-router-dom";
import {Image , User_Image} from './image'
import {Comment , Image_Comment} from './comment'
import {Like , Image_Like} from './like'
import {Followers ,Followings } from "./follow";
import { User_Page , Profile } from "./user";

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
            <Route exact={true} path={"/image/:user_id"} component={User_Image} />
            <Route exact={true} path={"/follower/:from_id"} component={Followers} />
            <Route exact={true} path={"/following/:to_id"} component={Followings} />
            <Route exact={true} path={"/users/"} component={User_Page} />
            <Route exact={true} path={"/users/:username"} component={Profile} />
          </div> 
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
