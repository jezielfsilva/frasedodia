import React from 'react';
import './App.css';
import styled from 'styled-components';
import Logo from './assets/whatsapp-icon-seeklogo.com.svg';

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

const Text = styled.p`
      color: #252525;
      font-size: 1.2rem;
      letter-spacing: 0.02rem;
`;

const BoxButtons = styled.div`
      width: 30vw;
      height: 6vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
`;

const Buttons = styled.button`
      width: 10vw;
      height: 4vh;
      background: #252525;
      color: #FFFFFF;
      border-style: none;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
`;

const LogoWats = styled.img`
      width: 15%;
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
            <Text>{this.state.select}</Text>
            <BoxButtons>
              <Buttons onClick={this.handlePhrase}>sortear frase</Buttons>
              <Buttons onClick={this.share}>compartilhar<LogoWats src={Logo}/></Buttons>
            </BoxButtons>
          </BoxPhrase>
        </Page>
      );
    }
}