
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyCampaign = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <div>
            My Campaign: {users.length}
        </div>
    );
};

export default MyCampaign;