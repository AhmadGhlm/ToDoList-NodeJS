document.appEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entre votre nouvelle tâche ...");
    axios
      .post("/update-item", {
        itemUpdated: userInput,
        id: e.target.getAttribute("data-id")
      })
      .then()
      .catch(err => {
        console.log(err);
      });
  }
});
