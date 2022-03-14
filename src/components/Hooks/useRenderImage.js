import {useState, useCallback } from 'react';
import { toCanvas } from 'html-to-image';

export default function useRenderImage(imageRef, parentRef) {
    const [loading, setLoading] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('')
    const renderImage = useCallback(() => {
        if (imageRef.current === null) {
            return
        }
        setLoading(true)
        toCanvas(imageRef.current, { cacheBust: true, })
            .then((canvas) => {
                const url = canvas.toDataURL();
                canvas.style = `width: 100%`
                parentRef.current.appendChild(canvas)
                setDownloadUrl(url)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [imageRef]);
    return [renderImage, loading, downloadUrl]
}