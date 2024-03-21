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
  mouse,
  Point,
  straightTo,
  screen,
  windowWithTitle,
  centerOf,
  singleWord,
} from '@nut-tree/nut-js'
import {useBoltWindowFinder} from '@nut-tree/bolt';



(async () => {

  useBoltWindowFinder()
  const currentWindow = await screen.find(windowWithTitle('MeineApp'));
  currentWindow.focus()
  //const createButton = await screen.find(singleWord("Create"))
 // await mouse.move(straightTo(centerOf(createButton)));

  // const target = new Point(500, 350);
  // await mouse.move(straightTo(target));
})();