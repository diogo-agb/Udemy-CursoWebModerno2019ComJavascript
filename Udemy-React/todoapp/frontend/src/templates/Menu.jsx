import React from 'react'
import './custom.css'

export default props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mynav">    
    <a className="navbar-brand" href="/">
      <i className="fa fa-calendar-check-o mr-2"></i>TodoApp
    </a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="textoNavbar">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/todos">Tarefas <span className="sr-only">(Página atual)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">Sobre</a>
        </li>
        
      </ul>    
    </div>

  </nav>
)