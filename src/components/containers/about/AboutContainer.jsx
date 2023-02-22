import "./about.sass";
import gifSuperMario from "../../../assets/mariodev.gif";
import { Bar } from "../../bar/Bar";

export const AboutContainer = () => {
  return (
    <section className="about-container">
      <div className="sub-container">
        <h2>Sobre Mim</h2> <Bar />
      </div>
      <p>
        Olá, meu nome é Leonardo e sou um desenvolvedor Full Stack apaixonado
        por tecnologia. Desde criança, sempre fui fascinado por hardwares,
        softwares e isso me levou a trabalhar como autônomo em montagem,
        manutenção de hardwares e redes.
      </p>
      <p>
        No entanto, não quero parar por aí, com o avanço, o senso de urgência,
        em 2021 iniciei com alguns estudos em desenvolvimento,<br></br> em 2022
        passei no processo de residência Serratec - Parque Tecnológico Região
        Serrana, me formando como Desenvolvedor Full-Stack.<br></br> Buscando
        sempre a constante do progresso, estou cursando Análise e
        Desenvolvimento de Softwares pela Universidade UNIFESO. <br></br>Onde
        meu objetivo profissional atual é focar em tecnologia de software,
        especialmente no front-end.
      </p>
      <p>
        Já tive a oportunidade de trabalhar como Designer Gráfico em alguns
        projetos locais da minha cidade, o que me permitiu desenvolver
        habilidades de criatividade, UX, estilo e bom gosto.<br></br> Sou uma
        pessoa altamente comunicativa, analítica e adaptável. Tudo isso foi
        moldado pela minha trajetória profissional, na qual trabalhei com o
        público por muito tempo.<br></br> <br></br>Outra coisa interessante, é
        que participei do Startup Weekend Brasil e fiquei muito feliz por estar
        entre as ideias mais votadas.
      </p>
      <img
        className="gif-super-mario"
        src={gifSuperMario}
        alt="Desenho do super mário, sentado e programando no computador a noite."
      />
    </section>
  );
};
