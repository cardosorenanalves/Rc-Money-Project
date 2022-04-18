import { Container } from "./styles";

export function TransactionsTable(){
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