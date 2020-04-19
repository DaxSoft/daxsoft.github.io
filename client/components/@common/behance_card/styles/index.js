import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        display: 'grid',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        borderRadius: '1em',
        gridTemplateRows: 'max-content',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        boxShadow: THEME.BOX_SHADOW.light(),
        transition: 'all .3s ease-in',
        '&:hover': {
            boxShadow: THEME.BOX_SHADOW.float(),
        },
        width: '316px',
    },

    button: {
        justifySelf: 'center',
        alignSelf: 'center',
        width: 'max-content',
        height: 'max-content',
    },

    img: {
        width: 'calc(316px - 2em)',
        // justifySelf: 'center',
        // alignSelf: 'center',
    },

    badge: {
        width: '24px',
        height: '24px',
    },

    description: {
        display: 'grid',
        gridTemplateColumns: 'max-content max-content',
        width: 'inherit',
        justifyContent: 'space-between',
        justifyItems: 'flex-start',
        alignItems: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
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
