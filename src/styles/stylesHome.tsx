import styled from "styled-components";

export const AreaCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
      grid-template-columns: 1fr; 
  }
`;

export const AreaInput= styled.div<{ $focused?: boolean; }>`
  padding: 16px;
  gap: 16px;
  border-radius: 8px;
  opacity: 0px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border:  ${props => props.$focused ? "2px solid #009EDD" : "2px solid #ffffff"};
`

export const Input = styled.input`
  font-size: 16px;
  font-weight: 400;
  flex: 1;
  outline: none;
  border: 0;
  ::placeholder{
    color: #C0C0C0;
  }
`