import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(users);

  return (
    <>
      <h3>Github users </h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url,type } = user;
          return(
            <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>profile</a>
                    <p>{type}</p>
                </div>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
