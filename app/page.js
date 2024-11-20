import Image from "next/image";
import Logo from "../public/Logo.svg";
import conf1Img from "../public/conf1.png";
import conf2Img from "../public/conf2.png";
import conf3Img from "../public/conf3.png";
import conf4Img from "../public/conf4.png";
import conf5Img from "../public/conf5.png";

export default function Home() {
  const programme = [
    {
      time: "09h00",
      title: "Ouverture de la journée",
      details: [
        "Lecture de quelques versets du Coran par l’étudiant Mouad Sehlaoui",
        "Mot d'ouverture par le Directeur de l'ENSA-A, M. Hassan Hamdi",
        "Mot du coordinateur de la journée, M. Bou Mhamed Abdelhamid",
      ],
      image: "",
    },
    {
      time: "10h00",
      title: "Conférence 1",
      details: [
        "L’Analyse quantitative dans la gestion des risques en Private equity",
      ],
      image: conf1Img,
    },
    {
      time: "11h00",
      title: "Conférence 2",
      details: [
        "Gestion des actifs : Un moteur pour le développement économique du Maroc",
      ],
      image: conf2Img,
    },
    {
      time: "11h45",
      title: "Pause-Café",
      details: [],
      image: "",
    },
    {
      time: "12h15",
      title: "Conférence 3",
      details: ["Commando Front Office et les nouveaux horizons de la finance"],
      image: conf3Img,
    },
    {
      time: "12h45",
      title: "Conférence 4",
      details: ["Société Générale à préciser"],
      image: conf4Img,
    },
    {
      time: "13h30",
      title: "Pause Déjeuner",
      details: [],
      image: "",
    },
    {
      time: "14h45",
      title: "Lancement de la Plateforme",
      details: [],
      image: "",
    },
    {
      time: "15h15",
      title: "Présentation Étudiante (FID3)",
      details: ["Présentation par Fatima Zahra Koukou"],
      image: "",
    },
    {
      time: "15h45",
      title: "Présentations Étudiants (FID2)",
      details: ["Bou Mhamed Abdelhamid", "Daniel Anonwodji"],
      image: "",
    },
    {
      time: "16h15",
      title: "Compétition",
      details: [],
      image: "",
    },
    {
      time: "17h00",
      title: "Animation musicale",
      details: ["Gnaoua"],
      image: "",
    },
    {
      time: "Clôture de la Journée",
      title: "",
      details: [],
      image: "",
    },
  ];

  return (
    <section
      id="Programme"
      className="h-auto flex flex-col justify-center items-center text-center gap-14 px-[2vw] py-20"
    >
      <div>
        <p className="text-[4.5rem] font-bold text-[#ffa92c]">Welcome</p>
        <p className="text-xl">to the 4th Edition of Financial day</p>
      </div>
      <Image src={Logo} alt="Logo" className="w-[230px]" />
      <div className="leading-tight flex flex-col items-center justify-center">
        <p className="text-2xl leading-none">Les Nouveaux Horizons de</p>
        <p className="text-[3.8rem] font-semibold text-[#ffa92c]">La Finance</p>
        <div className="w-[290px] opacity-65 border border-white h-0 mb-1"></div>
        <p className="text-2xl">Tendances, Technologies et</p>
        <p className="text-2xl">Opportunités de Marché</p>
      </div>
      <p className="text-[3rem] font-semibold">Planning</p>
      <div className="">
        {programme.map((item, index) => (
          <div
            className="flex flex-col gap-4 text-center items-center justify-center"
            key={index}
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
                className="w-[500px] rounded-lg"
              />
            )}
            {index != programme.length - 1 && (
              <div className="w-[0px] border border-white h-20 mb-1"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
