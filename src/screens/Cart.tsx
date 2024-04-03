import styled from "styled-components";
import { useMyContext } from "../context/context";
import { Button, Card } from "../styles/styles";
import Trach from "../assets/trach";

export function Cart() {
  const { list, inCart, removeItem, updateQuantity } = useMyContext();


  // Calcula o total do carrinho
  const calculateTotal = () => {
    let total = 0;
  
    for (const id in inCart) {
      const item = list.find((product) => product.id === parseInt(id));
      
      if (item) {
        const subtotal = item.price * inCart[id];
        total += subtotal;
      }
    }
    
    return total.toFixed(2);
  };

  return (
    <Card style={{gap:24}}>
      <HeaderList>
        {['PRODUTO','QTD','SUBTOTAL',''].map((txt:string)=>
          <p style={{margin:0,flex:1,fontSize:14,fontWeight:700,color:"#999"}}>{txt}</p>  
        )}
      </HeaderList>

        {/*  */}
      <div style={{width:"100%",display:"flex",flexDirection:"column",gap:24}}>
      {list.map((item) => {
        if (inCart[item.id] > 0) {
          return (
            <CartItem key={item.id}>
              <div style={{display:"flex", flex:1,gap:16,alignItems:"center"}}>
                <img src={item.image} alt={item.title} style={{width:"5.5rem",height:"auto"}}/>
                <div>
                  <p style={{fontWeight:700,fontSize:14,margin:0,marginBottom:8}}>{item.title}</p>
                  <p style={{fontWeight:700,fontSize:16,margin:0}}>R$ {item.price.toFixed(2)}</p>
                </div>
              </div>
              <QuantityControl>
                <button onClick={() => updateQuantity(item.id, inCart[item.id] - 1)}>-</button>
                <span>{inCart[item.id]}</span>
                <button onClick={() => updateQuantity(item.id, inCart[item.id] + 1)}>+</button>
              </QuantityControl>

              <p style={{fontWeight:700,fontSize:16,margin:0,flex:1}}>R$ {(item.price*inCart[item.id]).toFixed(2)}</p>

              <div style={{flex:1,textAlign:"end"}}>
                <span onClick={() => removeItem(item.id)} style={{cursor:"pointer"}}><Trach/></span>
              </div>
            </CartItem>
          );
        }
        return null; // Ignora os itens com quantidade zero
      })}
      </div>
  {/*  */}
      <Divider />
      <AreaTotal>
        <Total>
          <h3 style={{margin:0,fontWeight:700,fontSize:14,color:"#999"}}>TOTAL</h3>
          <h3 style={{margin:0,fontWeight:700, fontSize:24,color:"#2F2E41"}}>R$ {calculateTotal()}</h3>
        </Total>
        <Button>FINALIZAR PEDIDO</Button>
      </AreaTotal>
    </Card>
  );
}

const HeaderList=styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 480px) {
    display: none;
  }
`

const Divider = styled.hr`
width: 100%;
height: 1px;
background: #2F2E41;
`

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

// Estilos usando styled-components
const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  img {
    width: 50px;
    height: 70px;
  }
`;

const QuantityControl = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5px;
  button {
    cursor: pointer;
  }
`;

const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 480px) {
    justify-content: space-between;
    width: 100%;
  }
`;

