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
 - Weiß auf schwarz ist schlecht

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
    sleep,
    Point,
    jestMatchers
} = require ("@nut-tree/nut-js");
const {useBoltWindowFinder} = require ("@nut-tree/bolt");
const {configure, Language, LanguageModelType, preloadLanguages} = require ("@nut-tree/plugin-ocr");
//expect.extend(jestMatchers);


configure({
    languageModelType: LanguageModelType.BEST,
});

async function scrollWindowHeight(currentWindow) {
    await mouse.scrollDown((await currentWindow.region).height/2)
}


async function startIn(seconds) {
    console.log('Application stats in ...')
    for (let i=seconds; i>0; i--) {
        console.log(i + 's');
        await sleep(1000);
    }
    console.log('Start');
}

function isTextLine(word) {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            return true;
        }
    }
    return false
}

async function moveMouseToRegionOrScroll(word, caseSensitive, printError, currentWindow) {
    try {
        await preloadLanguages([Language.English, Language.German]);
        screen.config.confidence = 0.6;
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
        console.log('Cant find region! -> scroll')
        await scrollWindowHeight(currentWindow);
        await sleep(1000);
        await moveMouseToRegionOrScroll(word, caseSensitive, printError, currentWindow);
        return false
    }
}


(async () => {
    await startIn(3);

    // register a window finder
    useBoltWindowFinder();

    // You identify the window you want to target and focus them
    const currentWindow = await screen
        .find(windowWithTitle(/Green Assistant - .*/));
    await mouse.move(straightTo(centerOf(currentWindow.region)))

    // performe a click
    await mouse.click(Button.LEFT);

    await moveMouseToRegionOrScroll('SHOW DATA', true, currentWindow);
    await mouse.click(Button.LEFT);

    await moveMouseToRegionOrScroll('Antwort: SDFsdf prompt: SDFsdf', true, false, currentWindow);
    await mouse.click(Button.LEFT);

    await moveMouseToRegionOrScroll('Antwort: manu prompt: manu', true, false, currentWindow);
    await mouse.click(Button.LEFT);
})();








