import React, { useState, useRef } from 'react'

export default function PlayButton({ src }) {
    const [playing, setPlaying] = useState(false)
    const [clicked, setClicked] = useState(false)
    const audioRef = useRef(null)

    const toggle = () => {
        setClicked(true)
        setTimeout(() => setClicked(false), 300)
        if (playing) {
            audioRef.current?.pause()
        } else {
            audioRef.current?.play()
        }
        setPlaying(prev => !prev)
    }

    return (
        <>
            <style>{`
                @keyframes pulse {
                    0%, 100% { box-shadow: 0 0 0 0px rgba(44,44,42,0.25); }
                    50% { box-shadow: 0 0 0 8px rgba(44,44,42,0); }
                }
                @keyframes breathe {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.12); }
                }
                .play-btn {
                    animation: breathe 1.8s ease-in-out infinite;
                }
                .play-btn.playing {
                    animation: pulse 1.4s ease-in-out infinite;
                }
                .play-btn.clicked {
                    animation: none !important;
                    transform: scale(0.88) !important;
                }
            `}</style>

            {src && (
                <audio ref={audioRef} src={src} onEnded={() => setPlaying(false)} />
            )}

            <button
                onClick={toggle}
                className={`play-btn${playing ? ' playing' : ''}${clicked ? ' clicked' : ''}`}
                style={{
                    width: 40,
                    height: 40,
                    minWidth: 40,
                    minHeight: 40,
                    borderRadius: '50%',
                    border: '2px solid #2c2c2a',
                    background: 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none',
                    padding: 0,
                }}
            >
                {playing ? (
                    // Pause — два outline прямоугольника с округлыми углами
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c2c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="6" y="6" width="4" height="12" rx="2" />
                        <rect x="14" y="6" width="4" height="12" rx="2" />
                    </svg>
                ) : (
                    // Play — outline треугольник с rounded углами
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2c2c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 2 }}>
                        <path d="M7 6.5C7 5.7 7.9 5.2 8.6 5.7L19.1 11.2C19.8 11.6 19.8 12.4 19.1 12.8L8.6 18.3C7.9 18.8 7 18.3 7 17.5V6.5Z" />
                    </svg>
                )}
            </button>
        </>
    )
}