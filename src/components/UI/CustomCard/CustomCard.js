import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../Theme/theme';

export default function CustomCard(props) {
  return (
    <Card>
        <Container width={props.cardWidth} height={props.cardHeight}>
            {props.children}
        </Container>
    </Card>
  )
}


const Card = styled.div`
  box-shadow: 0 4px 10px 0 rgba(0,0,0,0.5);
  transition: 0.3s;
  :hover {
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.5);
  }
  `;
  
  const Container = styled.div`
  padding: 2px 10px;
  height: ${props => props.height || '500px'};
  width: ${props => props.width || '500px'};
  background-color: ${theme.white}
`;