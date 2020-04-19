import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        display: 'grid',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        borderRadius: '1em',
        gridTemplateColumns: '13em 5em',
        justifyContent: 'space-between',
        justifyItems: 'flex-start',
        alignItems: 'center',
        boxShadow: THEME.BOX_SHADOW.light(),
        transition: 'all .3s ease-in',
        '&:hover': {
            boxShadow: THEME.BOX_SHADOW.float(),
        },
    },

    button: {
        justifySelf: 'center',
        alignSelf: 'center',
        width: 'max-content',
        height: 'max-content',
    },

    badge: {
        width: '24px',
        height: '24px',
    },

    description: {
        width: '13em',
        textAlign: 'left',
        color: THEME.NEUTRAL_COLOR.neutralSecondary,
        fontSize: '.8rem',
        textTransform: 'none',
    },

    col: {
        display: 'grid',
        gridTemplateColumns: '16px 3em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'center',
        gridGap: '.5rem',
    },

    icon: {
        width: '12px',
        height: '12px',
    },

    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '.5rem',
        justifyContent: 'space-evenly',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
    },
}))
