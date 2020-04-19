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
        gridTemplateColumns: 'repeat(auto-fit, 20em)',
        gridGap: '1em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '99vw',
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
    },
}))
