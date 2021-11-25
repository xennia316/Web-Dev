import React from "react";

function User(props){

    return(
        <div>
            <h1>
                age:{props.age}
                name: {props.children}
            </h1>
        </div>
    )
}
export default User;