import { styled } from 'styled-components';
import { CardsHome } from '../components/CardsHome';
import { PropsProduts, useMyContext } from '../context/context';

export function Home() {
  const { list } = useMyContext();

  const AreaCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Quando a tela for menor que 768px, ajusta o número de colunas */
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Quando a tela for menor que 480px, define apenas uma coluna */
    }
  `;

  return (
    <>
      <div>
        <input />
      </div>
      <br />
      <AreaCards>
        {list.map((itens: PropsProduts) => (
          <CardsHome data={itens} />
        ))}
      </AreaCards>
    </>
  );
}
