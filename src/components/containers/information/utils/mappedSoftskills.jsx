import QRCodeWpp from "../../../../assets/QRcode.png";
import banner from "../../../../assets/banner.png";
import communication from "../../../../assets/communication.png";
import creativity from "../../../../assets/creativity.png";
import teamwork from "../../../../assets/teamwork.png";
import adaptability from "../../../../assets/adaptability.png";

const softkills = [
  {
    id: 1,
    name: "communication-png",
    src: communication,
    description: "Comunicação Efetiva",
  },
  {
    id: 2,
    name: "creativity-png",
    src: creativity,
    description: "Pensamento Criativo",
  },
  {
    id: 4,
    name: "adaptability-png",
    src: adaptability,
    description: "Alta adaptabilidade",
  },
  {
    id: 5,
    name: "teamwork-png",
    src: teamwork,
    description: "Trabalho em Equipe",
  },
];

const mappedSoftskills = softkills.map((skill) => {
  const { id: key, name: id, src, description } = skill;
  return (
    <div key={key} className="info-card">
      <img id={id} src={src} />
      <div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
});
export { mappedSoftskills, QRCodeWpp, banner };
