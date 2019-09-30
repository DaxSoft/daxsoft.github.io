'use strict';


// test out the Components

var Test = {};


void 

function (test) {
    test.el = {};
    // start
    async function start() {

        test.el.nav = new Components.select.Nav({
            style: {
                landscape: {
                    default: {
                        $classic: true,
                        width: CSS.metric(100, 'vw')
                    }
                }
            },

            items: [
                {
                    component: 'button',
                    label: 'Home',
                    onclick: () => {
                        console.log('home')
                    }
                },
                {
                    component: 'button',
                    label: 'About',
                    onclick: () => {
                        console.log('About')
                    }
                }
            ],

            itemStyle: { 
                landscape: { 
                    default: { $classic: true, border: 'none' } 
                },
                portrait: {
                    default: { $classic: true, color: 'red' } 
                }
            }
        })

    }
    // run
    Promise.resolve().then(start);
}(Test);