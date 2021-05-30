import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  let upLikes = 0;
  let downLikes = 0;

  const btnUp = document.querySelector('#btn-up');
  const btnDown = document.querySelector('#btn-down');

  btnUp.addEventListener('click', () => {
    upLikes += 1;
    const likesUpElm = document.querySelector('#likes-up');
    likesUpElm.textContent = upLikes;
  });

  btnDown.addEventListener('click', () => {
    downLikes += 1;
    const likesDownElm = document.querySelector('#likes-down');
    likesDownElm.textContent = downLikes;
  });

  return (
    <>
      <div className="container">
        <div className="joke">
          <div className="joke__body">
            <div className="joke__user">
              <img
                className="user-avatar"
                src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
              />
              <p className="user-name">Neroxx</p>
            </div>

            <p className="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div className="joke__likes">
            <button id="btn-up" class="btn-like btn-like--up"></button>
            <span id="likes-up" class="likes-count likes-count--up">
              0
            </span>
            <button id="btn-down" className="btn-like btn-like--down"></button>
            <span id="likes-down" className="likes-count likes-count--down">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
