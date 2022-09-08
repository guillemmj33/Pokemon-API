import React, { useEffect, useState } from 'react';
import './Character.scss';
import { singlePokemon } from '../../functions/functions';

const Character = () => {

  useEffect(() => {
    singlePokemon();
  }, [])
  
  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card--1">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="" />
          </div>
          <div className="card--1-info">
            <h3>charmander</h3>
            <button>fire</button>
          </div>
          <div className="card--2">
            <div className="card--2-wh">
              <div className="card--2-weight">
                <h4>7.5 KG</h4>
                <h5>WEIGHT</h5>
              </div>
              <div></div>
              <div className="card--2-height">
                <h4>0.6 M</h4>
                <h5>HEIGHT</h5>
              </div>
            </div>
            <div className="card--3">
              <h4>✩ PERFORMANCE ✩</h4>
              <div className="card--3-stats">
                <div className="card--3-stats-box">
                  <h5>HPP</h5>
                  <div className="card--3-stats-bar">
                    <div className="card--3-stats-bar_data__1">
                      123/300
                    </div>
                  </div>
                </div>
                <div className="card--3-stats-box">
                  <h5>ATK</h5>
                  <div className="card--3-stats-bar">
                    <div className="card--3-stats-bar_data__2">
                      123/300
                    </div>
                  </div>
                </div>
                <div className="card--3-stats-box">
                  <h5>DEF</h5>
                  <div className="card--3-stats-bar">
                    <div className="card--3-stats-bar_data__3">
                      123/300
                    </div>
                  </div>
                </div>
                <div className="card--3-stats-box">
                  <h5>SPD</h5>
                  <div className="card--3-stats-bar">
                    <div className="card--3-stats-bar_data__4">
                      123/300
                    </div>
                  </div>
                </div>
                <div className="card--3-stats-box">
                  <h5>EXP</h5>
                  <div className="card--3-stats-bar">
                    <div className="card--3-stats-bar_data__5">
                      123/300
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Character;