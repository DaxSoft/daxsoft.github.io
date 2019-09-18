'use strict';
/**
 * @file home
 * Control the home page
 */

var Home = {};

void

function (home) {
    home.el = {};
    /**
     * start objects
     */
    async function start() {

        new Components.alert.Geral({
            duration: 4000,
            label: ({
                en: 'Please, do not access it with Mobile yet! This is just a temporary portfolio!',
                pt: 'Por favor, não acesse com o celular ainda! Isso é apenas um portfólio temporário!'
            })[localStorage.getItem('lang')],
            position: 'bottomRight'
        })

        await create_profile();

        create_switch_lang()

        setTimeout(async () => {
            await create_recent_work()
        }, 500)

        await create_whatIdo()

        create_drawer();

        El.Attr(El.create('label', El.id('content')), {
            id: 'commission'
        }).innerHTML = {
            en: 'Open to commission! Hire me :)',
            pt: 'Aberto para pedidos! Contrate me :)'
        } [localStorage.getItem('lang')]
    }

    function create_drawer() {
        home.el.drawer = new Components.window.Drawer({
            parent: El.id('content'),
            onclose: () => {
                home.el.drawer.hide();
            },
            id: 'drawer'
        })



        home.el.profile.skills.button.onclick = async () => {
            home.el.drawer.configure({
                header: {
                    en: 'My Skills',
                    pt: 'Minhas Habilidades'
                } [localStorage.getItem('lang')],
                body: await Page.text('myskills.html'),
                onclose: () => {
                    home.el.drawer.hide();
                }
            }).refresh().open()
        }
    }

    /**
     * Create my profile pic * little about me 
     */
    async function create_profile() {
        home.el.profile = new Components.opt.Profile({
            parent: El.id('content')
        })


    }

    /**
     * Switch the language to
     */
    function create_switch_lang() {
        home.el.lang = new Components.opt.Lang();
    }

    /**
     * What I do
     */
    async function create_whatIdo() {
        // section
        El.Attr(El.create('section', El.id('content')), {
            id: 'what_do'
        })
        // text
        home.el.what_doText = El.Attr(El.create('div', El.id('what_do')), {

        })
        home.el.what_doText.innerHTML = await Page.text('whatdo.html')
    }

    /**
     * Recent works
     */
    async function create_recent_work() {
        home.el.recent = {};

        El.Attr(El.create('section', El.id('content')), {
            id: 'recent_work'
        })

        await create_rsara();

        await create_rimmersion()

        home.el.recent.cards = El.interactChild(El.id('recent_work'), (children, index, childrens, size) => {

            children.setAttribute('index', index);

            if ((index === size - 1)) El.addClass(children, 'recent_highlight')
        })

        home.el.recent.index = home.el.recent.cards.length - 1;



        await create_predr()

        await create_nextr()
    }

    async function create_rsara() {
        // sara-costureira
        home.el.recent.sara = new Components.card.Basic({
            parent: El.id('recent_work'),
            header: 'Sara Costureira',
            body: await Page.text('work.sara_costureira.html'),
            id: 'sara_costureira_card',
            theme: 'card-standard card_s1'
        })

        home.el.recent.sara.details = function () {
            Components.notification.Create({
                label: 'Sara Costureira',
                icon: 'logo-sc_small.png',
                time: 4000,
                components: [{
                        component: 'button-basic',
                        class: 'btn-white',
                        label: 'Site',
                        onclick: function () {
                            El.Attr(El.create('a'), {
                                href: 'https://saracostureira.com.br/'
                            }).click()
                            //document.body.removeChild(El.id('temp-link'));
                            //this._popup.destroy(true)
                        }
                    },
                    {
                        component: 'button-basic',
                        class: 'btn-white',
                        label: {
                            en: 'Details',
                            pt: 'Detalhes'
                        } [localStorage.getItem('lang')],
                        onclick: function () {
                            El.Attr(El.create('a'), {
                                href: '../portfolio/sara_costureira.html'
                            }).click()
                            //document.body.removeChild(El.id('temp-link'));
                            //this._popup.destroy(true)
                        }
                    },
                    {
                        component: 'button-basic',
                        class: 'btn-white',
                        label: '&times;',
                        onclick: function () {
                            this._popup.destroy(true)
                        }
                    }
                ]
            })
        }


    }

    async function create_rimmersion() {
        // immersion
        home.el.recent.immersion = new Components.card.Basic({
            parent: El.id('recent_work'),
            header: 'Immersion Plugin Package',
            body: await Page.text('work.immersion_plugin.html'),
            id: 'immersion_card',
            theme: 'card-standard card_s1'
        })

        home.el.recent.immersion.details = function () {
            Components.notification.Create({
                label: 'Immersion Plugin Package',
                icon: 'rpgmakermv.png',
                time: 4000,
                components: [{
                        component: 'button-basic',
                        class: 'btn-white',
                        label: {
                            en: 'Details',
                            pt: 'Detalhes'
                        } [localStorage.getItem('lang')],
                        onclick: function () {
                            El.Attr(El.create('a'), {
                                href: '../rpgmaker/immersion_plugin.html'
                            }).click()
                        }
                    },
                    {
                        component: 'button-basic',
                        class: 'btn-white',
                        label: 'RPG Maker Forum',
                        onclick: function() {
                            El.Attr(El.create('a'), {
                                href: 'https://forums.rpgmakerweb.com/index.php?threads/immersion-0-2-3-time-cycle-period.109262/'
                            }).click()
                        }
                    },
                    {
                        component: 'button-basic',
                        class: 'btn-white',
                        label: '&times;',
                        onclick: function () {
                            this._popup.destroy(true)
                        }
                    }
                ]
            })
        }
    }

    async function create_predr() {
        home.el.recent.pred = El.Attr(El.create('span', El.id('recent_work')), {
            class: 'recent_work_arrow',
            name: 'arrow_recent'
        })

        home.el.recent.pred.innerHTML = '&UpArrow;'

        home.el.recent.pred.onclick = () => {
            home.el.recent.index--;
            home.el.recent.index %= home.el.recent.cards.length;

            home.el.recent.cards.map(children => {
                if (+children.getAttribute('index') === home.el.recent.index) {
                    El.addClass(children, 'recent_highlight')
                } else {
                    El.removeClass(children, 'recent_highlight')
                }
            })
        }
    }

    async function create_nextr() {
        home.el.recent.next = El.Attr(El.create('span', El.id('recent_work')), {
            class: 'recent_work_arrow',
            style: `
                top: 2em;
            `,
            name: 'arrow_recent'
        })

        home.el.recent.next.innerHTML = '&DownArrow;'

        home.el.recent.next.onclick = () => {
            home.el.recent.index++;
            home.el.recent.index %= home.el.recent.cards.length;

            home.el.recent.cards.map(children => {
                if (+children.getAttribute('index') === home.el.recent.index) {
                    El.addClass(children, 'recent_highlight')
                } else {
                    El.removeClass(children, 'recent_highlight')
                }
            })
        }

    }


    home.infoSkill = function (tag) {
        Components.alert.closeAll()
        switch (tag) {
            case 'ai':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'Adobe Illustrator: Vector & Print Design',
                        pt: 'Adobe Illustrator: Vetores & Print Design'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'psd':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'Adobe Photoshop: UI Elements & Drawing',
                        pt: 'Adobe Photoshop: Elementos UI & Desenhos'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'rpgmakermv':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'RPG Maker MV: Engine to create games',
                        pt: 'RPG Maker MV: Engine para criar jogos'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'vscode':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'Visual Studio Code: Gorgerous IDE to code!',
                        pt: 'Visual Studio Code: IDE maravilhosa para programar!'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'laragon':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'Laragon: To locally test my web projects!',
                        pt: 'Laragon: Para testar localmente meus projetos web!'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'evernote':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'Evernote: To write & plan my projects and ideas',
                        pt: 'Evernote: Para escrever & planejar meus projetos e ideias'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'javascript':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'JavaScript: To paint my ideas and make the dreams come to true',
                        pt: 'JavaScript: Pintar minhas ideias e fazer os sonhos se tornarem reais'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'html':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'HTML5: To create the overall concept of the website & electronjs programs',
                        pt: 'HTML5: Criar os conceitos gerais dos website & programas electronjs'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'css':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'CSS3: To make up everything beautiful!',
                        pt: 'CSS3: Para que tudo fique bonito!'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'mongodb':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'MongoDB: Database system to keep up the datas of your project',
                        pt: 'MongoDB: Sistema de banco de dados para manter os dados de seu projeto'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'fastify':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'Fastify: Framework to create a fast back end (server side) solution',
                        pt: 'Fastify: Framework para criar uma solução rápida no back end'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'node':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'NodeJS: To create the server of your project',
                        pt: 'NodeJS: Criar o lado do servidor de seu projeto'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'pixijs':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'PixiJS: To handle with sprites, videos and audio for Web projects',
                        pt: 'PixiJS: Manusear sprites, vídeos e áudios para projetos Web'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            case 'electron':
                new Components.alert.Geral({
                    duration: 2000,
                    label: ({
                        en: 'ElectronJS: Framework to create multiplatform apps with JavaScript!',
                        pt: 'ElectronJS: Framework para criar aplicativos multiplataformas com JavaScript!'
                    })[localStorage.getItem('lang')],
                    position: 'bottomRight'
                })
                break;
            default:
                break;
        }
    }


    // start out
    Promise.resolve()
        .then(start);
}(Home);