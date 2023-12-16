import React, { Component } from "react";
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom"
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/'><p>This is the Homepage</p></Route>
                    <Route path='/join' Component={RoomJoinPage}></Route>
                    <Route path='/create' Component={CreateRoomPage}></Route>
                </Switch>
            </Router>
        );
    }
}
