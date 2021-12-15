import React from "react";
import NavMenu from "../../components/nav";
import UFetchID from "../../components/ufetcher";
export default function IDGen(prop) {
    console.log(prop)
    return <div>
        <NavMenu/>
        <UFetchID user={prop.params.id}/>
    </div>
}