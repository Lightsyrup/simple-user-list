import React, { Component } from "react";
import { connect } from "react-redux";
import { DELETE_USER } from "../../redux/actionTypes.jsx";
import { Link } from "react-router-dom";
import List from "../../containers/list/index.jsx";
import TopNav from "../../components/topNav/index.jsx";
import "./style.less";


class UserList extends Component {
    render() {
        const id = this.props.location.id;
        const userList = this.props.userList;
        return (
            <>
                <TopNav />
                <div className="user-lint-page-container">
                    <h3 className="user-lint-page-container-head">
                        <Link to={`/add=${id}`}>前往添加</Link>
                    </h3>
                </div>
                <List
                    id={id}
                    userList={userList}
                    deleteUser={(index) => { this.props.deleteUser(index); }}
                />

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userList: state.userList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser(index) {
            const action = {
                type: DELETE_USER,
                payload: index,
            };
            dispatch(action);
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
