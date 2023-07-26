import classes from './inicio.module.css';

const Inicio = () => {

    return <div className={classes.flex}>

        <h1>Bienvenido a ShopOrbit</h1>

        <div className='flex2 mb-5'>
            <img src="shop.png" alt="" />
        </div>

        <h1 className={classes.titulo}>Ponemos tu tienda en órbita</h1>



    </div>


}

export default Inicio;