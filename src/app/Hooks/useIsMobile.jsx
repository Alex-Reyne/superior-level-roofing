import { useState, useEffect } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 700)
    }

    const onResize = () => {
      setIsMobile(window.innerWidth <= 700)
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return isMobile
}
