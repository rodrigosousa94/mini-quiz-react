import { useState } from "react";
import InputRadio from "./InputRadio";


function App() {

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  const [respostas, setRespostas] = useState([{option1: "", option2: "", option3: ""}])
  const [slide, setSlide] = useState(0)
  const [resultado, setResultado] = useState(null)

  function handleChange({ target }){
    setRespostas({...respostas, [target.id]:target.value})
  }

  function resultadoFinal(){
    const corretas = perguntas.filter(
      ({id, resposta}) => respostas[id] === resposta
    )
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`)
  }

  function handleClick(){
    if(slide < perguntas.length - 1){
      setSlide(slide + 1)
    }else{
      setSlide(slide + 1)
      resultadoFinal()
    }
  }

  

  return (
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <InputRadio active={slide === index} key={pergunta.id} value={respostas[pergunta.id]} onChange={handleChange} {...pergunta} /> 
        ))}

        {resultado ? (
          <p>{resultado}</p>
        ) : (
          <button style={{ backgroundColor: "#005555", color: '#fff', padding: 8, borderRadius: 5, fontWeight: 700, cursor: 'pointer' }} onClick={handleClick}>Próxima</button>
        )}

      </form>
    </>
  )
}

export default App
