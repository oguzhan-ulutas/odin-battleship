export function elementSelector(selector) {
  const selectedElement = document.querySelector(selector);
  return selectedElement;
}

// Create new html elements
export function newElementCreator(tag) {
  const newElement = document.createElement(tag);
  return newElement;
}

// Adds class to an element
export function addClass(element, elementClass) {
  element.classList.add(elementClass);
}

// Adds content
export function addContent(element, content) {
  element.textContent = content;
}

// Appends a child element to a parent
export function appendElement(parent, ...children) {
  children.forEach((child) => {
    parent.appendChild(child);
  });
}

// Adds src to an element
export function addSrc(element, source) {
  element.src = source;
}

// Adds alt attribute to an img element
export function addAlt(element, alternativeText) {
  element.alt = alternativeText;
}

// Adds title attribute to an element
export function addTitle(element, titleAttribute) {
  element.title = titleAttribute;
}

// Adds id attribute to an element
export function addId(element, idAttribute) {
  element.id = idAttribute;
}

// Adds type attribute to an element
export function addType(element, typeAttribute) {
  element.type = typeAttribute;
}

// Adds name attribute to an element
export function addName(element, nameAttribute) {
  element.name = nameAttribute;
}

// Adds name attribute to an element
export function addPlaceholder(element, placeholderAttribute) {
  element.placeholder = placeholderAttribute;
}

// Toggles input elements required attribute
export function isRequired(element) {
  element.required ? (element.required = false) : (element.required = true);
}

// Adds name attribute to an element
export function addValue(element, valueAttribute) {
  element.value = valueAttribute;
}

// Removes  a class from classList
export function removeClass(element, elementClass) {
  element.classList.remove(elementClass);
}

// Adds href to an link element
export function addHref(element, href) {
  element.href = href;
}

// Logs the argument
export function logger(arg) {
  console.log(arg);
}

// Returns true if all element in an array are unique
export const areAllItemsUnique = (array) => array.length === new Set(array).size;

// Removes all children of an element
export function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

// Checks if all items are uniqe in an array
export function arrayIncludes(coordinate, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].join() === coordinate.join()) {
      return true;
    }
  }
  return false;
}
