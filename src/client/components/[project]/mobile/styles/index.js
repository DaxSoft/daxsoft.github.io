import { makeStyles, fade } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'space-between',
        justifyItems: 'flex-start',
        alignItems: 'fkex-start',
        width: '100VW',
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: '2em',
    },

    listButton: {
        position: 'fixed',
        zIndex: 7000,
        bottom: '2em',
        right: '24px',
        backgroundColor: THEME.NEUTRAL_COLOR.neutralPrimary,
        color: THEME.THEME_COLOR.secondary.main,
        '&:focus': {
            backgroundColor: THEME.NEUTRAL_COLOR.neutralPrimary,
        },
    },
}))

export const listRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '75vw',
        height: 'calc(100vh + 2em)',
        position: 'fixed',
        zIndex: 6666,
        backgroundColor: THEME.NEUTRAL_COLOR.neutralLight,
        backdropFilter: 'blur(3px)',
        WebkitBackdropFilter: 'blur(3px)',
        top: '0px',
        left: '0px',
        boxShadow: THEME.BOX_SHADOW.float(),
    },

    painel: {
        backgroundColor: 'unset',
        boxShadow: 'unset',
        width: '20em',
        '& > *': {
            height: 'max-content',
        },
    },

    detail: {
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: 'inherit',
    },

    subButton: {
        textTransform: 'none',
        fontSize: '.8rem',
    },
}))

export const contentRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        width: '99vw',
    },
}))
