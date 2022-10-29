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
  const a = /\[a\]/
  const n = /\[n\]/
  const v = /\[v\]/
  const dot = /[.]/g
  const com = /[,] /g

  const newArray = [] //creating a new array for results
  
  const splitArray = rawStory.split(" ") // splitting the text into separate words
  splitArray.forEach((str) => {
    if (n.test(str)) {
      const obj = {}
      obj['word'] = str.slice(0, str.length - 3)
      obj['pos'] = 'noun'
      newArray.push(obj)
  } else if (v.test(str)) {
      const obj = {}
      obj['word'] = str.slice(0, str.length - 3)
      obj['pos'] = 'verb'
      newArray.push(obj)
  } else if (a.test(str)) {
      const obj = {}
      obj['word'] = str.slice(0, str.length - 3)
      obj['pos'] = 'adj'
      newArray.push(obj)
  } else if (dot.test(str)) {
      const obj = {}
      obj['word'] = str
      newArray.push(obj)
  } else if (com.test(str)) {
      const obj = {}
      obj['word'] = str
      newArray.push(obj)
  } else {
      const obj = {}
      obj['word'] = str
      newArray.push(obj)
  }
})
  console.log(newArray)
  return newArray  
}

function madLibsEdit(story) {
  let madEdit = document.querySelector('.madLibsEdit')
  let p = document.createElement('p')
  madEdit.appendChild(p)

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
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
      console.log(processedStory);
    });
  
