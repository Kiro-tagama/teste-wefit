import styled from "styled-components";

export const Button = styled.button<{ $inCart?: boolean; }>`
  width: 100%;
  height: 40px;
  padding: 8px ;
  gap: 4px;
  border-radius: 4px ;
  border-width:0px;
  opacity: 0px;
  background: ${props => props.$inCart ? "#039B00" : "#009EDD"};
  color:#fff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  cursor: pointer;
`;

export const Card = styled.div`
    background: #FFFFFF;
    color: #2F2E41;
    padding: 16px;
    gap: 8px;
    border-radius: 4px;
    opacity: 0px;
    display:flex;
    flex-direction:column ;
    justify-content:center;
    align-items:center;
`;

export const Divider = styled.hr`
    width: 100%;
    height: 1px;
    background: #2F2E41;
`