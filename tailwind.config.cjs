/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cer-gray': 'rgb(75, 75, 77)',
                'cer-blue':'rgb(24, 160, 150)',
                'cer-yellow':'rgb(248, 179, 50)',
                'cer-red': 'rgb(232, 80, 31)'
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}

