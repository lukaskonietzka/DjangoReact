/*
Philosophy of nut.js
----------------------------
nut.js is a desktop automation framework.
It allows you to program your computer using JavaScript or TypeScript by imitating real user input.
And this is also the core concept of nut.js.
It does not go overboard with abstract interactions, it rather relies on simple
building blocks which allow you to assemble complex actions from.

There's no magical click function to click whichever element you're targeting.
But you can build it up yourself by focusing on the workflow a human would follow.

- You identify the window you want to target
- You focus the window
- You locate the button
- You move the mouse over the button
- You perform the click

"set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"
set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build

Issues:
 - Docu
  - Tutorial ocr-plugin
   - ocrConfidence does not exist, use confidence instead

 */

const {
    screen,
    mouse,
    keyboard,
    Key,
    Button,
    windowWithTitle,
    singleWord,
    straightTo,
    centerOf,
    textLine,
    sleep
} = require ("@nut-tree/nut-js");
const {useBoltWindowFinder} = require ("@nut-tree/bolt");
const {configure, Language, LanguageModelType, preloadLanguages} = require ("@nut-tree/plugin-ocr");

configure({
    languageModelType: LanguageModelType.BEST,
});

function isTextLine(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            return true;
        }
    }
    return false
}

async function moveMouseToRegion(word, caseSensitive) {
    try {
        await preloadLanguages([Language.English, Language.German]);
        screen.config.confidence = 0.7;
        screen.config.autoHighlight = true;
        screen.config.highlightDurationMs = 1000;
        screen.config.highlightOpacity = .5;

        if (isTextLine(word)) {
            // locate the button or another target
            console.log('Searching for line ...')
            const regionTextLine = await screen.find(textLine(word), {
                providerData: {
                    lang: [Language.German, Language.English],
                    confidence: 0.5,
                    caseSensitive: caseSensitive,
                    partialMatch: true,
                }
            });
            // move to the button
            await mouse.move(straightTo(centerOf(regionTextLine)));

        } else {
            console.log('Searching for word ...')
            const regionSingleWord = await screen.find(singleWord(word), {
                providerData: {
                    lang: [Language.German, Language.English],
                    confidence: 0.8,
                    caseSensitive: caseSensitive,
                    partialMatch: true,
                }
            });
            await mouse.move(straightTo(centerOf(regionSingleWord)));
        }
        return true

    } catch (e) {
        console.log('Cant find region!');
        return false;
    }
}

(async () => {
    // register a window finder
    useBoltWindowFinder();

    // You identify the window you want to target and focus them
    const window = await screen.find(windowWithTitle(/Green Assistant - .*/));
    await mouse.move(straightTo(centerOf(window.region)))

    // locate the button or another target and move to it
    // methode returns true, when region exists
    await moveMouseToRegion('CREATE', true);
    // performe a click
    await mouse.click(Button.LEFT);

    await mouse.move(straightTo(centerOf(window.region)));
    await mouse.click(Button.LEFT);

    // text search takes a while, pressing 'tab' and 'enter' could be faster.
    for(let i=1; i<=5; i++) {
        await keyboard.pressKey(Key.Tab);
    }
    await keyboard.type('');

    await keyboard.pressKey(Key.Tab);
    await keyboard.pressKey(Key.Enter);

    // search for a non-existent region
    await moveMouseToRegion('foo', true);

    await moveMouseToRegion('Bitte füllen Sie alle Felder aus', true);
    await mouse.click(Button.LEFT);
    await mouse.move(straightTo(centerOf(window.region)));


})();








