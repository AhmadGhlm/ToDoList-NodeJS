document.appEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entre votre nouvelle tâche ...");
    console.log(userInput);
  }
});
