import { CartIcon } from '../assets/cartIcon';
import { PropsProduts, useMyContext } from '../context/context';
import { Button, Card } from '../styles/styles';

export function CardsHome(props: { data: PropsProduts }) {
  const { addToCart, inCart } = useMyContext()

  return (
    <Card>
      <img src={props.data.image} width={147} height={188} />
      <p style={{margin:0,fontSize:12,fontWeight:700}}>{props.data.title}</p>
      <p style={{margin:0,fontSize:16,fontWeight:700}}>R$ {props.data.price.toFixed(2)}</p>

      <Button 
        onClick={()=>addToCart(props.data.id)}
        $inCart={inCart[props.data.id] || 0 ? true : false}
      >
        <CartIcon/>
        <span style={{marginRight:8}}>{inCart[props.data.id] || 0}</span> 
        <span>ADICIONAR AO CARRINHO</span>
      </Button>
    </Card>
  );
}
