import React from 'react';
import './UserItem.css';

const UserItem = props => {
    return (
        <li className="user-item">
            <div class="user-item__content">
            <div class="user-item__image">
                <img src={props.image} alt={props.name} />
            </div>
            <div class="user-item__info">
            <h2>{props.name}</h2>
            <h3>{props.placeCount}{props.placeCount === 1 ? 'Place':'Places'}</h3>
            </div>
            </div>
        </li>
    )
};

export default UserItem;