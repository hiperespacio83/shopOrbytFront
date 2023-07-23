import { Link } from 'react-router-dom';
import classes from './header.module.css';

const Header = () => {
    return (
       
       
        <div className={classes.body}>
            <header>
                <h1>ShopOrbit</h1>
                <nav className="me-1">
                    <ul>
                    <Link to={'/'}>
                        <li>Inicio</li>
                    </Link>
                    <Link to={'/productos'}>
                        <li>Productos</li>
                    </Link>
                    <Link to={'/login'}>
                        <li>Zona cliente</li>
                    </Link>
                    <Link to={'/contacto'}>
                        <li>Contacto</li>
                    </Link>
                    </ul>
                </nav>
            </header>
            
          
        </div>
    )
        
        
};

export default Header;
