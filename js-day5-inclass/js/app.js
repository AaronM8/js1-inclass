// function(name); {
//   console.log(name);
// }('Aaron');
//
// function logName(name) {
//     console.log(name);
// };
//
// // funtion expression
// var logName = function(name) {
//   let me = 'Ryeker';
//   var you = 'Aaron';
//   console.log(name);
// };
//
// var nameToLog = prompt('name please');
// logName(nameToLog);
//
//
// // Global Scope
// var task = 'teach to swim';
// var time = 2;
// function doWork(a, b) {
//   // do work
//   var rate = 50;
//   function calcTime
// }


 var sentence = prompt('Please write a sentance');
 function capitalize(string) {
   if(string.indexOf('.') != -1){
     var sentences = string.split('. ');
     if(sentences.length > 1) {
       let newSentence;
       let i = 0;
       for(i; <= sentences.length; i++) {
         var firstLetter = sentences[i].substr(0,1).toUpperCase();
         var reset = sentences[i].substr(1).toLowerCase();
          newSentence += `${firstLetter}${reset}`;

       }
       return newSentence;
     }
};

alert(capitalize(sentence));
