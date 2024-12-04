import React from 'react'
import '../Home/Home.css'
import { Link } from 'react-router-dom';
import 'animate.css';
import Typewriter from './typewriter';


export const Home = () => {
  return (
    <home id="home">
    
    <div id='scroll-container'>
        <div id='scroll-content'>
          <div id="image-with-text"> 

            <img src='https://www.isarchimede.edu.it/wp-content/uploads/2023/10/archimeme.jpg'></img>
            <div id="text-overlay">Gli studenti dell' <br></br>ITIS Archimede di Treviglio <br></br>presentano . . .</div>
            
            
            </div>
            

            <div id='image'>
              <img src='https://www.teknoring.com/wp-content/uploads/2019/03/intelligenza-artificiale.jpg'
              ></img>
                <div id='descrizione'>

                  <text id='titolo'> School Bot </text>

                  </div>
                  
                    <text id='spiegazione'>

                      <Typewriter delay={5500}/>  

                    </text>

                  
                
                <div id='posizioneBottone'>
                
                  <Link to='/Chat_bot' >
                    <button id='bottone'>
                      Inizia a chattare!
                    </button>
                  </Link> </div>
                  
                
                
                

            </div>


            
                </div>

                
              
              
                
              
              </div>

            
                
      
    
    </home>
  )
}

export default Home;

