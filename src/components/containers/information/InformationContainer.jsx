import "./information.sass";
import { SocialNetworkContainer } from "../../index";
import { QRCodeWpp, banner, mappedSoftskills } from "./utils/mappedSoftskills";

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
      {mappedSoftskills}
      <img className="qr-code" src={QRCodeWpp} alt="QR Code Whatsapp" />
      <SocialNetworkContainer />
    </section>
  );
};
