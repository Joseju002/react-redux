import React from 'react'

function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-6">
            <h2>Contacto</h2>
            <p>Teléfono: 123 45 67 89</p>
            <p>Email: usuario1@gmail.com</p>
            <p>Dirección: Calle Falsa, 123</p>
          </div>
          <div className="col-md-6">
            <h2>Redes sociales</h2>
            <ul className="enlaces-redes">
              <li><a href="https://www.facebook.com">Facebook</a></li>
              <li><a href="https://www.twitter.com">Twitter</a></li>
              <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
