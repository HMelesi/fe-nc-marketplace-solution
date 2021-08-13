import React from 'react';
import { getUsers } from '../utils/api';
import Loading from './Loading';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        getUsers().then(usersFromApi => {
            setUsers(usersFromApi);
            setIsLoading(false);
        })
    }, []);

    return (
        <div>
            <p>Here are all our lovely users</p>
            <Loading isLoading={isLoading}>
                <div>
                    <ul className="items__container">
                        {users.map(user => {
                            return (
                                <UserCard key={user.username} user={user}/>
                            )
                        })}
                    </ul>
                </div>
            </Loading>
        </div>
    );
};

export default UserList;