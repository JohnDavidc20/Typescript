
import React from "react";

const Usuario:React.FC = () => {
    const usuario = [
        {id:1, nombre:"Ana", apellido:"suarez",direccion:"123",sueldo:1200},
        {id:2, nombre:"John", apellido:"suarez",direccion:"123",sueldo:1200},
        {id:3, nombre:"David", apellido:"suarez",direccion:"123",sueldo:1200},
        {id:4, nombre:"Ana Maria", apellido:"suarez",direccion:"123",sueldo:1200},
        {id:5, nombre:"Gabriela", apellido:"suarez",direccion:"123",sueldo:1200},
        {id:6, nombre:"Luis", apellido:"suarez",direccion:"123",sueldo:1200}
    ]
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Sueldo</th>
                    </tr>
                </thead>
                     <tbody>
                            {usuario.map((index)=> (
                            <tr>
                                <td>{index.nombre}</td>
                                <td>{index.apellido}</td>
                                <td>{index.direccion}</td>
                                <td>{index.sueldo}</td>
                            </tr>
                            )
                            )
                            }
                </tbody>
            </table>
        </div>
    )
 
}
export default Usuario;