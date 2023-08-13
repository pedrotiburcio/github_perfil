import { useEffect, useState } from "react"

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente iniciou')

        return () => {
            console.log('o componente finalizou')
        }
    }, [])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            
            return evento.target.value;
        })
        
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        }
        else {
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseFloat(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario