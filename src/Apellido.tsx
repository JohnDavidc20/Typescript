import Click from "./Click";

const Apellido:React.FC = () => {
    let nombre: string;
    let apellido: string;

    const click = (info:string) => {
        info = nombre+apellido;
            alert(`Hola ${nombre} ${apellido}`);
            console.log("Boton Clickeado");
    }

    return(
        <div>
        <input type="text" onChange={(event) => (nombre = event.target.value)} placeholder="Nombre"></input> 
        <input type="text" onChange={(event) => (apellido = event.target.value)} placeholder="Apellido"></input> 
        <button className="Click" onClick={() => {click (nombre+apellido)}}>click</button>
        </div>
    )
}

export default Apellido;