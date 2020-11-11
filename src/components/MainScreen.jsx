import React, { useState } from 'react';
import { Question } from './Question';


import thumbUp from '../images/Group265.png';
import '../styles/MainScreen.css';

export const MainScreen = () => {
  const [gameStarted, startGame] = useState(false);

  return (
    <>
    <section className="main-screen">
      <div className="main-screen__container">
        <img
          src={ thumbUp }
          alt="thumb up"
          className="main-screen__image"
        />
        
        <div className="main-screen__title-container">
          <h2 className="main-screen__title">
            Who wants to be
            <br/>
            a millionaire?
          </h2>
          <button
            className="main-screen__button"
            onClick={() => startGame(true)}
          >
            Start
          </button>
        </div>

      </div>
    </section>

    {gameStarted &&
      <Question />
    }
  </>
  )
}
