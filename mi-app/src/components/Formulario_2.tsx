import { useForm_2 } from "../hooks/useForm_2";

interface Props {
    postal: string;
    ciudad: string;
    profesion: string;
    cedula: string;
}


export const Formulario_2 = () => {
    const { cedula, profesion, ciudad, postal, formulario, handleChange } = useForm_2<Props>({
        postal: 'ABC',
        ciudad: 'Managua',
        profesion: 'Puta',
        cedula: '231103-100G'
    });

    console.log(formulario)

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Codigo postal:</label>
                <input type="text"
                    className="form-control"
                    name="postal"
                    value={postal}
                    onChange={handleChange}
                ></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Ciudad:</label>
                <input type="text"
                    className="form-control"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Profesion:</label>
                <input type="text"
                    className="form-control"
                    name="profesion"
                    value={profesion}
                    onChange={handleChange}
                ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Cedula:</label>
                <input type="text"
                    className="form-control"
                    name="cedula"
                    value={cedula}
                    onChange={handleChange}
                ></input>
            </div>

            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}
