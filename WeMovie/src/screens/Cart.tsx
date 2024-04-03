import styled from "styled-components";
import { useMyContext } from "../context/context";
import { Button, Card, Divider } from "../styles/styles";
import { CardInCart } from "../components/CardInCart";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { list, inCart, setInCart } = useMyContext();
  const nav = useNavigate()

  const calculateTotal = () => {
    const subtotais: number[] = [];
  
    list?.forEach((item) => {
      if (inCart[item.id] > 0) {
        subtotais.push(item.price * inCart[item.id]);
      }
    });
  
    const total = subtotais.reduce((accumulator, subtotal) => accumulator + subtotal, 0);
    return total.toFixed(2);
  };
  
  return (
    <Card style={{gap:24}}>
      <CardInCart/>
      <Divider />
      <AreaTotal>
        <Total>
          <h3 style={{margin:0,fontWeight:700,fontSize:14,color:"#999"}}>TOTAL</h3>
          <h3 style={{margin:0,fontWeight:700, fontSize:24,color:"#2F2E41"}}>R$ {calculateTotal()}</h3>
        </Total>
        <Button onClick={()=>{
          setInCart({}) // finalização do evento apagando os dados
          nav('/PurchaseMade')
        }}>
          FINALIZAR PEDIDO
        </Button>
      </AreaTotal>
    </Card>
  );
}

const AreaTotal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  & > *:last-child {
    @media (min-width: 480px) {
    max-width: 173px;
    } 
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap:16px
  }
`

const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
  }
`;

