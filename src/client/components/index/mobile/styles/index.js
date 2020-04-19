import { makeStyles } from '@material-ui/core/styles'
import { THEME, CONSTANTS } from '../../../../styles'

export const stylesRoot = makeStyles((theme) => ({
    root: {
        //padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'flex-start',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: '99vw',
        marginTop: '2em',
    },
}))

export const callStyles = makeStyles((theme) => ({
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
    },
    title: {
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        width: 'inherit',
        textAlign: 'center',
    },
    subtitle: {
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.SMALL),
        width: 'inherit',
        textAlign: 'center',
        fontSize: '1.5em',
        color: THEME.NEUTRAL_COLOR.neutralSecondary,
    },
    container: {
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        justifySelf: 'center',
        alignSelf: 'center',
    },
    buttonAction: {
        width: 'max-content',
        height: 'max-content',
        background: THEME.linerGradient('19deg', [
            ['#c23616', '0%'],
            ['#e84118', '100%'],
        ]),
        boxShadow: THEME.BOX_SHADOW.faded(6, '#e84118', 0.6),
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        color: THEME.NEUTRAL_COLOR.neutralLight,
        '&:hover': {
            boxShadow: THEME.BOX_SHADOW.faded(4, '#e84118', 0.8),
        },
        transition: 'all .3s ease-in',
        borderRadius: '1em',
        marginTop: '1em',
    },
}))

export const behanceRoot = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'max-content',
        gridAutoFlow: 'column',
        gridGap: '2em',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        justifyItems: 'flex-start',
        width: '90vw',
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(
            CONSTANTS.SPACING.BIG * 2,
            CONSTANTS.SPACING.BIG
        ),
        marginTop: '2em',
    },
}))

export const whoaimStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '2em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        width: '99vw',
        marginTop: '1em',
        justifySelf: 'center',
        alignSelf: 'center',
    },

    row: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        padding: theme.spacing(CONSTANTS.SPACING.BIG),
    },

    img: {
        width: '6em',
        height: '6em',
        borderRadius: '50%',
        justifySelf: 'center',
        alignSelf: 'center',
        objectFit: 'cover',
    },
}))

export const whatIdoStyles = makeStyles((theme) => ({
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

    rootCard: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 16em)',
        gridGap: '1em',
        justifyContent: 'space-evenly',
        justifyItems: 'flex-start',
        alignItems: 'flex-start',
        width: 'inherit',
    },

    card: {
        display: 'grid',
        gridTemplateRows: 'max-content',
        justifyContent: 'space-evenly',
        justifyItems: 'center',
        alignItems: 'center',
        borderRadius: '2em',
        boxShadow: THEME.BOX_SHADOW.light(),
        width: '16em',
        padding: theme.spacing(CONSTANTS.SPACING.DEFAULT),
        gridGap: '1em',
    },

    cardBody: {
        color: THEME.NEUTRAL_COLOR.neutralPrimary,
        width: '12em',
        textAlign: 'center',
    },

    cardStack: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 34px)',
        gridGap: '1em',
        width: '16em',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
    },

    cardIcon: {
        width: '32px',
        height: '32px',
        objectFit: 'cover',
    },
}))

export const githubRoot = makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'max-content',
        gridAutoFlow: 'column',
        gridGap: '2em',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        justifyItems: 'flex-start',
        width: '99vw',
        justifySelf: 'center',
        alignSelf: 'center',
        padding: theme.spacing(
            CONSTANTS.SPACING.BIG * 2,
            CONSTANTS.SPACING.BIG
        ),
        marginTop: '2em',
    },
}))
