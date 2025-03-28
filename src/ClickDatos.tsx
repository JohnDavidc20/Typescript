
const Click2:React.FC = () => {
    const Aceptar = () => {
        alert ("Hola como estas rey");
        console.log("Click");
    }

        return(
            <div>
                <button className = "Botton click" onClick ={Aceptar}>Aceptar </button>
            </div>            
        )


}
export default Click2;