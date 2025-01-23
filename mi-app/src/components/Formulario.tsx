import { useForm } from "../hooks/useForm"

interface FormData {
    email: string;
    nombre: string;
    password: number;
}

export const Formulario = () => {
    const { password, email, nombre, formulario, handleChange } = useForm<FormData>({
        email: 'Melaaris19@gmail.com',
        nombre: 'Melanie Arias',
        password: 21
    });
    console.log(formulario);

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                ></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Contraseña:</label>
                <input type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleChange}
                ></input>
            </div>
            <pre>{JSON.stringify(formulario)}</pre>
        </form>
    )
}
