import WordFinder from '../src/WordFinder';

describe('testing index file', () => {
  test('Empty string', () => {
    let wordFinder = new WordFinder();
    let testString = '';
    let wordsList = ["good", "god", "dog", "goo", "do", "go"];
    let expectedResult = new Array<string>();
    let wordsFound = wordFinder.find(testString, wordsList).sort();
   
    expect(wordsFound).toEqual(expectedResult);
  });

  test('Empty word list', () => {
    let wordFinder = new WordFinder();
    let testString = 'oogd';
    let wordsList = new Array<string>();
    let expectedResult = new Array<string>();
    let wordsFound = wordFinder.find(testString, wordsList).sort();
    console.log(wordsFound)
    expect(wordsFound).toEqual(expectedResult);
  });

  test('Simple test', () => {
    let wordFinder = new WordFinder();
    let testString = 'oogd';
    let wordsList = ["good", "god", "dog", "goo", "do", "go"];
    let expectedResult = ["good", "god", "dog", "goo", "do", "go"].sort();
    let wordsFound = wordFinder.find(testString, wordsList).sort();
   
    expect(wordsFound).toEqual(expectedResult);
  });
  test('Does not return words it does not make up', () => {
    let wordFinder = new WordFinder();
    let testString = 'oogd';
    let wordsList = ["good", "god", "dog", "goo", "do", "go", "do", "new", "whip"];
    let expectedResult = ["good", "god", "dog", "goo", "do", "go"].sort();
    let wordsFound = wordFinder.find(testString, wordsList).sort();
   
    expect(wordsFound).toEqual(expectedResult);
  });
  test('Longer sequence', () => {
    let wordFinder = new WordFinder();
    let testString = 'oogdafjiopp';
    let wordsList = ["good", "god", "dog", "goo", "do", "go"];
    let expectedResult = ["good", "god", "dog", "goo", "do", "go"].sort();
    let wordsFound = wordFinder.find(testString, wordsList).sort();
   
    expect(wordsFound).toEqual(expectedResult);
  });
 
});