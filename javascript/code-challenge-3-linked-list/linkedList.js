const { Node } = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insert(value) {
    this.head = new Node(value,this.head);
    this.size ++;
    // const node = new Node(value);
    // if (!this.head) {
    //   node.next= this.head;
    //   console.log(node.next);
    //   this.head = node;
    // }else{
    //   node.next =this.head;
    //   this.head = node;
    // }
  }

  includes(value){
    let start = this.head;
    if (!this.head){
      return false;
    } else{
      while(start.value && start.value !== value){
        if(start.next === null) return false;
        start = start.next;
      }
      return true;
    }

  }

  toString(){
    let start = this.head;
    if (!this.head){
      return 'empty linked list';
    } else{
      let stringOfValues = '';
      while(start.value){
        stringOfValues += `{${start.value}} -> `;
        if(start.next === null) return stringOfValues += 'NULL';
        start = start.next;
      }
    }
  }

}

const ll = new LinkedList();
ll.insert('insterting 1');
ll.insert('insterting 2');
ll.insert('insterting 3');
// ll.insert('Last testing');
// console.log(ll.includes('Last testing'));
// console.log(ll.toString());
console.log(ll.toString());
// ll.insert('insterting 2');
// ll.insert('insterting 3');
console.log(ll);
// console.log(ll.size);
// console.log(ll.includes(null));
// console.log(ll.head.next);

module.exports = {LinkedList};
