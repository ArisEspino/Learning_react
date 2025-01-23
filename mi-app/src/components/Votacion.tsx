import { useState } from "react"

export const Votacion = () => {

  //useState usando objetos
  const [votaciones, setVotaciones] = useState({
    red: 0,
    blue: 0,
    green: 0,
 
  });

  //useState usando para la verificacion de votos
  const [yaVotacion, setYavotacion] = useState(false);

  //Funcion flecha
  const handleVote = (color: 'red' | 'blue' | 'green') => {
    if (!yaVotacion) {
      setVotaciones((preVotes) => ({
        ...preVotes,
        [color]: preVotes[color] + 1,
      }));
      setYavotacion(true);
    }
    else {
      alert("Ya has votado!!");
    }
  }

  return (
    <>
      <h4>¿Cuál es tu color favorito?</h4>
      <button
        onClick={() => handleVote('red')}
        className="btn btn-outline-danger">
        Red
      </button>
      <button
        onClick={() => handleVote('blue')}
        className="btn btn-outline-primary">
        Blue
      </button>
      <button
        onClick={() => handleVote('green')}
        className="btn btn-outline-success">
        Green
      </button>
      <hr />
      <small>Red:{votaciones.red}</small>
      <br />
      <small>Blue:{votaciones.blue}</small>
      <br />
      <small>Green:{votaciones.green}</small>
    </>
  )
}
