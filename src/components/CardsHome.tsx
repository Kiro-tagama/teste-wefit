import { styled } from 'styled-components';
import { PropsProduts } from '../context/context';

export function CardsHome(props: { data: PropsProduts }) {
  const Card = styled.div`
    background: #FFFFFF;
    color: #2F2E41;
    height: 324px;
    padding: 16px;
    gap: 8px;
    border-radius: 4px;
    opacity: 0px;
    display:flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
  `;

  const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 8px ;
  gap: 12px;
  border-radius: 4px ;
  border-width:0px;
  opacity: 0px;
  background: #009EDD;
  color:#fff
  `;

  return (
    <Card>
      <img src={props.data.image} width={147} height={188} />
      <p>{props.data.title}</p>
      <p>{props.data.price}</p>
      <Button>
        1 <span>ADICIONAR AO CARRINHO</span>
      </Button>
    </Card>
  );
}
