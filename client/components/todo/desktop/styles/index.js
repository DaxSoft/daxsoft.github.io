import { makeStyles, fade } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        width: '99vw',
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: '2em',
    },
    title: {
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        width: 'inherit',
        textAlign: 'center',
    },
    description: {
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        width: 'inherit',
        textAlign: 'center',
        fontSize: '1.5em',
        color: THEME.NEUTRAL_COLOR.neutralSecondary,
    },
    container: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '99vw',
        justifySelf: 'center',
        alignSelf: 'center',
    },
    todo: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, max-content)', // index, name+logo, code, rate, totalrate, sector, goto
        //gridGap: '.5em',
        justifyContent: 'space-between',
        justifyItems: 'center',
        alignItems: 'center',
        padding: theme.spacing(0, CONSTANTS.SPACING.SMALL),
        transition: 'all .3s ease-in',
        '&:hover': {
            boxShadow: THEME.BOX_SHADOW.light(),
        },
        height: '72px',
        borderRadius: '1em',
        width: '99vw',
        justifySelf: 'center',
        alignSelf: 'center',
    },
}))

export const todoStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(7, max-content)', // index, name+logo, code, rate, totalrate, sector, goto
        //gridGap: '.5em',
        justifyContent: 'space-between',
        justifyItems: 'center',
        alignItems: 'center',
        padding: theme.spacing(0, CONSTANTS.SPACING.SMALL),
        transition: 'all .3s ease-in',
        '&:hover': {
            boxShadow: THEME.BOX_SHADOW.light(),
        },
        height: '72px',
        borderRadius: '1em',
        width: '90vw',
        marginLeft: '5vw',
        marginTop: '3em',
    },

    done: {
        borderRadius: '50%',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        backgroundColor: fade('#27ae60', 0.1),
        color: '#27ae60',
        width: '2em',
        height: '2em',
    },

    open: {
        borderRadius: '50%',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        color: '#2c3e50',
        width: '2em',
        height: '2em',
        opacity: 0.75,
    },

    title: {
        width: '12em',
        textAlign: 'left',
    },

    label: {
        padding: theme.spacing(CONSTANTS.SPACING.SMALL / 1.5),
        borderRadius: '1em',
        justifySelf: 'center',
        alignSelf: 'center',
        fontSize: '.8rem',
    },

    body: {
        width: '16em',
        textAlign: 'left',
        fontSize: '.8rem',
    },

    update: {
        display: 'grid',
        gridTemplateColumns: '2em 8em',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'flex-start',
        alignItems: 'center',
        color: THEME.NEUTRAL_COLOR.neutralSecondary,
    },
}))
