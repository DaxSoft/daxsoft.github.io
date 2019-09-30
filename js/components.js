'use strict';

/**
 * @file haya-dom.js
 * 
 * This is a suit-toolkit to create components
 * 
 * @author Michael Willian Santos 
 * @github https://github.com/DaxSoft
 * @email dax-soft@live.com
 * @website https://daxsoft.github.io/
 * @version 0.3.1
 * @license MIT 
 * @requires dom.js  
 * 
 * Please, if this plugin was useful for you, consider giving a 'star'
 * on the github page of this plugin.
 * 
 * (documentation and so on)
 * @link 
 * 
 * Use CTRL+F to search for:
 *  :general 
 *  :button
 *  :tooltip
 *  :alert
 *  :popup
 *  :window
 *  :select
 *  :methods 
 */

// |---------------------------------------------------------------------------
// | Global variable for Components
// |---------------------------------------------------------------------------

var Components = {

    _list: {},

    // |-----------------------------------------------------------------------
    // | General components
    // |-----------------------------------------------------------------------

    button: {},
    input: {},
    window: {},
    card: {},
    alert: {
        _count: 0
    },
    popup: {
        _id: 0,
        _pops: []
    },
    tooltip: {},
    select: {},

    // |-----------------------------------------------------------------------
    // | Specific components
    // |-----------------------------------------------------------------------

    gallery: {}
}

// |============================================================================
// | :general
// |============================================================================
void

function (general) {

    class Basic {

        constructor(setup) {
            this.setup = setup
            this.configure()
            this.create()
            return this
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                tag: 'section',
                innerHTML: '',
                config: {},
                style: {}
            }, this.setup)
        }


        create() {
            this.element = El.Attr(El.create(this.setup.tag, this.setup.parent), this.setup.config)
            this.element.innerHTML = this.setup.innerHTML
            CSS.attach(this.element, this.setup.style)
        }
    }

    general.Basic = Basic
    Components._list['basic'] = Basic;

}(Components);

// |============================================================================
// | :button
// | Buttons
// |============================================================================

void

function (button) {

    // |-----------------------------------------------------------------------
    // | [Basic]
    // | The most basic kind of button
    // |-----------------------------------------------------------------------

    /**
     * @example 
     * // most basic sample
     * const button = new Componenets.button.Basic({
     *      label: 'Button',
     *      style: {
     *          $landscape: {
     *              default: {
     *                  $classic: true,
     *                  width: CSS.metric(Utils.aspect(160)),
     *                  $hover: { color: 'red' }
     *              }
     *          }
     *      },
     *      onclick: () => {
     *          console.log('this is a button!')
     *      }
     *  })
     */

    class Button_Basic {

        /**
         * @constructor
         * init variables from instance
         */
        constructor(setup = {}) {
            this.setup = setup;
            this.configure();
            this.create();
            return this;
        }

        /**
         * Configure variables and default values
         */
        configure() {
            this.setup = Object.assign({
                parent: document.body,
                label: 'Button',
                id: '',
                name: 'buttons',
                class: 'btn-standard',
                color: CSS.Global.root().color.neutral.lighter,
                onclick: null,
                onhover: null,
                style: {},
                disabled: false,
                renderProperty: 'button'
            }, this.setup);
        }

        /**
         * Create the element
         */
        create() {

            // element
            this.button = El.Attr(El.create('button', this.setup.parent), {
                id: this.setup.id,
                name: this.setup.name,
                type: 'submit',
                class: this.setup.class
            })

            // onclick
            if (typeof this.setup.onclick === 'string') {
                this.button.setAttribute('onclick', this.setup.onclick);
            } else if (Utils.isFunction(this.setup.onclick)) {
                this.button.onclick = () => {
                    this.setup.onclick(this.button, this);
                }
            }

            // disabled?
            if (this.setup.disabled === true) this.disable();

            // color
            this.button.style.color = this.setup.color;

            // style
            CSS.attach(this.button, this.setup.style)


            // label
            this.button.innerHTML = this.setup.label;
        }

        /**
         * Disable the button
         */
        disable() {
            this.button.setAttribute('disabled', 'true');
        }

        /**
         * Active the button
         */
        active() {
            this.button.removeAttribute('disabled');
        }

    }

    button.Basic = Button_Basic;
    Components._list['button'] = Button_Basic;

    // |-----------------------------------------------------------------------
    // | [Icon]
    // | Button with icon
    // |-----------------------------------------------------------------------

    class Button_Icon {

        /**
         * @constructor
         * init variables from instance
         */
        constructor(setup = {}) {
            this.setup = setup;
            this.configure();
            this.create();
            return this;
        }

        /**
         * Configure variables and default values
         */
        configure() {
            this.setup = Object.assign({
                parent: document.body,
                id: '',
                name: 'buttons',
                class: 'btn-icon',
                color: CSS.Global.root().color.neutral.secondary,
                onclick: null,
                onhover: null,
                style: {},
                disabled: false,
                src: null,
                circle: true,
                alt: 'icon_button',
                styleIcon: {}
            }, this.setup);
            this.isDisabled = false;
        }

        /**
         * Create
         */
        create() {
            // element
            this.button = El.Attr(El.create('div', this.setup.parent), {
                id: this.setup.id,
                name: this.setup.name,
                class: this.setup.class
            })

            // attach
            CSS.attach(this.button, this.setup.style)

            // icon
            if (typeof this.setup.src === 'string') {

                this.icon = El.Attr(El.create('img', this.button), {
                    src: this.setup.src,
                    alt: this.setup.alt
                })

                CSS.attach(this.icon, this.setup.styleIcon)
            }

            // onclick
            if (typeof this.setup.onclick === 'string') {
                this.button.setAttribute('onclick', this.setup.onclick);
            } else if (Utils.isFunction(this.setup.onclick)) {
                this.button.onclick = () => {
                    this.setup.onclick(this.button, this);
                }
            }

        }

        /**
         * Disable the button
         */
        disable() {
            this.isDisabled = true;
        }

        /**
         * Active the button
         */
        active() {
            this.isDisabled = false;
        }

        render_mode() {
            this.button.css.render_mode()
            if (this.icon) this.icon.css.render_mode()
        }
    }

    button.Icon = Button_Icon;
    Components._list['icon'] = Button_Icon;
}(Components.button);

// |============================================================================
// | :tooltip
// | A text tip for secondary
// |============================================================================

void

function (tooltip) {

    // |-----------------------------------------------------------------------
    // | [Basic]
    // | The most basic kind of tooltip
    // |-----------------------------------------------------------------------

    class Tooltip {

        constructor(setup = {}) {
            this.setup = setup;
            this.configure();
            this.create();

            return this;
        }

        configure() {
            this.setup = Object.assign({
                parent: document.body,
                style: {},
                label: 'This is a tooltip',
                id: '',
                name: 'tooltip',
                color: CSS.Global.root().color.neutral.black,
                backgroundColor: CSS.Global.root().color.neutral.lighter,
                isVisible: false,
                class: '',
                position: 'top', //top,bottom,left,right,
                margin: 20
            }, this.setup);

            this.isVisible = this.setup.isVisible;
        }

        create() {

            this.container = El.Attr(El.create('span', this.setup.parent), {
                id: this.setup.id,
                class: this.setup.class,
                name: this.setup.name
            })

            CSS.attach(this.container, Object.assign({
                $landscape: {
                    default: {
                        $classic: true,

                        'position': 'absolute',
                        width: CSS.metric(Utils.aspect(140)),
                        color: this.setup.color,
                        'background-color': this.setup.backgroundColor,
                        height: CSS.metric(Utils.aspect(16), 'px'),
                        'line-height': CSS.metric(30),
                        'text-align': 'center',
                        'visibility': 'hidden',
                        'border-radius': '6px',
                        display: 'block',

                        $hover: {
                            $parent: this.setup.parent,
                            $classic: true,

                            visibility: 'visible',
                            top: CSS.metric(this.setup.parent.offsetHeight + this.setup.margin),
                            left: CSS.metric((this.setup.parent.offsetWidth - CSS.metric(Utils.aspect(140))) / 2, 'px'),
                            'z-index': this.setup.parent.zIndex + 10
                        }
                    }
                }
            }, this.setup.style))

            this.container.innerHTML = this.setup.label

            this.arrow = El.Attr(El.create('span', this.container))

            CSS.attach(this.arrow, {
                landscape: {
                    default: {
                        $classic: true,

                        position: 'absolute',
                        bottom: '100%',
                        left: '50%',
                        'margin-left': '-8px',
                        width: 0,
                        height: 0,
                        'border-bottom': `8px solid ${this.setup.backgroundColor}`,
                        'border-right': '8px solid transparent',
                        'border-left': '8px solid transparent'
                    }
                }
            })

        }

        show() {
            El.removeClass(this.container, 'nested');
            this.isVisible = true;
        }

        hide() {
            El.addClass(this.container, 'nested')
            this.isVisible = false;
        }
    };

    tooltip.Basic = Tooltip;
    Components._list['tooltip'] = Tooltip;
}(Components.tooltip);

// |============================================================================
// | :alert
// | Global prompt information used to display informations after some action
// |============================================================================

void

function (alert) {

    // |-----------------------------------------------------------------------
    // | [close]
    // | Close all 'alert' elements
    // |-----------------------------------------------------------------------

    alert.Close = function () {
        var el = document.getElementsByName('alerts')
        if (el.length > 0) {
            let i = el.length;
            while (i--) {
                const value = el.item(i);
                value.parentElement.removeChild(value);
            }
        }
    }

    // |-----------------------------------------------------------------------
    // | [geral]
    // | Master class of all alert elements
    // |-----------------------------------------------------------------------

    class Alert {

        constructor(setup) {
            this.setup = setup;
            this.configure();
            this.create();
            return this;
        }

        configure() {

            this.setup = Object.assign({
                parent: document.body,
                icon: null,
                label: 'Information.',
                class: 'alert',
                type: 'ainfo',
                duration: 2000,
                position: 'topCenter',
                onclose: null,
                id: null,
                destroy: null,
                style: {},
                labelStyle: null,
                iconStyle: null
            }, this.setup);
            this.isClosed = false;

        }

        create() {

            this.container = El.Attr(El.create('div', this.setup.parent), {
                id: this.setup.id,
                class: this.setup.class,
                name: 'alerts'
            })
            El.addClass(this.container, this.setup.position);
            El.addClass(this.container, this.setup.type)
            CSS.attach(this.container, this.setup.style);

            if (!(Utils.invalid(this.setup.icon))) {
                this.icon = El.Attr(El.create('img', this.container), {
                    src: this.setup.icon
                })
            } else {
                this.icon = El.Attr(El.create('span', this.container), {})
            }

            if (!Utils.invalid(this.setup.iconStyle)) CSS.attach(this.icon, this.setup.labelStyle)

            this.label = El.Attr(El.create('label', this.container), {})
            this.label.innerHTML = this.setup.label

            if (!Utils.invalid(this.setup.labelStyle)) CSS.attach(this.label, this.setup.labelStyle)

            this.close = El.Attr(El.create('label', this.container), {
                style: 'cursor: pointer;'
            })
            this.close.innerHTML = '&times;'
            this.close.onclick = () => {
                if (Utils.isFunction(this.setup.onclose)) this.setup.onclose.call(this, this);
                Components.alert._count--;
                try {
                    this.setup.parent.removeChild(this.container)

                } catch (error) {

                }
            }

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

        destroy() {
            this.close.click();
        }
    };

    alert.Geral = Alert;
    Components._list['alert'] = Alert;

    // |-----------------------------------------------------------------------
    // | [create]
    // | Create a out-of alert component
    // |-----------------------------------------------------------------------

    alert.Create = function (setup = {}) {
        new Alert(setup);
    }
}(Components.alert);

// |============================================================================
// | :popup
// | Popup to interact
// |============================================================================

void

function (popup) {

    // |-----------------------------------------------------------------------
    // | Basic kind of
    // |-----------------------------------------------------------------------

    class Popup {

        constructor(setup) {
            Components.popup._id++;
            this.setup = setup;
            this.configure()
            this.create();
            this.counter();
            if (Utils.isFunction(this.setup.callback)) this.setup.callback.call(this);
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
                callback: null,
                style: {}
            }, this.setup)

            this._nid = Components.popup._id;
            this.id = `notification_${this._nid}`;
            this.components = this.setup.components;
            this.now = new Date();
        }

        destroy(forced = false) {
            if (forced === true) this.continue();
            if (this.paused()) return false;
            El.addClass(this.container, this.setup.classDestroy);
            setTimeout(() => {
                //El.removeChild(this.container);
                this.setup.parent.removeChild(this.container);
                Components.popup._pops[this._nid] = null;
                Components.popup._pops = Components.popup._pops.filter(popup => !(popup === null || popup === undefined));
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
                "id": this.id,
                name: 'notification-popup'
            })

            if (this.setup.position.length > 0) {
                El.addClass(this.container, this.setup.position);
            }

            CSS.attach(this.container, this.setup.style)

            // icon?
            if (typeof this.setup.icon === 'string') {
                this.icon = El.Attr(El.create("img", this.container), {
                    "class": "notification-icon",
                    "src": this.setup.icon
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

            this.components = Components.create_array(this.components, this.container)
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

    popup.Popup = Popup;
    Components._list['popup'] = Popup;

    popup.Create = async function (setup) {
        const popup = new Popup(setup)
        Components.popup._pops[popup._nid] = popup;
    }

    // |-----------------------------------------------------------------------
    // | [close]
    // | Close all 'notification-popup' elements
    // |-----------------------------------------------------------------------

    popup.Close = function () {
        Components.popup._pops.map(popup => {
            if (popup) popup.destroy(true)
        })
    }

}(Components.popup);

// |============================================================================
// | :window
// | All kind of window components
// |============================================================================

void

function (window) {

    // |-----------------------------------------------------------------------
    // | [Drawer]
    // | Floating layer that come out from the edge of the screen
    // |-----------------------------------------------------------------------

    class Drawer {

        constructor(setup) {
            this.setup = setup;
            this.configure()
            this.create();
            return this;
        }

        configure(setup = null) {

            if (Utils.invalid(setup)) {
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
                    control: 'drawer_control',
                    hide: true,
                    style: {},
                    headerStyle: {},
                    bodyStyle: {}
                }, this.setup)
            } else {
                this.setup = Object.assign(this.setup, setup)
            }

            this.isHide = this.setup.hide;
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

        create() {
            this.container = El.Attr(El.create('section', this.setup.parent), {
                class: this.setup.class,
                id: this.setup.id
            })
            CSS.attach(this.container, this.setup.style)

            this.header = El.Attr(El.create('drawer_header', this.container), {})
            this.setHeader()
            CSS.attach(this.header, this.setup.headerStyle)

            this.body = El.Attr(El.create('drawer_body', this.container), {})
            this.setBody()
            CSS.attach(this.body, this.setup.bodyStyle)

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

        refresh() {
            this.setHeader()
            this.setBody()
            this.close.setup.onclick = this.setup.onclose;
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

        render_mode() {
            this.container.css.render_mode();
            this.body.css.render_mode()
            this.header.css.render_mode()
        }
    };

    window.Drawer = Drawer;
    Components._list['drawer'] = Drawer;

    // |-----------------------------------------------------------------------
    // | [Modal]
    // | A modal dialog box component for message prompts
    // |-----------------------------------------------------------------------

    class Modal {

    };

    Components._list['modal'] = Modal;
    window.Modal = Modal;

}(Components.window)

// |============================================================================
// | :select
// | All kind of list components
// |============================================================================

void

function (select) {

    // |-----------------------------------------------------------------------
    // | [Dropbox]
    // | Drop-down menu-list that the user select a value
    // |-----------------------------------------------------------------------

    /**
     * @example
     * // Most basic sample
     * const dropbox = new Components.select.Dropdown({
     *  data: [{label: 'Item 1', value: 0}, {label: 'Item 2', value: 1}],
     *  optionClick: ({self, label, value, option, element}) => {
     *    El.toggleClass(self.select, 'nested')
     *    self.label.innerHTML = label;
     *    console.log(option, element)
     *  }
     * })
     */

    class Dropdown {

        constructor(setup = {}) {
            this.setup = setup;
            this.configure();
            this.create();
            return this;
        }

        configure() {

            this.setup = Object.assign({
                parent: document.body,
                id: '',
                class: 'select-standard',
                classSelect: 'dropdown-standard',
                classOption: 'dropdown-standard_option',
                style: {},
                data: [{
                    label: 'Default',
                    value: 0
                }],
                property: {
                    label: 'label',
                    value: 'value'
                },
                onchange: null,
                onhover: null,
                onclick: null,
                selectStyle: {
                    landscape: {
                        default: {
                            $classic: true,
                            width: CSS.metric(Utils.aspect(160))
                        }
                    }
                },
                optionStyle: {},
                open: true,
                icon: null,
                label: 'List',
                iconStyle: {},
                trigger: ['click'],
                optionClick: null,
                labelHide: true,
                labelStyle: {}
            }, this.setup);

            this.data = this.setup.data;
            this.options = [];
            this.isOpen = this.setup.open
            this.isSelect = false;
            this.index = 0;
            this._current = null;

            return this;
        }

        open() {
            El.removeClass(this.container, 'nested')
            this.isOpen = true;
            return this;
        }

        close() {
            El.addClass(this.container, 'nested')
            this.isOpen = false;
            return this;
        }

        create() {
            // container
            this.container = El.Attr(El.create("div", this.setup.parent), {
                id: this.setup.id,
                class: this.setup.class
            })
            CSS.attach(this.container, this.setup.style)

            this.container.onmouseover = () => {
                if (this.setup.trigger.includes('hover')) El.toggleClass(this.select, 'nested');
                if (Utils.isFunction(this.setup.onhover)) this.setup.onhover(this);
            }

            // icon?
            if (!(Utils.invalid(this.setup.icon))) {
                this.icon = El.Attr(El.create('img', this.container), {
                    src: this.setup.icon,
                    alt: 'dropbox_icon'
                })
                CSS.attach(this.icon, this.setup.iconStyle)
            }

            // label
            this.label = El.Attr(El.create("label", this.container), {})
            this.label.innerHTML = this.setup.label;
            this.label.onclick = () => {
                if (this.setup.trigger.includes('click')) {
                    El.toggleClass(this.select, 'nested')
                    if (this.setup.labelHide === true) {
                        El.toggleClass(this.label, 'nested')
                        if (El.is(this.icon)) El.toggleClass(this.icon, 'nested')
                    }
                };
                if (Utils.isFunction(this.setup.onclick)) this.setup.onclick(this);
            }
            CSS.attach(this.label, this.setup.labelStyle)

            // select
            this.select = El.Attr(El.create("div", this.container), {
                class: this.setup.classSelect
            })
            El.addClass(this.select, 'nested');
            CSS.attach(this.select, this.setup.selectStyle)
            if (Utils.isFunction(this.setup.onchange)) this.select.onchange = () => {
                this.setup.onchange.call(this, this.get())
            };

            this.setOptions();
        }

        setOptions() {
            El.removeChild(this.select);
            this.options.length = 0;

            if (this.data.length > 0) {
                this.data.forEach(option => {
                    const element = El.Attr(El.create("div", this.select), {
                        value: option[this.setup.property.value],
                        class: this.setup.classOption
                    })

                    element.innerHTML = option[this.setup.property.label]

                    //El.addClass(element, this.setup.optionClass)
                    CSS.attach(element, this.setup.optionStyle)

                    if (Utils.isFunction(this.setup.onhover)) {
                        element.onmouseover = () => {
                            this.setup.onhover.call(this, option, element, this)
                        }
                    }

                    if (Utils.isFunction(this.setup.optionClick)) {
                        element.onclick = () => {
                            this.index = parseInt(element.getAttribute('value'));
                            this._current = element;
                            if (this.setup.labelHide === true) {
                                El.toggleClass(this.label, 'nested')
                                if (El.is(this.icon)) El.toggleClass(this.icon, 'nested')
                            }
                            this.setup.optionClick({
                                value: this.index,
                                label: option[this.setup.property.label],
                                option,
                                element,
                                self: this
                            })

                        }
                    }

                    this.options = [...this.options, element]
                })
            }
        }

        current() {
            return this._current;
            return this.data.find(el => el[this.setup.property.value] === +this.get());
        }

        get() {
            return parseInt(this.select.value);
        }

        choose(value) {
            const option = this.options.find(opt => opt.value === String(value)) //.pop()

            //console.log(option, value);

            if (option) {
                //const index = this.options.indexOf(option);
                const index = option.index;
                //console.log(index, option);

                this.select.value = index;
                this.select.selectIndex = index;
            };
            return option;
        }
    };

    select.Dropbox = Dropdown;
    Components._list['dropdown'] = Dropdown;

    // |-----------------------------------------------------------------------
    // | [Nav]
    // | Forms of navigation menus
    // |-----------------------------------------------------------------------

    /**
     * @example
     * // most basic sample
     * const nav = new Componenets.select.Nav({
     *  style: {
     *      $landscape: {  default: { width: CSS.metric(100, 'vw') }  }
     *  },
     *  
     *  items: [
     *      { component: 'button', label: 'Home', onclick: () => console.log('Home') },
     *      { component: 'button', label: 'About', onclick: () => console.log('About') },
     *  ],
     * 
     *  itemStyle: {
     *      $landscape: {
     *          default: { $classic: true, border: 'none' } 
     *      },
     *      $portrait: {
     *          default: { $classic: true, color: 'red' }
     *      }
     *  }
     * })
     */

    class Nav {

        constructor(setup) {
            this.setup = setup || {};
            this.configure();
            this.create();
            return this;
        }

        configure() {

            this.setup = Object.assign({
                parent: document.body,
                color: CSS.Global.root().color.neutral.light,
                style: {},
                class: 'nav',
                items: [],
                layout: Utils.screen.current,
                onclick: null,
                onhover: null,
                hide: false,
                itemStyle: {},
                id: '',
                itemStyleProperty: 'style'
            }, this.setup);

            this.isHide = this.setup.hide;
            this.layout = this.setup.layout;
            this.items = this.setup.items;

            return this;
        }

        hide() {
            El.addClass(this.container, 'nested');
            this.isHide = true;
            return this;
        }

        open() {
            El.removeClass(this.container, 'nested')
            this.isHide = false;
            return this;
        }

        refresh() {
            El.removeChild(this.container);
            this.items.length = 0;
            this.hide();
            return this;
        }

        create() {
            // container
            this.container = El.Attr(El.create('section', this.setup.parent), {
                id: this.setup.id,
                class: this.setup.class
            })
            //if (this.layout === 'portrait') El.addClass(this.container, 'nav-portrait');
            CSS.attach(this.container, this.setup.style)

            this.render();
        }

        render() {
            //if (this.items.length < 1) return;

            this.items.forEach(el => el[this.setup.itemStyleProperty] = Object.assign(this.setup.itemStyle, el.style))
            this.items = Components.create_array(this.items, this.container)
        }

        render_mode() {
            this.container.css.render_mode();
            this.items.map(item => {
                if (item && item.setup && item.setup.renderProperty) {
                    item[item.setup.renderProperty].css.render_mode()
                }
            })
        }
    };

    select.Nav = Nav;
    Components._list['nav'] = Nav;
}(Components.select)

// |============================================================================
// | :methods
// | General methods
// |============================================================================

/**
 * @function Components.id()
 * @description set a component by his id
 */

Components.id = function (id, setup) {
    const component = Components.list(id);
    if (!component) return false;
    return new component(setup);
}

/**
 * @function Components.list
 */
Components.list = function (id) {
    return Components._list[id];
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
        components.map(value => {

            var setup = {}
            let keys;
            value.parent = value.hasOwnProperty('parent') ? value : parent;

            for (keys in value) {
                if (keys !== 'component') {
                    setup[keys] = Components.attr(value[keys]);
                }

            }

            const comp = Components.id(value.component, setup)
            comp._parent = parent;
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
    if (Utils.invalid(dataItem)) return;
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