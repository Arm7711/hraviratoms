import { useLayoutEffect } from 'react';

export function useDisableZoom() {
    useLayoutEffect(() => {
        const preventGesture = (e: Event) => {
            e.preventDefault();
        };

        document.addEventListener('gesturestart', preventGesture, {
            passive: false,
        });

        document.addEventListener('gesturechange', preventGesture, {
            passive: false,
        });

        document.addEventListener('gestureend', preventGesture, {
            passive: false,
        });

        return () => {
            document.removeEventListener('gesturestart', preventGesture);

            document.removeEventListener('gesturechange', preventGesture);

            document.removeEventListener('gestureend', preventGesture);
        };
    }, []);
}