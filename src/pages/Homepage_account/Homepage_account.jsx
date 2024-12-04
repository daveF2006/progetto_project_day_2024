import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Homepage_account/Homepage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Homepage_account = () => {
  
  const [error, setError] = useState("form-control")
  const [errorCognome, setErrorCognome] = useState("form-control")
  const [errorIstituto, setErrorIstituto] = useState("form-select")
  const [errorClasse, setErrorClasse] = useState("form-select")

  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');

  const [isVerified, setIsVerified] = useState(false)
  const [errorInput, setErrorInput] = useState(false)

  const saveData = (istituto, classe) => {
    localStorage.setItem('nome', nome);
    localStorage.setItem('cognome', cognome);
    localStorage.setItem('istituto', istituto);
    localStorage.setItem('classe', classe);
    localStorage.setItem('singUp', "true")
  }

  const validationInput = () => {
    const elementIstituto = document.getElementById('istituto');
    const istituto = elementIstituto.options[elementIstituto.selectedIndex].value;
    const elementClasse = document.getElementById('classe');
    const classe = elementClasse.options[elementClasse.selectedIndex].value;

    const regex = /^[A-Za-z]*$/;

    let verifyObject = {
      verifyCognome: false,
      verifyIstituto: false,
      verifyNome: false,
      verifyClasse: false
    }
    
    if(istituto == 'null'){
      setErrorIstituto("form-select is-invalid")
    }else{
      setErrorIstituto("form-select")
      verifyObject.verifyIstituto = true
    }
    if(classe == 'null'){
      setErrorClasse("form-select is-invalid")  
    }else{
      setErrorClasse("form-select")
      verifyObject.verifyClasse = true
    }

    if(nome != '' && regex.test(nome)){
      setError("form-control")
      verifyObject.verifyNome = true
    }else{
      setError("form-control is-invalid")
    }
    if(cognome != '' && regex.test(cognome)){
      setErrorCognome("form-control")
      verifyObject.verifyCognome = true
    }else{
      setErrorCognome("form-control is-invalid")
    }
    
    if(verifyObject.verifyClasse == true && verifyObject.verifyCognome == true && verifyObject.verifyIstituto == true && verifyObject.verifyNome == true){
      saveData(istituto, classe)
      setIsVerified(true)
    }else{
      setErrorInput(true)
    }
  }

  return (
    <div id='Homepage-account'>
      <div className='center-space'>
        {isVerified ?
        <div className='verify-section'>
          <div class="alert alert-success" role="alert" id="alert1">
            <h4 class="alert-heading">Registrazione completata</h4>
            <ul className='list'>
              <li className='prop'>Nome: {localStorage.getItem('nome')}</li>
              <li className='prop'>Cogome: {localStorage.getItem('cognome')}</li>
              <li className='prop'>Istituto: {localStorage.getItem('istituto')}</li>
              <li className='prop'>Classe: {localStorage.getItem('classe')}</li>
            </ul>
          </div>
          <div class="alert alert-primary" role="alert" id="alert2">
            <p> Prova le funzionalità del chat bot</p>
            <Link to="/Chat_bot">
              <button type="button" class="btn btn-primary">Prova!</button>
            </Link>
          </div>
        </div>
        : 
        <form >
          <div className='title-field'><h5> Nome </h5></div>
            <div className='field' class="form-floating mb-3">
              <input type='text' class={error} id="floatingInput" placeholder='Nome' onChange={(e)=>setNome(e.target.value)}></input>
              <label for="floatingInput"> Inserisci Nome </label>
            </div>

            <div className='title-field'><h5> Cognome </h5></div>
            <div className='field' class="form-floating mb-3">
              <input type='text' class={errorCognome} id="floatingInput" placeholder='Cognome' onChange={(e)=>setCognome(e.target.value)}></input>
              <label for="floatingInput"> Inserisci Cognome </label>
            </div>

            <div className='field'>
              <h5> Scuola </h5>
              <select class={errorIstituto} name='istitute-field' id='istituto'>
                <option value='null' selected>Seleziona la tua scuola</option>
                <hr />
                <option value="liceo classico">Liceo Classico</option>
                <hr />
                <option value="liceo linguistico">Liceo Linguistico</option>
                <hr />
                <optgroup label='Liceo Scientifico'>
                  <option value="liceo scientifico">Liceo Scientifico tradizionale</option>
                  <option value="liceo scientifico, scienze applicate">Liceo Scientifico scienze applicate</option>
                  <option value="liceo scientifico, sezione sportiva">Liceo Scientifico sportivo</option>
                </optgroup>
                <hr />
                <optgroup label='Liceo delle scienze umane'>
                  <option value="liceo delle scienze umane">Liceo delle scienze umane</option>
                  <option value="liceo delle scienze umane, economico sociale">Liceo delle scienze umane, economico sociale</option>
                </optgroup>
                <hr />
                <optgroup label='Liceo artistico'>
                  <option value="liceo artistico, arti figurative">Indirizzo Arti Figurative</option>
                  <option value="liceo artistico, architettura e ambiente">Indirizzo Architettura e Ambiente</option>
                  <option value="liceo artistico, audiovisivo e multimediale">Indirizzo Audiovisivo e Multimediale</option>
                  <option value="liceo artistico, design">Indirizzo Design</option>
                  <option value="liceo artistico, grafica">Indirizzo Grafica</option>
                  <option value="liceo artistico, scenografia">Indirizzo Scenografia</option>
                </optgroup>
                <hr />
                <optgroup label='Liceo musicale e coreutico'>
                  <option value="liceo musicale e coreutico, musicale">Indirizzo Musicale</option>
                  <option value="liceo musicale e coreutico, coreutico">Indirizzo Coreutico</option>
                </optgroup>
                <hr />
                <optgroup label='Istituto tecnico economico'>
                  <option value="istituto tecnico economico, amministrazione, finanza e marketing">Amministrazione, Finanza e Marketing</option>
                  <option value="istituto tecnico economico, sistemi informativi aziendali">Sistemi Informativi Aziendali</option>
                  <option value="istituto tecnico economico, relazioni internazionali per il marketing">Relazioni Internazionali per il Marketing</option>
                  <option value="istituto tecnico economico, turismo">Turismo</option>
                </optgroup>
                <hr />
                <optgroup label='Istituto tecnico tecnologico'>
                  <option value="istituto tecnico tecnologico, meccanica, meccatronica ed energia">Meccanica, Meccatronica ed Energia</option>
                  <option value="istituto tecnico tecnologico, trasporti e logistica">Trasporti e Logistica</option>
                  <option value="istituto tecnico tecnologico, elettronica ed elettrotecnica">Elettronica ed Elettrotecnica</option>
                  <option value="istituto tecnico tecnologico, informatica e telecomunicazioni">Informatica e Telecomunicazioni</option>
                  <option value="istituto tecnico tecnologico, grafica e comunicazione">Grafica e Comunicazione</option>
                  <option value="istituto tecnico tecnologico, chimica, materiali e biotecnologie">Chimica, Materiali e Biotecnologie</option>
                  <option value="istituto tecnico tecnologico, sistema moda">Sistema Moda</option>
                  <option value="istituto tecnico tecnologico, agraria, agroalimentare e agroindustria">Agraria, Agroalimentare e Agroindustria</option>
                  <option value="istituto tecnico tecnologico, costruzioni, ambiente e territorio">Costruzioni, Ambiente e Territorio</option>
                </optgroup>
                <hr />
                <optgroup label='Istituto professionale per i servizi'>
                  <option value="istituto professionale per i servizi, servizi per l'agricoltura, lo sviluppo rurale e la selvicoltura">Servizi per l'Agricoltura, lo Sviluppo Rurale e la Selvicoltura</option>
                  <option value="istituto professionale per i servizi, servizi socio-sanitari">Servizi Socio-Sanitari</option>
                  <option value="istituto professionale per i servizi, servizi per l'enogastronomia e l'ospitalità alberghiera">Servizi per l'Enogastronomia e l'Ospitalità Alberghiera</option>
                  <option value="istituto professionale per i servizi, servizi commerciali">Servizi Commerciali</option>
                  <option value="istituto professionale per i servizi, servizi per la sanità e l'assistenza sociale">Servizi per la Sanità e l'Assistenza Sociale</option>
                </optgroup>
                <hr />
                <optgroup label=" Istituto professionale per lindustria e l artigianato">
                  <option value="istituto professionale per l'industria e l'artigianato, manutenzione e assistenza tecnica">Manutenzione e Assistenza Tecnica</option>
                  <option value="istituto professionale per l'industria e l'artigianato, industria e artigianato per il made in italy">Industria e Artigianato per il Made in Italy</option>
                  <option value="istituto professionale per l'industria e l'artigianato, arti ausiliarie delle professioni sanitarie: odontotecnico">Arti Ausiliarie delle Professioni Sanitarie: Odontotecnico</option>
                  <option value="istituto professionale per l'industria e l'artigianato, arti ausiliarie delle professioni sanitarie: ottico">Arti Ausiliarie delle Professioni Sanitarie: Ottico</option>
                </optgroup>
              </select>
            </div>
            <div className='field'>
              <h5>Classe</h5>
              <select class={errorClasse} id='classe'>
                <option value= "null" selected>Seleziona la tua classe</option>
                <option value="prima">Prima</option>
                <option value="seconda">Seconda</option>
                <option value="terza">Terza</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
              </select>
            </div>
              <div className='save-button'>
                <div>
                  <button type="button" class="btn btn-primary" onClick={validationInput}> Sign Up </button>
                </div>
            </div>
        </form>}
        
      </div>



    </div>
  )
}

export default Homepage_account;