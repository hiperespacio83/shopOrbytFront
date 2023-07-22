import classes from './header.module.css';

const Header = () => {
    return (
       
       
        <div className={classes.body}>
            <div className={classes.header}>
                <h1>ShopOrbyt</h1>
                <nav className={classes.nav}>
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Zona Cliente</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
            
          
        </div>
    )
        
        
};

export default Header;
