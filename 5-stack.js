class Stack{
    constructor(){
      this.items=[]
    }
    push(element){
      this.items.push(element)
    }
    pop(){
      return this.items.pop()
    }
  
    peek(){
      return this.items[this.items.length-1]
    }
  isEmty(){
    console.log(this.items.length===0) 
  }
    size(){
      return this.items.length;
    }
      print(){
      console.log(this.items.toString())
    }
  }
  
  const stack=new Stack()
  stack.push(4)
  stack.push(5)
  stack.push(6)
  
  
  console.log(stack.pop())
  stack.print()
  console.log(stack.peek())
  stack.isEmty()
  console.log(stack.size())