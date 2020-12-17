//exercise
class UniqueArray{
    constructor(){
        this.length  =0
        this.items = {}
    }
    add(item){
        if(!(this.exists(item))){
            this[this.length] = item
            this.items[item] = this.length
            this.length++
        }
    }
    showAll(){
        let str = ''
        for(let i =0; i<this.length; i++){
            str += this[i]+','
        }
        str = str.substring(0, str.length - 1)
        console.log("["+str+"]");
        return "["+str+"]"
    }
    exists(item){
        return typeof this.items[item] !== 'undefined' ? true : false;
    }
    get(index){
        return this[index]
    }
}
const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
console.log(uniqueStuff.exists("toy")) //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"

//extension