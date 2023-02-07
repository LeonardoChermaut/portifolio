import { SocialNetworkContainer } from "../social/SocialNetworkContainer";
import QRCodeWpp from "../../../assets/QRcode.png";
import banner from "../../../assets/banner.png";
import communication from "../../../assets/communication.png";
import creativity from "../../../assets/creativity.png";
import teamwork from "../../../assets/teamwork.png";
import adaptability from "../../../assets/adaptability.png";
import "./information.sass";

const softkills = [
  {
    id: 1,
    name: "communication-png",
    img: communication,
    description: "Comunicação Efetiva",
  },
  {
    id: 2,
    name: "creativity-png",
    img: creativity,
    description: "Pensamento Criativo",
  },
  {
    id: 4,
    name: "adaptability-png",
    img: adaptability,
    description: "Alta adaptabilidade",
  },
  {
    id: 5,
    name: "teamwork-png",
    img: teamwork,
    description: "Trabalho em Equipe",
  },
];

export const InformationContainer = () => {
  return (
    <section id="information">
      <div className="banner-container">
        <img
          className="banner-img"
          src={banner}
          alt="Banner escrito o nome Leonardo Chermaut e dando boas saudações."
        />
      </div>
      {softkills.map((skill) => (
        <div key={skill.id} className="info-card">
          <img id={skill.name} src={skill.img} />
          <div>
            <p className="">{skill.description}</p>
          </div>
        </div>
      ))}
      <img className="qr-code" src={QRCodeWpp} alt="QR Code Whatsapp" />
      <SocialNetworkContainer />
    </section>
  );
};
