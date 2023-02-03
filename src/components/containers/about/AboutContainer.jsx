import "./about.sass";
import gifSuperMario from "../../../assets/mariodev.gif";

export const AboutContainer = () => {
  return (
    <section className="about-container">
      <h2>Sobre</h2>
      <p>
        Olá, meu nome é Leonardo e sou um desenvolvedor Full Stack apaixonado
        por tecnologia. <br></br> Tenho 25 anos e fui formado pela parceria
        entre o Serratec e o SENAI FIRJAN. <br></br> Desde cedo, sempre tive
        interesse tanto em software quanto em hardware, onde atualmente, sou
        autônomo e trabalho com montagem e manutenção de hardwares e redes.
      </p>
      <p>
        Meu objetivo profissional é atuar na área de tecnologia de software,
        especialmente no front-end. <br></br> Mas antes disso, trabalhei como
        Design Gráfico, o que me permitiu desenvolver minhas habilidades
        criativas e ter um bom senso de UX e estilo.
      </p>
      <p>
        Sou uma pessoa altamente comunicativa, adaptável, analítica e acredito
        que essas características foram moldadas pela minha trajetória
        profissional, na qual trabalho com o público por muito tempo. <br></br>
        E, por falar em trajetória, fiquei super animado em participar do
        Startup Weekend Brasil, como mostro nessa minha foto de perfil xD
      </p>
      <img
        className="gif-super-mario"
        src={gifSuperMario}
        alt="Desenho do super mário, sentado e programando no computador a noite."
      />
    </section>
  );
};
