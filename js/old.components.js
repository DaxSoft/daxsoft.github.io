'use strict';

/**
 * @file components
 * Useful class & methods to create components using HTMLElements,
 * and handling using JS.
 */
var Components = {
    input: {},
    progress: {},
    boolean: {},
    list: {},
    window: {},
    button: {},
    card: {},
    opt: {},
    alert: {
        _count: 0
    },
    notification: {
        _id: 0,
        _pops: []
    }
};

// ! ==========================================================================================

void

function (basic) {
    basic.Basic = class {
        constructor(setup) {
            this.setup = setup;
            this.configure()
            this.create()
            return this
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                element: {},
                tag: 'section'
            }, this.setup)
        }

        create() {
            this.element = El.Attr(El.create(this.setup.tag, this.setup.parent), this.setup.element)
            if (this.setup.hasOwnProperty('innerHTML')) this.element.innerHTML = this.setup.innerHTML
            return this;
        }

    }
}(Components)

// ! ==========================================================================================


/**
 * @class Components.button.Basic
 * Create a basic button 
 */
void

function (basic) {
    class ButtonBasic {

        constructor(setup) {
            this.setup = setup;
            this.configure()
            this.create()
            this.typeof = 'button';
            return this;
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                id: '',
                class: 'btn-standard',
                label: 'button name',
                value: 0,
                type: 'submit',
                onclick: null
            }, this.setup)

            this.parent = this.setup.parent
        }

        create() {
            this.button = El.Attr(El.create("button", this.parent), {
                "id": this.setup.id,
                "class": this.setup.class,
                "value": this.setup.value,
                "type": this.setup.type
            })

            if (typeof this.setup.onclick === 'string') {
                this.button.setAttribute('onclick', this.setup.onclick);
            } else if (Core.isFunction(this.setup.onclick)) {
                this.button.onclick = () => {
                    this.setup.onclick.call(this);
                }
            }



            this.button.innerHTML = this.setup.label;
        }


        get() {
            return this.button.value;
        }

    };

    basic.Basic = ButtonBasic;
}(Components.button);

/**
 * @class Components.button.Icon
 * Creates a icon button
 */
void

function (icon) {

    class ButtonIcon {
        constructor(setup) {
            this.setup = setup;
            this
                .configure()
                .create()
            return this;
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                icon: '',
                class: 'btn-icon ',
                onclick: null,
                id: null
            }, this.setup)

            return this;
        }

        create() {

            this.container = El.Attr(El.create('div', this.setup.parent), {
                class: this.setup.class,
                id: this.setup.id
            })

            this.icon = El.Attr(El.create('img', this.container), {
                src: Routes.Main.getItem('icon')(this.setup.icon)
            })

            if (Core.isFunction(this.setup.onclick)) {
                this.container.onclick = () => {
                    this.setup.onclick.call(this, this);
                }
            }

            return this;
        }

        destroy() {
            this.setup.parent.removeChild(this.container)
        }
    }

    icon.Icon = ButtonIcon;
}(Components.button)

// ! ==========================================================================================

/**
 * @class Components.window.Drawer
 * A floating layer that slides out from the edge of the page can be used instead of Modal 
 * to put more content.
 * 
 */

void 

function (drawer) {

    class WindowDrawer {

        constructor(setup) {
            this.setup = setup;
            this.isHide = false;
            this.configure();
            this.create()
            this.hide()
            
            return this;
        }

        configure(setup=null) {
            this.setup = Object.assign({
                parent: document.body,
                id: null,
                header: 'Title',
                onclose: null,
                body: '',
                onconfirm: null,
                class: 'drawer drawer_small',
                confirm: 'Confirm',
                close: 'Close',
                control: 'drawer_control'
            }, setup || this.setup)
            return this;
        }

        create() {
            
            this.container = El.Attr(El.create('section', this.setup.parent), {
                class: this.setup.class,
                id: this.setup.id
            })

            this.header = El.Attr(El.create('drawer_header', this.container), {
            })

            this.setHeader()

            this.body = El.Attr(El.create('drawer_body', this.container), {

            })

            this.setBody()


            this.control = El.Attr(El.create('div', this.container), {
                class: this.setup.control
            })

            this.close = new Components.button.Basic({
                parent: this.control,
                label: this.setup.close,
                onclick: this.setup.onclose,
                class: 'btn-white'
            })

            return this;
        }


        setHeader() {
            El.removeChild(this.header);

            if (typeof this.setup.header === 'string') {
                El.Attr(El.create('label', this.header), {

                }).innerHTML = this.setup.header;
            } else if (Array.isArray(this.setup.header)) {
                this.header.components = Components.create_array(this.setup.header, this.header);
            }
        }

        setBody() {
            El.removeChild(this.body);

            if (typeof this.setup.body === 'string') {
                El.Attr(El.create('div', this.body), {

                }).innerHTML = this.setup.body;
            } else if (Array.isArray(this.setup.body)) {
                this.body.components = Components.create_array(this.setup.body, this.body);
            }
        }
        
        refresh() {
            this.setHeader()
            this.setBody()
            // this.confirm.setup.onclick = this.setup.onconfirm;
            this.close.setup.onclick = this.setup.onclose;
            return this;
        }

        open() {
            El.removeClass(this.container, 'nested')
            this.isHide = false;
            return this;
        }

        hide() {
            El.addClass(this.container, 'nested')
            this.isHide = true;
            return this;
        }
    }
    drawer.Drawer = WindowDrawer;

}(Components.window);

// ! ==========================================================================================

/**
 * @field :card
 * Basic content container component
 * @class Components.card.Basic
 */

void

function (card_basic) {
    class CardBasic {

        constructor(setup) {
            this.setup = setup;
            this.typeof = 'card'
            this.configure()
                .create()
                .orientation()
            return this;
        }

        configure() {

            this.setup = Object.assign({
                parent: document.body,
                header: 'Basic Card',
                body: 'Basic Text',
                theme: 'card-standard',
                id: 'card-basic',
                classPortrait: null
            }, this.setup);

            return this;
        }

        create() {

            this.container = El.Attr(El.create('section', this.setup.parent), {
                id: this.setup.id,
                class: this.setup.theme
            })

            // El.addClass(this.container, this.setup.class)
            // this.container.class += this.setup.class;


            this.header = El.Attr(El.create('card_header', this.container), {

            })

            this.setHeader();

            this.body = El.Attr(El.create('card_body', this.container), {

            })

            this.setBody()

            return this;
        }


        setHeader() {
            El.removeChild(this.header);

            if (typeof this.setup.header === 'string') {
                El.Attr(El.create('label', this.header), {

                }).innerHTML = this.setup.header;
            } else if (Array.isArray(this.setup.header)) {
                this.header.components = Components.create_array(this.setup.header, this.header);
            }
        }

        setBody() {
            El.removeChild(this.body);

            if (typeof this.setup.body === 'string') {
                El.Attr(El.create('label', this.body), {

                }).innerHTML = this.setup.body;
            } else if (Array.isArray(this.setup.body)) {
                this.body.components = Components.create_array(this.setup.body, this.body);

            }
        }

        orientation() {
            if (!(Array.isArray(this.setup.classPortrait))) return
            if (Core.orientation.current === 'landscape') {
                this.setup.classPortrait.map(orc => El.removeClass(this.container, orc))
                //this.setup.classLandscape.map(lrc => El.addClass(this.container, lrc))
            } else {
                this.setup.classPortrait.map(orc => El.addClass(this.container, orc))
                //this.setup.classLandscape.map(lrc => El.removeClass(this.container, lrc))
            }
        }

    };
    card_basic.Basic = CardBasic;
}(Components.card);

// ! ==========================================================================================

/**
 * @field :opt
 * Element of my profile pic + about me + links
 */
void

function (about_profile) {
    class Profile {
        constructor(setup) {
            this.setup = setup;
            this.configure()
            this.create()
            return this;
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                id: 'profile',
                social: {
                    "behance": "https://www.behance.net/daxsoft",
                    "instagram": "https://www.instagram.com/vorlefan/",
                    "github": "https://github.com/DaxSoft",
                    "spotify": "https://open.spotify.com/user/8btt9iyhho52rxvtd53b8x3mi?si=MXwEmEEsRD-mNi3Eq_hmgA",
                    "email": "mailto:dax-soft@live.com"
                },
                skill_onclick: null
            })
        }

        async create() {

            this.container = El.Attr(El.create('section', this.setup.parent), {
                id: this.setup.id,
                class: 'profile_about_me'
            })

            this.cover = El.Attr(El.create('img', this.container), {
                src: Routes.Main.getItem('img')('michael.png'),
                alt: 'profile_picture'
            })

            // social media
            this.social = El.Attr(El.create('div', this.container), {
                style: `
                display: grid;
                grid-template-columns: repeat(5, 24px);
                grid-auto-rows: auto;
                grid-gap: .5rem;
                justify-content: center;
                justify-self: center;
                justify-items: center;
                `
            })

            this.create_social()

            this.text = El.Attr(El.create('p', this.container), {
                style: `
                    font-size: .75rem;
                    text-align: center;
                `
            })

            this.text.innerHTML = await Page.text('author-about.txt')

            // skills
            this.skills = new Components.button.Basic({
                label: {en: 'Skills', pt: 'Habilidades'}[localStorage.getItem('lang')],
                parent: this.container,
                onclick: this.setup.skill_onclick
            })


            this.orientation()

            return this;
        }

        create_social() {
            if (El.isnt(this.social)) return false;
            El.removeChild(this.social)

            Object.keys(this.setup.social).map(name => {
                const link = El.Attr(El.create('a', this.social), {
                    href: this.setup.social[name]
                })

                El.Attr(El.create('img', link), {
                    src: Routes.Main.getItem('icon')(`${name}.png`),
                    alt: `${name}_link`,
                    class: 'icon'
                }).style.width = '18px'
            })

            return true;
        }

        orientation() {
            if (Core.orientation.current === 'landscape') {

            } else {

            }
        }
    }
    about_profile.Profile = Profile;
}(Components.opt);

/**
 * @field :opt
 * Create the switcher language
 */
void

function (language) {
    class Lang {

        constructor(setup = {}) {

            this.setup = Object.assign({
                parent: document.body,
                lang: [{
                        icon: Routes.Main.getItem('icon')('usa.png'),
                        flag: 'en'
                    },
                    {
                        icon: Routes.Main.getItem('icon')('brazil.png'),
                        flag: 'pt'
                    }
                ]

            }, setup)


            this.create()
            return this;
        }

        create() {
            this.container = El.Attr(El.create('div', this.setup.parent), {
                class: 'lang'
            })

            this.setup.lang.map(lang => {
                El.Attr(El.create('img', this.container), {
                    src: lang.icon,
                    alt: lang.flag
                }).onclick = () => {
                    localStorage.setItem('lang', lang.flag)
                    document.location.reload();
                }
            })

            this.setup
        }
    }

    language.Lang = Lang;
}(Components.opt)

// ! ==========================================================================================

/**
 * @class Components.notification.Popup
 */
void

function (popup) {
    class PopupNotification {

        constructor(setup) {
            Components.notification._id++;
            this.setup = setup;
            this.configure()
            this.create();
            this.counter();
            if (Core.isFunction(this.setup.callback)) this.setup.callback.call(this);
            return this;
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                class: 'notification notification-default',
                classDestroy: 'notification-destroy',
                timeDestroy: 500,
                position: 'topCenter',
                time: 3000,
                pause: false,
                label: 'Text',
                icon: null,
                components: [],
                callback: null
            }, this.setup)

            this._nid = Components.notification._id;
            this.id = `notification_${this._nid}`;
            this.components = [];
            this.now = new Date();
        }

        destroy(forced = false) {
            if (forced === true) this.continue();
            if (this.paused()) return false;
            El.addClass(this.container, this.setup.classDestroy);
            setTimeout(() => {
                //El.removeChild(this.container);
                this.setup.parent.removeChild(this.container);
                Components.notification._pops[this._nid] = null;
                Components.notification._pops = Components.notification._pops.filter(popup => !(popup === null || popup === undefined));
            }, this.setup.timeDestroy || 550)
            return true;
        }

        counter() {
            if (this.paused()) return false;
            this.timeoutId = setTimeout(() => {
                this.destroy();
            }, this.setup.time)
            return true;
        }

        create() {
            this.container = El.Attr(El.create("notification", this.setup.parent), {
                "class": this.setup.class,
                "id": this.id
            })

            if (this.setup.position.length > 0) {
                El.addClass(this.container, this.setup.position);
            }

            // icon?
            if (typeof this.setup.icon === 'string') {
                this.icon = El.Attr(El.create("img", this.container), {
                    "class": "notification-icon",
                    "src": Routes.Main.getItem('icon')(this.setup.icon)
                })
            }
            // label
            this.label = El.Attr(El.create("label", this.container), {
                "class": "notification-label"
            })

            this.label.innerHTML = this.setup.label;
            // components
            this.create_components();
        }

        create_components() {

            if (this.setup.components.length > 0) {
                this.setup.components.forEach(value => {
                    var setup = {}
                    let keys;
                    //Core.Utils.Object.hasProperty(value, "parent", `@El.id(${this.id})`);
                    value.parent = value.parent || this.container
                    for (keys in value) {
                        if (keys !== 'component') {
                            setup[keys] = Components.attr(value[keys]);
                        }

                    }

                    const comp = Components.id(value.component, setup)
                    comp._popup = this;
                    this.components.push(comp);
                })
            }
        }

        /**
         * @method paused 
         * @description check out if is paused the popup
         */
        paused() {
            return this.setup.pause;
        }
        /**
         * @method pause 
         * @description pause the popup
         */
        pause() {
            this.setup.pause = true;
            clearTimeout(this.timeoutId);
            return this;
        }
        /**
         * @method continue 
         * @description continue the popup
         */
        continue () {
            this.setup.pause = false;
            return this;
        }



    };
    popup.Popup = PopupNotification;
}(Components.notification);

/**
 * @function Components.notification.Create 
 * @description create a popup
 */
Components.notification.Create = async function (setup) {
    const popup = new Components.notification.Popup(setup)
    Components.notification._pops[popup._nid] = popup;
}

// ! ==========================================================================================

/**
 * @class Components.alert.Info
 * Information reminder.
 */
void

function (alert_geral) {
    class Alert {

        constructor(setup) {
            this.setup = setup;
            this.configure()
            this.create()
            this.typeof = 'alert'
            return this;
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                icon: Routes.Main.getItem('icon')('info.png'),
                label: 'Information.',
                class: 'alert',
                type: 'ainfo',
                duration: 2000,
                position: 'topCenter',
                onclose: null,
                id: null,
                destroy: null
            }, this.setup);
            this.isClosed = false;
        }

        create() {

            this.container = El.Attr(El.create('div', this.setup.parent), {
                id: this.setup.id,
                class: this.setup.class,
                name: 'alert-system'
            })

            El.addClass(this.container, this.setup.type)

            El.addClass(this.container, this.setup.position);

            this.icon = El.Attr(El.create('img', this.container), {
                src: this.setup.icon
            })

            this.label = El.Attr(El.create('label', this.container), {})

            this.label.innerHTML = this.setup.label

            this.close = El.Attr(El.create('label', this.container), {
                style: 'cursor: pointer;'
            })

            this.close.innerHTML = '&times;'


            this.close.onclick = () => {
                if (Core.isFunction(this.setup.onclose)) this.setup.onclose.call(this, this);
                Components.alert._count--;
                try {
                    this.setup.parent.removeChild(this.container)

                } catch (error) {

                }
            }


            this.position()

            if (this.setup.destroy === null) {
                this.setup.destroy = `fadeOut ${this.setup.duration*.8}ms forwards ease-in;`
            }

            this.container.style.animation = this.setup.destroy

            Components.alert._count++;

            setTimeout(() => {
                if (this.isClosed === true) return
                Components.alert._count--;
                try {
                    El.removeChild(this.container)
                    this.setup.parent.removeChild(this.container)
                } catch (error) {

                }
            }, this.setup.duration)
        }

        position() {

        }

    };
    alert_geral.Geral = Alert;

    alert_geral.closeAll = function () {
       

        var el =  document.getElementsByName('alert-system')
        if (el.length > 0) {
            let i = el.length;
            while (i--) {
                const value = el.item(i);
                value.parentElement.removeChild(value);
            }
        }
    }
}(Components.alert);


/**
 * @function Components.id()
 * @description set a component by his id
 */

Components.id = function (id, setup) {
    const component = Components.get_component(id);
    if (!component) return false;
    return new component(setup);
}

/**
 * @function Components.get_component
 */
Components.get_component = function (id) {
    return {
        'basic': Components.Basic,
        'card-basic': Components.card.Basic,
        'button-basic': Components.button.Basic,
        'alert': Components.alert.Geral,
        'drawer': Components.window.Drawer
    } [id];
}

/**
 * @function Components.attr 
 */
Components.attr = function (setup) {
    if (typeof setup === 'string') {
        if (/^\@/gi.test(setup)) {
            return eval(setup.replace(/^\@/gi, ""));
        } else {
            return setup;
        }
    } else {
        return setup;
    }
}

/**
 * @function Componenets.create_array
 * 
 */
Components.create_array = function (components, parent) {
    var data = [];
    if (components.length > 0) {
        components.forEach(value => {

            var setup = {}
            let keys;
            value.parent = value.hasOwnProperty('parent') ? value : parent;

            for (keys in value) {
                if (keys !== 'component') {
                    setup[keys] = Components.attr(value[keys]);
                }

            }

            const comp = Components.id(value.component, setup)
            data.push(comp);
        })
    }
    return data;
}

/**
 * @function dt_prop
 * @description return the property value
 * @param {Object} dataItem 
 * @param {String|Array|Object} property
 * @returns {Object} return to the value of the property or
 * undefined, if doesn't exist
 */
Components.dt_prop = function (dataItem, property) {
    if (dataItem === null || dataItem === undefined) return;
    //console.log(dataItem, property, 'dt_prop');

    // array?
    if (Array.isArray(property)) {
        return dataItem.hasOwnProperty(property[0]) ? dataItem[property[0]][property[1]] : undefined;
    } else if (typeof property === 'object' && property.hasOwnProperty("key") && property.hasOwnProperty("value")) {
        return dataItem.hasOwnProperty(property.key) ? dataItem[property.key][property.value] : undefined;
    } else if (typeof property === 'string') {
        if (/^\s?\@/gmi.test(property)) {
            try {
                return eval(property.replace(/^\s?\@/gmi, ""))
            } catch (err) {}
        } else {
            return dataItem[property];
        }
    }
}
/**
 * @function st_prop 
 * @description set the property value
 * @param {Object} dataItem 
 * @param {String|Array|Object} property 
 * @param {Any} value 
 */
Components.st_prop = function (dataItem, property, value) {
    if (Haya.Utils.invalid(dataItem)) return;
    // types
    if (Array.isArray(property)) {
        if (dataItem.hasOwnProperty(property[0])) {
            return dataItem[property[0]][property[1]] = Components.attr(value);
        } else {
            return undefined;
        }
    } else if (typeof property === 'object' && property.hasOwnProperty("key") && property.hasOwnProperty("value")) {
        if (dataItem.hasOwnProperty(property.key)) {
            return dataItem[property.key][property.value] = Components.attr(value);
        } else {
            return undefined;
        }
    } else if (typeof property === 'string') {
        if (/^\s?\@/gmi.test(property)) {
            try {
                const prop = eval(property.replace(/^\s?\@/gmi, ""))
                dataItem[prop] = Components.attr(value);
            } catch (err) {
                return undefined;
            }
        } else {
            return dataItem[property] = Components.attr(value);
        }
    }
}
/**
 * @function onchange 
 * @description each document has his unique 'onchange'
 */
Components.onchange = function (comp, callback) {
    if (!Core.isFunction(callback)) return false;
    if (comp.onchange) {
        comp.onchange(callback)
        return true;
    } else {
        return false;
    }
}
/**
 * @function typeof 
 * @description return the proper value towards typeof
 * @param {Object} value 
 * @param {String} type
 */
Components.typeof = function (value, type) {
    const kinds = {
        'boolean': !!value
    } [type];

    return kinds || value;
}