'use strict';
/**
 * @file popup.js
 * @description this is a simple popup alert, that it will be useful to
 * display some tiny information to the user. Feel free to use it or 
 * to study
 * ! load this script on <html> as <async>
 * ! take care of the styles needed, look at <main.css>, search for :popup
 * @license MIT 
 * @author Michael Willian Santos 
 */
var Popup = {};

void 

function (popup) {
    // =================================================================================
    popup.CHAR = {
        "info": "&ImaginaryI;"
    }

    popup.ID = 0;
    // =================================================================================
    /**
     * @function on
     * @description sets on a popup
     * @param {String} [setup=class] Set a class theme
     * * "popup-info"
     * @param {String} [setup=text] Set a text to display at
     * @param {String} [setup=duration] Set a duration time using ms
     * @param {String} [setup=position] Set a position to the popup
     * * "center" 
     * * "bottom" 
     * @example
     * Popup.on({
     *   "class": "popup-info",
     *   "duration": 1500,
     *   "position": "center bottom",
     *   "text": front_end_description[name][localStorage.getItem('lang')]
     * })
     */
    popup.on = function (setup) {
        
        const element = El.Attr(El.create("div", document.body), {
            "class": "popup ".concat(setup.class || ""),
            "id": `popup-element_${popup.ID}`
        })

        setup.position = (setup.position || "center bottom").split(" ");

        setup.position.forEach(key => element.classList.add(`popup_${key}`));

        //element.classList.add(setup.position.join(" "));

        element.innerHTML = setup.text || "text";

        setTimeout(() => {
            document.body.removeChild(element);
        }, setup.duration || 1500)

        popup.ID++;
    }
}(Popup);