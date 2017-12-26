const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);
        if (this.length === 0) {
          this._head = node;
          this._tail = node;
        } else {
          this._tail.next = node;
          node.prev = this._tail;
          this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
      return this.length !== 0 ? this._head.data : null;
    }

    tail() {
        return this.length !== 0 ? this._tail.data : null;
    }

    at(index) {
      if (this.isEmpty() || index > this.length - 1) { return null; }
      var node = this._head;
      var position = 0;

      while (position < index) {
          node = node.next;
          position++;;
      }

      return node.data;
    }

    insertAt(index, data) {
        var newNode = new Node(data);
        if (index < 0 || (index > this.length - 1 && this.length !== 0)) {
            return false;
        }

        if (index === 0) {
            if (this.isEmpty()) {
                this.append(data);
                return this;
            } else {
                newNode.next = this._head;
                this._head.prev = newNode;
                this._head = newNode;
                this.length++;
            }
            return this;
        } else {
          var current = this._head,
          previous = null,
          position = 0;
          while (position < index) {
              previous = current;
              current = current.next;
              position += 1;
          }

          current.prev.next = newNode;
          newNode.prev = current.prev;
          current.prev = newNode;
          newNode.next = current;

          this.length++;
        }
        return this;
    }

    isEmpty() {
        return this.length == 0 ? true : false;
    }

    clear() {
      while (!this.isEmpty()) {

        if (this.isEmpty()) {
          return null;
        }

        if (this.length === 1) {
            this._head = null;
            this._tail = null;
        } else {
            this._tail = this._tail.prev;
            this._tail.next = null;
        }
        this.length -= 1;
      }
      return this;
    }

    deleteAt(index) {
        var node = this._head;
        var position = 0;
        while (position < index) {
          node = node.next;
          position++;;
        }

        if (index < 0 || index > this.length - 1) {
            return null;
        }

        if (index === 0) {
            if (this.isEmpty()) {
                return null;
            }
            if (this.length === 1) {
                this.clear();
                return this;
            } else {
                this._head = this._head.next;
                this._head.prev = null;
            }
            this.length -= 1;
        } else if (index === this.length - 1) {
            if (this.isEmpty()) {
                return null;
            }
            if (this.length === 1) {
                this.clear();
                return this;
            } else {
                this._tail = this._tail.prev;
                this._tail.next = null;
            }
            this.length -= 1;
        } else {
          node.prev.next = node.next;
          node.next.prev = node.prev;
          node.next = node.prev = null;
          this.length -= 1;
        }
        return this;

    }

    reverse() {
        if (this.isEmpty()) {
          return -1;
        }else if (this.length === 1){
          return this;
        } else {
          var currNode = this._head;
          var forTail = this._head;
          var prevNode = this._tail;
          var nextNode = null;
          while(currNode!=null){
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
          }
          this._head = prevNode;
          this._tail = forTail;
        }
        return this;
    }

    indexOf(data) {
        if (this.isEmpty()) { return null; }

        var node = this._head;
        var index = this.length;
        var position = 0;

        while (position < index) {
            if (node.data === data) {
                return position;
            }
            position += 1;
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
