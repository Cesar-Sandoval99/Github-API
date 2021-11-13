import React from "react";
import { Link } from "react-router-dom";


//Styles
import "./GithubUser.styles.css"
const GithubUser = props => {


    const { avatar, github, followers, following, name1, username, repositories, username2 } = props

    return (
        <div className="">
            <div className="headerCard flex justify-center bg-yellowLight items-center p-10 flex-col border mt-5 mb-5 ">
                <img src={avatar} alt={username} className="avatarStyles" />
                <p>  {name1} </p>
                <a className="p-3 m-2 bg-blueDark text-yellow reposButton font-bold" href={github ? github : `https://github.com/${username2}`}>{username ? username : username2 ? username2 : "User Not Found"}  </a>
                <div className="flex justify-between items-center pb-8 pt-10">
                    <Link to={`/followers/${username ? username : username2}`}><p><span className="text-yellow font-bold p-2">Followers:</span> {followers}</p></Link>
                    <p className="pl-4"> <span className="text-yellow font-bold p-2">Following:</span> {following}</p>
                    <p><span className="text-yellow font-bold p-2">Repositories:</span> {repositories}</p>
                </div>

                <a href={`https://github.com/${username ? username : username2}?tab=repositories`}> <button className="bg-blueDark text-yellow p-2 reposButton font-bold">Repositories</button> </a>
            </div>
        </div>
    )
}

export default GithubUser;