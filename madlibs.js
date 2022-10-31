/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  const pattern = /(\w+\[[nva]\])|[.,]|\w+[^\[.\]\s]/g;
  const storyArray = rawStory.match(pattern);
  const nounPattern = /\[n\]/;
  const verbPattern = /\[v\]/;
  const adjectivePattern = /\[a\]/;
  const parsedStory = [];
  storyArray.forEach((str) => {
    const obj = {};
    if (nounPattern.test(str)) {
      obj["word"] = str.slice(0, str.length - 3);
      obj["pos"] = "noun";
      parsedStory.push(obj);
    } else if (verbPattern.test(str)) {
      obj["word"] = str.slice(0, str.length - 3);
      obj["pos"] = "verb";
      parsedStory.push(obj);
    } else if (adjectivePattern.test(str)) {
      obj["word"] = str.slice(0, str.length - 3);
      obj["pos"] = "adj";
      parsedStory.push(obj);
    } else {
      obj["word"] = str;
      parsedStory.push(obj);
    }
  });
  return parsedStory;
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */

function updateValue(e, index) {
  const previewAnchor = document.querySelector(`.anchor${index}`);
  previewAnchor.textContent = e.target.value;
  if (e.key === "Enter") {
    if (e.target.nextElementSibling) e.target.nextElementSibling.focus();
  }
}
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    const editContainer = document.querySelector(".madLibsEdit");
    const previewContainer = document.querySelector(".madLibsPreview");
    const p = document.createElement("p");
    const pPreview = document.createElement("p");
    processedStory.map((obj, index) => {
      if ("pos" in obj) {
        p.innerHTML += ` <input type="text" maxlength="20" placeholder="(${obj.pos})" id="input${index}" onkeydown="updateValue(event, ${index})"/>`;
        pPreview.innerHTML += ` <a href="#input${index}" class="anchor${index}">(${obj.pos})</a>`;
      } else {
        p.innerHTML += " " + obj.word;
        pPreview.innerHTML += " " + obj.word;
      }
    });
    editContainer.append(p);
    previewContainer.append(pPreview);
  });
