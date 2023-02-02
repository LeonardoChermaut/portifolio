import "./about.sass";
import gifSuperMario from "../../../assets/mariodev.gif";

export const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Desenvolvedor FullStack formado pelo Serratec em parceria com a SENAI
        FIRJAN.<br></br> Sempre estive ligado a tecnologia, seja ela software
        propriamente dito ou hardware. Que inclusive, é a minha fonte de renda
        atual como autônomo, técnico em montagem e manutenção de hardwares em
        geral e redes.
        <p>
          Por já ter trabalhado como Design Gráfico, adquiri bom gosto,
          elegância para estilizações e na experiência do usuário, o que me
          direcionou para o front-end.
        </p>
        <p>
          Hoje o meu foco principal é terminar minha graduação em Análise e
          Desenvolvimento de Softwares e agregar valor ao produto da sua
          empresa.
        </p>
      </p>
      <img
        className="gif-super-mario"
        src={gifSuperMario}
        alt="Desenho do super mário, sentado e programando no computador a noite."
      />
    </section>
  );
};
