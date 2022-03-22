import Home, { HomeTemplateProps } from 'templates/Home'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

/*
  ? getStaticProps => Gera estático em build time
  ? getServerSideProps => gerar via ssr a cada request
  ? getInitialProps => gerar via ssr a cada request
*/
export function getServerSideProps() {
  return {
    props: {
      banners: bannerMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}
