import React from 'react'

function LicenciaCC() {
  return (
    <div className="cc mt-3" xmlns_cc="http://creativecommons.org/ns#" xmlns_dct="http://purl.org/dc/terms/">
      <span property="dct:title">Página del usuario</span> by{' '}
      <span property="cc:attributionName">Jose Juan Navarro Giner</span> is marked with{' '}
      <a
        href="http://creativecommons.org/publicdomain/zero/1.0?ref=chooser-v1"
        target="_blank"
        rel="license noopener noreferrer"
        style={{ display: 'inline-block' }}
      >
        CC0 1.0
        <img
          style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
          src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
          alt="CC Logo"
        />
        <img
          style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }}
          src="https://mirrors.creativecommons.org/presskit/icons/zero.svg?ref=chooser-v1"
          alt="Zero Logo"
        />
      </a>
    </div>
  )
}

export default LicenciaCC
