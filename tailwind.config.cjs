// ==== FILE: tailwind.config.cjs ====
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // الألوان الجديدة - أزرق احترافي
                primary: '#2563EB',
                'primary-light': '#3B82F6',
                'primary-dark': '#1D4ED8',
                accent: '#10B981',
                'text-strong': '#1F2937',
                'text-muted': '#6B7280',
                'bg-light': '#F8FAFC',
                'border-light': '#E5E7EB'
            },
            fontFamily: {
                cairo: ['Cairo', 'sans-serif'],
                tajawal: ['Tajawal', 'sans-serif']
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
                'gradient-subtle': 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)'
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
            }
        }
    },
    plugins: []
}