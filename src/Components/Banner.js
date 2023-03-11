import { Component } from "react";
import PropTypes from 'prop-types';
import './Banner.css';


class Banner extends Component{
    render(){
        const {texto}=this.props;
        return(
            <div className="Banner">
                <h1>{texto}</h1>
            </div>
        )
    }
}
export default Banner;

Banner.propTypes={
    texto: PropTypes.string.isRequired,
};

Banner.defaultProps={
    texto:"Aqui habia un mensaje"
}