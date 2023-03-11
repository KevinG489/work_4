import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

function Body({titulo,millas,}){
    return(
        <div>
            <h1>{titulo}</h1>
            {millas.map((c,i)=>
            <div key={i}>
                <h2>Distancia</h2>
                <h2>{c}</h2> 
                
            </div>
            
            
            )}
            <Button variant="secondary" onClick={() => alert("Hola Soy Un Boton De Carreras ")}>BOTON</Button>

        </div>

        
    )
}

export default Body;

Body.propTypes={
    texto:PropTypes.string.isRequired,
};