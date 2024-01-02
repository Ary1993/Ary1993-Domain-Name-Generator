import "./style.css";

window.onload = () => {
  document.querySelector("#the-domain").innerHTML = generateDomain();
};
let generateDomain = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let finalArray = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        finalArray.push(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
  return (
    "<ul>" + finalArray.map(domain => `<li>${domain}</li>`).join("") + "</ul>"
  );
};
