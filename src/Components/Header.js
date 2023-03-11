import { Component } from "react";
import PropTypes from 'prop-types';


class Header extends Component{
    render(){
        return(
            <div>
                <img src="Coche.jpg" class="rounded mx-auto d-block" alt="200x100"></img>

            </div>
        )

        
    }
}
export default Header;

Header.propTypes={
    texto:PropTypes.string.isRequired,
}