import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDosEvento) => setName(infosDosEvento.target.value)}
                placeholder="Diz aí seu nome pra jogar :)"
                value={name}
              />
              <Button
                type="submit"
                disabled={name.length === 0}
              >
                Jogar
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>{db.secondQuiz.name}</h1>
            <p>{db.secondQuiz.description}</p>
            {/* eslint-disable-next-line react/button-has-type */}
            <button>{db.secondQuiz.quizClassmate.firstPerson}</button>
            {/* eslint-disable-next-line react/button-has-type */}
            <button>{db.secondQuiz.quizClassmate.secondPerson}</button>
            {/* eslint-disable-next-line react/button-has-type */}
            <button>{db.secondQuiz.quizClassmate.thirdPerson}</button>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
