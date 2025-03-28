//CREACIO DE UN CUADRO DE TEXTO
const Change:React.FC = () => {

    const cambio = (dato:string) =>{
            console.log(dato);
    }
    return(
        <div>
            <input type="text"  onChange={ (event) => cambio (event.target.value)} placeholder="Escribi sapa"></input>
        </div>
    )
}
export default Change;