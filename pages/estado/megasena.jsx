import NumeroDisplay from "../../components/NumeroDisplay";
import { useState } from "react";
import { mega } from "../../functions/mega";

export default function megasena(){
    const[ numeros, setNumeros] = useState(mega())
    const[ qtde, setQtde] = useState(6)

    
    
    function renderizarNumeros(){
        return numeros.map(numero => <NumeroDisplay key = {numero} numero = {numero} />)
    }
    
    
    
    
    
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <h1>Mega Sena</h1>
            <div style={{display: "flex", 
                        flexWrap: "wrap",
                        justifyContent: "center"}}>
                {renderizarNumeros()}
            </div>
            <div >
                <input type="number" min={6} max={20} value={qtde} onChange={(e) => setQtde(e.target.value)}/>
                <button 
                onClick={() => setNumeros(mega(qtde)) }>Gerar Aposta
                </button>
            </div>
            
        </div>
    )
}