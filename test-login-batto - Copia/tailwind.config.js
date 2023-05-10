import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

export const theme = {
    extend: {
        fontFamily: {
            sans: ['Inter var', ..._fontFamily.sans],
        },
    },
}
export const plugins = [
    // ...
    require('@tailwindcss/forms'),
]