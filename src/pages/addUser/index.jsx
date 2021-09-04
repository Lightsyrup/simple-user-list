import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { loginRegex, nameRegex, emailRegex, checkInputBlank, deleteBlank } from "../../utils/check.js";
import { UP_USER_INFOMATION } from "../../redux/actionTypes.jsx";
import TopNav from "../../components/topNav/index.jsx";
import UserTable from "../../containers/userTable/index.jsx";
import "./style.less";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            login: "",
            name: "",
            email: ""
        };
    }
    add = () => {
        const { login, name, email } = this.state;
        if (checkInputBlank([login, name, email]) && loginRegex(login) && nameRegex(name) && emailRegex(email)) {
            this.dispatchState();
            console.log(this.state);
            this.clearInput(["login", "name", "email"]);
        } else {
            return false;
        }

    }
    dispatchState = () => {
        this.props.dispatch({
            type: UP_USER_INFOMATION,
            payload: this.state
        });
    }

    handleInputValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: deleteBlank(value),
            id: nanoid()
        });
    }

    clearInput = (items) => {
        const arr = [...items];
        for (let i of arr) {
            this.setState({
                [i]: "",
            });
        }
    }

    render() {
        const { login, name, email } = this.state;
        return (
            <>
                <TopNav />
                <UserTable
                    login={login}
                    name={name}
                    email={email}
                    add={this.add}
                    handleInputValue={this.handleInputValue}
                />
            </>
        );
    }
}

export default connect()(AddUser);




