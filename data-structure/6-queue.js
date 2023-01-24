class Queue{
    constructor(){
      this.items=[]
    }
    enqueue(element){
      this.items.push(element)
    }
    dequeue(){
      return this.items.shift()
    }
    peek(){
      return this.items[0]
    }
    isEmpty(){
      return this.items.length==0
    }
    size(){
      console.log(this.items.length)
    }
  
    print(){
      console.log(this.items.toString()) 
    }
  }
  
  
  const queue=new Queue();
  queue.enqueue(4)
  queue.enqueue(5)
  queue.enqueue(6)
  console.log(queue.dequeue())
  console.log(queue.isEmpty())
  queue.size()
  queue.print()