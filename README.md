# Easy Form values to JSON
## The goal 
To make an easy tool that quickly converts forms to be asynchronous, and their values to a JSON object.

## What it does
This really converts submitted form values to a JS object, which can then be easily converted to JSON with stringify. 
I cut out the actual stringification in case the data has to be checked or manipulated first.

## How to use
1. Add the class 'ezee-ajax-form' to a form
2. Set form 'onsubmit' to the name of the function you want to handle the form with, but **_not_** with parenthesis
    * (i.e.) `myFuncName` **NOT** `myFuncName()`
3. Set 'name' or 'id' on each input in the form(will check 'name' first)
4. On form submit
    * The page will not refresh(ajax)
    * The function in form 'onsubmit' will get signature (formValuesAsObj, formElement)
Then you can do whatever you want with them!

## Notes
* The function name in 'onsubmit' has to point to a function on the `window`, or global scope. For instance `myHandlerObj.myHandlerFunc` won't work, at least for now.
* The required class name for the form is only defined once, if you want to find/replace
* I didn't actually set up a webpack flow yet. I just ran the src through an online minifier. I know. It's true. I'm lazy. I'll get to that too eventually. 

### Isn't this a little short to be a stormtrooper?
#### (...or github repo?)
Yes. Yes it is. 
I wanted to make it a repo in case someone came along with a killer idea to improve it.
So if you have any suggestions or improvements, feel free!
