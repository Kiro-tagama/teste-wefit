import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderSpiner = styled.div`
  border: 4px solid #fff; 
  border-radius: 50%;
  
  width: 62px; 
  height: 62px; 
  animation: ${spinAnimation} 1s linear infinite; 
`;

// Componente que utiliza o loader
export function Loader () {
  return (
    <LoaderSpiner />
  );
};