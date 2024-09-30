import React from 'react';
import { Navbar } from '../components/navbar/navbar.tsx';
import { MiddleText } from '../components/middletext/middletext.tsx';
import { FromRightCard } from '../components/sidecard/fromrightcard.tsx';
import { SocialNetworks } from '../components/socialnetwork/socialnetwork.tsx';
import { FromLeftCardCarousel } from '../components/sidecard/fromleftcard.tsx';
import { Carousel } from '../components/carousel/carousel.tsx';
import { Team } from '../components/team/team.tsx';
import { Footer } from '../components/footer/footer.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={'logo-container'}>
        <img
          src={'https://r2.modelec.club/logo-full.png'}
          alt={'Modelec Logo'}
          id={'logo-full-home'}
        />
      </div>
      <div className={'photo-container'}>
        <img
          src={'https://r2.modelec.club/coupe-2024.png'}
          alt={'Modelec Photo'}
          id={'photo-coupe-home'}
        />
      </div>
      <div className={'content-container'}>
        <MiddleText
          triptic={{ __html: 'ROBOTIQUE<br> ELECTRONIQUE<br> MODELESIME<br>' }}
          text={{
            __html:
              "<h3>Qui sommes-nous ?</h3>Bienvenue ! Nous sommes Modelec, le club de robotique, électronique et modelisme de l'ISEN Nantes. Nous sommes une association étudiante qui a pour but de promouvoir la robotique, l'électronique et le modelisme auprès des étudiants de l'ISEN Nantes. Nous organisons des ateliers et des événements autour de ces thèmes. Nous participons également à la coupe de france de robotique où pour notre première participation en 2024 nous avons fini 14e sur 82.<h2>CLUB 100% ETUDIANTS</h2>",
          }}
        />
        <FromRightCard
          title={'Coupe de France de robotique'}
          content={{
            __html:
              "<span style='color: #0693E3;font-size: 1.5em;'>14 ème</span> sur 82 équipes<br>1 ère participation<p style='font-size: 2em; margin: 0 auto;'>100% étudiants</p>",
          }}
          image={'https://r2.modelec.club/serge-pixel.png'}
          className={'coupe-title'}
        />
        <h1 className={'title-white'}>Nos Réseaux</h1>
        <SocialNetworks
          networks={[
            {
              icon: 'https://r2.modelec.club/github.svg',
              link: 'https://www.github.com/modelec',
              name: 'Modelec_ISEN',
            },
            {
              icon: 'https://r2.modelec.club/youtube.svg',
              link: 'https://youtube.com/modelec',
              name: 'Modelec_ISEN',
            },
            {
              icon: 'https://r2.modelec.club/insta.svg',
              link: 'https://www.instagram.com/modelec_isen',
              name: 'Modelec_ISEN',
            },
          ]}
        />
        <FromLeftCardCarousel
          title={'Nos Partenaires'}
          carousel={[
            'https://r2.modelec.club/isen.png',
            'https://r2.modelec.club/mercurycloud.png',
            'https://r2.modelec.club/bde.png',
          ]}
          links={[
            'https://isen-nantes.fr',
            'https://mercurycloud.fr',
            'https://instagram.com/odyssey_bde',
          ]}
        />
        <MiddleText
          triptic={{ __html: "GRANDE<br> ECOLE<br> D'INGENIEUR<br>" }}
          text={{
            __html:
              "<h3>Notre actualité</h3>Parce que les technologies du numérique sont partout, l’ISEN forme des ingénieurs aptes à répondre aux besoins des entreprises dans tous les secteurs d’activités. Sur un parc de 10 hectares, le campus est doté d'un restaurant. Depuis la rentrée 2021 les étudiants sont accueillis dans le nouveau bâtiment ISEN construit avec le soutien de la Région Pays de la Loire.",
          }}
        />
      </div>
      <div className={'botton-container-home'}>
        <h1>Nos Projets</h1>
        <Carousel
          images={[
            'https://r2.modelec.club/robot1.jpg',
            'https://r2.modelec.club/robot2.jpg',
            'https://r2.modelec.club/robot3.jpg',
            'https://r2.modelec.club/robot4.jpg',
            'https://r2.modelec.club/robot5.jpg',
          ]}
        />
        <h1>L'équipe</h1>
        <Team
          team={[
            {
              name: 'Maxime Chauveau',
              role: 'Président',
              image: 'https://r2.modelec.club/maxime.png',
            },
            {
              name: 'Marie Dupont',
              role: 'Trésorière',
              image: 'https://r2.modelec.club/maxime.png',
            },
            {
              name: 'Pierre Dupont',
              role: 'Secrétaire',
              image: 'https://r2.modelec.club/maxime.png',
            },
          ]}
        />
      </div>
      <Footer />
    </>
  );
};

export default Home;
