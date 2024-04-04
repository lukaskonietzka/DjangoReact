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
//
//
// import {
//     windowWithTitle,
//     centerOf,
//     randomPointIn,
//     mouse,
//     sleep,
//     screen,
//     Region,
//     straightTo,
//     pixelWithColor,
//     RGBA,
//     getActiveWindow,
//     Button,
// } from '@nut-tree/nut-js';
// import {useBoltWindowFinder, useBoltWindows} from '@nut-tree/bolt';
//
//
// // Funktioniert
// (async () => {
//     useBoltWindowFinder();
//
//     // const windowRef = await screen.find(windowWithTitle('MeineApp - Google Chrome'));
//     // const region = await windowRef.region;
//     // await mouse.move(straightTo(centerOf(region)));
//     // await mouse.leftClick()
//
//     const windowRef = await screen.find(windowWithTitle('MeineApp - Google Chrome'));
//     await windowRef.focus();
//
//     const windowTitle = await windowRef.title;
//     const windowRegion = await windowRef.region;
//     console.log('Region: ', windowRegion);
//     console.log('Title: ', windowTitle);
//
//     await mouse.move(straightTo(await centerOf(windowRegion)));
//     await mouse.click(Button.LEFT);
// })();

import {screen, mouse, windowWithTitle, Button, singleWord, straightTo, centerOf, textLine} from "@nut-tree/nut-js";
import {useBoltWindowFinder} from "@nut-tree/bolt";

import {configure, Language, LanguageModelType, preloadLanguages} from "@nut-tree/plugin-ocr";

configure({
    languageModelType: LanguageModelType.BEST,
    dataPath: ''
});

(async () => {
    await preloadLanguages([Language.English, Language.German]);

    screen.config.autoHighlight = true;

    const location = await screen.find(singleWord("ist"), {
        providerData: {
            lang: [Language.English, Language.German],
            partialMatch: false,
            caseSensitive: false
        }
    });
    await mouse.move(
        straightTo(
            centerOf(
                location
            )
        )
    );
})();








