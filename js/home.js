'use strict';
/**
 * @file index.js
 * @description handles with the elements from the 'index.html'
 */
var Index = {};

void

function (index) {
    index.work = {
        index: 0,
        current: null,
        data: null
    }
    // =================================================================================
    document.body.onresize = () => {
        device_orientation();
    }
    // =================================================================================
    async function device_orientation() {
        const format = Core.device_orientation();

        Core.page.orientation_els(format);

        ["content"].forEach(id => {
            const el = El.id(id);
            if (!El.is(el)) return;
            El.removeClass(el, format.reverse);
            El.addClass(el, format.current);
            El.addClass(el, localStorage.getItem("content-class"))
        })
    }
    // =================================================================================
    index.setup_content = async function () {
        const content = El.id("content");
        content.innerHTML = "";

        await setup_localStorage();

        let localContent = Core.dir(index.data.content[localStorage.getItem('current-content')])

        console.log(localContent);


        setTimeout(() => {
            fetch(localContent).then(response => {
                return response.text().then((text_element) => {
                    content.innerHTML = text_element;
                    const func_con = setup_scriptContent(localStorage.getItem('current-content'));
                    func_con.call(this);
                })
            })
        }, 500)


        // theme setup
        El.Attr("theme", {
            "href": localStorage.getItem("theme")
        })

    }


    async function setup_localStorage() {
        if (!localStorage.getItem('lang')) localStorage.setItem('lang', index.data.lang);
        if (!localStorage.getItem('current-content')) localStorage.setItem('current-content', 'about');
        if (!localStorage.getItem("content-class")) localStorage.setItem("content-class", "")
        if (!localStorage.getItem("theme")) localStorage.setItem("theme", "#")
    }

    function setup_scriptContent(id) {
        return {
            'main': setup_mainContent,
            'about': setup_aboutContent
        } [id]
    }
    // =================================================================================
    fetch(Core.dir("data/terminal.json")).then(response => {
        return response.json().then(data => {
            index.data = data;
            index.setup_content();
            device_orientation();
        })
    })
    // =================================================================================
    function setup_mainContent() {
        const author_about_text = El.id("main-author-about");
        if (El.is(author_about_text)) {
            fetch(Core.dir(`data/text/${localStorage.getItem('lang')}/author-about.txt`)).then(response => {
                return response.text().then(data => {
                    author_about_text.innerHTML = data;
                })
            })
            Core.page.setup_social_media();
        }

        // recent-work
        const recent_work = El.id("recent-work")
        if (El.is(recent_work)) {

            fetch(Core.dir("data/work.json")).then(response => {
                return response.json().then(data => {
                    index.work.data = data;
                    index.work.index = Core.fclamp(data.length - 1, 0, data.length);
                    index.work.current = data[index.work.index];
                    // titlename
                    El.id("recent-work-titlename").innerHTML = index.work.current.titlename;
                    // gallery
                    setTimeout(() => {
                        index.work.current.media.forEach(source => {
                            const picture = El.Attr(El.create("img", El.id("recent-work-media")), {
                                "alt": "picture of the recent work",
                                "src": Core.dir(source)
                            })
                        })
                    }, 200)
                    // description
                    fetch(Core.lang(index.work.current.description)).then(response => {
                        return response.text().then(data => {
                            El.id("recent-work-description").innerHTML = data;
                        })
                    })
                    // link
                    setTimeout(() => {
                        Object.keys(index.work.current.link).map(icon_name => {
                            const url = index.work.current.link[icon_name];
                            let link = El.Attr(El.create("a", El.id("recent-work-link")), {
                                "href": url
                            })
                            El.Attr(El.create("img", link), {
                                "id": "recent-work-link-img",
                                "alt": "project link",
                                "src": El.icon[icon_name]
                            })
                        })
                    }, 200)
                })
            })

        }
    }

    function setup_aboutContent() {
        const author_about_text = El.id("main-author-about");
        if (El.is(author_about_text)) {
            fetch(Core.dir(`data/text/${localStorage.getItem('lang')}/author-about.txt`)).then(response => {
                return response.text().then(data => {
                    author_about_text.innerHTML = data;
                })
            })
            Core.page.setup_social_media();
        }
        // what-do
        const what_do = El.id("what-do");
        if (El.is(what_do)) {
            fetch(Core.lang("whatdo.txt")).then(response => {
                return response.text().then(data => {
                    El.id("what-do-text").innerHTML = data;
                })
            })
        }
        // tools
        const tools = El.id("tools");
        if (El.is(tools)) {
            const front_end = El.id("front-end");
            ["javascript", "html5", "css", "ruby", "analytics"].forEach(name => {
                let icon = El.Attr(El.create("img", front_end), {
                    "alt": "front end tool",
                    "src": El.icon[name]
                })

                let front_end_description = {
                    "javascript": {
                        "en": "Language of Programmation: Javascript",
                        "pt": "Linguagem de Programação: Javascript"
                    },

                    "html5": {
                        "en": "Markup Language: HTML5",
                        "pt": "Linguagem de Marcação: HTML5"
                    },

                    "css": {
                        "en": "Cascading Style Sheets 3",
                        "pt": "Cascading Style Sheets 3"
                    },

                    "ruby": {
                        "en": "Language of Programmation: Ruby",
                        "pt": "Linguagem de Programação: Ruby"
                    },

                    "analytics": {
                        "en": "Tool: Google Analytics",
                        "pt": "Ferramenta: Google Analytics"
                    }
                }

                icon.onclick = () => {
                    Popup.on({
                        "class": "popup-info",
                        "duration": 1500,
                        "position": "center bottom",
                        "text": front_end_description[name][localStorage.getItem('lang')]
                    })
                }
            })

            const back_end = El.id("back-end");
            ["php", "sql", "nodejs"].forEach(name => {
                let icon = El.Attr(El.create("img", back_end), {
                    "alt": "back end tool",
                    "src": El.icon[name]
                })

                let back_end_description = {
                    "php": {
                        "en": "Language of Programmation: PHP",
                        "pt": "Linguagem de Programação: PHP"
                    },

                    "sql": {
                        "en": "Structured Query Language: SQL",
                        "pt": "Linguagem de Consulta Estruturada: SQL"
                    },

                    "nodejs": {
                        "en": "Run-time: NodeJS",
                        "pt": "Run-time: NodeJS"
                    }
                }

                icon.onclick = () => {
                    Popup.on({
                        "class": "popup-info",
                        "duration": 1500,
                        "position": "center bottom",
                        "text": back_end_description[name][localStorage.getItem('lang')]
                    })
                }
            })

            const design = El.id("tool-design");
            ["psd", "ai"].forEach(name => {
                let icon = El.Attr(El.create("img", design), {
                    "alt": "design tool",
                    "src": El.icon[name]
                })

                let description = {
                    "psd": {
                        "en": "Adobe Photoshop",
                        "pt": "Adobe Photoshop"
                    },

                    "ai": {
                        "en": "Adobe Illustrator",
                        "pt": "Adobe Illustrator"
                    }
                }

                icon.onclick = () => {
                    Popup.on({
                        "class": "popup-info",
                        "duration": 1500,
                        "position": "center bottom",
                        "text": description[name][localStorage.getItem('lang')]
                    })
                }
            })

            const framework_tools = El.id("framework-tool");
            ["pixijs", "electron", "rpgmakermv"].forEach(name => {
                let icon = El.Attr(El.create("img", framework_tools), {
                    "alt": "framework & apps tool",
                    "src": El.icon[name]
                })

                let description = {
                    "pixijs": {
                        "en": "JavaScript Framework: PixiJS",
                        "pt": "JavaScript Framework: PixiJS"
                    },

                    "electron": {
                        "en": "JavaScript Framework: ElectronJS",
                        "pt": "JavaScript Framework: ElectronJS"
                    },

                    "rpgmakermv": {
                        "en": "Game Engine: RPG Maker MV",
                        "pt": "Engine de Jogos: RPG Maker MV"
                    },
                }

                icon.onclick = () => {
                    Popup.on({
                        "class": "popup-info",
                        "duration": 1500,
                        "position": "center bottom",
                        "text": description[name][localStorage.getItem('lang')]
                    })
                }
            })
        }
    }
}(Index);