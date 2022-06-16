import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './style.module.css';
import logo from '../../../assets/img/icons.svg';
import axios from '../../../utils/axios.js';
export default function School() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('/school')
      .then(({ data })=> {
        setData(data.data);
      })
      .catch(function (error) {
        console.log("aldaa")
      });
  }, []);

  return (
    <div className="container text-secondary py-5">
      <section id={css.school}>
        <div className={css['card-container']}>
          {data && data.map((e) => {
            let substrings = e.description.split(' ', 20).join(' ');
            let add = e.address.split(' ', 5).join(' ');
            let res = e.color.substring(0, 5);
            return (
              <>
                <div className={css.card} key={e.Id}>
                  <div className={css['card__header']}>
                    <div className={css['card__picture']}>
                      <div  
                        className={css['card__picture-overlay']}
                        style={{
                          backgroundImage: `linear-gradient(to right bottom, ${
                            e.color
                          }, ${res + '66'})`,
                        }}
                      >
                        &nbsp;
                      </div>
                      <img
                        src={`https://elselt.ikhzasag.edu.mn/uploads/${e.img}`}
                        alt={e.name}
                        className={css['card__picture-img']}
                      />
                    </div>

                    <h3 className={css['heading-tertirary']}>
                      <span
                        style={{
                          backgroundImage: `linear-gradient(to right bottom, ${
                            e.color
                          }, ${res + '52'})`,
                        }}
                      >
                        {e.name}
                      </span>
                    </h3>
                  </div>

                  <div className={css['card__details']}>
                    <p className={css['card__text']}>
                      <div>{substrings}....</div>
                    </p>
                    <div className={css['card__data']}>
                      <svg className={css['card__icon']}>
                        <use xlinkHref={`${logo}#icon-map-pin`}></use>
                      </svg>
                      <span>{add}</span>
                    </div>
                    <div className={css['card__data']}>
                      <svg className={css['card__icon']}>
                        <use xlinkHref={`${logo}#icon-user`}></use>
                      </svg>
                      <span>1000 оюутан</span>
                    </div>
                  </div>
                  <div className={css['card__footer']}>
                    <a
                      className={`${css['btn']} ${css['btn--green']} ${css['btn--small']} `}
                      style={{ background: e.color }}
                      href="https://ikhzasag.edu.mn/"
                      target="_blank"
                    >
                      Дэлгэрэнгүй
                    </a>
                    <Link
                      to={{
                        pathname: '/info',
                        state: e.name,
                      }}
                      className={`${css['btn']} ${css['btn--green']} ${css['btn--small']}`}
                      style={{
                        backgroundColor: e.color,
                      }}
                    >
                      Хөтөлбөрүүд
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}
