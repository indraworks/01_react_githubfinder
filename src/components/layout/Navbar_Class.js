import React from 'react'
import PropTypes from 'prop-types';

const Navbar =() => {
      return (
            <nav className='navbar bg-primary ' style={{ color:"white"}}>
                <h1>
                 <i className={this.props.icon}/> {' '}
                 {this.props.title}                  
                </h1>
            </nav>
        )
    }
  Navbar.defaultProps = {
        title:'Gitbhub Finder',
        icon:'fab fa-github'
    }
 Navbar.propTypes = {
        title:PropTypes.string.isRequired,
        icon:PropTypes.string.isRequired
    }
    

export default Navbar
 //default props jika ada masalah


