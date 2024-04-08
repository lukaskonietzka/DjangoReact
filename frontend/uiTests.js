/*
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

To finde a Window you have to register a Window finder
"set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"
set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build
 */

import {
    screen,
    mouse,
    windowWithTitle,
    Button,
    singleWord,
    straightTo,
    centerOf,
    textLine,
    keyboard, Key, sleep, Region
} from "@nut-tree/nut-js";
import {useBoltWindowFinder} from "@nut-tree/bolt";

import {configure, Language, LanguageModelType, preloadLanguages} from "@nut-tree/plugin-ocr";

configure({
    languageModelType: LanguageModelType.BEST,
});

(async () => {
    useBoltWindowFinder();

    const window = await screen.find(windowWithTitle(/Green Assistant - .*/));
    //await screen.highlight(window.region);
    console.log(window.region);
    console.log('width', await screen.width());
    console.log('height', await screen.height());

    console.log(singleWord('Hallo'));

    await screen.find(singleWord('Hallo'), {
        confidence: 0.40,
        searchRegion: window.region
    })

    await mouse.move(straightTo(centerOf(window.region)));
    await mouse.click(Button.LEFT);


    for(let i=1; i<=5; i++) {
        await keyboard.pressKey(Key.Tab);
    }
    await keyboard.type('bla');
    await keyboard.pressKey(Key.Tab);
    await keyboard.pressKey(Key.Enter);
})();








