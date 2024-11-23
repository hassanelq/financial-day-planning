"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Logo from "../public/Logo.svg";
import Img2CF from "../public/Img2cf.png";
import SG from "../public/SG.png";
import kaddi from "../public/kaddi.png";
import Aatek from "../public/Aatek.png";
import Logos from "../public/Logos.png";
import comp from "../public/comp.png";
import link from "../public/link.svg";

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date()); // Store current time

  // Update the current time every second

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const programme = [
    {
      time: "10:00",
      title: "Ouverture de la journée",
      details: [
        "Lecture de quelques versets du Coran par l’étudiant Mouad Sehlaoui",
        "Mot d'ouverture par le Directeur de l'ENSA-A, M. Hassan Hamdi",
        "Mot du coordinateur de la journée, M. Bou Mhamed Abdelhamid",
      ],
      image: "",
      status: "past",
    },
    {
      time: "10:30",
      title: "Conférence 1",
      details: [
        "L’Analyse quantitative dans la gestion des risques en Private equity",
      ],
      image: Img2CF,
      status: "past",
    },
    {
      time: "11:25",
      title: "Conférence 2",
      details: [
        "Gestion des actifs : Un moteur pour le développement économique du Maroc",
      ],
      image: Aatek,
      status: "past",
    },
    { time: "12:25", title: "Pause-Café", image: "", status: "past" },
    {
      time: "12:50",
      title: "Conférence 3",
      details: ["Commando Front Office et les nouveaux horizons de la finance"],
      image: kaddi,
      status: "past",
    },
    {
      time: "13:45",
      title: "Conférence 4",
      details: ["Les Métiers de la Banque d’Investissement"],
      image: SG,
      status: "past",
    },
    { time: "14:20", title: "Pause Déjeuner", status: "current" },
    {
      time: "16:30",
      title: "Présentation Étudiante (FID3)",
      details: [
        "Fatima Zahra Koukou",
        "Financial Toolkit platform : Dynamique, Efficacité et Inclusivité. Des projets académiques visionnaire pour la finance de demain",
      ],
      image: "",
    },
    {
      time: "16:05",
      title: "Présentations Étudiants (FID2)",
      details: [
        "Bou Mhamed Abdelhamid",
        "( L'Ordre dans le Désordre : Le K-Means et la Quête de Structure dans la Finance de Marché )",
        "Daniel Anonwodji",
        "( Simulation Monte Carlo vs Optimisation quadratique : Minimisation du Tracking Error dans la gestion indicielle )",
        "Wassim Kerdoun",
        "( Monte Carlo Pricing of European Options with Volatility Surface and Greeks Analysis )",
      ],
      image: "",
    },
    { time: "16:40", title: "Compétition", details: [], image: comp },
    {
      time: "17:00",
      title: "Animation musicale",
      details: ["Gnaoua"],
    },
    { time: "18:00", title: "Clôture de la Journée", details: [], image: "" },
  ];

  return (
    <div
      id="Programme"
      className="h-auto flex flex-col justify-center items-center text-center gap-14 px-[2vw] pt-20"
    >
      <div>
        <p className="text-[4rem] font-bold text-[#ffa92c] leading-none">
          Welcome
        </p>
        <p className="text-lg font-light">
          to the 4th Edition of Financial Day
        </p>
      </div>
      <Image src={Logo} alt="Logo" className="w-[230px]" />
      <div className="leading-none flex flex-col items-center justify-center">
        <p className="text-xl pb-0.5">Theme</p>
        <div className="w-[68px] opacity-65 border border-white h-0 mb-6"></div>
        <p className="text-xl">Les Nouveaux Horizons de</p>
        <p className="text-[3.5rem] font-semibold text-[#ffa92c] pb-2">
          La Finance
        </p>
        <div className="w-[290px] opacity-65 border border-white h-0 mb-2"></div>
        <p className="text-xl">Tendances, Technologies et</p>
        <p className="text-xl">Opportunités de Marché</p>
      </div>
      <div>
        <p className="text-[3rem] font-semibold pb-8 pt-16">Planning</p>
        {programme.map((item, index) => {
          return (
            <div
              className={`flex flex-col gap-4 text-center items-center justify-center ${
                item.status === "past" ? "opacity-50" : ""
              }`}
              key={index}
            >
              <div
                className={`flex flex-col gap-4 text-center items-center justify-center ${
                  item.status === "current"
                    ? "rounded-xl border-2 border-[#ffa92c] p-4 bg-[#ffa92c] bg-opacity-15"
                    : ""
                }`}
              >
                <div className="text-5xl font-semibold">{item.time}</div>
                <div className="text-3xl font-medium px-6 text-[#ffa92c]">
                  {item.title}
                </div>
                {item.details && (
                  <div className="text-lg font-thin px-6">
                    {item.details.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                )}
                {item.image && (
                  <Image
                    src={item.image}
                    alt="Conférence"
                    width={500}
                    height={500}
                    key={index}
                    className="rounded-lg"
                  />
                )}
              </div>
              {index !== programme.length - 1 && (
                <div className="w-[0px] border border-white h-28 mb-4"></div>
              )}
            </div>
          );
        })}
      </div>
      <Image
        src={Logos}
        alt="Logos"
        className="max-w-full sm:w-[50%] lg:w-[30%] mt-4 px-3"
      />
      <p className="pt-4 pb-10">
        {" "}
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/el-qadi/"
          className="text-[#ffa92c]"
        >
          El Qadi Hassan
          <Image src={link} alt="LinkedIn" className="w-6 ml-1 inline mb-1" />
        </a>
      </p>
    </div>
  );
}
