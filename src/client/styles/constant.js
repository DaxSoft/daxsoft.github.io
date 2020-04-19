/*
:--------------------------------------------------------------------------
: Constants
:--------------------------------------------------------------------------
:
: This is the default constants and numbers to create a solid and 
: flexible design.
*/

/*
:--------------------------------------------------------------------------
: Spacing | Padding, Margin
:--------------------------------------------------------------------------
*/

const SPACING = {
    BIG: 3.141, // Math.PI,
    SMALL: 1.359, // Math.E / 2
    DEFAULT: 1.687, // Math.SQRT2 * 1.2
}

/*
:--------------------------------------------------------------------------
: ANIMATION | @keyframes
:--------------------------------------------------------------------------
*/

const ANIMATION = {
    SPEED: {
        FAST: '.4s',
        DEFAULT: '.95s',
        SLOW: '1.359s',
    },

    //https://animista.net/
    TRANSITION: {
        easeInQuint: `cubic-bezier(0.755, 0.050, 0.855, 0.060) both`,
        easeInExpo: `cubic-bezier(0.950, 0.050, 0.795, 0.035) both`,
        easeInBack: `cubic-bezier(0.600, -0.280, 0.735, 0.045) both`,
    },

    generate({
        name,
        duration = '1s',
        delay = '',
        transition = 'ease-in',
        interation = '1',
        direction = 'normal',
        fill = 'none',
        state = 'running',
    }) {
        return `${name} ${duration} ${transition} ${delay} ${interation} ${direction} ${fill} ${state}`
    },
}

// ------------------------------------------------------------------
// | export
// ------------------------------------------------------------------

export default {
    SPACING,
    ANIMATION,
}
