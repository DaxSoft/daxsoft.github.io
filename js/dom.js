'use strict';

/**
 * @file haya-dom.js
 * 
 * This is a suit-toolkit to create & manipulate DOMElements. 
 * 
 * @author Michael Willian Santos 
 * @github https://github.com/DaxSoft
 * @email dax-soft@live.com
 * @website https://daxsoft.github.io/
 * @version 0.2.3
 * @license MIT 
 * 
 * Please, if this plugin was useful for you, consider giving a 'star'
 * on the github page of this plugin.
 * 
 * (documentation and so on)
 * @link 
 * 
 * Use CTRL+F to search for:
 *  :utils | Useful general methods
 *  :el | Useful methods to handle with HTMLElements
 *  :css | Class to handle with 'css style'
 *  :route | Define routes to access URI
 */

// |---------------------------------------------------------------------------
// | Global variable for 'Utils'
// |---------------------------------------------------------------------------

var Utils = {
    // store the orientation screen values
    screen: {}
};

// |---------------------------------------------------------------------------
// | Global variable for 'HTMLElements'
// |---------------------------------------------------------------------------

var El = {};

// |---------------------------------------------------------------------------
// | Global variable for 'CSS'
// |---------------------------------------------------------------------------

var CSS = {
    // store all elements
    _elements: []
};


// |---------------------------------------------------------------------------
// | Global variable for Route & Routes
// |---------------------------------------------------------------------------

var Routes = {
    // contain all groups
    _groups: {},
    // all routes
    _routes: []
}

var Route = {};

// |============================================================================
// | :utils
// | Useful general methods
// |============================================================================

void

function (util) {

    /**
     * @function invalid
     * Check out if the object is invalid (null or undefined)
     * @param {Object} object 
     * @returns {Boolean}
     */
    util.invalid = function (object) {
        return (typeof object === 'undefined') || (object === null)
    }

    /**
     * @function join 
     * This method joins all given path segments together 
     * using the platform-specific separator as a delimiter, then normalizes the resulting path.
     * It was inspired on 'path.join' from NodeJS, however, this here is pretty simple
     * @param {Array} paths All values must be the string type
     * @example 
     * Utils.join('www.daxsoft.github.io', 'rpgmaker/immersion_plugin.html')
     * // 'www.daxsoft.github.io/rpgmaker/immersion_plugin.html'
     * @returns {String}
     */
    util.join = function (...paths) {
        return paths.filter(path => typeof path === 'string').map(str => str.replace(/(\/)[(/)]/g, '/')).join('/');
    }

    /**
     * @function isFunction
     * Check out if the object is a function type
     * @param {Object} object 
     * @returns {Boolean}
     */
    util.isFunction = function (object) {
        return typeof (object) == 'function';
    }

    /**
     * @function device_orientation
     * Check out the orientation of the device by checkin' up his 
     * size (witdth x height).
     * @param {Number} [aspect_x=1] the aspect ration of the width
     * @param {Number} [aspect_y=1] the aspect ration of the height
     * @returns {Object} { current, reverse, percent }
     */
    util.device_orientation = function (aspect_x = 1, aspect_y = 1) {
        let width = (document.documentElement.clientWidth) * aspect_x;
        let height = (document.documentElement.clientHeight) * aspect_y;
        let orientation = (width > height ? 'landscape' : 'portrait');
        let percent = util.float(height / width)
        let amount = (util.screen.percent - percent) * 100;
        if (amount < 0.0) amount *= -1;
        return util.screen = {
            current: orientation,
            reverse: orientation === 'landscape' ? 'portrait' : 'landscape',
            percent,
            amount
        }
    }

    /**
     * @function rand
     * Get a random numeric between a min and max value.
     * @param {Number} min 
     * @param {Number} max
     * @return {number}
     */
    util.rand = function (min = 1, max = 10) {
        return Math.random() * (max - min) + min;
    }

    /**
     * @function rand_int
     * Get a random numeric between a min and max value with integer value.
     * @param {Number} min 
     * @param {Number} max
     * @return {number}
     */
    util.rand_int = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return ~~(Math.random() * (max - min + 1)) + min;
    }

    /**
     * @function float 
     * Fix the value of a float
     * @param {Number} value 
     * @param {Number} [n=2] decimal
     * @returns {Number}
     */
    util.float = (value, n = 2) => {
        return parseFloat(value).toFixed(n || 2);
    }

    /**
     * @function clamp
     * Clamping a number
     * @param {Number} [current]
     * @param {Number} [min]
     * @param {Number} [max]
     * @returns {Number}
     */
    util.clamp = (current, min, max) => {
        return (
            (current > min ? (current < max ? current : max) : min)
        );
    }

    /**
     * @function fincrease
     * Increase a float value for a variable
     * while clamping the value
     * @param {Number} [current] // value to increase
     * @param {Number} [min]
     * @param {Number} [max]
     * @param {Number} [amount] // how many will increase
     */
    util.increase = (current, min, max, amount) => {
        current += amount;
        return util.clamp(current, min, max);
    }

    /**
     * @function fdecrease
     * Decrease a float value for a variable
     * while clamping the value
     * @param {Number} [current] // value to decrease
     * @param {Number} [min]
     * @param {Number} [max]
     * @param {Number} [amount] // how many will decrease
     */
    util.decrease = (current, min, max, amount) => {
        current -= amount;
        return util.clamp(current, min, max);
    }

    /**
     * @function swap 
     * Swap a array to another 
     */
    util.swap = function (arr, from, to) {
        arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    }

    /**
     * @function aspect
     * Get a size that follows the aspect ration of the screen
     */
    util.aspect = function (value, reverse=false, aspect = util.screen.percent) {
        let percent = 1.0 - ((value * (aspect)) / 100);
        return reverse === true ? util.float((value - (percent * value))) : util.float((value + (percent * value)))
    }
}(Utils);

Utils.device_orientation();

// |============================================================================
// | :el
// | Methods to handle with HTMLElements
// |============================================================================

void

function (element) {
    /**
     * @function id
     * Get the element from his ID
     * @param {String} [id] id to search
     * @param {Function} [fallback] if not find, calls a function with the id as param,
     * then return back to the function as callback. Use this to create the element.
     * @returns {HTMLElement}
     */
    element.id = function (el, fallback = null) {
        if (el instanceof HTMLElement) return el;
        const element = document.getElementById(String(el))
        if (!element && Utils.isFunction(fallback)) {
            fallback.call(this, el);
        }
        return element;
    }

    /**
     * @function is 
     * Check out if the object is HTMLELement
     * @returns {Boolean}
     */
    element.is = function (el) {
        return (element.id(el) instanceof HTMLElement);
    }

    /**
     * @function isnt 
     * Check out if the object isn't HTMLELement
     * @returns {Boolean}
     */
    element.isnt = function (el) {
        return !(element.id(el) instanceof HTMLElement);
    }

    /**
     * @function create 
     * Create a element 
     * @param {String} [tagName] new element tag
     * @param {HTMLElement} [parent=document.body] element to append the new element 
     * @returns {HTMLElement}
     */
    element.create = function (tagName, parent = document.body) {
        const element = document.createElement(tagName);
        if (parent instanceof HTMLElement) parent.appendChild(element);
        return element;
    }

    /**
     * @function Attr
     * Allows you to set multiple attributes 
     * @param {String|HTMLElement} el string search by id 
     * @param {Object} attributes[attr_name: value]
     * @returns {HTMLElement}
     * @example 
     * El.Attr("img", { src: "../test.png" })
     */
    element.Attr = function (el, attributes) {
        el = element.id(el);
        let keys;
        for (keys in attributes) {
            el.setAttribute(keys, attributes[keys]);
        }
        return el;
    }

    /**
     * @function hasClass
     * Check if the element has the class
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @returns {Boolean} 
     */
    element.hasClass = function (el, className) {
        return (
            el.hasOwnProperty('classList') ? !!className && el.classList.contains(className) :
            el.className.split(/\s+/g).indexOf(className) !== -1
        )
    }

    /**
     * @function removeClass
     * Removes a class name from the element
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @returns {HTMLElement} 
     */
    element.removeClass = function (el, className) {
        el = element.id(el);
        el.classList.remove(className);
        return el;
    }

    /**
     * @function addClass
     * Adds a class name to element
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @returns {HTMLElement}
     */
    element.addClass = function (el, className) {
        el = element.id(el);
        el.classList.add(className)
        return el;
    }

    /**
     * @function toggleClass
     * Toggle the class into the element. If exist, removes; if not exist, add.
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @returns {HTMLElement}
     */
    element.toggleClass = function (el, className) {
        el = element.id(el);
        el.classList.toggle(className);
        return el;
    }

    /**
     * @function El.removeChildren
     * Remove all childrens from the element
     * @param {String|HTMLElement} el element
     * @returns {HTMLElement}
     */
    element.removeChild = function (el) {
        el = element.id(el);
        if (el.children.length > 0) {
            let i = el.children.length;
            while (i--) {
                el.removeChild(el.children.item(i));
            }
        }
        return el;
    }

    /**
     * @function El.each
     * Map through the children from the element 
     * @param {String|HTMLElement} el element
     * @param {Function} callback (children, index, array, size)
     * @returns {Array}
     */
    element.each = function (el, callback) {
        var childrens = [];
        el = element.id(el);
        if (el.children.length > 0) {
            let i = el.children.length;
            while (i--) {
                callback(el.children.item(i), i, childrens.push(el.children.item(i)), el.children.length);
            }
        }
        return childrens;
    }

    /**
     * @function getRoot 
     * Get a value from root
     * @param {String} [variable]
     * @param {String|HTMLElement} [el=document.body]
     */
    element.getRoot = function (variable, el = document.body) {
        return getComputedStyle(el).getPropertyValue(variable)
    }

    /**
     * @function to
     * To a URI link
     * @param {String} uri 
     */
    element.to = function (uri) {
        El.Attr(El.create('a', document.body), {
            href: uri,
            id: 'haya__to-link'
        }).click();
        document.body.removeChild(element.id('haya__to-link'))
    }
}(El);

// |============================================================================
// | :css http://www.cssarrowplease.com/
// | Methods to handle with CSS Style on HTMLElements
// |============================================================================

void

function (css) {

    css._id = 0;

    // |-----------------------------------------------------------------------
    // | Default color schema
    // |-----------------------------------------------------------------------

    css.default_color = {

        neutral: {

            black: '#141414',
            dark: '#212121',
            primary: '#333333',
            secondary: '#666666',

            transition: '#c8c8c8',
            transitionPrimary: '#a6a6a6',
            transitionSecondary: '#dadada',

            light: '#eaeaea',
            lighter: '#f4f4f4',
            white: 'f5f5f5'
        },

        system: {
            error: '#a62c2a',
            warning: '#c8a368',
            success: '#82aa69',
            information: '#83a9a1',
            disable: '#4a3741',
            interactive: '#d1ac56',
            hover: '#ce911f'
        },

        theme: {
            primary: '#e0ab5b',
            secondary: '#9e7539',
            disable: '#6e4c41',
            highlight: '#eeb22d',
            label: '#dadada',
            stagnation: '#717b62',
            paragraph: '#faebd7'
        }

    }

    css.default_color.gradient = {
        greenBlue: 'linear-gradient(to right, #25c481, #25b7c4)',
        primary: 'linear-gradient(to left, #e0ab5b, #717b62)',
        disable: 'linear-gradient(to left, #6e4c41, #717b62)'
    }

    // |-----------------------------------------------------------------------
    // | Default animation set up
    // |-----------------------------------------------------------------------

    css.default_animation = {
        short: '.25s',
        normal: '.5s',
        long: '1s',
        big: '2s'
    }

    // |-----------------------------------------------------------------------
    // | [CSSRoot]
    // | Global variables
    // |-----------------------------------------------------------------------

    class CSSRoot {

        /**
         * @constructor
         * Init variables from instance
         */
        constructor(setup = {}) {
            this._root = {};
            this._setup = setup;
            this._theme = 'standard';
            this.configure();
            return this;
        }

        /**
         * Configure the values as well, set up default values
         */
        configure() {
            this._root = Object.assign({
                standard: {
                    color: css.default_color,
                    animation: css.default_animation
                }
            }, this._setup);
        }

        /**
         * Take out a value from root
         */
        root() {
            return this._root[this._theme];
        }

        /**
         * Check if has the theme
         */
        has(theme) {
            return this._root.hasOwnProperty(theme);
        }
    };

    css.Global = new CSSRoot;

    // |-----------------------------------------------------------------------
    // | [Style]
    // | Create a class for the element to handle with css
    // |-----------------------------------------------------------------------

    class Style {

        /**
         * @constructor
         * Init variables from instance
         */
        constructor(setup = {}, element) {
            this.setup = setup;
            this.element = element;
            CSS._id++;
            //this._mode = 'landscape';
            this.isHover = false;
            this.configure()
            
            if (this.replacement === true && this._mode !== '_landscape') {
                this.mode = 'landscape'
                this.render();
                this.replacement = false;
                this.mode = this.setup.mode;
            }

            this.render();

            return this;
        }

        /**
         * Configure default values
         */
        configure() {
            // setup
            this.setup = Object.assign({
                id: `css_${CSS._id.toString(16)}`,
                $landscape: {
                    default: {}
                },
                $portrait: {
                    default: {}
                },
                layout: true,
                replacement: true,
                mode: Utils.screen.current
            }, this.setup);

            this.replacement = this.setup.replacement;
            this.id = this.setup.id
            // mode
            Object.keys(this.setup).filter(el => /^\$/.test(el.toString())).map(lays => {
                this[`_${lays.replace(/\$/g, '')}`] = this.setup[lays];
            })

            this.mode = this.setup.mode;
        }

        /**
         * Get the current setup
         */
        current() {
            // if (this._mode.includes('landscape')) {
            //     return this._landscape
            // } else {
            //     return Object.assign(this[this._mode], this._landscape)
            // }
           return this[this._mode] || this._landscape;
        }

        /**
         * Change the mode to
         */
        set mode(value) {
            if (this[`_${value}`]) {
                this._mode = `_${value}`;
                return this.current();
            } else {
                console.log("this mode doesn't exist")
                return this.current();
            }
        }

        /**
         * Check if has the mode
         */
        has(style) {
            return this.current().hasOwnProperty(style);
        }

        /**
         * Render the style into element
         */
        render(style = 'default', classic = false) {
            //if (this.setup.layout === true) this.mode = Utils.screen.current;
            // check if has?
            if (this.has(style)) {
                //console.log(this.current()[style], this.id);
                
                if (this.current()[style].hasOwnProperty('$classic')) classic = this.current()[style].$classic;
                // model?
                if (this.current()[style].hasOwnProperty('$model')) {
                    let modelValue = this.current()[style].$model.split('.')
                    let modelStyle = '_'.concat(modelValue[0])
                    console.log(modelValue, modelStyle, this[modelStyle] );
                    
                    if (this[modelStyle] && this[modelStyle].hasOwnProperty(modelValue[1])) {
                        //console.log(Object.assign(this.current()[style], this[modelStyle][modelValue[1]]));
                        
                        this.current()[style] = Object.assign(this[modelStyle][modelValue[1]], this.current()[style])


                    }
                }
                // classic? [.css way]
                if (classic === true) {
                    var props = [];

                    for (let skey in this.current()[style]) {
                        if (/^\$/gi.test(skey)) {
                            this.property(skey, this.current()[style][skey], style)
                            continue;
                        };
                        let value = this.value(this.current()[style][skey]);
                        let end_point = /\;$/gi.test(value.toString()) ? '' : ";";
                        props.push(`${skey}: ${value}${end_point}`)
                    }

                    this.element.style = props.join('\n');
                } else {
                    for (let skey in this.current()[style]) {
                        if (/^\$/gi.test(skey)) {
                            this.property(skey, this.current()[style][skey], style)
                            continue;
                        };
                        if (/^\$/gi.test(skey)) continue;
                        let value = this.value(this.current()[style][skey]);
                        this.element.style[skey] = value;
                    }
                }
            }
        }

        /**
         * Set the render and the mode
         */
        render_mode(layout=Utils.screen.current, style='default') {
            this.mode = layout;
            this.render(style)
        }

        /**
         * Property render
         */
        property_render(propValue, classic = false) {
            for (let skey in propValue) {
                if (/^\$/gi.test(skey)) {
                    //this.property(skey, this.current()[style][skey], style)
                    continue;
                };
                let value = this.value(propValue[skey]);
                this.element.style[skey] = value;
            }

            return;

            if (classic === true) {
                var props = [];

                for (let skey in propValue) {
                    if (/^\$/gi.test(skey)) {
                        //this.property(skey, this.current()[style][skey], style)
                        continue;
                    };
                    let value = this.value(propValue[skey]);
                    let end_point = /\;$/gi.test(value.toString()) ? '' : ";";
                    props.push(`${skey}: ${value}${end_point}`)
                }

                this.element.style += props.join('\n');
            } else {
                for (let skey in propValue) {
                    if (/^\$/gi.test(skey)) {
                        //this.property(skey, this.current()[style][skey], style)
                        continue;
                    };
                    let value = this.value(propValue[skey]);
                    this.element.style[skey] = value;
                }
            }
        }

        /**
         * Render to property
         */
        property(skey_property, value, style) {
            switch (skey_property.replace(/^\$/g, '').toLowerCase()) {
                case 'hover':
                    if (value.hasOwnProperty('$parent') && El.is(value.$parent)) {

                        const old_onmouseover = value.$parent.onmouseover
                        value.$parent.onmouseover = (event) => {
                            this.property_render(value, value.hasOwnProperty('$classic') && value.$clasic === true)
                            this.isHover = true;
                            old_onmouseover.apply(value.$parent, old_onmouseover)
                        }

                        const old_onmouseout = value.$parent.onmouseout;
                        value.$parent.onmouseout = (event) => {
                            if (this.isHover === true) {
                                this.render(style)
                                this.isHover = false;
                            }
                            old_onmouseout.apply(value.$parent, old_onmouseout)
                        }

                    } else {
                        if (Utils.isFunction(this.element.onmouseover)) {
                            const old_onmouseover = this.element.onmouseover
                            this.element.onmouseover = (event) => {
                                this.property_render(value, value.hasOwnProperty('$classic') && value.$classic === true)
                                this.isHover = true;
                                old_onmouseover.apply(old_onmouseover)
                            }

                            
                        } else {

                            this.element.onmouseover = (event) => {
                                this.isHover = true;
                                this.property_render(value, value.hasOwnProperty('$classic') && value.$classic === false)
                            }

                        }

                        this.element.onmouseout = (event) => {
                            if (this.isHover === true) {
                                this.render(style)
                                
                                this.isHover = false;
                            }
                        }

                        
                    }
                    break;
                default:
                    break;
            }
        }

        /**
         * Get the value kindof
         */
        value(obj) {
            if (Array.isArray(obj)) {
                //
            } else if (Utils.isFunction(obj)) {
                return obj(this);
            }
            return obj;
        }


    };

    css.Style = Style;

    // |-----------------------------------------------------------------------
    // | [Manager] 
    // | Access elements that use this class
    // |-----------------------------------------------------------------------

    /**
     * @function attach
     * Attach a new element to use the Style class
     * Access the class by using the variable '.css' from element
     * @param {HTMLELement} [element]
     * @param {Object} [setup] default setup if nothing is configured
     * @returns {Style}
     */
    css.attach = function (element, setup = {}) {
        element = El.id(element);
        element.css = new Style(setup, element);
        return element.css;
    }

    /**
     * @function has 
     * Check out if the HTMLElement has the Style class
     * @param {HTMLELement} [element]
     * @returns {Boolean}
     */
    css.has = function (element) {
        element = El.id(element);
        return element.hasOwnProperty('css') && element.css instanceof Style;
    }

    /**
     * @function expel 
     * Removes the Style class from a element
     * @param {HTMLELement} [element]
     * @returns {HTMLELement}
     */
    css.expel = function (element) {
        element = El.id(element);
        if (css.has(element)) {
            delete css._elements[element.css.id];
            element.css = undefined;
        }
        css._elements = css._elements.filter(el => !Utils.invalid(el));
        return element;
    }

    /**
     * @function elements 
     * Access all elements that uses Style class
     * @returns {Object} {id_key: StyleClass}
     */
    css.elements = function () {
        return css._elements;
    }

    /**
     * @function metric 
     * System metric value
     */
    css.metric = function (value, metric = 'px') {
        return value.toString().concat(metric)
    }

}(CSS);

// |============================================================================
// | :route
// | Easy way to access a URI 
// |============================================================================

void

function (route) {
    /**
     * @function set 
     * Set a new route 
     * @returns {Route}
     */
    route.set = function () {
        return new Route();
    }

    /**
     * @function group 
     * Set a new route with instance
     * @param {function} [callback]
     */
    route.group = function (callback) {
        const instance = new Route();
        callback.call(this, instance);
        return instance;
    }

    /**
     * @function prefix 
     * @description access a route by the prefix
     * @param {String} [prefix]
     */
    route.prefix = function (prefixValue) {
        if (route._groups.hasOwnProperty(prefixValue)) {
            return route._groups[prefixValue]
        } else {
            return undefined;
        }
    }

    // |-----------------------------------------------------------------------
    // | Routes
    // |-----------------------------------------------------------------------
    class Route {
        /**
         * @constructor
         * Init variables from instance
         */
        constructor() {
            this._routes = [];
            this._prefix = '';
            this._namespace = '';
            this._storage = {};
            // get this class
            Routes._routes.push(this);
        }

        /**
         * @method setItem
         * @description stores a value
         * @param {String} variableName
         * @param {Any} variableValue 
         */
        setItem(variableName, variableValue) {
            if (variableName && variableValue) {
                this._storage[variableName] = variableValue;
            }
        }

        /**
         * @method getItem
         * @description get a stored value
         * @param {String} variableName
         */
        getItem(variableName) {
            if (this._storage.hasOwnProperty(variableName)) {
                return this._storage[variableName]
            } else {
                return undefined;
            }
        }

        /**
         * @method set 
         * @description set a new route
         * @param {String} [routeName]
         * @param {String} [url]
         * @returns {Object} return the route object
         */
        set(routeName, url) {
            // if don't have
            if (!(this.has(routeName))) {
                // new route
                const nroute = {
                    name: routeName,
                    path: url
                }
                // push
                this._routes.push(nroute)
                // return
                return nroute;
            } else {
                // get
                return this.get(routeName);
            }
        }

        /**
         * @method get 
         * @description get the route by name
         * @param {String} routeName 
         */
        get(routeName) {
            return this._routes.find(element => element.name === routeName);
        }

        /**
         * @method join
         * @description join up a route to another {url}
         * @param {String} routeName 
         * @param {String} reference route name of the reference
         * @param {String} folder 
         */
        join(routeName, reference, folder) {
            if (this.has(reference)) {
                //
                reference = this.get(reference);

                // new route
                const nroute = {
                    name: routeName,
                    path: Utils.join(reference.path, folder || routeName)
                }
                // push
                this._routes.push(nroute)
                // return
                return nroute;
            }
            return undefined;
        }

        /**
         * @method has 
         * @description check out if already has the route
         * @param {String} [routeName]
         */
        has(routeName) {
            // filter
            const find = this._routes.find(element => element.name === routeName);
            // return
            return !(Utils.invalid(find));
        }

        /**
         * @method prefix 
         * @param {String} [value]
         * @description defines a prefix for each routes
         * @return {this}
         */
        prefix(value) {
            this._prefix = value;
            // in each
            this._routes.forEach(route => {
                // check if there is a prefix already
                if (route.hasOwnProperty('prefix')) {
                    route.name.replace(route.prefix, value);
                } else {
                    route.name = `${value}/${route.name}`;
                    route.prefix = value;
                }
            })
            // 
            return this;
        }

        /**
         * @method unique
         * @description if the prefix is created, use it to 
         * be able to access via 'Route.prefix()'
         * @return {this}
         */
        unique() {
            if (this._prefix.length > 0) {
                Routes._groups[this._prefix] = this;
            }
            return this;
        }

        /**
         * @method routes 
         * @description return all routes
         * @return {Array}
         */
        routes() {
            return this._routes;
        }

        /**
         * @method namespace
         * @description defines the namespace of the route.
         * This will set this class to the variable 'Routes'
         * @param {String} name 
         * @return {this}
         */
        namespace(name) {
            Routes.namespace(name, this);
            return this;
        }

        /**
         * @method plug
         * @description plug the path with a folder
         * @param {String} routeName 
         * @param {String} path
         * @returns {String}
         */
        plug(routeName, path) {
            let value = Utils.join(this.get(routeName).path.replace(/\\$|\/$/, ''), path.replace(/\\$|\/$/, ''));
            return value;
            //return this.get(routeName).path.concat(folder)
        }

        /**
         * @method to
         * Creates a temporary '<a>' to access the url
         * @param {String} routeName 
         * @param {String} file 
         */
        to(routeName, file) {
            El.to(`${this.get(routeName).path}/${file}`)
        }
    }
}(Routes);

/**
 * @function namespace
 * @description set a namespace for the route name. This will bind the 
 * route to a variable.
 * @param {String} [value]
 * @param {Routes} [instance]
 */
Routes.namespace = function (value, instance) {
    instance._namespace = name;
    Route[value] = instance;
}

// |============================================================================
// | Standard routes
// |============================================================================

Routes.group(instance => {

    // home
    instance.set('home', 'https://daxsoft.github.io')

    // general
    instance.join('css', 'home')
    instance.join('data', 'home')
    instance.join('img', 'home')
    instance.join('js', 'home')

    // setItem
    //instance.setItem('icon', (str) => instance.plug('home', `img/icon/${str}`));
    instance.setItem('icon', (str) => `${instance.get('home').path}/img/icon/${str}`)
    instance.setItem('img', (str) => `${instance.get('home').path}/img/${str}`);
    instance.setItem('lang', (file, lang = 'en') => `${instance.get('home').path}/data/text/${lang}/${file}`);

    // load
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'en')
    }

    // text
    instance.setItem('text', async (filename) => {
        const lang = localStorage.getItem('lang');
        var text = await fetch(instance.getItem('lang')(filename, lang))
        return await text.text();
    })

    // json
    instance.setItem('json', async (filename) => {
        const lang = localStorage.getItem('lang');
        var text = await fetch(instance.getItem('lang')(filename, lang))
        return await text.json();
    })

}).namespace('Main')
