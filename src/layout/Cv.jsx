import React from "react";
import imgOne from "../images/ee.jpeg";
import WorkOne from "../images/workOne.jpeg";
import okk from "../images/okk.jpeg";
import cvOne from "../images/cvOne.jpg";

export default function Cv() {
  return (
    <div className="bg-white">
      <h1 className="text-4xl lg:text-5xl text-center f-m-w text-indigo-700 underline underline-offset-8 font-bold pt-0">
        Expérience professionnelle
      </h1>
      <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
        <div className="lg:flex justify-center">
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              src={okk}
              alt="fingerprint recognition"
              className="lg:w-full rounded-lg w-auto"
            />
            <div className="mt-4">
              <div
                data-aos="zoom-out"
                data-aos-duration="3000"
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <p className="text-base leading-4 text-gray-500">Septembre</p>
                  <p className="text-base leading-none text-gray-500 ml-12">
                    2022
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="text-base leading-none text-gray-500 ml-2">
                    me and my learners
                  </p>
                </div>
              </div>
              <h1
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800"
              >
                overview of my professional experience
              </h1>
              <p
                data-aos="zoom-in"
                data-aos-duration="3000"
                className="text-base leading-6 text-gray-600 mt-2"
              >
                ceci est une photo d'une de mes séances d'encadrements à
                Gomycode CI , j'y est travaillé comme instructeur en
                developpement Web .
              </p>
            </div>
          </div>
          <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
            <div className="lg:w-auto sm:w-1/2">
              <img
                data-aos="zoom-in"
                data-aos-duration="3000"
                src={WorkOne}
                alt="robotic arm"
                className="w-[360px] h-[303px] rounded-lg"
              />
              <div className="mt-4">
                <div
                  data-aos="zoom-out"
                  data-aos-duration="3000"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-gray-500">15 sep</p>
                    <p className="text-base leading-none text-gray-500 ml-12">
                      2022
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      Evans Katchi
                    </p>
                  </div>
                </div>
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  className="text-2xl font-semibold leading-6 mt-4 text-gray-800"
                >
                  Integration system
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  className="text-base leading-6 text-gray-600 mt-2"
                >
                  Ceci est un workshop que j'ai encadrer en tant qu'instructeur
                  en developpement web à Gomycode CI . Le but était de mettre en
                  place et d'intégrer un system de mailing permettant de
                  dynamiser son site Web .
                </p>
              </div>
            </div>
            <div className="lg:mt-6 sm:mt-0 mt-6 lg:ml-0 sm:ml-6 lg:w-auto sm:w-1/2">
              <img
                data-aos="zoom-in"
                data-aos-duration="3000"
                src={imgOne}
                alt="flying letters"
                className="w-[360px] h-[506px] rounded-lg "
              />
              <div className="mt-4">
                <div
                  data-aos="zoom-out"
                  data-aos-duration="3000"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center"></div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      me and my learners
                    </p>
                  </div>
                </div>
                <h1
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  className="text-2xl font-semibold leading-6 mt-4 text-gray-800"
                >
                  Work Session
                </h1>
                <p
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                  className="text-base leading-6 text-gray-600 mt-2"
                >
                  Apercu d'une de mes séances de travail
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-center justify-center my-16 w-full">
          <label htmlFor="my-modal-5" className="btn modal-button bg-white px-12 h-16 text-indigo-700 border-2 border-indigo-700 hover:bg-gray-100 hover:border-indigo-700">
            consulter cv
          </label>

          <input
            type="checkbox"
            id="my-modal-5"
            className="modal-toggle "
          />
          <div className="modal">
            <div className="modal-box w-[94%] lg:w-full h-[62%]  lg:h-[85%]">
            <label htmlFor="my-modal-5" className="btn bg-[#33b5a1b9] text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
              <img  
                src={cvOne}
                alt=""
                className="w-full h-full"
              />
              <div className="modal-action">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
