"use strict";
class Tag {
    constructor(tag, attributes = null, value) {
        this.tag = tag;
        this.attributes = attributes;
        this.value = value;
        const element = document.createElement(tag);
        if (attributes !== null) {
            Object.entries(attributes).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
        }
        if (!!value) {
            element.innerHTML = value;
        }
        document.body.appendChild(element);
    }
}
const documentElement = new Tag("div", { className: "red" }, "Hello");
console.log(new Tag("input", { className: "red" }).toString());
const documentElement_1 = new Tag("div", { className: "red" }, "Hello");
