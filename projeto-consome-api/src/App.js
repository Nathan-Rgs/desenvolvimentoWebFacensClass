import "./App.css";
import * as React from "react";

function App() {
  const [users, setUsers] = React.useState([]);

  const funcaoAssync = async () => {
    const resultado = await fetch("https://reqres.in/api/users/");
    const json = await resultado.json();
    setUsers(json.data);
  };
  funcaoAssync();

  return (
    <div className="cardContent">
      <h1>Chamadas de API</h1>
      <div className="flex customizeUser">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong> {user.first_name} </strong>
              </p>
              <p> {user.email} </p>
              <img key={user.avatar} src={user.avatar} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
