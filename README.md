# Chrome extension continaing example for incompleteness of [`chrome-types`](https://github.com/GoogleChrome/chrome-types)

Dashlane's initial testing indicates that `chrome-types` is incomplete. This
example shows how a valid use of `chrome.runtime.onMessage.addListener` fails to
compile without a `// @ts-expect-error` comment.

We also noticed that the documentation is sometimes in contradiction with the
observed behaviour as well as itself. For example the documentation for
[`chrome.runtime.Port.onMessage`](https://developer.chrome.com/docs/extensions/reference/runtime/#type-Port)
correctly states that "The first parameter [of the callback] is the message, the
second parameter is the port that received the message." while the documentation
for the listener itself states that "The listener parameter should be a function
that looks like this: `() => {...}`" which is incorrect.

Other cases of incomplete types we have found so far are:

* `chrome.tabs.QueryInfo` - `QueryInfo` not included in `chrome.tabs` interface
* `chrome.tabs.TabActiveInfo` - `TabActiveInfo` not included in `chrome.tabs`
  interface
* `chrome.runtime.Port.onMessage.addListener` - the callback parameter is
  incorrectly typed as `() => void`
* `chrome.tabs.onActivated.addListener` - the callback parameter is incorrectly
  typed as `() => void`
* `chrome.windows.onFocusChanged.addListener` - the callback parameter is
  incorrectly typed as `() => void`
* `chrome.runtime.onConnect.addListener` - the callback parameter is incorrectly
  typed as `() => void`
