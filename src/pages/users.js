import React from "react";
import NavMenu from "../components/nav";
import UFetchID from "../components/ufetcher";
import "../styles/index.scss"
export default function IDGen({id}) {
    console.log(id)
    return <div>
        <NavMenu/>
        <UFetchID user={id}/>
    </div>
}