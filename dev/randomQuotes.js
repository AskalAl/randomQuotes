/*!
 * randomQuotes.js v1.0.1
 * Put a random sentence where you want in your website. Perfect for footer :)
 * MIT License
 * by Vincent Loy - https://vincent-loy.fr/
 * Github: https://github.com/VincentLoy/randomQuotes
 */
(function (exports) {
    'use strict';

    let extend = function (out) {
        out = out || {};
        for (let i = 1; i < arguments.length; i += 1) {
            if (arguments[i]) {
                for (let key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key)) {
                        out[key] = arguments[i][key];
                    }
                }
            }
        }
        return out;
    };

    let randomQuotes = function (elt, args) {
        const params = extend({
            quotes: [
                '“The unexamined life is not worth living” – Socrates',
                '“If God did not exist, it would be necessary to invent Him” – Voltaire',
                '“This is my cheese !” – An unknown French guy',
                '“Man is condemned to be free” – Jean-Paul Sartre',
                '“Man is the measure of all things” – Protagoras',
                '“This plugin is awesome !” – Vincent Loy',
                '“One good thing about music, when it hits you, you feel no pain.” ― Bob Marley',
                '“Don\'t gain the world and lose your soul; wisdom is better than silver or gold.” ― Bob Marley',
            ],
            loop: false,
            interval: 30000,
        }, args);
        let elts = document.querySelectorAll(elt);

        let updateQuote = function (el) {
            let quoteParagraphElt = document.createElement('P');
            let quote = params.quotes[Math.floor(Math.random() * params.quotes.length)];

            quoteParagraphElt.innerText = quote;
            quoteParagraphElt.classList.add('random-quotes-p');

            el.innerHTML = '';
            el.appendChild(quoteParagraphElt);
        }

        Array.prototype.forEach.call(elts, el => {
            updateQuote(el);

            if (params.loop) {
                window.setInterval(function () {
                    updateQuote(el);
                }, params.interval);
            }
        });
    };

    exports.randomQuotes = randomQuotes;
}(window));