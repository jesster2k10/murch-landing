import React from 'react'
import {useWindowScroll, useWindowSize} from 'react-use'
import {FiChevronDown} from 'react-icons/fi'
import styled from 'styled-components'

import Head from '../components/Head'
import Confetti from '../components/Confetti'

const Home = () => {
  const {height} = useWindowSize()
  const {y: scrollY} = useWindowScroll()
  const opacity = Math.min(scrollY / height, 1)

  return (
    <Page>
      <Head title="Murch" />
      <Wrapper>
        <Header>
          <HeaderOverlay style={{opacity}} />
          <Confetti particleCount={80} />
          <Hero>
            <h1>MURCH</h1>
            <p>Buying and Selling Re-imagined</p>
            <footer>
              <FiChevronDown size={25} />
            </footer>
          </Hero>
        </Header>
        <Main>
          <Grid>
            <header>
              <h3>MURCH</h3>
            </header>
            <article>
              <aside>
                <p>
                  CHA-Ching! It’s Saturday. You wake up to a MURCH notification.
                  You just sold some old Nike shoes for €45.
                </p>
                <p>
                  You hop out of bed, package the order and ship it at your
                  local post office using a pre-printed MURCH label.
                </p>
                <p>
                  5PM. CHA-Ching! another sale. You’re store begins to sell out
                  as you’re featured on MURCH explore. You check your analytics,
                  10k impressions and 324 profile visits.
                </p>
                <p>
                  Do you launch another promotion, or put your store on vacation
                  mode? With MURCH you decide.
                </p>
              </aside>
              <main>Main</main>
            </article>
            <footer>Footer</footer>
          </Grid>
        </Main>
      </Wrapper>
    </Page>
  )
}

/**
 * <p>
            CHA-Ching! It’s Saturday. You wake up to a MURCH notification. You
            just sold some old Nike shoes for €45.
          </p>
          <p>
            You hop out of bed, package the order and ship it at your local post
            office using a pre-printed MURCH label.
          </p>
          <p>
            5PM. CHA-Ching! another sale. You’re store begins to sell out as
            you’re featured on MURCH explore. You check your analytics, 10k
            impressions and 324 profile visits.
          </p>
          <p>
            Do you launch another promotion, or put your store on vacation mode?
            With MURCH you decide.
          </p>
 */

const Page = styled.div`
  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  position: fixed;
  top: 0%;
  left: 0;
  z-index: -99;
  display: flex;
`

const Main = styled.main`
  position: relative;
  background-color: white;
  margin-top: 100vh;
  padding: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  p {
    font-size: 1.2rem;
  }
`

const Wrapper = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;

  ${Header},
  ${Main} {
    height: 100vh;
    min-height: 100%;
    z-index: 1000;
  }
`

const Grid = styled.section`
  height: 100%;
  display: grid;
  grid-gap: 1em;
  grid-template-areas:
    'header header header'
    'article article article'
    'footer footer footer';
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 50px auto 70px;
  align-items: center;
  justify-content: center;

  header {
    grid-area: header;
  }
  article {
    grid-area: article;
    display: flex;

    main {
      flex: 100%;
    }
  }
  footer {
    grid-area: footer;
  }
`

const HeaderOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  opacity: 0;
  z-index: 100000;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  flex: 1;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5rem;
    text-align: center;
    animation: scale 15s ease-in-out infinite;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.9);
    }

    100% {
      transform: scale(1);
    }
  }

  span {
    font-size: 1.2rem;
  }
`

export default Home
