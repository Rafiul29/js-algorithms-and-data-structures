class CircularQueue{
    constructor(capacity){
      this.items=new Array(capacity)
      this.capacity=capacity
      this.currentLength=0;
      this.rear=-1;
      this.front=-1;
    }
    isFull(){
      return this.currentLength==this.capacity
    }
    isEmpty(){
      return this.currentLength==0
    }
    enqueue(element){
      if(!this.isFull()){
        this.rear =(this.rear+1) % this.capacity;
        this.items[this.rear]=element;
        this.currentLength +=1;
        if(this.front===-1){
          this.front=this.rear
        }
      }
    }
  
    dequeue(){
      if(this.isEmpty()){
        return null
      }
      const item=this.items[this.front]
      this.items[this.front]=null
      this.front =(this.front+1) % this.capacity
      console.log(this.front)
      this.currentLength -=1
      if(this.isEmpty()){
        this.front=-1
        this.rear=-1
      }
      return item;
    }
    peek(){
      if(!this.isEmpty()){
        return this.items[this.front]
      }
    }
    // print(){
    //       if(this.isEmpty()){
    //           console.log("Queue is Empty")
    //       }else{
    //           let i;
    //           let str=''
    //           for(i=this.front; i!=this.rear;i=(i+1)%this.capacity){
    //               str +=this.items[i] + " "
    //           }
  
    //           str+=this.items[i]
    //           console.log(str)
    //       }
    //   }
  
    print(){
        console.log(this.items) ;
      }
  }
  
  
  const circularQueue=new CircularQueue(4)
  console.log(circularQueue.isEmpty())
  console.log(circularQueue.isFull())
  circularQueue.enqueue(10)
  circularQueue.enqueue(20)
  circularQueue.enqueue(30)
  circularQueue.enqueue(40)
  circularQueue.dequeue()
  
  circularQueue.enqueue(50)
  circularQueue.print()