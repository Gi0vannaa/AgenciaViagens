import styles from './escocia.module.css'
import ComponenteProps from './ComponenteProps'
import EscociaFlag from'../imagens/bandeira_escocia.webp'

function Escocia(){
    return(
        <div className={styles.container}>
            <ComponenteProps 
            lugar = "Escócia" 
            texto= "A Escócia é um tesouro de paisagens deslumbrantes e história rica, onde cada colina conta uma história e cada lago reflete a magia de séculos passados. Seus castelos imponentes erguem-se majestosamente contra o céu escocês, enquanto as planícies verdejantes e os vales sinuosos convidam a explorar. Das místicas Terras Altas às encantadoras ilhas, a Escócia cativa com sua beleza selvagem e intocada. A lendária Loch Ness, envolta em mistério, desperta a imaginação, enquanto as ruínas ancestrais nos fazem viajar no tempo. Não podemos esquecer da cultura vibrante, dos festivais animados e da calorosa hospitalidade escocesa, que completam essa experiência inesquecível. Na Escócia, a beleza está em cada detalhe, esperando para ser descoberta e apreciada."
            bandeira={EscociaFlag}/>
        </div>
    )
}

export default Escocia