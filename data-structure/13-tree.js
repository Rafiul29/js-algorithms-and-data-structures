class Node{
    constructor(value){
      this.value=value
      this.right=null
      this.left=null
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root=null
    }
    isEmpty(){
      return this.root===null
    }
    insert(value){
      const newNode= new Node(value)
      if(this.isEmpty()){
        this.root=newNode;
      }else{
        this.insertNode(this.root,newNode)
      }
    }
    insertNode(root,newNode){
      if(newNode.value<root.value){
        if(root.left===null){
          root.left=newNode
        }else{
          this.insertNode(this.left,newNode)
        }
      }else{
        if(root.right===null){
          root.right=newNode
        }else{
          this.insertNode(this.right,newNode)
        }
      }
    }
    
    search(root,value){
      if(!root){
        return false
      }else{
        if(root.value===value){
          return true
        }else if(value <root.value){
          return this.search(root.left,value)
        }else{
          return this.search(root.right,value)
        }
      }
    }
    
    preOrder(root){
      if(root){
        console.log(root.value)
        this.preOrder(root.left)
         this.preOrder(root.right)
        
      }
    }
  
      levelOrder(){
        //use the optimised queue implementation
        const queue=[]
        queue.push(this.root)
        //console.log(queue)
        while(queue.length){
          let curr=queue.shift()
          console.log(curr.value)
          if(curr.left){
            queue.push(curr.left)
          }
          if(curr.right){
            queue.push(curr.right)
          }
        }
      }
    min(root){
      if(!root.left){
        return root.value
      }else{
        return this.min(root.left)
      }
    }
    max(root){
      if(!root.right){
        return root.value
      }else{
        return this.max(root.right)
      }
    }
  
  
    
  }
  const bst=new BinarySearchTree()
  bst.insert(20)
  bst.insert(15)
  bst.insert(21)
  
  //bst.preOrder(bst.root)
  bst.levelOrder()
  //console.log(bst.search(bst.root,1))
  console.log(bst.max(bst.root))