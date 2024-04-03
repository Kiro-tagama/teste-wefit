import styled, { keyframes } from 'styled-components';
import loader from "./Loader.png"

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderSpiner = styled.div`
  animation: ${spinAnimation} 1s linear infinite; 
`;

export function Loader () {
  return (
    <div style={{display:"flex",justifyContent:"center",margin:24,padding:10}}>
      <LoaderSpiner>
        <img src={loader} alt="" />
      </LoaderSpiner>
    </div>
  )
}