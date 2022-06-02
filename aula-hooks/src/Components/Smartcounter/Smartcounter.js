import {useState} from 'react';


function SmartCounter(){
    //useState retorna um vetor
    //Sendo esse vetor:
    //  1. Variável stateful
    //  2. Função amarrada a essa variável que atualiza esse valor
    // UM ESTADO É COMO SE O COMPONENTE TIVESSE MEMÓRIA, ELE SABE QUAL O 
    //  VALOR QUE ELE TEM, E QUE TEM QUE ATUALIZAR E QUAL O VALOR QUE TÁ ALI
    const [quantity, upQuantity] = useState(1);


    return(
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
            
        </>
    )
}

export default SmartCounter;