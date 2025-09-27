// ==== FILE: src/components/Logo.jsx ====
import React from 'react'

export default function Logo({ size = 40 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="64" height="64" rx="12" fill="#FF6B35" />
            <g transform="translate(8,12)">
                <path d="M6 2h28v18H6z" fill="#fff" opacity="0.06" />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#fff" fontSize="18" fontFamily="Cairo, sans-serif">MA</text>
            </g>
        </svg>
    )
}
