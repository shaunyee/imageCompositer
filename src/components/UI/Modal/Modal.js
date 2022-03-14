import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../Theme/theme'

export default function Modal({ children, setModalOpen, viewerSize }) {
    function handleCloseModal() {
        setModalOpen(false)
    }
    return (
        <ModalContainer>
            <ModalContent viewerSize={viewerSize}>
                <Header>
                    <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                </Header>
                {children}
            </ModalContent>
        </ModalContainer>
    )
}

const ModalContainer = styled.div`
    position: fixed;
    z-index: 8;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
    background-color: ${theme.white};
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
`

const CloseButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%
`;