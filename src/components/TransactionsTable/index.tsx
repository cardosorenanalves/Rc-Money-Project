import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";



export function TransactionsTable(){
    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data) )
    }, []);


    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="title"> Desenvolvimento de website </td>
                        <td className="deposit">R$12.000</td>  
                        <td>Desenvolvimento</td>
                        <td>18/04/2022</td>                       
                    </tr>
                    <tr>
                        <td className="title"> Aluguel </td>
                        <td className="withdraw">- R$1.100</td>  
                        <td>Casa</td>
                        <td>18/04/2022</td>                       
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );

}