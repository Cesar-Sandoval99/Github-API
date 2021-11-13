import React, { useState } from "react";
import UserForm from "../components/UserForm/UserForm";
import GithubUser from "../components/Custom/GithubUser/GithubUser";





//Styles
import "../views/Home.css"


const Home = () => {
    //State
    const [userName, setUserName] = useState("");
    const [userInformation, setUserInformation] = useState(null);


    //Functios
    const handleUser = ({ value }) => {
        setUserName(value);
    }

    
    const handleSearchUser = async e => {
        e.preventDefault();
        setUserInformation(null);
        const API = `https://api.github.com/users/${userName}`;
        const response = await fetch(API);
        const result = await response.json();
        setUserInformation(result)
        



    }


    return (
        <div>

            <UserForm handleUser={handleUser} handleSearchUser={handleSearchUser} />
            <div className="flex justify-center align-center">
                <div className="text-center lg:w-4/12 sm:w-8/12">

                    {
                        userInformation ? <GithubUser
                            avatar={userInformation?.avatar_url}
                            github={userInformation?.html_url}
                            followers={userInformation?.followers}
                            following={userInformation?.following}
                            repos={userInformation?.repos_url}
                            name={userInformation?.name}
                            username={userInformation?.login}
                            repositories={userInformation?.public_repos}
                            userInformation={userInformation}
                            id={userInformation?.id}
                        /> : null
                    }

                </div>
            </div>


        </div>

    )
}

export default Home;