interface Usuarito{
    id: number
    nombre: string;
    apellido: string;
    direccion: string;
    sueldo: number;
}

interface ListaUsuarito{
    User:Usuarito[]
}

const UsuarioInterface:React.FC <ListaUsuarito> = ({User}) => {
    return (
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
                            {User.map((index)=> (
                            <tr>
                                <td>{index.id}</td>
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
export default UsuarioInterface;