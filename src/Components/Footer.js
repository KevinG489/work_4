import { Component } from "react";
import PropTypes from 'prop-types';
import './Footer.css';


class Footer extends Component{
    render(){
        const {children}=this.props;
        return(
            <div className="Footer">
              <h1>{children[1]}</h1>
    
            </div>
            
        )
    }
}
export default Footer;

Footer.propTypes={
    children:PropTypes.array
}