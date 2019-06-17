function HtmlElement() {
  this.click = function() {
    console.log('clicked');
  };
  this.render = function() {
    return `<select>
      ${this.items.map(item => `<option>${item}</option>`).join('')}
    </select>`;
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

function HtmlImgElement(src) {
  this.src = src;
  this.render = function() {
    return `<img src=${this.src} />`;
  };
}

HtmlImgElement.prototype = new HtmlElement();
HtmlImgElement.prototype.constructor = HtmlImgElement;

HtmlImgElement.prototype.render = function() {
  return `<img src=${this.src}/>`;
};

//# this approch will not inherinte the focus method
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const element = new HtmlElement();
const selectElement = new HtmlSelectElement();
