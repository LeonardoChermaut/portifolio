import "./information.sass";
import { SocialNetworkContainer } from "../../index";
import { softkills, QRCodeWpp, banner } from "../../../assets/constants";

const mappedSoftkills = (softkills = []) =>
  softkills.map((skill) => {
    const { id: key, name: id, img: src, description } = skill;
    return (
      <div key={key} className="info-card">
        <img id={id} src={src} />
        <div>
          <p className="description">{description}</p>
        </div>
      </div>
    );
  });

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
      {mappedSoftkills(softkills)}
      <img className="qr-code" src={QRCodeWpp} alt="QR Code Whatsapp" />
      <SocialNetworkContainer />
    </section>
  );
};
