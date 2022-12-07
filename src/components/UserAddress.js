import React from "react";

export default function UserAddress({address}){
    console.log(address) //可删除
    return (
        <div>
            <h5>Address:</h5>
            <ul>
                <li>{address.street}</li>
                <li>{address.suite}</li>
                <li>{address.zipcode}</li>
                <li>{address.city}</li>
                <li>
                    GEO: 
                     <ul>
                        <li>lat: {address.geo.lat}</li>
                        <li>lng: {address.geo.lng}</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}