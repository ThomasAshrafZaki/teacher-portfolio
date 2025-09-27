// ==== FILE: src/components/Home.jsx ====
import React from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'
import { TEACHER } from '../config'
import TeacherPhoto from '../assets/teacher-photo.png'

export default function Home() {
    const ref = useReveal()

    return (
        <main ref={ref} className="min-h-screen gradient-subtle py-16">
            <section className="container mx-auto px-6 container-max">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                    {/* النص الرئيسي */}
                    <div className="space-y-8">
                        <div className="reveal">
                            <span className="inline-block bg-blue-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                                🎓 مدرس لغة إنجليزية محترف
                            </span>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-text-strong leading-tight mb-4">
                                أهلاً بك، أنا<br />
                                <span className="text-gradient">{TEACHER.name}</span>
                            </h1>
                            <p className="text-lg text-text-muted leading-relaxed mb-6">
                                {TEACHER.bio} أساعدك لتتحدث الإنجليزية بثقة وتصل لأهدافك الأكاديمية والمهنية.
                                دوراتي مصممة خصيصاً لتناسب احتياجاتك وتضمن لك تحقيق نتائج ملموسة في وقت قياسي.
                            </p>
                        </div>

                        <div className="reveal flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="btn-primary text-center">
                                ابدأ رحلتك الآن
                            </Link>
                            <Link to="/courses" className="btn-outline text-center">
                                استعرض الدورات
                            </Link>
                        </div>

                        {/* إحصائيات سريعة */}
                        <div className="reveal grid grid-cols-3 gap-6 pt-8 border-t border-border-light">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">٨+</div>
                                <div className="text-sm text-text-muted">سنوات خبرة</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">٥٠٠+</div>
                                <div className="text-sm text-text-muted">طالب</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">٩٨٪</div>
                                <div className="text-sm text-text-muted">رضاء عملاء</div>
                            </div>
                        </div>
                    </div>

                    {/* الصورة الشخصية */}
                    <div className="reveal flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 rounded-2xl bg-white shadow-medium flex items-center justify-center p-8">
                                <img
                                    src={TeacherPhoto}
                                    alt={TEACHER.name}
                                    className="w-64 h-64 rounded-full object-cover shadow-medium"
                                />
                            </div>

                            {/* عناصر زخرفية */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light rounded-2xl opacity-20 -z-10"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-2xl opacity-10 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}