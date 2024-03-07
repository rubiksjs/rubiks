<img src="https://i.imgur.com/XfMdpeC.png" width="200" height="200" />

# Rubiks

* [Levels](https://github.com/rubiksjs/rubiks?tab=readme-ov-file#levels)
* [Modifiers](https://github.com/rubiksjs/rubiks?tab=readme-ov-file#modifiers)

---

[![JSR](https://jsr.io/badges/@rubiks/rubiks)](https://jsr.io/@rubiks/rubiks)
[![deno module](https://shield.deno.dev/x/rubiks)](https://deno.land/x/rubiks)

Rubiks is a 0 dependency extendable logging library for modern applications.

```js
import { rubiks, warn, withDates } from "@rubiks/rubiks";

rubiks()
    .log("Rubiks can do normal logging")
    .log("Rubiks can also use custom levels, which allow changing the action", warn)
    .warn("It also has some included methods for simplicity")
    .use(withDates)
    .log("You can also use modifiers, that modify all logs of this instance");
```

## Levels

Levels allow you to change the log, it can change the format, save logs to files, basically everything you can code!

```js
import { rubiks } from "@rubiks/rubiks";

// `self` is a reference to the rubiks instance where it's use (basically a cleaner way to use this)
// `content` is the string that the user will pass to the log function
function customLevel(self, content) {
    console.log(`This is the content: ${content}`)
}

rubiks()
    .log("hello!", customLevel)
```

## Modifiers

Modifiers modify every log of the rubiks instance. There are a couple of modifiers built-in into rubiks, but you can also create your own modifiers

```js
import { rubiks } from "@rubiks/rubiks";

function myCustomModifier(self) {
    // The code outside of the returned function only gets executed once, on use.
    self.format = self.format.toLowerCase()

    // As you may see, this function is a level, Modifiers return levels that get executed in every log
    return (self, content) => {
        // The code inside of this function gets executed on every log
        self.format += `${content} `
    }
}

rubiks()
    .use(myCustomModifier)
    .log("testing")
    .error("more")
```

