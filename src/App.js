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

const BoxPhrase = styled.div`
      width: 34vw;
      height: 30vh;
      background: #FFFFFF;
      border-radius: 0.3rem;
      box-shadow: 2px 2px 2px #242525;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
`;

const Title = styled.h1`
      letter-spacing: 0.01em;
      color: #cf5a0c;
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

    componentDidMount() {
      this.handlePhrase()
    }

    handlePhrase = () => {
      const valMax = 4
      const valMin =  0
      var indexSorted = Math.floor(Math.random() * (valMax - valMin)) + valMin;
      this.setState({
          select: this.state.phrases[indexSorted],
      })
    }

    share = () => {
        const sharePhrase = this.state.select
        window.open (`https://web.whatsapp.com/send?text=${sharePhrase}`)
    }

    render () {
      return (
        <Page>
          <BoxPhrase>
            <Title>Frase do dia</Title>
            <p>{this.state.select}</p>
            <button onClick={this.handlePhrase}>sortear frase</button>
            <button onClick={this.share}>compartilhar</button>
          </BoxPhrase>
        </Page>
      );
    }
}