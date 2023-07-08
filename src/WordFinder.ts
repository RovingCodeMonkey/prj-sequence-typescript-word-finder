export default class WordFinder {
    words: Array<string>;
    validWords: Array<string>;
    constructor() {
      this.words = new Array<string>();
      this.validWords = new Array<string>();
    }
    //Determine if it is a valid word
    isWord(s:string) : boolean {
      return this.validWords.includes(s)
    }
    //Add all unique word permutations of the string 
    permutations(s:string, result:string) {
      //It is a valid word and we don't have it already
      if (this.isWord(result) && !this.words.includes(result)) {
        this.words.push(result);
      }
      //Reached the end of permutations
      if (s.length === 0) {
        return;
      }

      for (let i = 0; i < s.length; i++) {
        let current = s[i];
        let withoutCurrent = s.slice(0, i) + s.slice(i + 1);
        this.permutations(withoutCurrent, result + current)
      }
      
    }

    //Takes in an input to check it's permutations contain valid words provided in validWords
    find(input: string, validWords: Array<string>) : Array<string> {
      this.words = new Array<string>();
      if(!input || !validWords) {
        return this.words;
      }
       
        this.validWords = validWords;
        this.permutations(input, '')
        return this.words;
    }
}

