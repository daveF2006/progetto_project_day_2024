import React, { useEffect, useState } from 'react';

const Typewriter = ({ delay = 0 }) => {
  const phrases = [
    "School Bot risponde a qualsiasi tuo dubbio, domanda e perplessità.",
    "Può organizzare il tuo studio, collegare 2 o più materie in base all'argomento,",
    "insomma, aiutarti fornendoti ciò di cui hai bisogno.",
    "",
    "Premi il tasto e guarda con i tuoi occhi...",
  ];

  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {

    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (started && currentPhraseIndex < phrases.length) {
      if (charIndex < phrases[currentPhraseIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + phrases[currentPhraseIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        }, 50); 
        return () => clearTimeout(timeout);
      } else if (charIndex === phrases[currentPhraseIndex].length) {
 
        const phraseTimeout = setTimeout(() => {
          setDisplayedText((prev) => prev + '\n'); 
          setCharIndex(0);
          setCurrentPhraseIndex((prev) => prev + 1);
        }, 1000); 
        return () => clearTimeout(phraseTimeout);
      }
    }
  }, [started, charIndex, currentPhraseIndex, phrases]);

  return (
    <pre style={{ whiteSpace: 'pre-wrap'}}>
      {displayedText}
    </pre>
  );
};

export default Typewriter;