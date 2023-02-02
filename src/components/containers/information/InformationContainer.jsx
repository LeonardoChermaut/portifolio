import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import { SocialNetworkContainer } from "../social/SocialNetworkContainer";
import "./information.sass";
import QRCodeWpp from "../../../assets/QRcode.png";
import banner from "../../../assets/banner.png";

const information = [
  {
    id: 1,
    name: "phone-icon",
    icon: AiFillPhone,
    title: "Celular",
    description: "(021) 9 6660-9888",
  },
  {
    id: 2,
    name: "email-icon",
    icon: AiOutlineMail,
    title: "E-mail",
    description: "chermauts@hotmail.com",
  },
  {
    id: 3,
    name: "pin-icon",
    icon: AiFillEnvironment,
    title: "Localização",
    description: "Teresópolis / Rio de Janeiro",
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
