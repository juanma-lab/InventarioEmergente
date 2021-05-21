import React from 'react';
import {
    Link
  } from "react-router-dom";


  
export const Accesos = ({ item }) => (
    <li className="treeview">
        <a href="#">
            <i className={item.class}></i> <span>{item.title}</span>
            <span className="pull-right-container">
                <i className="fa fa-angle-left pull-right"></i>
            </span>
        </a>
        <ul className="treeview-menu">
            {
                item.subMenu.map((e,index) => (
                    <li key={index}><Link to={e.href}><i className={e.class}></i>{e.title}</Link></li>
                ))
            }
        </ul>
    </li>

)
