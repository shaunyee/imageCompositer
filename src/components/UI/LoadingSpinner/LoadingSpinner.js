import styled, {keyframes} from "styled-components";
import { theme } from "../../../Theme/theme";

export default function LoadingSpinner() {
    return (
        <LoadingSpinnner />
    )
}

const rotate = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const LoadingSpinnner = styled.div`
    border: 16px solid ${theme.white};
    border-top: 16px solid ${theme.blue}; 
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${rotate} 2s linear infinite;

`