class Tag {
	constructor(public tag: string, public attributes: { [key: string]: string } | null = null, public value?: string) {
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

const documentElement = new Tag("div", {className: "red"}, "Hello");
const documentElement_1 = new Tag("div", {className: "red"}, "Hello");