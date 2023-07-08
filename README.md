# sequence
The Problem:
Take in an input and check if it's permutations contain valid words provided in an array.

input: "oogd"
validWords: ["good", "god", "dog", "goo", "do", "go"]

Solution included as WordFinder.ts
Example 

```
    let wordFinder = new WordFinder();
    let testString = 'oogd';
    let validWords = ["good", "god", "dog", "goo", "do", "go"];
    let result = wordFinder.find(testString, wordsList);
```

To run the test code

```
npm install
npm test
```
