import React from 'react'
import Logo_Archimede from '../About_us/logo-archimede.png'
import Avatar from '../About_us/insertion.jpg'
import React_logo from '../About_us/react-logo.png'
import Gemini_logo from '../About_us/gemini-logo.png'
import './About_us.css'

export const About_us = () => {
  return (
    <div id='About_us'>
      <div className='main section'>
        <div className='section-chi-siamo'>
          <div className='img-logo archimede'><img src={Logo_Archimede} alt="logo-scuola" id='img-logo archimede'/></div>
          <div id='outer-box'>
            <div className='box-chi-siamo' id='box'>
              <h5>Chi siamo</h5>
              <p> Siamo Barboni Luca, Carlino Mattia e Ferri Davide e siamo studenti dell'istituto superiore Archimede di Treviglio, della classe 4ft-i, indirizzo informatico
              e per il project day di quest'anno abbiamo ideato e sviluppato School Bot, oltre all'iniziativa della nostra scuola il progetto School Bot è stato iscritto al 
              premio GF Marilli 2024 dell'azienda Sorint
              </p>
            </div>
          </div>
        </div>
        <div className='section-obiettivo'>
          <div id='outer-box'>
            <div className='box-obiettivo' id='box'>
              <h5>Obiettivi di School Bot</h5>
              <p>
              L'obiettivo del chat bot è di essere un supporto allo studio e alle normali attività scolastiche
              svolte dagli studenti, il sistema si pone come una via più veloce per usare i grandi modelli AI, come 
              ad esempio Google Gemini, in ambito scolastico, avendo funzionalità già predefinite per l'uso a scuola
              </p>
            </div>
          </div>
          <div className='immagine-avatar'><img src={Avatar} alt="avatar" id='immagine-avatar' /></div>
        </div>
        <div className='section-tecnology-repo'>
          <div className='section-img'>
            <div className='logo-react-div'><img src={React_logo} alt="react-logo" id='logo-react' /></div>
            <div className='logo-gemini-div'><img src={Gemini_logo} alt="gemini-logo" id='logo-gemini'/></div>
          </div>
          <div id= 'outer-box'>
            <div className='box-tecnology-repo' id='box'>
              <h5>Tecnologie e Repository</h5>
              <p>
                School Bot attualmente è solo un progetto front-end, con funzionalità ancora limitate e costruito completamente
                lato Front-end, le tecnlogie che abbiamo utilizzato per svilupparlo sono la libreria Javascript React e le API fornite da
                Google per interfacciarci con il suo modello di linguaggio Gemini 1.5 pro, l'intero progetto e tutto il versioning del codice
                è disponibile su Github, sul Repository<a href="https://github.com/MattiaCarlino/Progetto-Project-Day-2024" target='_blank'> Project Day 2024</a>
              </p>
            </div>
          </div>          
        </div>
      </div>

    </div>
  )
}

export default About_us;
