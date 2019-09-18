'use strict';

/**
 * @file core.js
 * @description handles with main functions and methods that make more 
 * easy to edit and create stuffs 
 * 
 * [CTRL+F]
 *  :core
 *  :el
 *  :route
 *  :page
 */

// ====================================================================

/**
 * @field :core
 * @description general methods & functions to handle with some resources
 */
var Core = {};

void

function (core) {
    /**
     * @function invalid 
     * @description check out if is undefined or null
     */
    core.invalid = function (object) {
        return (typeof object === 'undefined') || (object === null)
    }
    /**
     * @function join
     * @description join up two path
     */
    core.join = function (str1, str2) {
        str1 = str1.replace(/(\/)[(/)]/g, '/')
        str2 = str2.replace(/(\/)[(/)]/g, '/')
        str1 += "/" + str2;
        return str1;
    }
    /**
     * @function isFunction
     * @description check up if is a function
     */
    core.isFunction = function (object) {
        return typeof object === 'function';
    }
    /**
     * @var ASPECT_RATION
     * @description aspect ration of the screen
     */
    core.ASPECT_RATION = [1, 1];
    /**
     * @var orientation
     * @description to store values when the function is called
     * @returns {Object}
     */
    core.orientation = {};
    /**
     * @function Core.device_orientation
     * @description check out the orientation of the device by checkin' up his 
     * size (witdth x height).
     * @param {Number} [aspect_x=1] the aspect ration of the width
     * @param {Number} [aspect_y=1] the aspect ration of the height
     * @returns {String} ["landscape", "orientation"] 
     */
    core.device_orientation = function (aspect_x = core.ASPECT_RATION[0], aspect_y = core.ASPECT_RATION[1]) {
        const width = (document.documentElement.clientWidth) * aspect_x;
        const height = (document.documentElement.clientHeight) * aspect_y;
        const orientation = (width > height ? 'landscape' : 'portrait');
        return core.orientation = {
            current: orientation,
            reverse: orientation === 'landscape' ? 'portrait' : 'landscape',
            percent: core.float(height / width)
        }
    }
    /**
     * @description get a random element from array
     * @param {array} [array]
     * @param {number} [at] (optional, default is 0) 
     * at the element index until 'end'
     * @param {number} [end] (optional, default is length) 
     * until 'end' element index.
     * @returns {Array}
     */
    core.array_random = function (array, at, end) {
        return array[core.randInt((at || 0), (end || array.length) - 1)];
    }
    /**
     * @desc get a random numeric between a min and max value.
     * @param {number, number}
     * @return {number}
     */
    core.rand = function (min, max) {
        return Math.random() * (max - min) + min;
    }
    /**
     * @desc get a random numeric between a min and max value with integer value.
     * @param {number, number}
     * @return {number}
     */
    core.randInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return ~~(Math.random() * (max - min + 1)) + min;
    }
    /**
     * @description fix the float
     */
    core.float = (value, n = 2) => {
        return parseFloat(value.toFixed(n || 2));
    }
    /**
     * @description clamping a float number
     * @param {Number} [current]
     * @param {Number} [min]
     * @param {Number} [max]
     * @returns {Number}
     */
    core.fclamp = (current, min, max) => {
        return (
            (current > min ? (current < max ? current : max) : min)
        );
    }
    /**
     * @description increase a float value for a variable
     * while clamping the value
     * @param {Number} [current] // value to increase
     * @param {Number} [min]
     * @param {Number} [max]
     * @param {Number} [amount] // how many will increase
     */
    core.fincrease = (current, min, max, amount) => {
        current += amount;
        return core.fclamp(current, min, max);
    }
    /**
     * @description decrease a float value for a variable
     * while clamping the value
     * @param {Number} [current] // value to decrease
     * @param {Number} [min]
     * @param {Number} [max]
     * @param {Number} [amount] // how many will decrease
     */
    core.fdecrease = (current, min, max, amount) => {
        current -= amount;
        return core.fclamp(current, min, max);
    }

    core.swap = function(arr, from, to)  {
        arr.splice(from, 1, arr.splice(to, 1, arr[from])[0]);
    }
}(Core);

// ====================================================================

/**
 * @field :el
 * @description methods to work with document elements
 */
var El = {};

void

function (element) {
    // =================================================================================
    /**
     * @function id
     * @description get the element from his ID
     * @param {String} [id] id to search
     * @param {Function} [fallback] if not find, calls a function with the id as param,
     * then return back to the function as callback. Use this to create the element.
     * @returns {HTMLElement}
     */
    element.id = function (el, fallback = null) {
        if (el instanceof HTMLElement) return el;
        const element = document.getElementById(String(el))
        if (!element && Core.isFunction(fallback)) {
            fallback.call(this, el);
        }
        return element;
    }
    /**
     * @function is 
     * @description check if the object is HTMLELement
     * @returns {Boolean}
     */
    element.is = function (el) {
        return (el instanceof HTMLElement);
    }
    /**
     * @function isnt 
     * @description check if the object isn't HTMLELement
     * @returns {Boolean}
     */
    element.isnt = function (el) {
        return !(el instanceof HTMLElement);
    }
    /**
     * @function create 
     * @description create a element 
     * @param {String} [tagName]
     * @param {HTMLElement} [parent] 
     * @returns {HTMLElement}
     */
    element.create = function (tagName, parent) {
        const element = document.createElement(tagName);
        if (parent instanceof HTMLElement) parent.appendChild(element);
        return element;
    }
    /**
     * @function Attr
     * @description allows you to set multiple attributes 
     * @param {String|HTMLElement} el string search by id 
     * @param {Object} attributes[attr_name: value]
     * @returns {HTMLElement}
     * @example 
     * El.Attr("img", { "src": "../test.png" })
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
     * @function removeClass
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @description remove class from the element | this is a alternative to 'toggle'
     * @returns {HTMLElement}
     */
    element.removeClass = function (el, className) {
        // el = element.id(el);
        // el.setAttribute("class", ((el.className.split(" ")).filter((value) => value !== className)).join(" "))
        // return el;
        element.id(el).classList.remove(className);
    }
    /**
     * @function addClass
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @returns {HTMLElement}
     */
    element.addClass = function (el, className) {
        // el = element.id(el);
        // var classList = el.className.split(" ");
        // if (classList.indexOf(className) === true) return el;
        // position ? classList.push(className) : classList.unshift(className);
        // el.setAttribute("class", classList.join(" "));
        // return el;
        element.id(el).classList.add(className)
    }
    /**
     * @function toggleClass
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @description toggle the class into the element. If exist, removes; if not exist, add.
     * @returns {HTMLElement}
     */
    element.toggleClass = function (el, className) {
        el = element.id(el);
        el.classList.toggle(className);
        return el;
    }
    /**
     * @function El.removeChildren
     * @param {String|HTMLElement} el element
     * @description remove the childrens of a element
     */
    element.removeChild = function (el) {
        el = element.id(el);
        if (el.children.length > 0) {
            let i = el.children.length;
            while (i--) {
                el.removeChild(el.children.item(i));
            }
        }
    }
    /**
     * @function El.interactChild
     * @param {String|HTMLElement} el element
     */
    element.interactChild = function (el, callback) {
        var childrens = [];
        el = element.id(el);
        if (el.children.length > 0) {
            let i = el.children.length;
            while (i--) {
                callback.call(this, el.children.item(i), i, childrens.push(el.children.item(i)), el.children.length );
            }
        }
        return childrens;
    }
    /**
     * @function getRoot 
     * @description get a value from root
     * @param {String} [variable]
     * @param {String|HTMLElement} [el=document.body]
     */
    element.getRoot = function (variable, el = document.body) {
        return getComputedStyle(el).getPropertyValue(variable)
    }
}(El);

// ====================================================================

/**
 * @field :route
 * @description method to access the paths of the website
 */
var Route = {
    // groups
    _groups: {},
    // routes
    _routes: [],
};

/**
 * @description this variable will stock all namespace
 */
var Routes = {

}

/**
 * @description schema to define routes
 */
void

function (route) {
    /**
     * @function findBy 
     * @description get the route defined
     * @param {String} [string] value to search by
     * @param {String} [kind] what will search for:
     * 'namespace'
     */
    route.findBy = function (string, kind = 'namespace') {
        if (kind === 'namespace') {
            return global.Routes[string]
        }
    }
    /**
     * @function set 
     * @description set a route 
     * @returns {Route}
     */
    route.set = function () {
        return new Routes();
    }
    /**
     * @function group 
     * @description set a grupo of routes
     * @param {function} [callback]
     */
    route.group = function (callback) {
        const instance = new Routes();
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
    /**
     * @class Routes
     * @classdesc control the route defined
     */
    class Routes {
        /**
         * @constructor
         */
        constructor() {
            this._routes = [];
            this._prefix = '';
            this._namespace = '';
            this._storage = {};
            // get this class
            Route._routes.push(this);
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
                    path: Core.join(reference.path, folder || routeName)
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
            return !(Core.invalid(find));
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
                Route._groups[this._prefix] = this;
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
            Route.namespace(name, this);
            return this;
        }
        /**
         * @method plug
         * @description plug the path with a folder
         * @param {String} routeName 
         * @param {String} folder
         * @returns {String}
         */
        plug(routeName, folder) {
            return this.get(routeName).path.concat(folder)
            return Core.join(this.get(routeName).path, folder);
        }
        /**
         * @method to
         * Creates a temporary '<a>' to access the url
         * @param {String} routeName 
         * @param {String} file 
         */
        to(routeName, file) {
            let href = El.Attr(El.create('a', document.body), {
                href: this.plug(routeName, file)
            })

            href.click()

            document.body.removeChild(href)
        }
    }
}(Route);

/**
 * @function namespace
 * @description set a namespace for the route name. This will bind the 
 * route to a variable.
 * @param {String} [value]
 * @param {Routes} [instance]
 */
Route.namespace = function (value, instance) {
    instance._namespace = name;
    Routes[value] = instance;
}

// Main routes
Route.group((instance) => {
    // home
    instance.set('home', 'https://daxsoft.github.io')

    // general
    instance.join('css', 'home')
    instance.join('data', 'home')
    instance.join('img', 'home')
    instance.join('js', 'home')

    // setItem
    instance.setItem('icon', (str) => instance.plug('home', `/img/icon/${str}`));
    instance.setItem('img', (str) => instance.plug('home', `/img/${str}`));
    instance.setItem('lang', (file, lang = 'en') => instance.plug('home', `/data/text/${lang}/${file}`));
}).namespace('Main')

// ====================================================================

/**
 * @field :page
 * @description handles with general elements
 */
var Page = {};

void

function (page) {
    /**
     * @var last_scroll_top
     * @description useful for creating animations that handles the scroll
     */
    page.last_scroll_top = 0;
    /**
     * @function onscroll
     * @description check if the page scrolls
     */
    // document.body.onscroll = function (scroll) {
    //     if (Core.isFunction(Page.onscroll)) Page.onscroll();
    // }
    /**
     * @description everytime that the page is resized, check up the style
     */
    // document.body.onresize = function () {
    //     Core.device_orientation();
    //     if (Core.isFunction(Page.onresize)) Page.onresize();
    // }
    if (!localStorage.getItem('lang')) {
        localStorage.setItem('lang', 'en')
    }
    /**
     * get text 
     */
    page.text = async function (filename) {
        const lang = localStorage.getItem('lang');

        var text = await fetch(Routes.Main.getItem('lang')(filename, lang))
        return await text.text()
    }
    /**
     * get json 
     */
    page.json = async function (filename) {
        const lang = localStorage.getItem('lang');

        var text = await fetch(Routes.Main.getItem('lang')(filename, lang))
        return await text.json()
    }
}(Page);


Core.device_orientation();
