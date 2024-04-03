import { styled } from 'styled-components';
import { Icon } from '../assets/Icon';
import { useMyContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { inCart } = useMyContext()
  const nav = useNavigate()

  const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:88px;
  `;

  const H5 = styled.h5`
  display: none; 
  margin: 0;
  font-size: 14px;
  font-weight: 600;

  @media (min-width: 480px) {
    display: block; 
  }
  `;

  const Itens=styled.p`
    height: min-content;
    margin: 0;
    text-align: end;
    color: #999;
    font-weight:600;
    font-size:12px;
  `

  const values = Object.values(inCart);
  const total = values.reduce((acc, curr) => acc + curr, 0);
  
  return (
    <Header>
      <h1 style={{fontSize:20,fontWeight:700,cursor:"pointer"}}
        onClick={()=>nav('/')}
      >WeMovies</h1>
      <div style={{display:'flex',gap:8}}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <H5>Meu Carrinho</H5>
          <Itens>{total} itens</Itens>
        </div>
        <span style={{cursor:"pointer"}}
          onClick={()=>nav('/Cart')}
        >
          <Icon />
        </span>
      </div>
    </Header>
  );
}
