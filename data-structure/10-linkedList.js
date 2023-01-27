
class Node{
    constructor(data){
      this.data=data
      this.next=null
    }
  }
  
  class LinkedList{
    constructor(){
      this.head=null; 
      this.length=0
    }
    prepend(data){
      const node =new Node(data)
      if(this.isEmpty()){
        this.head=node
      }else{
        node.next=this.head
        this.head=node
      }
      this.length++
    }
  append(data){
    const node =new Node(data)
    if(this.isEmpty()){
      this.head=node
    }else{
      let curr=this.head
      while(curr.next){
        curr=curr.next
      }
      curr.next=node
    }
    this.length++
  }
  
    insert(data,index){
      if(index<0 || index>this.length){
        return 
      }else if(index===0){
        this.prepend(data)
      }
      else{
        const node =new Node(data)
        let prev=this.head
        for(let i=0; i<index-1;i++){
          prev=prev.next
        }
        node.next=prev.next
        prev.next=node
        this.length++
      }
    }
  
    removeFrom(index){
      if(index<0 || index >=this.length){
        return null
      }
      let removeNode
      if(index===0){
        removeNode=this.head;
        this.head=this.head.next 
      }else{
        let prev=this.head
         for(let i=0; i<index-1; i++){
           prev=prev.next
         }
        removeNode=prev.next
        prev.next=removeNode.next
      }
      this.length--
      return removeNode.data
    }
  
  removeValue(data){
    if(this.isEmpty()){
      return null
    }
    if(this.head.data===data){
      this.head=this.head.next
      this.length--
      return data;
    }else{
      let prev=this.head
      while(prev.next && prev.next.data !==data){
        prev=prev.next
      }
      if(prev.next){
      const removedNode= prev.next
        prev.next =removedNode.next
        this.length--
        return data
      }
      return null
    }
  }
  
    search(data){
      if(this.isEmpty()){
        return -1
      }else{
        let i=0;
        let curr=this.head
        while(curr){
          if(curr.data===data){
            return i
          }
          curr=curr.next
          i++
        }
      }
      return -1
    }
    reverse(){
      let prev=null
      let curr=this.head
      while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
      }
      this.head=prev
    }
    isEmpty(){
      return this.length===0
    }
    getSize(){
      return this.length;
    }
  
    print(){
      if(this.isEmpty()){
        console.log("List is empty")
      }else{
        let curr=this.head
        let container=[];
        while(curr){
          container.push(curr.data)
          curr=curr.next
        }
        console.log(container)
      }
    }
  }
  
  const list=new LinkedList()
  
  list.prepend(30)
  list.prepend(20)
  list.prepend(10)
  list.append(160)
  list.insert(25,2)
  list.insert(40,4)
  //list.removeFrom(2)
  list.removeValue(40)
  console.log(list.removeFrom(0))
  console.log(list.getSize())
  list.reverse()
  list.print()
  console.log(list.search(160))