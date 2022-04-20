import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./style";
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(){
const {transactions} = useTransactions();

const summary =  transactions.reduce((acc, transaction) => {
    if(transaction.type === "deposit"){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
    } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
    }

    return acc;
},{
    deposits: 0,
    withdraws: 0,
    total: 0,
})


console.log(transactions)
    return(
    <Container>
        <div>
            <header>
               <p>Entradas</p>
               <img src={incomeImg} alt="Entradas" /> 
            </header>
            <strong>
                {new Intl.NumberFormat("pt-BR",{
                    style:'currency',
                    currency:"BRL"
                }).format(summary.deposits)}
            </strong>
        </div>
        <div>
            <header>
               <p>Saídas</p>
               <img src={outcomeImg} alt="Saídas" /> 
            </header>
            <strong>-
                {new Intl.NumberFormat("pt-BR",{
                    style:'currency',
                    currency:"BRL"
                }).format(summary.withdraws)}
            </strong>
        </div>
        <div className='total'>
            <header>
               <p>total</p>
               <img src={totalImg} alt="Total" /> 
            </header>
            <strong>
                {new Intl.NumberFormat("pt-BR",{
                    style:'currency',
                    currency:"BRL"
                }).format(summary.total)}
            </strong>
        </div>
    </Container>
    )
}