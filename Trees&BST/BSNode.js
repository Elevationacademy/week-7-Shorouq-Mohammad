class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
    insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }
    findNode(value){
        if(this.value === value){
            return true;
        }else if(value < this.value && this.leftChild){
            return this.leftChild.findNode(value)
        }else if(value > this.value && this.rightChild){
            return this.rightChild.findNode(value)
        }
        return false;
    }
    findCommonParent(child1, child2){
        if(this.value < child1 && this.value < child2){
            this.rightChild.findCommonParent(child1, child2)
        }else if(this.value > child1 && this.value > child2){
            this.leftChild.findCommonParent(child1,child2)
        }else{
            console.log(this.value);
            return this.value
        }
    }
    find(value, node= this, parent = null){
        if(node.value === value){
            return {node, parent}
        }else if(value < node.value){
            return this.find(value, node.leftChild, node)
        }else if(value > node.value){
            return this.find(value, node.rightChild, node)
        }else{
            return false
        }
    }
    removeNode(parentOriginal, value){
        let {node, parent} = this.find(value)
        if(!node.leftChild && !node.rightChild){
            parent.rightChild === node ? parent.rightChild = null : parent.leftChild = null
        }else if(node.leftChild && node.rightChild){
            let {parentMin, subTree} = node.rightChild.findMin()
            if(subTree.rightChild){
                if(!(parentMin)){
                    parentMin = node
                }else{
                    parentMin.leftChild = subTree.rightChild
                }
            }
            subTree.leftChild = node.leftChild
            if(parentMin !== node){
                subTree.rightChild = node.rightChild
            }
            if(parent){
                parent.rightChild === node ? parent.rightChild = subTree : parent.leftChild = subTree
            }
            node = null
        }else if(node.leftChild){
            const child = node.leftChild
            parent.rightChild === node ? parent.rightChild = child : parent.leftChild = child
        }else{
            const child = node.rightChild
            parent.rightChild === node ? parent.rightChild = child : parent.leftChild = child
        }
        // if(value < parent.value){
        //     if(parent.leftChild){
        //         parent.leftChild.removeNode(this, value)
        //     }else{
        //         return false
        //     }
        // }else if(value > parent.value){
        //     if(parent.rightChild){
        //         parent.rightChild.removeNode(this, value)
        //     }else{
        //         return false
        //     }
        // }else{
        //     if(parent.rightChild && parent.leftChild){

        //     }else if(parent.leftChild){

        //     }else if(parent.rightChild){

        //     }else{

        //     }
        // }


        // if(parent.leftChild && value < parent.value){
        //     this.removeNode(parent.leftChild, value)
        // }else if(parent.rightChild && value > parent.value){
        //     this.removeNode(parent.rightChild, value)
        // }else{
        //     let rightNode
        //     if(parent.rightChild && parent.rightChild.value === value){
        //         rightNode = parent.rightChild
        //     }else if(parent.value === value){
        //         rightNode = parent
        //     }else{
        //         rightNode = parent.leftChild
        //     }
        //     if(rightNode && rightNode.value === value){
        //         if(!rightNode.leftChild && !rightNode.rightChild){
        //             rightNode = null
        //         }else if(rightNode.leftChild && rightNode.rightChild){
        //             child  = this.findMax(rightNode)
        //             removeNode(parent, child.value)
        //             child.rightChild = rightNode.rightChild
        //             child.leftChild = rightNode.leftChild
        //             rightNode = child
        //         }else if(rightNode.leftChild){
        //             child = rightNode.leftChild
        //             rightNode = child
        //         }else{
        //             child = rightNode.rightChild
        //             rightNode = child
        //         }
        //     }
        // }
    }
    findMax(parent){ //the parent here is the node i need to remove 
        let max  = parent.rightChild
        while(parent.rightChild){
            max = parent
            parent = parent.rightChild
        }
        return max
    }
    findMin(subTree = this){
        let  parentMin
        while(subTree.leftChild){
            parentMin = subTree
            subTree = subTree.leftChild
        }
        return {parentMin, subTree}
    }

}

const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
nodeWithOneChild.removeNode(nodeWithOneChild, 3)
console.log(nodeWithOneChild.find(8))
// console.log(nodeWithOneChild.removeNode(nodeWithOneChild, 9))
// console.log(nodeWithOneChild)
