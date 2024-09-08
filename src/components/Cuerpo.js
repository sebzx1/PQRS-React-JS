import React from 'react';
import miImagen1 from '../assets/img/Callcenter.png';
import miImagen2 from '../assets/img/image.png';
import { Link } from 'react-router-dom';
import './css/Cuerpo.css';

//componente
function Cuerpo({ title, onLinkClick }) {
  return (
    <main className="Cuerpo">
      <div className='box1'>
        <div className='box'>
          <div className='img'>
            <img src={miImagen1} alt="Funcionario" />
            <h2>Bienvenido</h2>
            <h2>{title}</h2> {/* Título que cambia basado en el estado */}
          </div>
          <div className="btn-funcionarios">
            <li>
              <Link
                to="/administrador"
                onClick={() => onLinkClick('Administrador')}
              >
                Administrador
              </Link>
            </li>
            <li>
              <Link
                to="/recepcionista"
                onClick={() => onLinkClick('Recepcionista')}
              >
                Recepcionista
              </Link>
            </li>
            <li>
              <Link
                to="/tecnico"
                onClick={() => onLinkClick('Técnico')}
              >
                Técnico
              </Link>
            </li>
          </div>
          <form action='' method=''>
            <div className="form-group">
              <label>Usuario</label>
              <input type="email" placeholder="Usuario" />
              <label>Contraseña</label>
              <input type="password" placeholder="Contraseña" />
            </div>
            <button className="submit-btn" type="submit" name="action">Enviar</button>
          </form>
        </div>
      </div>

      <div className='box2'>
        <div className='box'>
          <div className='img'>
            <img src={miImagen2} alt="Cliente" />
            <h2>Cliente</h2> {/* Este título se mantiene fijo */}
          </div>
          <form action='' method=''>
            <div className="form-group">
              <label>Documento:</label>
              <input type="text" placeholder="Documento de identificación" />
              <label>Numero de Cliente:</label>
              <input type="text" placeholder="Número de cliente" />
            </div>
            <button className="submit-btn" type="submit" name="action">Enviar</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Cuerpo;
