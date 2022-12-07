import React from 'react';
import UserAddress from './UserAddress';
import UserCompany from './UserCompany';

export default function userInfo ({info}) {
    return(
        <div className='card mb-2 p-2 user-card'>
            <h2>
                <a href={info.website} target="_blank" rel='noreferrer'>{info.name}</a>
            </h2>
            <h4>Username: {info.username}</h4>
            <p>Email: {info.email}</p>
            <p>Phone: {info.phone}</p>
            <UserAddress address={info.address} />
            <UserCompany company={info.company} />
        </div>
    )
}

