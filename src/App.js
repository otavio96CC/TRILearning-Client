import React, { useState, useEffect } from 'react';
//import './App.css';
import Modal from './components/Modal';
import Botao from './components/Button'

function App() {

  useEffect(() => {
  }, [])

  const [catetoOposto, setCatetoOposto] = useState('');
  const [catetoAdjacente, setCatetoAdjacente] = useState('');
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [lado, setLado] = useState('');
  const [ladoA, setLadoA] = useState('');
  const [ladoB, setLadoB] = useState('');
  const [ladoC, setLadoC] = useState('');
  const [resultado, setResultado] = useState('');
  const [isModalVisible, setIsModalVisivle] = useState('');

  const hipotenusa = (event) => {

    event.preventDefault();

    requestHipotenusa();

  }
  const area = (event) => {

    event.preventDefault();

    requestArea();

  };
  const areaEquilatero = (event) => {

    event.preventDefault();

    requestAreaEquilatero();

  };

  const perimetro = (event) => {

    event.preventDefault();

    requestPerimetro();

  }

  const requestHipotenusa = async () => {
    try{
      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({catetoOposto: catetoOposto, catetoAdjacente: catetoAdjacente})
      }
      const response = await fetch('http://localhost:4000/hipotenusa', options)
      const success = await response.json()

      
      setResultado(success.message)
      console.log(success)

    }catch(erro){
      console.log(erro)
    }
  };

  const requestArea = async () => {
    try{
      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({base: base, altura: altura})
      }
      const response = await fetch('http://localhost:4000/area', options)
      const success = await response.json()

      setResultado(success.message)
      console.log(success)

    }catch(erro){
      console.log(erro)
    }
  };
  const requestAreaEquilatero = async () => {
    try{
      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({lado: lado})
      }
      const response = await fetch('http://localhost:4000/areaEquilatero', options)
      const success = await response.json()

      setResultado(success.message)
      console.log(success)

    }catch(erro){
      console.log(erro)
    }
  };
  const requestPerimetro= async () => {
    try{
      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({ladoA: ladoA, ladoB: ladoB, ladoC: ladoC})
      }
      const response = await fetch('http://localhost:4000/perimetro', options)
      const success = await response.json()

      setResultado(success.message)
      console.log(success)

    }catch(erro){
      console.log(erro)
    }
  };


  const oposto = (e) => {
    setCatetoOposto(e.target.value);
  }
  const adjacente = (e) => {
    setCatetoAdjacente(e.target.value);
  }
  const areaBase = (e)=> {
    setBase(e.target.value);
  }
  const areaAltura = (e)=> {
    setAltura(e.target.value);
  }
  const ladoEquilatero = (e)=> {
    setLado(e.target.value);
  }
  const perimetroLadoA = (e)=> {
    setLadoA(e.target.value);
  }
  const perimetroLadoB = (e)=> {
    setLadoB(e.target.value);
  }
  const perimetroLadoC = (e)=> {
    setLadoC(e.target.value);
  }


  return (
    <div className="App">
      <div className = "home">
        <div className = "textHome">
          <h1>TRILearning</h1>
          <p>Aplicação para ensino de trigonometria, em especifico triangulos, com algumas de suas principais definições.</p>
          <h4>Veja mais abaixo:</h4>
        </div>
        <div className = "imageHome"> 
        </div>
      </div>
      <div className= "divButtons">
        <div className = "divHipotenusa">
          <p>A hipotenusa(c) é o lado mais longo de um triângulo retângulo, por ser oposto ao ângulo reto, que define este tipo de triângulo. Em qualquer triângulo retângulo "a soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.</p>
          <div className="imgHipotenusa"></div>
          <Botao className="btnBlack" onClick={() => {
            setIsModalVisivle('hipotenusa')
            setResultado('')}}>Hipotenusa</Botao>
          {isModalVisible === 'hipotenusa' && (
            <Modal onClose = {()=> setIsModalVisivle('')}>
              <div className="contentModal">
                <h3 className="h3">Hipotenusa</h3>
                <form className="contentModal" onSubmit={hipotenusa}>
                  <span>Cateto oposto: </span>
                  <input type="number" name= "cateto oposto" onChange={oposto} />
                  <span>Cateto adjacente: </span>
                  <input type="number" name= "cateto adjacente" onChange={adjacente} />
                  <span className="result">Resultado: {resultado}</span>
                  <Botao className="btnBlack" type="submit">Calcule</Botao>
                </form>
              </div>
            </Modal>
          )}
        </div>
        <div className = "divArea">
          <p className= "paragrafoBranco">A área do triângulo geralmente é calculada através do produto da medida da base(b) do triângulo pela sua altura(h), e dividido por 2. O triângulo é um polígono com três lados, este lados são formados por segmentos de retas unidos em três pontos que chamamos de vértices.</p>
          <div className="imgArea"></div>
          <Botao className="btnGreen" onClick={() => {
            setIsModalVisivle('area')
            setResultado('')}}>Área do Triangulo</Botao>
          {isModalVisible === 'area' && (
            <Modal onClose = {()=> setIsModalVisivle('')}>
              <div className="contentModal">
              <h3 className="h3">Área do Triangulo</h3>
                <form className="contentModal" onSubmit={area}>
                  Base: 
                  <input type="number" name= "base" onChange={areaBase} />
                  Altura: 
                  <input type="number" name= "altura" onChange={areaAltura} />
                  <span className="result">Resultado: {resultado}</span>
                  <Botao className="btnBlack" type="submit">Calcule</Botao>
                </form>
              </div>
            </Modal>
          )}
        </div>
        <div className = "divEquilatero">
          <p>O triângulo equilátero é um tipo de triângulo que possui os três lados(l) congruentes (mesma medida). Além dos lados, os ângulos internos dessa figura apresentam as mesmas medidas: 3 ângulos de 60º, os quais totalizam 180°.</p>
          <div className="imgEquilatero"></div>
          <Botao className="btnBlack" onClick={() => {
            setIsModalVisivle('areaEquilatero')
            setResultado('')}}>Triangulo Equilatero</Botao>
          {isModalVisible === 'areaEquilatero' && (
            <Modal onClose = {()=> setIsModalVisivle('')}>
              <div className="contentModal">
              <h3 className="h3">Área do Triangulo Equilatero</h3>
                <form className="contentModal" onSubmit={areaEquilatero}>
                  Lado do Triangulo: 
                  <input type="number" name= "lado" onChange={ladoEquilatero} />
                  <span className="result">Resultado: {resultado}</span>
                  <Botao className="btnBlack" type="submit">Calcule</Botao>
                </form>
              </div>
            </Modal>
          )}
        </div>
        <div className = "divPerimetro">
          <p className= "paragrafoBranco">O perímetro do triângulo corresponde a soma de todos os lados dessa figura plana. Lembre-se que o triângulo é um polígono (figura plana e fechada) que possui três lados. Assim, para calcular o perímetro do triângulo basta somar as medidas de seus lados.</p>
          <div className="imgPerimetro"></div>
          <Botao className="btnGreen" onClick={() => {
            setIsModalVisivle('perimetro')
            setResultado('')}}>Perimetro</Botao>
          {isModalVisible === 'perimetro' && (
            <Modal onClose = {()=> setIsModalVisivle('')}>
              <div className="contentModal">
                <h3 className="h3">Perimetro</h3>
                <form className="contentModal" onSubmit={perimetro}>
                  Lado A: 
                  <input type="number" name= "ladoA" onChange={perimetroLadoA} />
                  Lado B: 
                  <input type="number" name= "ladoB" onChange={perimetroLadoB} />
                  Lado C: 
                  <input type="number" name= "ladoC" onChange={perimetroLadoC} />
                  <span className="result">Resultado: {resultado}</span>
                  <Botao className="btnBlack" type="submit">Calcule</Botao>
                </form>
              </div>
            </Modal>
          )}
        </div>
      </div>
      <div className="footer">
        <h2>Contate-nos</h2>
        <div className="contentFooter">
          <div className="contato">
            <h3>Otávio Augusto</h3>
            <div className="email">
              <img src="/email.png" className="imgEmail"/>
              <h4>otavio.augusto@estudante.ifgoiano.edu.br</h4>
            </div>
            <div className="email">
              <img src="/phone.png"/>
              <h4>(64) 9 9263-9449</h4>
            </div>
          </div>
          <div className="contato">
            <h3>Lucas Keterson</h3>
            <div className="email">
              <img src="/email.png" className="imgEmail"/>
              <h4>lucas.keterson@estudante.ifgoiano.edu.br</h4>
            </div>
            <div className="email">
              <img src="/phone.png"/>
              <h4>(64) 9 9436-3705</h4>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
