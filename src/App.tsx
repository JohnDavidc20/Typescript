import Saludo from "./Saludo"
import Variable from "./Variable"
import Ejercicioprops from "./Ejercicioprops"
import Mensaje from "./Mensaje"
import PropsFC from "./PropsFC"
import Usuario from "./Usuario"
import UsuarioInterface from "./UsuarioInterface"
import Click from "./Click"
import Click2 from "./ClickDatos"
import Change from "./Change"
import Apellido from "./Apellido"


function App() {
  //Aqui van las importaciones que quiero hacer
  const usuario = [
    {id:1, nombre:"Ana", apellido:"suarez",direccion:"123",sueldo:1200},
    {id:2, nombre:"John", apellido:"suarez",direccion:"123",sueldo:1200},
    {id:3, nombre:"David", apellido:"suarez",direccion:"123",sueldo:1200},
    {id:4, nombre:"Ana Maria", apellido:"suarez",direccion:"123",sueldo:1200},
    {id:5, nombre:"Gabriela", apellido:"suarez",direccion:"123",sueldo:1200},
    {id:6, nombre:"Luis", apellido:"suarez",direccion:"123",sueldo:1200}
]
 
  return (
    <div>
     <Saludo></Saludo>
     <Variable></Variable>
     <Ejercicioprops nombre="John"></Ejercicioprops>
     <Mensaje></Mensaje>
     <PropsFC prop="holita"></PropsFC>
     <Usuario></Usuario>
     <UsuarioInterface User={usuario}></UsuarioInterface>
     <Click></Click>
     <Click2></Click2>
    <Change></Change>
    <Apellido></Apellido>
    </div>
  )
}

export default App
