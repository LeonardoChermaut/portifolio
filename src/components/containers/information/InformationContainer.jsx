import { SocialNetworkContainer } from "../social/SocialNetworkContainer";
import { FcCollaboration, FcPuzzle, FcIdea} from "react-icons/fc";
import QRCodeWpp from "../../../assets/QRcode.png";
import banner from "../../../assets/banner.png";
import "./information.sass";

const information = [
  {
    id: 1,
    name: "speak-icon",
    icon: FcCollaboration,
    title: "Oratória",
    description: "Comunicação",
  },
  {
    id: 2,
    name: "idea-icon",
    icon: FcIdea,
    title: "Criatividade",
    description: "Brainstorm",
  },
  {
    id: 3,
    name: "puzzle-icon",
    icon: FcPuzzle,
    title: "Sistematização",
    description: "Organização",
  },
];

export const InformationContainer = () => {
  return (
    <section id="information">
      
      <div className="banner-container">
        <img
          className="banner"
          src={banner}
          alt="Banner escrito o nome Leonardo Chermaut e dando boas saudações."
        />
      </div>
      {information.map((item) => (
        <div key={item.id} className="info-card">
          <item.icon id={`${item.name}`} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
      <img className="qr-code" src={QRCodeWpp} alt="QR Code Whatsapp" />
      <SocialNetworkContainer />
    </section>
  );
};
