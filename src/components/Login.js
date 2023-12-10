import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DEFAULT_USERS from '../data/users.json';

export default function SignInPage(props) {
    const currentUser = props.currentUser;
    const loginFunction = props.loginCallback;

    const handleClick = (event) {
        const whichUser = event.currentTarget.name
        console.log(whichUser);
        const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0]

        loginFunction(selectedUserObj)
    }

    const userButtons = DEFAULT_USERS.map((userObj) => {
        if (userObj.userId === currentUser.userId){
            return null;
        }
        return (
            <Dropdown.Item className="user-icon" key={userObj.userName}
                name={userObj.userId} onClick={handleClick}
            >
                <img src={userObj.userImg} alt={userObj.userName} + " avatar" />
                {userObj.userName}
            </Dropdown.Item>
        )
    })

    return (
        <div className="card bg-light">
            <div className="container card-body">
                <Dropdown>
                    <Dropdown.Toggle variant="light">
                        <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {userButtons}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
        
}
