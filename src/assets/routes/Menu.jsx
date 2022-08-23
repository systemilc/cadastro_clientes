import { Link } from "react-router-dom"

export const Menu = () => {
    return(
    <div>
        <Link to="/">Home</Link>
        <Link to="/cadastrar">Cadastrar</Link>
        <Link to="/clientes">Clientes</Link>
    </div>
)
}