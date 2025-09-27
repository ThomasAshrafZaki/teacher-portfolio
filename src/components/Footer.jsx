// ==== FILE: src/components/Footer.jsx ====
import React from 'react'
import Logo from '../assets/logo.png'

export default function Footer() {
    return (
        <footer style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' }} className="text-white py-12">
            <div className="container mx-auto px-6 container-max">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={Logo}
                                alt="أ. محمد علي"
                                className="w-10 h-10 rounded-lg object-cover"
                            />
                            <span className="text-xl font-bold text-white" style={{ fontFamily: 'Cairo' }}>أ. محمد علي</span>
                        </div>
                        <p className="text-blue-100 leading-relaxed" style={{ fontFamily: 'Tajawal' }}>
                            مدرس لغة إنجليزية محترف، أساعد الطلاب لتحقيق طموحاتهم الأكاديمية والمهنية
                            من خلال دورات مكثفة ومنهجية عملية.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white" style={{ fontFamily: 'Cairo' }}>روابط سريعة</h4>
                        <ul className="space-y-2 text-blue-100">
                            <li><a href="/" className="hover:text-white transition">الرئيسية</a></li>
                            <li><a href="/about" className="hover:text-white transition">من أنا</a></li>
                            <li><a href="/courses" className="hover:text-white transition">الدورات</a></li>
                            <li><a href="/contact" className="hover:text-white transition">تواصل</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white" style={{ fontFamily: 'Cairo' }}>التواصل</h4>
                        <ul className="space-y-2 text-blue-100">
                            <li className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:teacher@example.com" className="hover:text-white transition">
                                    teacher@example.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>💬</span>
                                <a href="https://wa.me/201000000000" className="hover:text-white transition">
                                    +201000000000
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-blue-300/30 mt-8 pt-8 text-center text-blue-100">
                    <p style={{ fontFamily: 'Tajawal' }}>
                        © {new Date().getFullYear()} أ. محمد علي. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    )
}