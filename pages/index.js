import styled from 'styled-components'
import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'
import Head from 'next/head'




export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  return (
    
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <input placeholder="Diz aí seu nome pra jogar :)"/>
            <button>Jogar</button>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>{db.secondQuiz.name}</h1>
            <p>{db.secondQuiz.description}</p>
            <button>{db.secondQuiz.quizClassmate.firstPerson}</button>
            <button>{db.secondQuiz.quizClassmate.secondPerson}</button>
            <button>{db.secondQuiz.quizClassmate.thirdPerson}</button>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  )
} 