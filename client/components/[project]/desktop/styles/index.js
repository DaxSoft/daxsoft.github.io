import { makeStyles, fade } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        gridGap: '1em',
        justifyContent: 'space-between',
        justifyItems: 'flex-start',
        alignItems: 'fkex-start',
        width: '99vw',
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: '2em',
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
        width: '25vw',
        '& > *': {
            height: 'max-content',
        },
        height: 'max-content',
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
        width: '65vw',
    },
}))
