import React from "react";

export default function UserCompany({company}){
    return(
        <div>
            <h5>Company:</h5>
            <ul>
                <li>{company.name}</li>
                <li>{company.catchPhrase}</li>
                <li>{company.bs}</li>
            </ul>
        </div>
    )
}