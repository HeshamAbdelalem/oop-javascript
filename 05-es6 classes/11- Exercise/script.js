const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    const items = _items.get(this);

    items.push(obj);
  }

  pop() {
    const items = _items.get(this);

    if (items.length === 0) {
      throw new Error('Stack is empty');
    }

    items.pop();
  }

  peek() {
    const items = _items.get(this);
    if (items.length === 0) {
      throw new Error('Stack is empty');
    }
    return items.length;
  }

  get count() {
    return _items.get(this).length;
  }
}

const s = new Stack();
