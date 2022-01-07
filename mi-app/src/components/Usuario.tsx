import { useState } from "react";

interface User {
    uid: string;
    name: string;
}

const tempUser:User = {
    uid:'abc',
    name: 'mnb'
}

export const Usuario = () => {

    // const [user, setUser] = useState<User>(tempUser);
    const [user, setUser] = useState<User>();
    // ({
    //     uid:'23',
    //     name:'Javier'
    // });

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Javier Lucero'
        });
    }


    return (
        <div className="mt-5">
            <h3>Usuario : useState</h3>
            <button
            onClick={login}
                className="btn btn-outline-primary mt-2">
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
