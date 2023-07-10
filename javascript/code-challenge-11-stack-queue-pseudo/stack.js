class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.front = null;
    this.length = 0;
  }

  peek() {
    if(this.front === null) return false;
    else return this.front.value;
  }

  push(value){
    let node = new Node(value);
    if(!this.peek()) {
      node.next = this.front;
      this.front = node;
    } else {

      node.next = this.front;
      this.front = node;
    }
    this.length++;
    return(this);
  }

  pop(){
    if(!this.peek()) return 'empty queue';
    else {
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length--;
      return temp.value;
    }
  }
}


module.exports = {
  Node,Stack
};
