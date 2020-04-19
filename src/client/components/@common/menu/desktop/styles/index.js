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
        padding: theme.spacing(CONSTANTS.SPACING.BIG, 0),
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

    buttonTitle: {
        width: 'max-content',
        height: 'max-content',
        marginLeft: '2em',
    },
}))

export const optionsStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 8em)',
        justifyContent: 'flex-end !important',
        alignItems: 'center',
        gridGap: '1em',
        width: '60vw',
        transition: 'all .3s ease-in',
    },
}))
