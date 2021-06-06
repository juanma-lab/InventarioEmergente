import React from 'react'
import { UserPanel } from './UserPanel'
import { Accesos } from './Accesos'
import { data } from './DataMenu'
// import logo from '../../img/Logo.jpg'

export const MenuLateral = () => {
  return (
    <aside className="main-sidebar" style={{ position: 'fixed' }}>
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          <div className="logo_container">
            <p>Inventario</p>
          </div>
          <div className="pt-5"><br></br><br></br></div>

          <li className="header padding-menu">Menú Principal</li>

          {
            data.map((e, index) => (
              <Accesos item={e} key={index} />
            ))
          }
        </ul>
      </section>
    </aside>
  )
}

