class Draggable {
  constructor(options) {
    this.setupList(options);
  }
  
  setupList(options) {
    let {list, el: element, template} = options;
    
    if (!element) throw Error('No element found.');
    if (!list) throw Error('No list found.');
    if (!Array.isArray(list)) throw Error('List Should not be an array.');
    if (!template) throw Error('No template found.');
    if(typeof template !== 'function') throw Error('template should be a function.');
    
    list.forEach(item => element.innerHTML += template(item))
  }
}