
import "./StyleClick.css"
//Acion para poner un boton
const Click:React.FC= () =>{
    //Variable para poder enviar y aparezca en la alerta
    const nombre: string = "John David"
    const hacerClick = (nombre:string) =>{
        alert(nombre);
        console.log(nombre);
    }
    return(
        <div>
            <button className ="botonclick"onClick={() => {hacerClick(nombre)}}  >Hacer Click</button>
        </div>
    )
}
export default Click;