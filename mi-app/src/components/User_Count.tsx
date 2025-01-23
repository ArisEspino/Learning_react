
import { useState } from "react"

interface User {
    id: string;
    name: string;
    cedula : number;
}



export const User_Count = () => {

    const [user, setUser] = useState<User>();
    const login = () => {
        setUser({
            id: "ABC",
            name: "Melanie",
            cedula : 8975621
        });
    }


    return (
        <div className="mt-5">
            <h3>Usuario: useState</h3>
            <button
                onClick={login}
                className="btn btn-outline-primary">
                Login
            </button>
            {
                (!user)
                    ? <pre>No hay usuario</pre>
                    : <pre>{JSON.stringify(user)}</pre>
            }

        </div>
    )
}
