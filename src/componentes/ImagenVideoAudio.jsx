import React from 'react'
import imagenCss from '../imagenes/jpeg_css.jpg'
import moePoligrafo_mp4 from '../video/mp4_moePoligrafo.mp4'
import moePoligrafo_webm from '../video/webm_moePoligrafo.webm'
import dinero_mp3 from '../audio/mp3_dinero.mp3'
import dinero_wav from '../audio/wav_dinero.wav'
import dinero_ogg from '../audio/ogg_dinero.ogg'
import LicenciaCC from './LicenciaCC'
import { usoGlobal } from './Global';

function ImagenVideoAudio() {
  const { estado } = usoGlobal();
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">

            <div className={estado === 'modoAzul' ? 'imagen-centrada1' : 'imagen-centrada2'}>
              <img className="mb-4" src={imagenCss} alt="cssisawesome" />
            </div>
          </div>
          <div className="col">
            <div className="imagen-centrada">
              <video loop controls>
                <source src={moePoligrafo_mp4} type="video/mp4" />
                <source src={moePoligrafo_webm} type="video/webm" codecs="vp8, vorbis" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <audio className="mt-5" autoPlay loop controls>
        <source src={dinero_mp3} type="audio/mp3" codecs="mp3" />
        <source src={dinero_wav} type="audio/wav" codecs="LPCM" />
        <source src={dinero_ogg} type="audio/ogg" codecs="vorbis" />
      </audio>
      <LicenciaCC/>
    </div>
  )
}

export default ImagenVideoAudio