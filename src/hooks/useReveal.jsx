// ==== FILE: src/hooks/useReveal.jsx ====
import { useEffect, useRef } from 'react'

export default function useReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active')
                }
            })
        }, { threshold: 0.12 })

        const nodes = el.querySelectorAll('.reveal')
        nodes.forEach(n => obs.observe(n))

        return () => obs.disconnect()
    }, [])

    return ref
}
