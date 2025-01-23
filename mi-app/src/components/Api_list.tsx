import React, { useEffect, useState } from "react"

interface User {
  id: number;
  name: string;
  email: string;
}

const Api_list: React.FC = () => {

  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los usuarios")
        }
        return response.json();
      })
      .then((data: User[]) => {
        setUser(data)
      })
      .catch((error) => {
        console.error("Error fetching users: ", error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if (loading) {
    return <p>Cargando usuarios....</p>
  }

  return (
    <div>

      <h1>Lista de Usuarios</h1>

      <ul>
        {user.map((i) => (
          <li key={i.id}>
            <strong>{i.name}</strong> - {i.email}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Api_list;