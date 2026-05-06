import React, { useEffect, useState } from 'react';

export default function Toast({ message, visible }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (visible) {
            setShow(true);
            const t = setTimeout(() => setShow(false), 3000);
            return () => clearTimeout(t);
        }
    }, [visible]);

    return (
        <div className={`toast ${show ? 'toast--visible' : ''}`}>
            <span className='toast__icon'>✦</span>
            <span className='toast__text'>{message}</span>
        </div>
    );
}