/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import RubyImg from '../assets/images/ruby.png';

export const MainLayout = () => {
    return (
      <div>
        <nav className="navbar is-info" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={RubyImg} width="40" height="28" alt="Logo ruby" />
            </Link>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                Inventario
              </Link>
            </div>
          </div>
        </nav>
        <div className="main-content columns is-fullheight">
          <aside className="menu column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label">
              General
            </p>
            <ul className="menu-list">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/customers">Clientes</Link></li>
            </ul>
            <p className="menu-label">
              Administración
            </p>
            <ul className="menu-list">
              <li><Link to="/products">Productos</Link></li>
              <li><Link to="/providers">Provedores</Link></li>
            </ul>
            <p className="menu-label">
              Transacciones
            </p>
            <ul className="menu-list">
              <li><Link to="/transactions/payments">Pagos</Link></li>
              <li><Link to="/transactions/transfers">Transferencias</Link></li>
              <li><Link to="/transactions/balance">Balance</Link></li>
            </ul>
          </aside>
          <section className="container column is-10">
              <Outlet />
          </section>
        </div>
      </div>
    )
}