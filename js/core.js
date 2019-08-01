'use strict';
/**
 * @file core.js
 * @description this javascript file handles with some methods and functions
 * that will make more easy to handle with some objects and create some stuffs
 */
var Core = {};
Core.page = {};
var El = {};
/**
 * @description handles with the general functions & constants
 */
void

function (core) {
    // =================================================================================
    /**
     * @variable DIRECTORY
     * @description get the main directory pathname
     */
    core.DIRECTORY = "https://daxsoft.github.io/"
    /**
     * @function isFunction
     * @description check up if is a function
     */
    core.isFunction = function (object) {
        return typeof object === 'function';
    }
    // =================================================================================
    /**
     * @var ASPECT_RATION
     * @description aspect ration of the screen
     */
    core.ASPECT_RATION = [1, 1];
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
        return {
            current: orientation,
            reverse: orientation === 'landscape' ? 'portrait' : 'landscape',
            percent: core.float(height / width)
        }
    }
    /**
     * @function dir 
     * @description gets the link following the original directory url
     * @param {String} [path]
     */
    core.dir = function (path) {
        return (core.DIRECTORY).concat(path);
    }
    /**
     * @function lang
     * @description get the filepath of the text 
     * @param {String} [path]
     */
    core.lang = function (filename) {
        let language = localStorage.getItem('lang') || "en";
        return core.dir(`data/text/${language}/${filename}`);
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
     * @function float
     * @description fix the float
     */
    core.float = (value, n = 2) => {
        return parseFloat(value.toFixed(n || 2));
    }
    /**
     * @description clamping a  number
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
    /**
     * @desc check out if the current value is odd
     * @return {boolean}
     */
    core.isOdd = function () {
        return (this & 1);
    }
    /**
     * @desc check out if the current value is evan
     * @return {boolean}
     */
    core.isEven = function () {
        return !(this & 1);
    }
    /**
     * @desc turn value to percent by max
     * @param {number, number, number}
     * @return {number}
     */
    core.percentTo = function (current, min, max) {
        return ((current * min) / max);
    }
    /**
     * @desc turn value to percent
     * @param {number, number}
     * @return {number}
     */
    core.toPercent = function (current, min) {
        return ((current * min) / 100);
    }
}(Core);

/**
 * @description methods to work with document elements
 */
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
    element.id = function (el, fallback) {
        if (el instanceof HTMLElement) return el;
        const element = document.getElementById(String(el))
        if (!element && Core.isFunction(fallback)) {
            fallback.call(this, el);
            element.id(el);
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
        el = element.id(el);

        el.setAttribute("class", ((el.className.split(" ")).filter((value) => value !== className)).join(" "))

        return el;
    }
    /**
     * @function addClass
     * @param {String|HTMLElement} el element
     * @param {String} className
     * @param {Boolean} [position=true] if false then the method 'unshift', if true then method 'push'
     * @description add a class into element, if there is already a class name, then don't do it. 
     * This is a alternative study to toggle.
     * @returns {HTMLElement}
     */
    element.addClass = function (el, className, position = true) {
        el = element.id(el);
        var classList = el.className.split(" ");
        if (classList.indexOf(className) === true) return el;
        position ? classList.push(className) : classList.unshift(className);
        el.setAttribute("class", classList.join(" "));
        return el;
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
     * @function Core.el.removeChildren
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
     * @function getRoot 
     * @description get a value from root
     * @param {String} [variable]
     * @param {String|HTMLElement} [el=document.body]
     */
    element.getRoot = function (variable, el = document.body) {
        return getComputedStyle(el).getPropertyValue(variable)
    }
    /**
     * @variable icon
     * @description return a object-list of the icon filepath
     */
    element.icon = {
        "behance": Core.dir("img/icon/behance.png"),
        "css": Core.dir("img/icon/css.png"),
        "email": Core.dir("img/icon/email.png"),
        "github": Core.dir("img/icon/github.png"),
        "html5": Core.dir("img/icon/html5.png"),
        "url": Core.dir("img/icon/https.png"),
        "instagram": Core.dir("img/icon/instagram.png"),
        "javascript": Core.dir("img/icon/javascript.png"),
        "process": Core.dir("img/icon/process.png"),
        "psd": Core.dir("img/icon/psd.png"),
        "ruby": Core.dir("img/icon/rb.png"),
        "spotify": Core.dir("img/icon/spotify.png"),
        "analytics": Core.dir("img/icon/analytics.png"),
        "php": Core.dir("img/icon/php.png"),
        "sql": Core.dir("img/icon/sql.png"),
        "nodejs": Core.dir("img/icon/nodejs.png"),
        "ai": Core.dir("img/icon/ai.png"),
        "pixijs": Core.dir("img/icon/pixijs.png"),
        "electron": Core.dir("img/icon/electron.png"),
        "rpgmakermv": Core.dir("img/icon/rpgmakermv.png")
    }
}(El);

/**
 * @description standard elements into pages
 */
void

function (page) {
    // =================================================================================
    /**
     * @var last_scroll_top
     * @description useful for creating animations that handles the scroll
     */
    page.last_scroll_top = 0;
    page.command = null;
    // =================================================================================
    /**
     * @function header_scroll_down
     * @description when it is on portrait mode or the scroll is visible. Use it
     * inside of an 'onscroll'. 
     */
    page.header_scroll_down = function (callback) {

        const scrollTop = document.documentElement.scrollTop;

        if (scrollTop > page.last_scroll_top) {
            // [down]
        } else {
            // [up]
        }

        page.last_scroll_top = scrollTop;
    }
    // =================================================================================
    async function setup_terminal() {
        const terminal = document.getElementsByTagName("terminal").item(0);
        if (!El.is(terminal)) return;
        const search = El.Attr(El.create("input", terminal), {
            "id": "terminal-search",
            "type": "text",
            "tabindex": 1,
            "placeholder": localStorage.getItem("terminal-search-placeholder") || "Hi, dude! Type help here | É brasileiro? Digite pt"
        })

        search.onfocus = () => {
            search.onkeydown = (event) => {
                if (event.keyCode === 13) {
                    page.commandRun(search.value.trim())
                }
            }
        }

        setup_terminal_overlay();
    }

    function setup_terminal_overlay() {
        const overlay = El.id("terminal-overlay");
        if (!El.is(overlay)) return;
        // create list of command
        const content = El.Attr(El.create("section", overlay), {
            "id": "terminal-overlay-content"
        })

        fetch(Core.lang("command.json")).then(response => {
            return response.json().then(data => {
                page.command = data;
                setup_list_Command();
            })
        })
    }

    function setup_list_Command() {
        const content = El.id("terminal-overlay-content");

        page.command.forEach(command => {
            El.Attr(El.create("div", content), {
                "id": "terminal-overlay-command"
            }).innerHTML = `<label class=${command.class}>${command.label}</label>  ${command.description}`
        })
    }
    // =================================================================================
    page.orientation_els = function (format) {
        const terminal = document.getElementsByTagName("terminal").item(0);


        [terminal, El.id("terminal-overlay-content")].forEach(el => {
            if (!(El.is(el))) return;
            El.removeClass(el, format.reverse);
            El.addClass(el, format.current)
        })
    }
    // =================================================================================
    page.setup_social_media = function () {
        const social = El.id("social-media");
        if (!El.is(social)) return;
        El.removeChild(social);
        ["behance", "github", "instagram", "spotify", "email"].forEach(name => {
            const link = El.Attr(El.create("a", social), {
                "href": page.social_url[name]
            })

            El.Attr(El.create("img", link), {
                "id": "social-media-icon",
                "alt": `${name} social media`,
                "src": Core.dir(`img/icon/${name}.png`)
            })
        })
    }

    page.social_url = {
        "behance": "https://www.behance.net/daxsoft",
        "instagram": "https://www.instagram.com/vorlefan/",
        "github": "https://github.com/DaxSoft",
        "spotify": "https://open.spotify.com/user/8btt9iyhho52rxvtd53b8x3mi?si=MXwEmEEsRD-mNi3Eq_hmgA",
        "email": "mailto:dax-soft@live.com"
    }
    // =================================================================================
    Promise.resolve()
        .then(setup_terminal)
    // =================================================================================
    page.commandRun = function (value) {
        // what kind of command?

        // if (/^\@/gim.test(value)) { // @ global
            
        // } 
        if (/^\$/gim.test(value)) { // $ eval 
            evalCommand(value.replace(/^\$/, ""))
            return clearCommand();
        } else { // local command
            globalCommand(value)
            return clearCommand();
        }
    }

    async function globalCommand(value) {
        /**
         * @description language setup
         */
        if (/^\s?pt/gim.test(value)) {
            localStorage.setItem('lang', 'pt')
            localStorage.setItem('terminal-search-placeholder', "E aí! Digite help aqui | Not brazilian? Type en")
            document.location.reload();
            return true;
        } else if (/^\s?en/gim.test(value)) {
            localStorage.setItem('lang', 'en')
            localStorage.setItem('terminal-search-placeholder', "Hi, dude! Type help here | É brasileiro? Digite pt")
            document.location.reload();
            return true;
        } 
        /**
         * @description page itself
         */
        if (/^\s?(refresh|restart)/gim.test(value)) {
            document.location.reload();
            return true;
        } else if (/^\s?(back)/gim.test(value)) {
            El.id("terminal-overlay").style.height = "0%";
            return true;
        } else if (/^\s?(help)/gim.test(value)) {
            El.id("terminal-overlay").style.height = "100%";
            return true;
        } else if (/^\s?(about)/gim.test(value)) {
            localStorage.setItem("content-class", "about")
            localStorage.setItem('current-content', 'about');
            document.location.reload();
            return true;
        } else if (/^\s?(main)/gim.test(value)) {
            localStorage.setItem("content-class", "")
            localStorage.setItem('current-content', 'main');
            document.location.reload();
            return true;
        }
        /**
         * @description themes
         */
        if (/^\s?(white)/gim.test(value)) {
            localStorage.setItem("theme", Core.dir("css/theme.white.css"))
            document.location.reload();
            return true;
        } else if (/^\s?(original)/gim.test(value)) {
            localStorage.setItem("theme", "#")
            document.location.reload();
            return true;
        } else if (/^\s?(golden)/gim.test(value)) {
            localStorage.setItem("theme", Core.dir("css/theme.golden.css"))
            document.location.reload();
            return true;
        } 

        return false;
    }

    async function evalCommand(value) {
        /**
         * @description language setup
         */
        try {
            eval(value);
            return true;
        } catch (err) {
            return false;
        };
    }


    function clearCommand() {
        El.id("terminal-search").value = "";
    }
}(Core.page);

// https://developer.mozilla.org/pt-BR/docs/Web/API/Storage