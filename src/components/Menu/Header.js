import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="main-header">
        {/* <Link to="/" className="logo" style={{position: 'fixed'}}>
          <span className="logo-mini"><b>CA</b>SSA</span>
          <span className="logo-lg"><b>CASSA</b></span>
        </Link> */}
        <nav className="navbar navbar-static-top">
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
          </a>
          <div className="navbar-custom-menu">
            
          </div>
    
        </nav>
      </header>
    )
}