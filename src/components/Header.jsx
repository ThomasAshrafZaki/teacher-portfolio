// ==== FILE: src/components/Header.jsx ====
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function Header() {
    return (
        <header className="bg-white shadow-medium sticky top-0 z-50 border-b border-border-light">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 container-max">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src={Logo}
                        alt="أ. محمد علي - مدرس لغة إنجليزية"
                        className="w-12 h-12 rounded-xl object-cover shadow-medium"
                    />
                    <div>
                        <span className="text-xl font-bold text-text-strong block" style={{ fontFamily: 'Cairo' }}>أ. محمد علي</span>
                        <span className="text-sm text-text-muted" style={{ fontFamily: 'Tajawal' }}>مدرس لغة إنجليزية</span>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium transition-all duration-300 px-3 py-2 rounded-lg ${isActive
                                ? 'text-primary bg-blue-50 border-b-2 border-primary'
                                : 'text-text-muted hover:text-primary hover:bg-blue-50'
                            }`
                        }
                        style={{ fontFamily: 'Tajawal' }}
                    >
                        الرئيسية
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-medium transition-all duration-300 px-3 py-2 rounded-lg ${isActive
                                ? 'text-primary bg-blue-50 border-b-2 border-primary'
                                : 'text-text-muted hover:text-primary hover:bg-blue-50'
                            }`
                        }
                        style={{ fontFamily: 'Tajawal' }}
                    >
                        من أنا
                    </NavLink>
                    <NavLink
                        to="/courses"
                        className={({ isActive }) =>
                            `font-medium transition-all duration-300 px-3 py-2 rounded-lg ${isActive
                                ? 'text-primary bg-blue-50 border-b-2 border-primary'
                                : 'text-text-muted hover:text-primary hover:bg-blue-50'
                            }`
                        }
                        style={{ fontFamily: 'Tajawal' }}
                    >
                        الدورات
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `font-medium transition-all duration-300 px-3 py-2 rounded-lg ${isActive
                                ? 'text-primary bg-blue-50 border-b-2 border-primary'
                                : 'text-text-muted hover:text-primary hover:bg-blue-50'
                            }`
                        }
                        style={{ fontFamily: 'Tajawal' }}
                    >
                        تواصل معي
                    </NavLink>
                </nav>

                {/* CTA Button */}
                <NavLink
                    to="/contact"
                    className="btn-primary hidden lg:flex items-center gap-2"
                >
                    <span>احجز حصتك</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </NavLink>
            </div>
        </header>
    )
}