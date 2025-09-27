// ==== FILE: src/components/About.jsx ====
import React from 'react'
import useReveal from '../hooks/useReveal'
import { TEACHER } from '../config'
import TeacherPhoto from '../assets/teacher-photo.png'

function Stat({ label, value, icon }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-soft text-center hover:shadow-medium transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">{value}</div>
            <div className="text-sm text-text-muted" style={{ fontFamily: 'Tajawal' }}>{label}</div>
        </div>
    )
}

export default function About() {
    const ref = useReveal()

    return (
        <main ref={ref} className="py-20 bg-white">
            <section className="container mx-auto px-6 container-max">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-text-strong mb-4" style={{ fontFamily: 'Cairo' }}>من أنا</h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto" style={{ fontFamily: 'Tajawal' }}>
                        شغفي هو مساعدة الطلاب لتحقيق طموحاتهم في اللغة الإنجليزية. أؤمن بأن كل طالب لديه القدرة
                        على إتقان اللغة عندما يحصل على الدعم والتدريب المناسب.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="reveal">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-text-strong mb-4" style={{ fontFamily: 'Cairo' }}>رحلتي</h3>
                                <p className="text-text-muted leading-relaxed" style={{ fontFamily: 'Tajawal' }}>
                                    {TEACHER.bio} خلال مسيرتي، طورت منهجية تعتمد على الممارسة العملية والتحدث المكثف
                                    لضمان تحقيق نتائج ملموسة في أقصر وقت ممكن. أهتم بتقديم تجربة تعليمية شاملة
                                    تركز على الجوانب العملية وتطبيق اللغة في مواقف حقيقية.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <Stat label="سنوات خبرة" value="٨+" />
                                <Stat label="طلاب دربتهم" value="٥٠٠+" />
                                <Stat label="معدل الرضاء" value="٩٨٪" />
                            </div>
                        </div>
                    </div>

                    <div className="reveal flex justify-center">
                        <div className="relative">
                            <div className="w-96 h-96 rounded-2xl gradient-subtle p-8 flex items-center justify-center shadow-medium">
                                <img
                                    src={TeacherPhoto}
                                    alt={TEACHER.name}
                                    className="w-72 h-72 rounded-full object-cover shadow-medium"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* المهارات */}
                <div className="mt-16 reveal">
                    <h3 className="text-2xl font-semibold text-text-strong mb-8 text-center" style={{ fontFamily: 'Cairo' }}>تخصصاتي</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <div className="text-2xl mb-3">💬</div>
                            <h4 className="font-semibold text-text-strong mb-2" style={{ fontFamily: 'Cairo' }}>المحادثة</h4>
                            <p className="text-sm text-text-muted" style={{ fontFamily: 'Tajawal' }}>
                                تطوير الثقة في التحدث بطلاقة من خلال جلسات محادثة تفاعلية ومناقشات حية
                            </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                            <div className="text-2xl mb-3">📝</div>
                            <h4 className="font-semibold text-text-strong mb-2" style={{ fontFamily: 'Cairo' }}>التحضير لآيلتس</h4>
                            <p className="text-sm text-text-muted" style={{ fontFamily: 'Tajawal' }}>
                                تحضير مكثف لجميع أقسام الامتحان مع نماذج اختبارات حقيقية وتصحيح فوري
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                            <div className="text-2xl mb-3">📚</div>
                            <h4 className="font-semibold text-text-strong mb-2" style={{ fontFamily: 'Cairo' }}>القواعد</h4>
                            <p className="text-sm text-text-muted" style={{ fontFamily: 'Tajawal' }}>
                                شرح مبسط للقواعد النحوية مع تمارين عملية تطبيقية وأمثلة من الحياة اليومية
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}