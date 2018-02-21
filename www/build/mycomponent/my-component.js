/*! Built with http://stenciljs.com */
const { h } = window.mycomponent;

class MyComponent {
    render() {
        return (h("div", null,
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "my-component"; }
    static get properties() { return { "first": { "type": String, "attr": "first" }, "last": { "type": String, "attr": "last" } }; }
    static get style() { return "my-component {\n  display: block;\n  background-image: url('/assets/icons/baz.png');\n  height: 500px;\n  width: 500px;\n}"; }
}

export { MyComponent };
