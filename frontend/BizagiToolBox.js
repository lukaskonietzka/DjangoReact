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



class BizagiToolBox {
    constructor(current_window) {
        this.currentWindow = current_window;
    }

    isTextLine(word) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === ' ') {
                return true;
            }
        }
        return false
    }

    async scrollWindowHeight(currentWindow) {
        await mouse.scrollDown((await currentWindow.region).height/2)
    }

    async moveMouseToRegionOrScroll(word, caseSensitive, printError) {
        try {
            await preloadLanguages([Language.English, Language.German]);
            screen.config.confidence = 0.6;
            screen.config.autoHighlight = true;
            screen.config.highlightDurationMs = 1000;
            screen.config.highlightOpacity = .5;

        if (this.isTextLine(word)) {
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
            await this.scrollWindowHeight(this.currentWindow);
            await sleep(1000);
            await this.moveMouseToRegionOrScroll(word, caseSensitive, printError, this.currentWindow);
            return false
        }
    }
}