import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
   
   //default props jika ada masalah
    static defaultProps = {
       title:'Gitbhub Finder',
       icon:'fab fa-github'
   }
   static propTypes = {
       title:PropTypes.string.isRequired,
       icon:PropTypes.string.isRequired
   }


    render() {
        return (
            <nav className='navbar bg-primary ' style={{ color:"white"}}>
                <h1>
                 <i className={this.props.icon}/> {' '}
                 {this.props.title}                  
                </h1>
            </nav>
        )
    }
}

export default Navbar
