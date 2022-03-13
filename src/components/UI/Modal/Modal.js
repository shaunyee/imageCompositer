import React from 'react'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import styled from 'styled-components'

export default function Modal({ canvasRef, setModalOpen, loading, imageDownloadLink, downloadName }) {
    function handleCloseModal() {
        setModalOpen(false)
    }
    return (
        <ModalContainer>
            <ModalContent>
                <Header>
                    <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                </Header>
                <div ref={canvasRef}>
                    <h3>Modal Content</h3>
                    {loading ? <LoadingSpinner /> : null}
                </div>
                DownLoad Your Image Here:
                <a href={imageDownloadLink} download="Test.png" >{downloadName}</a>
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
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
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