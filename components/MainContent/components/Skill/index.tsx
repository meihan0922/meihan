import Area from "../Area";

const Skills = () => {
  const allSkills = {
    FrontEnd: [
      "React",
      "Typescript",
      "Redux",
      "Zustand",
      "Tailwind",
      "Jest",
      "Next.js",
      "GraphQL",
      "Cypress",
      "Storybook",
    ],
    Design: ["Illustrator", "Photoshop", "XD", "Sketch", "InDesign"],
  };
  return (
    <Area title="Skill">
      <div className="flex flex-col gap-1.5 sm:gap-2.5">
        {Object.entries(allSkills).map(([title, skills]) => (
          <div key={title}>
            <p className="mb-1 text-sm leading-4">{title}</p>
            <div className="ml-2 flex flex-wrap text-sm font-semibold md:text-base">
              {skills.map((i, idx) => (
                <p key={i}>
                  <span>{i}</span>
                  {idx !== skills.length - 1 && (
                    <span className="mx-1.5 text-xs md:text-sm">/</span>
                  )}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Area>
  );
};

export default Skills;
