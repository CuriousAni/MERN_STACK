import React from "react";

export default function MyProfile(){
    const SayHi=()=>{
        alert("HII")
    }

    return (
        <h1 onClick={SayHi}>Profile</h1>
    )
}