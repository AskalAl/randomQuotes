# randomQuotes.js

This simple plugin was made to put some random quotes in a website footer. I see this feature in a lot of websites, so I created this tiny JS lib. The library is 1.1kB (including the default parameters), so you can easly install it without being scared about perfomance loss.

# How does it work ?

### 1 - install the plugin

```console
yarn add random-quotes-js

// or

npm install random-quotes-js
```

### 2 - Setup HTML
Just create a new HTML element that will contain the random quote(s). And add the randomeQuotes.min.js just before the `</body>`.

Example:
```html
<div class="my-quotes-div"></div>
```

```html
<!-- ... -->
<script src="PATH_TO_THE_PLUGIN_DIR/dist/randomQuotes.min.js"></script>

</body>
<!-- ... -->
```

### 3 - Setup Javascript
Then, you just have to call the `randomQuotes` function and giving it some parameters.

```javascript
randomQuotes('[CSS_SELECTOR]', {
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
    loop: false, // Default is false, if set to true, quote will be updated each XX ms
    interval: 3500 // interval in milliseconds, used if loop is set to true. Default is 30000 (30s).
});
```
