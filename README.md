
<img src="https://i.imgur.com/XfMdpeC.png" width="200" height="200" />

# Rubiks

Rubiks is a 0 dependency extendable logging library for modern applications.

```js
import { rubiks, warn, withDates } from "rubiks";

rubiks()
    .log("Rubiks can do normal logging")
    .log("Rubiks can also use custom levels, which allow changing the action", warn)
    .warn("It also has some included methods for simplicity")
    .use(withDates)
    .log("You can also use modifiers, that modify all logs of this instance");
```

you can also easily create your own levels...

```js
import { rubiks } from "rubiks";

function customLevel(self, content) {
    console.log(`This is the content: ${content}`)
}

rubiks()
    .log("hello!", customLevel)
```

or your own modifiers...

```js
import { rubiks } from "rubiks";

function customModifier(self) {
    self.format = `my content: ${self.format}, and the current level is ${self.level}`

    return null
}

rubiks()
    .use(customModifier)
    .log("testing")
    .error("more")
```


