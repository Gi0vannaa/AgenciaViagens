import Styles from './ComponenteProps.module.css'

function ComponenteProps({lugar, texto, bandeira}){
    return(
        <div className={Styles.corpo_texto}>
            <h2>Venha explorar esse Lugar incrível! Venha conhecer
                {lugar}</h2>
            <p>{texto}</p>
            <img className={Styles.img} src={bandeira}
             alt="bandeira" />
        </div>
    )
}
export default ComponenteProps