'use strict';
/**
 * @file control the page elements from Immersion Plugin
 */

var Scene = {};

void

function (scene) {
    // 
    scene.el = {};
    /**
     * Start out the elements
     */
    async function start() {
        create_switch_lang()

        new Components.button.Basic({
            label: '&LeftArrow; Home',
            onclick: () => {
                El.Attr(El.create('a', document.body), {
                    href: "../index.html"
                }).click()
            }
        }).button.style = `
            position: absolute;
            left: 8em;
            top: 2em;
        `

        // table of contents
        await tableContents()

        create_drawer();

    }

    /**
     * Switch the language to
     */
    function create_switch_lang() {
        scene.el.lang = new Components.opt.Lang();
    }

    async function tableContents() {
        scene.el.topics = {};

        const topics = await Page.json('wiki.immersion_plugin.json');

        topics.map(topic => {
            scene.el.topics[topic.id] = new Components.button.Basic({
                label: topic.name,
                parent: El.id('table_content'),
                onclick: () => {
                    scene.refresh_doc(topic)
                }
            })
        })

        Scene.el.topics.about.button.click()
    }

    scene.refresh_doc = async function (topic) {
        El.removeChild(El.id('doc'));

        El.id('doc').innerHTML = await Page.text(topic.doc)
    }

    function create_drawer() {
        scene.el.drawer = new Components.window.Drawer({
            parent: El.id('content'),
            onclose: () => {
                scene.el.drawer.hide();
            },
            id: 'drawer'
        })
    }

    scene.drawer = function (header, body_file) {
        Promise.resolve().then(async () => {
            scene.el.drawer.configure({
                header: header,
                body: await Page.text(body_file),
                onclose: () => {
                    scene.el.drawer.hide();
                }
            }).refresh().open()
        })
    }
    //
    Promise.resolve().then(start);
}(Scene);