import React from "react";
import Phone from "./Phone";
import ProjetMouniOne from "../images/imaP.png";
import imgStream from "../images/imgStream.png";
import imgMou from "../images/imgMou.png";
import { Link } from "react-router-dom";
export default function HomeHero() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-5xl text-center f-m-w text-indigo-700 underline underline-offset-8 font-bold pt-0">
        Projets
      </h1>
      <br />
      <div className="pt-14 xl:px-0 px-4">
        <div className="w-full lg:flex">
          <div className="lg:w-1/2 lg:pl-44">
            <Phone />
            <div className="mt-8 lg:mb-0 mb-8">
              <h1
                data-aos="flip-left"
                data-aos-duration="1000"
                className="f-m-m text-2xl font-bold leading-7"
              >
                Streaming and music, Application
              </h1>
              <p
                data-aos="flip-left"
                data-aos-duration="3000"
                className="text-base f-m-m leading-loose mt-2 font-semibold"
              >
                Ecouter les dernières tendances du moment comme Oxalde: Ku Lo sa
                , didi B X jr Low X Tamsir : en Haut ainsi que biens d'autres
                son du moment sur Stream differently .
              </p>
              <div className="mt-6">
                <a href="https://stream-differently.netlify.app/">
                  <p
                    data-aos="flip-left"
                    data-aos-duration="3000"
                    className="cursor-pointer hover:text-slate-300 active:text-indigo-700 transition-all lg:hover:text-lg text-indigo-700 underline text-lg font-bold f-m-m"
                  >
                    "acceder à stream differently"
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
            <div className="lg:flex items-start mb-8">
              <img
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                src={imgStream}
                className="w-[210px] lg:h-[350px] lg:w-[450px] h-[410px] rounded-lg drop-shadow-lg"
                alt=""
              />
              <div className="lg:ml-6">
                <h1
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                  className="f-m-m text-2xl font-bold leading-7 lg:mt-0 mt-8"
                >
                  Stream Differently
                </h1>
                <p
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                  className="text-base font-semibold f-m-m leading-loose mt-2"
                >
                  Ne se limitant pas seulement à la musique "Stream Differently"
                  réinvente le streaming vous pouvez y retrouver des séries à
                  succès comme Elite , Euphoria , You et plusieurs séries
                  d'animations japonaises telles que One piece , Naruto
                  Shippuden ou Attack on Titan et d'autres series populaires .
                </p>
                <div className="mt-4">
                  <a href="https://stream-differently.netlify.app/">
                    <p
                      data-aos="zoom-in-down"
                      data-aos-duration="2000"
                      className="cursor-pointer hover:text-slate-300 active:text-indigo-700 transition-all lg:hover:text-lg text-indigo-700 underline text-base font-bold f-m-m"
                    >
                      preview
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                src={ProjetMouniOne}
                className="w-[210px] lg:h-[350px] lg:w-[450px] h-[410px] rounded-lg drop-shadow-lg"
                alt=""
              />
              <div className="lg:ml-6">
                <h1
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                  className="f-m-m text-2xl font-bold leading-7 lg:mt-0 mt-8"
                >
                  Mounira&Co
                </h1>
                <p
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                  className="text-base f-m-m font-semibold leading-loose mt-2"
                >
                  Mounira&Co est une structure spécialisé dans l'import-export
                  baser à Abidjan Marcory plus précisement au boulevard Amangou
                  Victor vous pouvez prendre rendez-vous et contacter
                  l'entreprise grâce à un système de réservation de réunion afin
                  de permettre à l'entreprise de gérer au mieux ses activités.
                </p>
                <div className="mt-4">
                  <a href="https://mounira-co.netlify.app/">
                    <p
                      data-aos="zoom-in-down"
                      data-aos-duration="2000"
                      className="cursor-pointer hover:text-slate-300 active:text-indigo-700 transition-all lg:hover:text-lg text-indigo-700 underline text-base font-semibold f-m-m"
                    >
                      acceder à : Mounira.co
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:flex items-start mb-8">
              <img
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                src={imgMou}
                className="w-[210px] lg:h-[350px] lg:w-[450px] h-[410px] rounded-lg drop-shadow-lg"
                alt=""
              />
              <div className="lg:ml-6">
                <h1
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                  className="f-m-m text-2xl font-bold leading-7 lg:mt-0 mt-8"
                >
                  Sites Web Dynamique
                </h1>
                <p
                  data-aos="zoom-in-down"
                  data-aos-duration="2000"
                  className="text-base font-semibold f-m-m leading-loose mt-2"
                >
                  Ne se limitant pas seulement à l'import-export mourira&Co
                  propose des services de tout genre tels que le commerce
                  général , la mise en relation d'affaires , Négoces de Matières
                  premières .
                </p>
                <div className="mt-4">
                  <a href="https://mounira-co.netlify.app/">
                    <p
                      data-aos="zoom-in-down"
                      data-aos-duration="2000"
                      className="text-indigo-700 underline text-base cursor-pointer hover:text-slate-300 active:text-indigo-700 transition-all lg:hover:text-lg font-bold f-m-m"
                    >
                      Decouvrir
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
