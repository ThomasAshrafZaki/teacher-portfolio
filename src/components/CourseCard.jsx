// ==== FILE: src/components/CourseCard.jsx ====
import React from 'react'

export default function CourseCard({ course }) {
    return (
        <div className="course-card group">
            <div className="course-card-inner rounded-2xl bg-white p-6 shadow-soft border border-border-light hover:shadow-medium transition-all duration-300 h-full">
                <div className="mb-4">
                    <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-3">
                        <span className="text-white font-bold">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-strong mb-2" style={{ fontFamily: 'Cairo' }}>
                        {course.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed mb-4" style={{ fontFamily: 'Tajawal' }}>
                        {course.desc}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <span className="text-primary font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">
                        {course.duration}
                    </span>
                    <button className="text-primary hover:text-primary-dark transition-colors text-sm font-medium">
                        اقرأ المزيد →
                    </button>
                </div>
            </div>
        </div>
    )
}