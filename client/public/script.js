const loadEvent = function() {

  // Write your JavaScript code after this line
  const root = document.querySelector("#root");

  const element = function (tag, inner) {
    return `<${tag}>${inner}</${tag}>`;
  }

  const htmlTags = ["h1", "h2", "h3", "button", "div", "p", "mark", "textarea", "li", "section"];
  const htmlContents = ["Animation Title", "Hello website", "Let's animate this page", "Click", "Div html element", "Lorem ipsum dolor sit amet", "Mark html element", "Textarea html element", "Coffee", "Section hml element"];
  for (let i = 0; i < htmlTags.length; i++) {
    root.insertAdjacentHTML("beforeend", element(htmlTags[i], htmlContents[i]));
  }
  
  // Write your JavaScript code before this line

}

window.addEventListener("load", loadEvent);
