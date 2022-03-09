import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import * as S from './styles'

const Home = () => (
  <section>
    <Container>
      <Menu />
    </Container>
    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <Heading lineLeft lineColor="secondary" color="black">
        Most Popular
      </Heading>

      <Heading lineLeft lineColor="secondary" color="black">
        Upcoming
      </Heading>

      <Heading lineLeft lineColor="secondary" color="black">
        Free Games
      </Heading>
    </Container>
    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home