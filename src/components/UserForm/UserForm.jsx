import React from "react";

//Styles

import "../UserForm/UserFormStyles.css"


const UserForm = ({ handleUser, handleSearchUser }) => {
    return (
        <div>
            <div className="gray">
                <form
                    className="flex justify-center items-center py-28 flex-col"
                    onSubmit={(e) => handleSearchUser(e)}>

                    <input
                        type="text"
                        placeholder="Username"
                        className="my-5 p-4 borde w-80"
                        onChange={({ target }) => handleUser(target)} />

                    <input
                        type="submit"
                        value="Search" 
                        className="hover:bg-yellow hover:text-blueDark my-5 w-28 h-10 rounded-3xl bg-blueDark text-yellow trans" />
                    
                </form>
            </div>
        </div>
    )
}

export default UserForm;