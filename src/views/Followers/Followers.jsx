import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

//Components
import GithubUser from "../../components/Custom/GithubUser/GithubUser";

const Followers = () => {

    //States
    // const [handleSearchFollowers, setHandleSearchFollowers] = useState(null)
    const [followers, setFollowers] = useState([])
    //Hooks
    const { user, username2 } = useParams();

    useEffect(() => {
        setFollowers()
        const handleSearchFollowers = async () => {
            const response = await fetch(`https://api.github.com/users/${user ? user : username2}/followers`);
            const result = await response.json();
            setFollowers(result)
        }
        handleSearchFollowers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])



    return (

        <div className="flex justify-around items-center flex-wrap cardFollowers">

            {
                followers?.map(users => (
                    <GithubUser
                        id={users?.id}
                        avatar={users?.avatar_url}
                        username2={users?.login}
                        repos={users?.repos_url}
                    />
                ))
            }
        </div>

    )
};


export default Followers;