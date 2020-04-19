// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch, useLocalStorage } from '@vorlefan/react-hooks'
import { useRouter } from 'next/router'

import { Typography, CircularProgress } from '@material-ui/core'

import { stylesRoot } from './styles'

import GithubCard from '../../@common/github_card'

function filterGithubProjects({ description }) {
    return /(\#doc(s)?\s?)/gim.test(description)
}

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

export default function Component({}) {
    const classes = stylesRoot()

    const cacheResources = useLocalStorage('resources', [])

    const repos = useFetch(
        {
            endpoint: 'https://api.github.com/users/DaxSoft/repos', // daxsoft.github.io
            onSuccess: (data) => {
                cacheResources.set(data)
            },
            onError: (err) => {
                issues.data = cacheResources.get()
            },
            startInit: cacheResources.get(),
        },
        'GET',
        fetch
    )

    const router = useRouter()

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.title}>
                Repositories
            </Typography>
            <Typography variant="body1" className={classes.description}>
                This pages makes a request from Github's API. <br />
                Where it gets the repositories from my account and display here.{' '}
                <br />
                It checks if exists a documentation available from the
                description of the repo. <br />
                The description needs to have '#docs'.
            </Typography>
            <Typography variant="button">
                Click upon the repository to go to the documentation!
            </Typography>
            <div className={classes.container}>
                {repos.loading.isOn() ? (
                    <CircularProgress
                        color="secondary"
                        style={{ justifySelf: 'center', alignSelf: 'center' }}
                    />
                ) : (
                    Array.isArray(repos.data) &&
                    repos.data.length > 0 &&
                    repos.data.map((value, key) => {
                        if (!filterGithubProjects(value)) return
                        return (
                            <GithubCard
                                key={key}
                                title={value.name}
                                href={`/resources/${value.name}`}
                                description={value.description}
                                stars={value.stargazers_count}
                                fork={value.forks_count}
                                data={value}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}
