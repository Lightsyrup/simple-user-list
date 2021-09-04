import React from "react";
import store from "../redux/index.jsx";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import UserList from "../pages/userList/index.jsx";
import AddUser from "../pages/addUser/index.jsx";
import EditUser from "../pages/editUser/index.jsx";

const BasicRoutes = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={UserList}></Route>
                    <Route exact path="/add:id" component={AddUser}></Route>
                    <Route exact path="/edit:id" component={EditUser}></Route>
                </Switch>
            </Provider>
        </BrowserRouter>
    );
};

export default BasicRoutes;
