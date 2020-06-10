import React from 'react';
import './App.css';
import styled from 'styled-components';

const Page = styled.div`
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #439;
`;

export default class Screen extends React.Component {
    
    constructor(props) {
      super(props)
      this.state = {
          phrases: [
              'você é incrível',
              'Nunca desista porque encontrou um obstáculo!Os desafios são o tempero da vida',
              'Olhe pra cima,que é de lá que vem tua força!',
              'Seja você mesmo,Todos os outros já existem',
              'O que não te desfia não faz você mudar',
          ],
          select: '',
      }
    }

    handlePhrase = (frase) => {
      this.setState({
          select: frase,
      })
    }

    render () {
      return (
        <Page>
          <div>
            <h1>Frase do dia</h1>
            <p></p>
            <button>sortear frase</button>
            <button>compartilhar</button>
          </div>
        </Page>
      );
    }
}