// ==== FILE: src/components/Courses.jsx ====
import React from 'react'
import useReveal from '../hooks/useReveal'
import { TEACHER } from '../config'
import CourseCard from './CourseCard'

export default function Courses() {
    const ref = useReveal()

    return (
        <main ref={ref} className="py-20 gradient-subtle">
            <section className="container mx-auto px-6 container-max">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-text-strong mb-4" style={{ fontFamily: 'Cairo' }}>دوراتي التعليمية</h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto" style={{ fontFamily: 'Tajawal' }}>
                        دورات مصممة خصيصاً لتناسب مستواك وتحقيق أهدافك في أقصر وقت
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEACHER.courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 reveal">
                    <div className="bg-white rounded-2xl p-8 shadow-soft max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-text-strong mb-4" style={{ fontFamily: 'Cairo' }}>
                            مستعد لبدء رحلتك؟
                        </h3>
                        <p className="text-text-muted mb-6" style={{ fontFamily: 'Tajawal' }}>
                            اختر الدورة المناسبة لك وابدأ رحلتك towards fluency
                        </p>
                        <a href="#contact" className="btn-primary">
                            احجز استشارة مجانية
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}