import _ from "lodash";

const makeCensored = (text1, text2) => {
   const newText1 = Array.from(new Set(text1));
   const newText2 = Array.from(new Set(text2));
   let result = 0
   for (let i = 0; i < newText1.length; i++) {
      for (let y = 0; y < newText2.length; y++) {
         if (newText1[i] === newText2[y])
            result = result + 1
      }
   }
   return result
};
console.log(makeCensored([0], ['one', 'two']));