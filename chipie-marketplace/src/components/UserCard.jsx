import React from 'react';
import { addKudosToUser } from '../utils/api';


const UserCard = ({user}) => {
    const [optimisticKudos, setOptimisticKudos] = React.useState(0);

    const handleKudosButtonClick = () => {
        setOptimisticKudos(currKudos => {
            return currKudos += 1;
        })
        addKudosToUser(user.username, 1)
            .catch(err => {
                setOptimisticKudos(currKudos => {
                    return currKudos -= 1;
                })
            })
    }

    return (
        <li className="items__container__item">
            <img 
            className="items__container__item__image" 
            alt={user.username}
            src={user.avatar_url}
            onError={(e)=>{
                e.target.onerror = null; e.target.src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"}}
            />
            <p>{user.username}</p>
            <p>{user.kudos + optimisticKudos}</p>
            <button
                className="secondaryButton"
                disabled={optimisticKudos > 0}
                onClick={handleKudosButtonClick}
            >KUDOS</button>
        </li>
    );
};

export default UserCard;