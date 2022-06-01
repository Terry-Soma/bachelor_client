import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted mt-5">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <div>
            <a href className="me-4 text-reset">
              <i className="fab fa-facebook-f" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-twitter" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-google" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-instagram" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-linkedin" />
            </a>
            <a href className="me-4 text-reset">
              <i className="fab fa-github" />
            </a>
          </div> */}
        </section>
        <section className>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  ИХ ЗАСАГ
                </h6>
                <p>
                  Их Засаг ОУИС мэдлэгийг үйлдвэрлэгч, баялгийг бүтээгчдийг
                  төрүүлэх, оюутан суралцагчдын ажил амьдралын баталгааг
                  хангахад чиглэгдсэн сургалт, судалгаа, инновацийн бүтээлч
                  чадамжтай, судалгааны их сургууль байна.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Цэс</h6>
                <p>
                  <Link to="/info" className="text-reset">
                    Хөтөлбөрүүд
                  </Link>
                </p>
                <p>
                  <Link to="/school" className="text-reset">
                    Салбар сургууль
                  </Link>
                </p>
                <p>
                  <Link to="/login" className="text-reset">
                    Нэвтрэх
                  </Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Холбоо барих</h6>
                <p>
                  <i className="fas fa-home me-3" /> Монгол Улс Улаанбаатар хот.
                  Баянзүрх дүүрэг, 4 дүгээр хороо, Б.Доржийн гудамж, Их Засаг
                  цогцолбор
                </p>
                <p>
                  <i className="fas fa-envelope me-3" />
                  info@ikhzasag.edu.mn
                </p>
                <p>
                  <i className="fas fa-phone me-3" /> +976 70157768, 7015-7761,
                  7015-7765
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          &copy; {new Date().getFullYear()} :{' '}
          <a href="https://ikhzasag.edu.mn">
            ИХ ЗАСАГ ОЛОН УЛСЫН ИХ СУРГУУЛЬ ИЗОУИС
          </a>
        </div>
      </footer>
    </>
  );
}
