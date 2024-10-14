import React from 'react';

import { Github, Youtube, Instagram, BookmarkBook } from 'iconoir-react';

import { Box } from '../../components/box/box.tsx';
import { SocialNetworkList } from '../../components/socialnetwork/socialnetwork.tsx';
import { Carousel } from '../../components/carousel/carousel.tsx';

import './Home.css';
import { Team } from '../../components/team/team.tsx';
import { Link } from 'react-router-dom';
import { Banner } from '../../components/banner/banner.tsx';

const Home: React.FC = () => {
  return (
    <>
      <Banner
        image={{ src: 'https://r2.modelec.club/coupe-2024.png', alt: 'Modelec Photo' }}
        header={'Qui sommes-nous ?'}
        label={'Club 100% étudiant'}
      >
        Nous sommes <u>Modelec</u>, une association étudiante de l'<u>ISEN</u> qui a pour but de promouvoir la <b>robotique</b>, l'<b>électronique</b> et le <b>modélisme</b> auprès des étudiants de notre campus grâce à l'organisation d'ateliers et d'événements.
        <br />
        Nous participons également à la coupe de <u>France de robotique</u> où en 2024, nous avons fini <u>14e</u> sur 82 pour notre <u>première participation</u>.
      </Banner>
      <SocialNetworkList
        networks={[
          { Icon: Instagram, name: 'modelec_isen', link: 'https://www.instagram.com/modelec_isen' },
          { Icon: Youtube, name: 'modelec', link: 'https://youtube.com/modelec' },
          { Icon: Github, name: 'modelec', link: 'https://www.github.com/modelec' },
        ]}
      />
      <div className={'dual'}>
        <Box
          title={'Coupe de France de robotique'}
          subtext={'Première participation'}
          label={'Édition 2024'}
          elements={[
            { type: "image", src: 'https://r2.modelec.club/serge-pixel.png', alt: 'Serge Pixel' },
            { type: "data", data: "14e", "subtext": "/82 équipes" }
          ]}
        />
        <Box
          title={'ISEN Nantes'}
          subtext={'Notre école'}
          elements={[
            'Parce que les technologies du numérique sont partout, l’ISEN forme des ingénieurs aptes à répondre aux besoins des entreprises dans tous les secteurs d’activités. Sur un parc de 10 hectares, le campus est doté d\'un restaurant. Depuis la rentrée 2021 les étudiants sont accueillis dans le nouveau bâtiment ISEN construit avec le soutien de la Région Pays de la Loire.'
          ]}
        />
      </div>
      <div className={'partners page-contrast'}>
        <h1 className={'partners-title'}>Ils rendent notre projet possible</h1>
        <p className={'partners-text'}>
          Un grand merci à nos partenaires qui nous soutiennent dans l'aventure et qui permettent à Modelec de continuer cette année encore.
        </p>
        <div className={'partners-list'}>
          <a className={'partners-partner'} target={'_blank'} href={'https://isen-nantes.fr'}>
            <img className={'partners-partner-logo'} src={'https://r2.modelec.club/isen.png'} alt={'ISEN Nantes'} />
            <span className={'partners-partner-name'}>ISEN Nantes</span>
          </a>
          <a className={'partners-partner'} target={'_blank'} href={'https://mercurycloud.fr'}>
            <img className={'partners-partner-logo'} src={'https://r2.modelec.club/mercurycloud.png'} alt={'Mercury Cloud'} />
            <span className={'partners-partner-name'}>Mercury Cloud</span>
          </a>
          <a className={'partners-partner'} target={'_blank'} href={'https://instagram.com/odyssey_bde'}>
            <img className={'partners-partner-logo'} src={'https://r2.modelec.club/bde.png'} alt={'BDE Odyssey'} />
            <span className={'partners-partner-name'}>BDE Odyssey</span>
          </a>
        </div>
        <div className={'partners-actions'}>
          <Link className={'partners-action action_main'} to={'/partenaires/'}>
            <BookmarkBook />
            En savoir plus
          </Link>
          <Link className={'partners-action action_second'} to={'/contact/'}>
            Devenir partenaire
          </Link>
        </div>
      </div>
      <div>
        <h2 className="page-title">Nos Projets</h2>
        <Carousel
          carousel={[
            {
              image: 'https://picsum.photos/id/1/600/300',
              title: 'Lorem Ipsum',
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, vehicula justo.',
            },
            {
              image: 'https://picsum.photos/id/2/600/300',
              title: 'Fusce et sem',
              text: 'Fusce et sem nec nunc luctus tincidunt. Nullam sit amet neque sed elit fermentum efficitur.',
            },
            {
              image: 'https://picsum.photos/id/3/600/300',
              title: 'Vestibulum',
              text: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut nec turpis.',
            },
            {
              image: 'https://picsum.photos/id/4/600/300',
              title: 'Pellentesque',
              text: 'Pellentesque habitant morbi tristique sen et netus et malesuada fames ac turpis egestas.',
            }
          ]}
        />
      </div>
      <div>
        <h2 className="page-title">Notre Équipe</h2>
        <Team
          groups={[
            {
              title: 'Bureau',
              members: [
                { name: 'Maxime Chauveau', role: 'Président', image: 'https://r2.modelec.club/maxime.png' },
                { name: 'Vincent Rocher', role: 'Vice-Président', image: 'https://r2.modelec.club/maxime.png' },
                { name: 'Felix Marquet', role: 'Secrétaire', image: 'https://r2.modelec.club/maxime.png' },
                { name: 'Florent Butery', role: 'Trésorier', image: 'https://r2.modelec.club/maxime.png' },
              ]
            },
            {
              title: 'Responsables',
              members: [
                { name: 'Cléo Sionville', role: 'Communication', image: 'https://r2.modelec.club/maxime.png' },
                { name: 'Arthur Grossmann', role: 'Evenementiel', image: 'https://r2.modelec.club/maxime.png' },
                { name: 'Allan Cueff', role: 'Partenariat', image: 'https://r2.modelec.club/maxime.png' },
              ]
            }
          ]}
        />
      </div>
    </>
  );
};

export default Home;
