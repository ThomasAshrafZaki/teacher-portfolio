// ==== FILE: src/components/Contact.jsx ====
import React from 'react'
import useReveal from '../hooks/useReveal'
import { TEACHER } from '../config'

export default function Contact() {
    const ref = useReveal()

    return (
        <main ref={ref} className="py-20 bg-white">
            <section className="container mx-auto px-6 container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="reveal">
                        <h2 className="text-4xl font-bold text-text-strong mb-4" style={{ fontFamily: 'Cairo' }}>لنتواصل</h2>
                        <p className="text-lg text-text-muted mb-8" style={{ fontFamily: 'Tajawal' }}>
                            مستعد لبدء رحلتك في تعلم الإنجليزية؟ تواصل معي الآن للحصول على استشارة مجانية
                            وتحديد البرنامج المناسب لك.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                                <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center">
                                    <span className="text-white">📧</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text-strong" style={{ fontFamily: 'Cairo' }}>البريد الإلكتروني</h4>
                                    <a href={`mailto:${TEACHER.email}`} className="text-primary hover:text-primary-dark">
                                        {TEACHER.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white">💬</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-text-strong" style={{ fontFamily: 'Cairo' }}>الواتساب</h4>
                                    <a
                                        href={`https://wa.me/${TEACHER.whatsapp.replace(/\D/g, '')}`}
                                        className="text-primary hover:text-primary-dark"
                                    >
                                        {TEACHER.whatsapp}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal">
                        <div className="bg-gradient-subtle rounded-2xl p-8 shadow-medium">
                            <h3 className="text-2xl font-bold text-text-strong mb-6 text-center" style={{ fontFamily: 'Cairo' }}>
                                احجز استشارة مجانية
                            </h3>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-text-strong mb-2">الاسم الكامل</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="أدخل اسمك"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-strong mb-2">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="example@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-text-strong mb-2">الرسالة</label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-lg border border-border-light focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="أخبرني عن أهدافك في اللغة الإنجليزية..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full">
                                    إرسال الرسالة
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}