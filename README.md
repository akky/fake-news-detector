# fake-news-detector

[Fake News Detector](https://chrome.google.com/webstore/detail/fake-news-detector/pejpjcimkbhajilhoacpgdadhhohfjdc) is a Chrome Extension to notify you if the page belongs to a fake/satirical news site

## How it works

With this Chrome extension, when you visit a page under the known fake and/or satirical domain, it shows a caution bar at the top of the page.

Satirical site domains are such like theonion.com, dailycurrant.com, etc.

For the current matched domains, please see the source code [domains.js](https://github.com/akky/fake-news-detector/blob/master/domains.js).

## limitations

  * Simple string match can not handle when only partial subfolder has fake contents. (Regex match solves this issue but I would rather avoid it for now.)

## unit test

Open .unittest/index.html in your browser will do unit test on domain matching logics.

## contribution

### site info

Please change domains.js and send me a PR.

### translation

Please add _locales/(your locale)/messages.json , then send me a PR.

## credit

The extension icon is based on "Internet, news, reader icon" by FreeDesktop.org
CC BY-NC 3.0
