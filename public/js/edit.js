document.appEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entre votre nouvelle tâche ...");
    axios
      .post("/update-item", { itemUpdated: userInput })
      .then()
      .catch(err => {
        console.log(err);
      });
  }
});
