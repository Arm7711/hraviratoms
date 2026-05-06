import React, { useEffect, useRef, useState } from 'react';
import arrowGif from '../../assets/images/site-images/arrow-gif.gif'

export default function ScratchCard() {
    const wrapperRef = useRef(null)
    const rafRef = useRef(null)
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const el = wrapperRef.current
        const parent = el?.parentElement
        if (!parent) return

        const observer = new ResizeObserver(() => {
            if (rafRef.current) return
            rafRef.current = requestAnimationFrame(() => {
                const { width, height } = parent.getBoundingClientRect()
                const scale = Math.min(width / 400, height / 400)
                el.style.transform = `scale(${scale})`
                rafRef.current = null
            })
        })

        observer.observe(parent)
        return () => {
            observer.disconnect()
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    return (
        <div
            ref={wrapperRef}
            className="iframe__wrapper"
            style={{ position: "relative", transformOrigin: 'center center' }}
        >
            {!loaded && (
                <div className="loader-overlay">
                    <div className="spinner" />
                </div>
            )}
            <iframe
                src="/scratch.html"
                className="iframe"
                onLoad={() => setLoaded(true)}
            />

            <p className='date'>23.05.26</p>

            <img className='arrow' src={arrowGif} alt="gif" />
        </div>
    )
}