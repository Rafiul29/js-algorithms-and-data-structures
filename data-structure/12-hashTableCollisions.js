class HashTable {
    constructor(size) {
      this.table=new Array(size)
      this.size=size;
    }
    
    hash(key){
      let total=0;
      for(let i=0; i<key.length;i++){
        total+= key.charCodeAt(i);
      }
      return total % this.size
    }
    set(key,value){
      const index=this.hash(key)
      //this.table[index]=value
      const bucket=this.table[index]
      if(!bucket){
        this.table[index]=[key,value]
      }else{
        const samekeyItem=bucket.find(item=>item[0]===key)
        if(samekeyItem){
          samekeyItem[1]=value
        }else{
          bucket.push([key,value])
        }
      }
    }
    get(key){
      const index=this.hash(key)
     // return this.table[index]
      const bucket=this.table[index]
      if(bucket){
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem){
          return sameKeyItem[1]
        }
      }
      return undefine;
    }
    remove(key){
    const index=this.hash(key)
     // this.table[index]=undefined
      const bucket=this.table[index]
      if(bucket){
        const sameKeyItem=bucket.find(item=>item[0]===key)
        if(sameKeyItem){
          bucket.slice(bucket.indexOf(sameKeyItem),1)
        }
      }
    }
    display(){
      for(let i=0; i<this.table.length;i++){
       if(this.table[i]){
          console.log(i,this.table[i])
       }
      }
    }
  }
 
 const hashTable= new HashTable(50)
 hashTable.set("name","rafiul")
 hashTable.set("name","rafi")
 hashTable.set("age",24)
 hashTable.remove("name")
 
 //console.log(hashTable.get("name"))
 
 hashTable.display()