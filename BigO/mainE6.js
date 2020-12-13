//exercise 6
const findDuplicates = function (arr) {
    let peopleNames = {}
  for(let person of people){
    if(peopleNames[person.name]){
        console.log('there is duplicate')
        break;
    }else{
        peopleNames[person.name] = 1 
    }
  }
};

let people= [
  { id: 1, name: "rew" },
  { id: 2, name: "rty" },
  { id: 3, name: "rew" },
  { id: 4, name: "fs" },
  { id: 5, name: "hgf" },
  { id: 6, name: "rty" },
  { id: 7, name: "kjh" },
];


findDuplicates(people)
