// ==== FILE: src/components/CTAButton.jsx ====
import React from 'react'

export default function CTAButton({ children, href, onClick, variant = 'primary' }) {
    const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center"

    const variants = {
        primary: "btn-primary",
        outline: "btn-outline"
    }

    const className = `${baseClasses} ${variants[variant]}`

    if (href) {
        return (
            <a href={href} className={className} role="button">
                {children}
            </a>
        )
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}