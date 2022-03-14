import React from 'react'
import LoadingSpinner from './../UI/LoadingSpinner/LoadingSpinner';

export default function RederedImage({ canvasRef, loading, imageDownloadLink, downloadName,}) {
    return (
        <>
            <h3>Here is your rendered image!</h3>
            <div ref={canvasRef}>
                {loading ? <LoadingSpinner /> : null}
            </div>
            DownLoad Your Image Here:
            <a href={imageDownloadLink} download="Test.png" >{downloadName}</a>
        </>
    )
}
