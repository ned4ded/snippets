class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    console.log(this.children);
    return !!this.children.size;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    if(!keys.length) return undefined;

    const [first, ...rest] = keys;
    const child = this.getChild(first);

    if(!rest.length) return this.getChild(first);

    return child ? child.getDeepChild(rest) : undefined;
  }

  getChildren() {
    const arr = [];

    this.children.forEach((v, k) => {
      return arr.push(v);
    });

    return arr;
  }
}

tree = new Tree('/');
tree.addChild('var')
  .addChild('lib')
  .addChild('run');
tree.addChild('etc');
tree.addChild('home');
