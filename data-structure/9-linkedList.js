class Node{
    constructor(data){
      this.data=data;
      this.next=null
    }
  }
  
  class LinkedList{
    constructor(){
      this.head=null;
      this.tail=null;
      this.length=0
    }
    isEmpty(){
      return this.length===0
    }
    getSize(){
      return this.length;
    }
   prepend(data) {
      const node = new Node(data);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.length++;
    }
  append(data){
  const node = new Node(data)
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
      if(index<0 || index > this.length) {
        return 
      }if(index===0){
        this.prepend(data)
      }else{
        const node =new Node(data);
        let prev=this.head;
        for(let i=0; i<index-1; i++){
          prev=prev.next;
        }
        node.next=prev.next
        prev.next=node
        this.length++
      }
    }
  
  
  // remove from value 
  
  remove(data) {
      let curEl = this.head;
      let prevEl = null;
  
      while (curEl) {
        if (data === curEl.data) {
          if (!prevEl) {
            this.head = curEl.next;
          } else {
            prevEl.next = curEl.next;
          }
  
          this.length--;
          return curEl.data;
        }
  
        prevEl = curEl;
        curEl = curEl.next;
      }
  
      return null;
    }
    //search data
  search(data){
    if(this.isEmpty()){
      return -1
    }
    let i=0;
    let cur=this.head
    while(cur){
      if(cur.data===data){
        return i
      }
      cur=cur.next
      i++;
    }
    return -1
  }
  //search data index
    find(index){
      let curEl=this.head;
      let count=0;
      while(curEl){
        if(count===index){
          return curEl.data
        }
        count++
        curEl=curEl.next
      }
      return null
    }
  
  
    //reveerse link list 
    reverse(){
      let prev=null
      let curr=this.head;
      while(curr){
        let next=curr.next
        curr.next=prev
        curr=next
      }
      this.head=prev
    }
   print() {
      if (this.isEmpty()) {
        console.log("List is empty");
      } else {
        let curr = this.head;
        let list = "";
        while (curr) {
          list += `${curr.data}->`;
          curr = curr.next;
        }
        console.log(list);
      }
    }
    
  }
  
  const list=new LinkedList()
  
  list.prepend(10)
  list.prepend(50)
  list.prepend(56)
  list.append(80)
  list.insert(20,2)
  
  list.remove(80)
  list.print()
  console.log(list.search(20))
  console.log(list.find(3))
  console.log(list.getSize())