import Image from "next/image";

export default function Home() {
  const programme = [
    { time: "19h00", title: "Ouverture des portes" },
    { time: "19h30", title: "Début du dîner de gala" },
    { time: "20h30", title: "Pitches des startups sélectionnées" },
    { time: "21h30", title: "Interventions des leaders d'industrie" },
    {
      time: "22h30",
      title: "Divertissements (duo de saxophone, danse orientale, comédie)",
    },
    { time: "23h00", title: "Networking et clôture" },
  ];

  return (
    <section
      id="Programme"
      className="h-auto flex flex-col justify-center items-center gap-14 px-[2vw] pt-28"
    >
      <h1 className="text-4xl md:text-5xl text-center font-century">
        Programme de la soirée
      </h1>
      <div className="">
        {programme.map((item, index) => (
          <div
            className="flex flex-col gap-3 text-center items-center justify-center"
            key={index}
          >
            <div className="text-5xl font-century">{item.time}</div>
            <div className="text-lg font-thin px-6">{item.title}</div>
            {index != programme.length - 1 && (
              <div className="w-[0px] border border-white h-10 mb-1"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
