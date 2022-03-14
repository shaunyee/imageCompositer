import React from 'react';
import styled from 'styled-components';
import {theme} from '../../../Theme/theme'

export default function StepIndicator({ step }) {
    return (
        <StepIndicatorContainer>
            <StepText>
                {step}
            </StepText>
        </StepIndicatorContainer>
    )
}

const StepIndicatorContainer = styled.div`
    width:100px;
    height:100px;
    border-radius:50px;
    border: 3px solid ${theme.purple};
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
`;

const StepText = styled.h1`
    text-align: center;
    color: ${theme.black};
`;