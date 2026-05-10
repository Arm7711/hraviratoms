import { useEffect } from 'react'

export function DisableIOSZoom() {
    useEffect(() => {
        const preventGesture = e => e.preventDefault()

        document.addEventListener('gesturestart', preventGesture, { passive: false })
        document.addEventListener('gesturechange', preventGesture, { passive: false })
        document.addEventListener('gestureend', preventGesture, { passive: false })

        let lastTouchEnd = 0

        const preventDoubleTapZoom = e => {
            const now = Date.now()

            if (now - lastTouchEnd <= 300) {
                e.preventDefault()
            }

            lastTouchEnd = now
        }

        document.addEventListener('touchend', preventDoubleTapZoom, {
            passive: false,
        })

        return () => {
            document.removeEventListener('gesturestart', preventGesture)
            document.removeEventListener('gesturechange', preventGesture)
            document.removeEventListener('gestureend', preventGesture)
            document.removeEventListener('touchend', preventDoubleTapZoom)
        }
    }, [])

    return null
}