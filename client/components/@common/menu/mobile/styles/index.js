import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        justifyContent: 'space-between !important',
        alignItems: 'center',
        gridGap: '1em',
        '& > *': {
            justifySelf: 'center',
        },
        background: 'unset',
        boxShadow: 'unset',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        marginBottom: '2em',
        width: '99vw',
        top: '0px',
        transition: 'all .3s ease-in',
        animation: `$show 1.5s ease-in`,
    },

    '@keyframes show': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },

    title: {
        fontSize: '1.1em',
    },
}))

export const optionsStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        transition: 'all .3s ease-in',
        position: 'fixed',
        zIndex: 9999,
        backgroundColor: THEME.NEUTRAL_COLOR.neutralLight,
        left: '0px',
        top: '0px',
        display: 'grid',
        gridTemplateRows: 'max-content',
        justifyContent: 'space-between !important',
        alignItems: 'center',
        justifyItems: 'flex-start',
        gridGap: '1em',
        padding: theme.spacing(CONSTANTS.SPACING.BIG, 0),
    },
    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        justifyContent: 'space-evenly !important',
        alignItems: 'center',
        justifyItems: 'center',
        gridGap: '1em',
        width: '99vw',
        '& > *': {
            fontSize: '2em',
        },
    },

    icon: {
        alignItems: 'center',
        justifyItems: 'center',
        alignSelf: 'center',
        justifySelf: 'center',
    },

    svg: {
        width: '2em',
        height: '2em',
    },

    buttonTitle: {
        width: 'max-content',
        height: 'max-content',
    },
}))
