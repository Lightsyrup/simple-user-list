import React from "react";
import { Link } from "react-router-dom";


function List(props) {
    function showList(list) {
        return list.map((item) => {
            return (
                <tr key={item.id} id={item.id} className='user-lint-page-container' >
                    <td className="user-lint-page-container-short">{item.login}</td>
                    <td className="user-lint-page-container-short">{item.name}</td>
                    <td className="user-lint-page-container-long">{item.email}</td>
                    <td span className="user-lint-page-container-handle">
                        <labal className='user-lint-page-container-deleteuser' onClick={props.deleteUser}>删除</labal>
                        <labal className='user-lint-page-container-edituser'>
                            <Link to={`/edit:${item.id}`}>编辑</Link>
                        </labal>
                    </td>
                </tr>
            );
        });
    };
    return (
        <div className="user-lint-page-container" >
            <div className="user-lint-page-container-userTable">
                <tr className='user-lint-page-container-tableHead'>
                    <td className="user-lint-page-container-short">用户名</td>
                    <td className="user-lint-page-container-short">姓名</td>
                    <td className="user-lint-page-container-long">邮箱</td>
                    <td className="user-lint-page-container-handle">操作</td>
                </tr>
                <div>
                    {showList(props.userList)}
                </div>
            </div>
        </div>

    );

}



export default (List);
