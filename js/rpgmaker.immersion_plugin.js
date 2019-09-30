'use strict';
/**
 * @file control the page elements from Immersion Plugin
 */

var Scene = {};

void

function (scene) {
    // 
    scene.el = {};
    scene.isPortrait = false;
    /**
     * Start out the elements
     */
    async function start() {

        Components.alert.Create({
            position: 'topCenter',
            label: 'Under Development... :)',
            duration: 3000
        })

        // table of contents
        await tableContents()

        await create_menu();


        create_drawer();

        device_orientation();
    }

    async function tableContents() {
        scene.topics = [];

        scene.wikiTopics = await Route.Main.getItem('json')('wiki.immersion_plugin.json');


        scene.refresh_doc(scene.wikiTopics[0].doc)

    }

    scene.refresh_doc = async function (topic) {
        console.log(topic);
        
        El.removeChild(El.id('doc'));

        El.id('doc').innerHTML = await Route.Main.getItem('text')(topic)

        if (El.is('gallery') && Utils.screen.current === 'portrait') El.addClass(El.id('gallery'), 'portrait')
    }

    function create_drawer() {
        scene.el.drawer = new Components.window.Drawer({
            parent: El.id('content'),
            onclose: () => {
                scene.el.drawer.hide();
            },
            id: 'drawer'
        }).hide()
    }

    scene.drawer = function (header, body_file) {
        Promise.resolve().then(async () => {
            scene.el.drawer.configure({
                header: header,
                body: await Route.Main.getItem('text')(body_file),
                onclose: () => {
                    scene.el.drawer.hide();
                }
            }).refresh().open()
        })
    }
    // |-----------------------------------------------------------------------
    // | Menu
    // |-----------------------------------------------------------------------

    async function create_menu() {
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
                    'background': CSS.Global.root().color.gradient.disable
                    //'background': 'radial-gradient(at -10% -10%, rgba(30, 30, 30, 0.75), rgba(14, 14, 14, 1))'
                }
            }
        })

        scene.el.menu = new Components.select.Nav({
            id: 'menu',
            class: '',

            style: {
                $landscape: {
                    default: {
                        $classic: true,

                        position: 'absolute',
                        left: '4em',
                        top: '2em',
                        display: 'grid',
                        'grid-template-columns': 'min-content',
                        'grid-auto-rows': '2em',
                        'grid-auto-flow': 'column',
                        'grid-gap': '1rem',
                        'justify-items': 'center'
                    }
                },

                $portrait: {
                    default: {
                        $classic: true,

                        position: 'fixed !important',
                        left: '2em',
                        top: '1em',
                        display: 'grid',
                        'grid-template-columns': 'min-content',
                        'grid-auto-rows': '2em',
                        'grid-auto-flow': 'column',
                        'grid-gap': '.1rem',
                        'justify-items': 'center'
                    }
                }
            },

            itemStyle: {
                $landscape: {
                    default: {
                        $classic: true,

                        border: 'none',
                        'font-size': '.7rem'
                    }
                },

                $portrait: {
                    default: {
                        $classic: true,

                        border: 'none',
                        'font-size': '.65rem'
                    }
                }
            },

            items: [
                {
                    component: 'dropdown',
                    label: '&equiv; index',
                    labelStyle: {
                        $landscape: {
                            default: {
                                $classic: true,
                                'font-size': '.7rem'
                            }
                        },
        
                        $portrait: {
                            default: {
                                $classic: true,
                                'font-size': '.65rem'
                            }
                        }
                    },
                    data: [{
                        name: '&times; Close',
                        doc: 'close'
                    }, {
                        name: '&#9872; English',
                        doc: 'en'
                    }, {
                        name: '&#9872; Portuguese',
                        doc: 'pt'
                    }, ...scene.wikiTopics],
                    property: {label: 'name', value: 'doc'},

                    optionClick: async ({value, label, option, self}) => {
                        if (option.doc === 'close') {
                            El.toggleClass(self.select, 'nested')
                            return;
                        }

                        if (/^(en)|^(pt)/gi.test(option.doc)) {
                            localStorage.setItem('lang', option.doc)
                            document.location.reload();
                            return;
                        } 

                        scene.refresh_doc(option.doc);

                        El.toggleClass(self.select, 'nested')
                    }
                },
                {
                    component: 'button',
                    label: '&LeftArrow; Home/',
                    onclick: async () => {
                        Route.Main.to('home', '')
                    }
                },
                {
                    component: 'button',
                    label: 'RPG Maker MV ... &RightArrow;',
                    onclick: async () => {

                    }
                },
                {
                    component: 'button',
                    label: 'Immersion Plugin',
                    onclick: async () => {

                    }
                }

            ]
        })
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
            if (El.is('gallery')) El.addClass(El.id('gallery'), 'portrait')
        } else if (scene.isPortrait && Utils.screen.current === 'landscape') {
            scene.isPortrait = false;
            El.removeClass(El.id('content'), 'portrait')
            document.body.style.overflowY = 'hidden'
            cssUpdate()
            if (El.is('gallery')) El.removeClass(El.id('gallery'), 'portrait')
        }
    }

    function cssUpdate() {
        scene.el.menuBar.css.render_mode()
        scene.el.menu.render_mode()
    }
    //
    Promise.resolve().then(start);
}(Scene);