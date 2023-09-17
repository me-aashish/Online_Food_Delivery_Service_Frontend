const heading1 = React.createElement("h1", {
    id: "tittle"
}, "Heading 1");
const heading2 = React.createElement("h2", {
    id: "tittle"
}, "Heading 2");
const container = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.7c0ccee6.js.map
