// ------------------------------------------------------------------
// | [general]
// ------------------------------------------------------------------

import React from 'react'
import fetch from 'isomorphic-unfetch'
import { useFetch, useLocalStorage } from '@vorlefan/react-hooks'

import GithubCard from '../../@common/github_card'
import Scrollable from 'react-indiana-drag-scroll'
import { CircularProgress } from '@material-ui/core'

import { githubRoot } from './styles/index'

// ------------------------------------------------------------------
// | [Component]
// ------------------------------------------------------------------

function filterGithubProjects({ forks, description }) {
    return forks === false || /(\#docs)/gim.test(description)
}

export default function Component({}) {
    const classes = githubRoot()

    const cacheGithub = useLocalStorage('github', [])

    const github = useFetch(
        {
            endpoint: 'https://api.github.com/users/DaxSoft/repos',
            onSuccess: (data) => cacheGithub.set(data),
            startInit: cacheGithub.get(),
            onError: (err) => {
                github.data = cacheGithub.get()
            },
        },
        'GET',
        fetch
    )

    return (
        <div>
            {github.loading.isOn() ? (
                <CircularProgress
                    style={{ alignSelf: 'center', justifySelf: 'center' }}
                    color="secondary"
                />
            ) : (
                <Scrollable
                    vertical={false}
                    horizontal={true}
                    className={classes.root}
                >
                    {Array.isArray(github.data) &&
                        github.data.length > 0 &&
                        github.data.map((value, key) => {
                            if (!filterGithubProjects(value)) return
                            return (
                                <GithubCard
                                    key={key}
                                    title={value.name}
                                    href={value.html_url}
                                    description={value.description}
                                    stars={value.stargazers_count}
                                    fork={value.forks_count}
                                />
                            )
                        })}
                </Scrollable>
            )}
        </div>
    )
}
