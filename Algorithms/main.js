//Exercise 1: time complexity is O(n)
printStars = num => {
    if(num <= 0 ){
        console.log('please put a reasonable number');
    }
    let starsString =''
    let stars =''
    for(let i =0; i< num; i++){
        stars += '*'
        console.log(stars)
        starsString += stars+'\n'
    }
    return starsString
}
printStars(5)

//Exercise 2: time complexity is O(n)
printBackwardsStars = num => {
    if(num <= 0 ){
        console.log('please put a reasonable number');
    }
    let stars = ''
    let starsString =''
    for(let i=0; i<num; i++){
        stars += '*'
    }
    for(let j=0; j<num; j++){
        console.log(stars)
        starsString += stars +'\n'
        stars = stars.substring(0, stars.length - 1)
    }
    return starsString
}
printBackwardsStars(5)

//Exercise 3: time complexity is O(m+n)
printStarSeries = (num, count) => {
    let starSeries = printStars(num)
    starSeries += printBackwardsStars(num - 1 )
    for(let i=0; i<count; i++){
        console.log(starSeries)
    }
}
printStarSeries(5,3)

//Exercise 4: time complexity is O(n)
const reverse = function(str){
    let reversed = ''
    for(let i= str.length-1; i>=0; i--){
        reversed += str[i]
    }
    return reversed
} 
reverse("dog") 
reverse("race car") 

//Exercise 5: time complexity is O(n)
isPalindrome = str => {
    str = str.toLowerCase()
    let x=0
    let y=str.length - 1 
    for(let i=0; i<str.length/2; i++){
        if(str[x] === ' '){
            x +=1 
        }else if(str[y] === ' '){
            y -=1
        }else if(str[x] === str[y]){
            x +=1 
            y -=1 
        }else{
            return false
        }
    }
    return true
}
console.log(isPalindrome('Taco Cat'));

//Exercise 6: time Complexity is O(n)
encrypt = str => {
    let encodedStr =''
    for(let i=0; i< str.length; i++){
        encodedStr += String.fromCharCode(str.charCodeAt(i) + 1)
    }
    return encodedStr
}
console.log(encrypt('cat'));

//Exercise 7: time Complexity is O(n)
decrypt = str => {
    let decryptedStr = ''
    for(let i=0; i< str.length; i++){
        decryptedStr += String.fromCharCode(str.charCodeAt(i) - 1)
    }
    return decryptedStr
}
console.log(decrypt(encrypt('cat')))

//Exercise 8: time complexity is O(n)
const colors = ["red", "indigo", "white", "teal", "yellow"];
const foods = ["bread", "cheese", "cucumber"];

const jumble = function (arr1, arr2) {
    let jumbledArr = [...arr1]
    let arrElement ={}    
    for(let i=0; i< jumbledArr.length; i++){
        arrElement[jumbledArr[i]] = 1
    }
    for(let i=0; i< arr2.length; i++){
        if(! arrElement[arr2[i]]){
            jumbledArr.push(arr2[i])
        }
    }
    return jumbledArr
}
jumble(colors, foods) 

//Exercise 9: time Complexity is O(1)
getLetter =()=>{
    const rawDist = {
        A: 60,
        B: 10,
        C: 10,
        D: 20
    }
    const num = Math.random()
    if(num <= rawDist.A) return 'A'
    else if(num <= rawDist.D) return 'D'
    else if(num <= rawDist.B) return 'B'
    else return 'C'
}
console.log(getLetter())

//Extension 1: 
printInLoop= words => {
    let i=0
    while(true){
        if(i === words.length){
            i =0
        }
        console.log(words[i]);
        i++
    }
}
// printInLoop(["down", "the", "rabbit", "hole"])

//Extension 2: time complexity is O(n)
findClosest= (points, point)=>{
    if(points.length ===0){
        console.log('the array you provided is not reasonable');
        return null;
    }
    let distance = Math.sqrt(Math.pow(points[0].x - point.x,2) + Math.pow(points[0].y - point.y,2))
    let closestPoint = points[0]
    for(let i=1; i< points.length; i++){
        let thisDistance = Math.sqrt(Math.pow(points[i].x - point.x,2) + Math.pow(points[i].y - point.y,2))
        if(thisDistance < distance){
            distance = thisDistance
            closestPoint = points[i]
        }
    }
    console.log(closestPoint);
    return closestPoint
}
let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }

findClosest(pizzaLocations, homeLocation)

//Extension 3: time complexity is O(n)
secretEncrypt = (str, code) => {
    str = str.toLowerCase()
    let encryptedStr = ''
    let j
    for(let i=0; i<str.length ; i++){
        j= i % code.length
        let diff = code.charCodeAt(j) - 96
        encryptedStr += String.fromCharCode(str.charCodeAt(i) + diff)
    }
    return encryptedStr
}
secretEncrypt("elephant", "cab")

//Extension 4: time complexity is O(n)
secretDecrypt = (encryptedMessage, secret) => {
    let decryptedStr = ''
    let j 
    for(let i=0; i< encryptedMessage.length; i++){
        j = i % secret.length
        let diff = secret.charCodeAt(j) - 96
        decryptedStr += String.fromCharCode(encryptedMessage.charCodeAt(i) - diff)
    }
    return decryptedStr
}
secretDecrypt('hmgsicqu', 'cab')




