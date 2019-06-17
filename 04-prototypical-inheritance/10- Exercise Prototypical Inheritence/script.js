function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function() {
  console.log('focused from HtmlElement');
};

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function(item) {
    this.items.push(item);
  };
  this.removeItem = function(item) {
    // array.splice(index, howmany, item1, ....., itemX)
    this.items.splice(this.items.indexOf(item), 1);
  };
}

//# this approch will not inherinte the focus method
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const element = new HtmlElement();
const selectElement = new HtmlSelectElement();
