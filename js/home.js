'use strict';

/**
 * @file home
 * Control the home page
 */

var Scene = {};

void

function (scene) {

    // |-----------------------------------------------------------------------
    // | variables
    // |-----------------------------------------------------------------------

    scene.el = {};
    scene.isPortrait = false;

    // |-----------------------------------------------------------------------
    // | [start]
    // | Start out all components 
    // |-----------------------------------------------------------------------

    async function start() {

        Components.alert.Create({
            label: ({en: 'Hire me :) Open to commission!', pt: 'Contrate me :) Aberto à projetos'})[localStorage.getItem('lang')],
            duration: 3500,
            position: 'topCenter',
            icon: Route.Main.getItem('icon')('person.png')
        })

        scene.el.menuBar = El.create('section', document.body)
        CSS.attach(scene.el.menuBar, {
            $landscape: {
                default: {
                    display: 'none'
                }
            },

            $portrait: {
                default: {
                    $classic: true,
                    display: 'block',
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    width: '100vw',
                    height: '64px',
                    background: CSS.Global.root().color.gradient.disable
                    //'background': 'radial-gradient(at -10% -10%, rgba(30, 30, 30, 0.75), rgba(14, 14, 14, 1))'
                }
            }
        })


        await create_profile();

        setTimeout(() => {
            create_recent_work()
            device_orientation()
        }, 250)

        await create_menu();

        await create_drawer()
    }

    // |-----------------------------------------------------------------------
    // | [create]
    // | Create elements
    // |-----------------------------------------------------------------------

    async function create_profile() {

        scene.el.profile = {};

        // container
        scene.el.profile.container = El.Attr(El.create('section', El.id('content')), {
            id: 'profile_container'
        })

        CSS.attach(scene.el.profile.container, {
            $landscape: {
                default: {
                    $classic: true,
                    display: 'grid',
                    'grid-auto-columns': '196px',
                    'grid-auto-rows': `max-content`,
                    'grid-gap': '1rem',
                    'justify-contents': 'center',
                    'justify-items': 'center',
                    padding: '1em',
                    'justify-self': 'center',
                    'margin-top': '-2em'
                }
            }
        })

        // cover picture
        scene.el.profile.cover = El.Attr(El.create('img', scene.el.profile.container), {
            src: Route.Main.getItem('img')('michael.png'),
            alt: 'profile_picture'
        })

        CSS.attach(scene.el.profile.cover, {
            $landscape: {
                default: {
                    $classic: true,
                    display: 'block',
                    width: CSS.metric(128),
                    height: CSS.metric(128),
                    'border-radius': '50%',
                    'object-fit': 'cover',
                    padding: '.5em'
                }
            },

            $portrait: {
                default: {
                    width: CSS.metric(Utils.aspect(128, true)),
                    height: CSS.metric(Utils.aspect(128, true)),
                }
            }
        })

        // social media
        scene.el.profile.social = new Components.select.Nav({
            parent: scene.el.profile.container,

            style: {
                $landscape: {
                    default: {
                        $classic: true,
                        display: 'grid',
                        'grid-template-columns': 'repeat(5, 28px)',
                        'grid-auto-rows': 'auto',
                        'grid-gap': '.5em',
                        'justify-content': 'center',
                        'justify-self': 'center',
                        'justify-items': 'center'
                    }
                }
            },

            itemStyleProperty: 'styleIcon',
            itemStyle: {
                $landscape: {
                    default: {
                        $classic: true,
                        display: 'block',
                        width: '24px',
                        'object-fit': 'cover',
                        cursor: 'pointer',
                        'justify-self': 'center !important',

                        $hover: {
                            $classic: true,
                            'animation': 'opacity-pingpong var(--animation-duration-long) infinite ease-in-out',
                        }
                    }
                }
            },

            items: [{
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('behance.png'),
                    alt: 'behance',
                    onclick: () => {
                        El.to('https://www.behance.net/daxsoft')
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('instagram.png'),
                    alt: 'instagram',
                    onclick: () => {
                        El.to('https://www.instagram.com/vorlefan/')
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('github.png'),
                    alt: 'github',
                    onclick: () => {
                        El.to('https://github.com/DaxSoft')
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('spotify.png'),
                    alt: 'spotify',
                    onclick: () => {
                        El.to("https://open.spotify.com/user/8btt9iyhho52rxvtd53b8x3mi?si=MXwEmEEsRD-mNi3Eq_hmgA")
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('email.png'),
                    alt: 'email',
                    onclick: () => {
                        El.to("mailto:dax-soft@live.com")
                    }
                },
            ]
        })

        // text about me
        scene.el.profile.text = El.Attr(El.create('p', scene.el.profile.container), {

        })

        CSS.attach(scene.el.profile.text, {
            $landscape: {
                default: {
                    $classic: true,
                    'font-size': '.8rem',
                    'text-align': 'center',
                    'padding': '.25em 1em'
                }
            },
            $portrait: {
                default: {
                    $classic: true,

                    'font-size': '.7rem',
                    'text-align': 'center',
                    'padding': '.25em 1em'
                }
            }
        })

        scene.el.profile.text.innerHTML = await Route.Main.getItem('text')('author-about.txt')

    }

    async function create_recent_work() {

        scene.el.workContainer = El.create('section', El.id('content'))
        CSS.attach(scene.el.workContainer, {
            $landscape: {
                default: {
                    $classic: true,

                    'justify-self': 'center',
                    'padding': '2em'
                }
            },
        })

        scene.el.workRecent = new Components.select.Nav({

            parent: scene.el.workContainer,
            id: 'recent-work',
            class: '',

            style: {
                $landscape: {
                    default: {
                        $classic: true,

                        display: 'grid',
                        'grid-template-columns': 'repeat(2, max-content) !important',
                        'grid-auto-rows': 'max-content',
                        'grid-auto-flow': 'auto',
                        'grid-gap': '1em',
                        'justify-self': 'center',
                        'justify-items': 'center',
                        'justify-content': 'center'
                    }
                },

                $portrait: {
                    default: {
                        $classic: true,

                        'display': 'grid',
                        'grid-auto-flow': 'row',
                        'grid-auto-columns': 'max-content',
                        'grid-gap': '1em',
                        'justify-self': 'center',
                        'justify-items': 'center',
                    }
                }
            },

            itemStyleProperty: 'styleIcon',
            itemStyle: {
                $landscape: {
                    default: {
                        $classic: true,

                        width: '356px',
                        height: '226px',
                        display: 'block',
                        'object-fit': 'cover',
                        cursor: 'pointer',

                        $hover: {
                            $classic: true,

                            animation: 'short-press var(--animation-duration-long) forwards ease-in'
                        }
                    }
                }
            },

            items: [{
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('img')('work/sara_costureira/2.png'),
                    alt: 'sara_costureira',
                    onclick: () => {
                        Components.popup.Close()

                        Components.popup.Create({

                            icon: Route.Main.getItem('icon')('logo-sc_small.png'),
                            label: 'Sara Costureira',
                            time: 4000,

                            components: [{
                                    component: 'button',
                                    class: 'btn-white',
                                    label: 'Study Case',
                                    onclick: () => {
                                        Components.alert.Create({
                                            label: 'It is under development :)'
                                        })
                                    },
                                    color: CSS.Global.root().color.system.error
                                },
                                {
                                    component: 'button',
                                    class: 'btn-white',
                                    label: 'Website',
                                    onclick: () => {
                                        El.to('http://saracostureira.com.br/')
                                    },
                                    color: CSS.Global.root().color.neutral.black
                                }
                            ]
                        })
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('img')('work/immersion_plugin/gl_ls_1.png'),
                    alt: 'immersion_plugin',
                    onclick: () => {
                        Components.popup.Close()

                        Components.popup.Create({

                            icon: Route.Main.getItem('icon')('rpgmakermv.png'),
                            label: 'Immersion Plugin',
                            time: 4000,

                            components: [{
                                component: 'button',
                                class: 'btn-white',
                                label: 'Details',
                                onclick: () => {
                                    Route.Main.to('home', 'rpgmaker/immersion_plugin.html')
                                    //El.to(`${Route.Main.get('home').path}/rpgmaker/immersion_plugin.html`)
                                },
                                color: CSS.Global.root().color.neutral.black
                            }]
                        })
                    }
                }
            ]

        })
    }

    async function create_menu() {
        scene.el.menu = new Components.select.Nav({
            id: 'menu',
            class: '',

            style: {
                $landscape: {
                    default: {
                        $classic: true,

                        position: 'absolute',
                        right: '6em',
                        top: '2em',
                        display: 'grid',
                        'grid-template-columns': 'min-content',
                        'grid-auto-rows': 'min-content',
                        'grid-auto-flow': 'column',
                        'grid-gap': '1rem',
                        'justify-items': 'center'
                    }
                },

                $portrait: {
                    default: {
                        $classic: true,

                        position: 'absolute',
                        right: '2em',
                        top: '1em',
                        display: 'grid',
                        'grid-template-columns': 'min-content',
                        'grid-auto-rows': 'min-content',
                        'grid-auto-flow': 'column',
                        'grid-gap': '.5rem',
                        'justify-items': 'center'
                    }
                }
            },

            itemStyle: {
                $landscape: {
                    default: {
                        $classic: true,

                        border: 'none',
                        'font-size': '.75rem'
                    }
                },

                $portrait: {
                    default: {
                        'font-size': '.65rem'
                    }
                }
            },

            items: [{
                    component: 'button',
                    label: {
                        en: 'About',
                        pt: 'Sobre'
                    } [localStorage.getItem('lang')],
                    onclick: async () => {
                        scene.el.drawer.configure({
                            // header: {en: 'About myself', pt: 'Sobre mim'}[localStorage.getItem('lang')],
                            header: [{
                                component: 'button',
                                class: 'btn-white',
                                label: {
                                    en: 'About &times;',
                                    pt: 'Sobre &times;'
                                } [localStorage.getItem('lang')],
                                onclick: () => {
                                    scene.el.drawer.hide()
                                },
                                color: CSS.Global.root().color.neutral.black
                            }],
                            class: 'drawer',
                            body: await Route.Main.getItem('text')('whatdo.html')
                        }).refresh().open()
                    }
                },
                {
                    component: 'button',
                    label: {
                        en: 'Skills',
                        pt: 'Habilidades'
                    } [localStorage.getItem('lang')],
                    onclick: async () => {
                        scene.el.drawer.configure({
                            // header: {en: 'About myself', pt: 'Sobre mim'}[localStorage.getItem('lang')],
                            header: [{
                                component: 'button',
                                class: 'btn-white',
                                label: {
                                    en: 'Skills &times;',
                                    pt: 'Habilidades &times;'
                                } [localStorage.getItem('lang')],
                                onclick: () => {
                                    scene.el.drawer.hide()
                                },
                                color: CSS.Global.root().color.neutral.black
                            }],
                            class: 'drawer',
                            body: await Route.Main.getItem('text')('myskills.html')
                        }).refresh().open()
                    }
                },
                {
                    component: 'button', label: 'Blog', color: CSS.Global.root().color.theme.primary,
                    onclick: () => {
                        Components.alert.Create({
                            icon: Route.Main.getItem('icon')('info.png'),
                            label: ({en: 'For while, the blog is empty!', pt: 'Por enquanto, o blog está vazio!'})[localStorage.getItem('lang')],
                            duration: 3500,
                            position: 'topCenter'
                        })
                    }
                },
                {
                    component: 'button', label: ({en: 'Resources', pt: 'Recursos'})[localStorage.getItem('lang')],
                    onclick: () => {
                        Components.popup.Create({
                            label:  ({en: "... Empty by now :(", pt: '... Vazio, por enquanto'})[localStorage.getItem('lang')],
                            time: 4000,
                            components: [
                                {
                                    component: 'button', label: '&RightArrow; Github', class: 'btn-white',
                                    color: CSS.Global.root().color.neutral.black,
                                    onclick: function () {
                                        El.to('https://github.com/DaxSoft')
                                    }
                                },
                                {
                                    component: 'button', label: '&times;', class: 'btn-white',
                                    color: CSS.Global.root().color.system.error,
                                    onclick: function () {
                                        Components.popup.Close();
                                    }
                                }
                            ]
                        })
                        //Route.Main.to('home', 'resources.html')
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('usa.png'),
                    styleIcon: {
                        $landscape: {
                            default: {
                                width: '24px',
                                'object-fit': 'cover',
                                'cursor': 'pointer'
                            }
                        }
                    },
                    alt: 'usa',
                    onclick: () => {
                        localStorage.setItem('lang', 'en')
                        document.location.reload();
                    }
                },
                {
                    component: 'icon',
                    class: '',
                    src: Route.Main.getItem('icon')('brazil.png'),
                    styleIcon: {
                        $landscape: {
                            default: {
                                width: '24px',
                                'object-fit': 'cover',
                                'cursor': 'pointer'
                            }
                        }
                    },
                    alt: 'usa',
                    onclick: () => {
                        localStorage.setItem('lang', 'pt')
                        document.location.reload();
                    }
                }
            ]
        })

    }

    async function create_drawer() {
        scene.el.drawer = new Components.window.Drawer({
            class: 'drawer',

            style: {
                $landscape: {
                    default: {
                        $classic: true,

                        left: '1em',
                        top: '1em',
                        width: '40%',
                        height: '85vh'
                    }
                },

                $portrait: {
                    default: {
                        $classic: true,

                        left: '1em',
                        top: '1em',
                        width: '80%',
                        height: '85vh'
                    }
                }
            },

            onclose: () => {
                scene.el.drawer.hide();
            }

        }).hide()

        El.addClass(scene.el.drawer.control, 'nested')
    }

    // |-----------------------------------------------------------------------
    // | Check out layout
    // |-----------------------------------------------------------------------
    document.body.onresize = async function () {

        device_orientation();
    }

    function device_orientation() {
        Utils.device_orientation();

        if (Utils.screen.current === 'portrait' && scene.isPortrait === false) {
            scene.isPortrait = true;
            El.addClass(El.id('content'), 'portrait')
            cssUpdate()
            document.body.style.overflowY = 'visible'
        } else if (scene.isPortrait && Utils.screen.current === 'landscape') {
            scene.isPortrait = false;
            El.removeClass(El.id('content'), 'portrait')
            cssUpdate()
            document.body.style.overflowY = 'hidden'
        }
    }

    function cssUpdate() {
        scene.el.profile.container.css.render_mode()
        scene.el.profile.cover.css.render_mode()
        scene.el.profile.text.css.render_mode()
        scene.el.workContainer.css.render_mode()
        scene.el.workRecent.container.css.render_mode()
        scene.el.menuBar.css.render_mode()
        scene.el.drawer.render_mode();

        scene.el.menu.render_mode()
    }

    scene.infoSkill = function (tag) {
        Components.alert.Close()
        Components.alert.Create({
            label: ({en: 'W.I.P!', pt: 'W.I.P!'})[localStorage.getItem('lang')],
            position: 'topCenter'
        })
    }

    // |-----------------------------------------------------------------------
    // | Start to
    // |-----------------------------------------------------------------------
    Promise.resolve()
        .then(start);
}(Scene);