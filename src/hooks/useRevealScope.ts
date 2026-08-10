import { useEffect, useRef } from 'react'

export function useRevealScope<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = [
      ...(root.matches('[data-reveal]') ? [root] : []),
      ...root.querySelectorAll<HTMLElement>('[data-reveal]'),
    ]
    const unique = [...new Set(targets)]
    if (unique.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      unique.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -5% 0px' },
    )

    unique.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
