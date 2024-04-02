import { styled } from 'styled-components';

export function Header() {
  const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:88px;
  `;

  return (
    <Header>
      <h1>WeMovies</h1>
      <div>
        <span>0 itens</span>
      </div>
    </Header>
  );
}
