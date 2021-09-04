import React from "react";
import { Link } from "react-router-dom";

function UserTable(props) {
    return (
        <>
            <div className="add-user-container">
                <h3 className="add-user-container-userTitle">添加用户</h3>
                <div className='add-user-container-item'>
                    <span className="add-user-container-item-mustInput">用户名</span>
                    <br />
                    <input
                        type="text"
                        name="login"
                        placeholder="用户名为4到16位（字母，数字，下划线，减号）"
                        value={props.login}
                        onChange={props.handleInputValue}
                    />
                </div>
                <div className='add-user-container-item'>
                    <span className="add-user-container-item-mustInput">姓名</span>
                    <br />
                    <input
                        type="text"
                        name="name"
                        placeholder="请输入您的真实中文姓名"
                        value={props.name}
                        onChange={props.handleInputValue}
                    />
                </div>
                <div className='add-user-container-item'>
                    <span className="add-user-container-item-mustInput">邮箱</span>
                    <br />
                    <input
                        type="text"
                        name="email"
                        placeholder="请输入您的邮箱地址"
                        value={props.email}
                        onChange={props.handleInputValue}
                    />
                </div>
                <div className='add-user-container-button'>
                    <button onClick={() => props.add()}>
                        添加
                    </button>
                    <button className="add-user-container-button">
                        <Link to={{ pathname: "/" }}>前往列表</Link>
                    </button>
                </div>
            </div>
        </>
    );

}



export default (UserTable);
