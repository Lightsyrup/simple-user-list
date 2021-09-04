import React, { Component } from "react";
import { connect } from "react-redux";
import { loginRegex, nameRegex, emailRegex, deleteBlank } from "../../utils/check.js";
import { EDIT_USER } from "../../redux/actionTypes.jsx";
import TopNav from "../../components/topNav/index.jsx";
import UserTable from "../../containers/userTable/index.jsx";
import "./style.less";

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            name: "",
            email: ""
        };
    }
    edit = () => {
        const { login, name, email } = this.state;
        // 从输入栏读取id
        const itemId = this.props.match.params.id.slice(1);
        // 如果输入完整，就是进行内容提交
        if (loginRegex(login) && (nameRegex(name)) && emailRegex(email)) {
            console.log(this.props);
            this.props.dispatch({
                type: EDIT_USER,
                payload: this.state, itemId
            });
            alert("修改成功！");
            this.clearInput(["login", "name", "email"]);
        } else {
            return false;
        }

    }


    handleInputValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: deleteBlank(value),
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
                    add={this.edit}
                    handleInputValue={this.handleInputValue}
                />
            </>
        );
    }
}

export default connect()(EditUser);




