// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
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
expect.extend(jestMatchers);
