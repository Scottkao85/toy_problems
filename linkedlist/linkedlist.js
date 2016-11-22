var linkedList = function () {
  this.head = null;
  this.tail = null;

  var LinkedListNode = function(data) {
    this.next = null;
    this.data = data;
  }

  this.add = function(data) {
    if(this.head == null) {
      this.head = new LinkedListNode(data);

      return this.head;
    }

    if(this.tail == null) {
      this.tail = new linkedListNode(data);

      return this.tail;
    }

    this.tail.next = new LinkedListNode(data);
    this.tail = this.tail.next;
    this.tail = null;

    return this.tail;

  };
}