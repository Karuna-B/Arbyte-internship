document.addEventListener("DOMContentLoaded", function() {
  // Function to add a new item to the itemList
  function addItem() {
      let itemList = document.getElementById("itemList");
      let newItemText = document.getElementById("newItemText").value;

      if (newItemText === "") {
          alert("Please enter some text for the item.");
          return;
      }

      // Create a new item element
      let newItem = document.createElement("div");
      newItem.classList.add("item");

      // Create text node
      let textNode = document.createElement("span");
      textNode.textContent = newItemText;

      // Create remove button for each item
      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("btn", "btn-danger");
      removeBtn.onclick = function() {
          itemList.removeChild(newItem);
      };

      // Append text and button to new item
      newItem.appendChild(textNode);
      newItem.appendChild(removeBtn);

      // Append the new item to the itemList
      itemList.appendChild(newItem);

      // Clear the input field
      document.getElementById("newItemText").value = "";
  }

  // Function to remove the last item from the itemList
  function removeItem() {
      let itemList = document.getElementById("itemList");

      // Check if there are any items to remove
      if (itemList.childElementCount > 0) {
          // Remove the last child (last item added)
          itemList.removeChild(itemList.lastChild);
      }
  }

  // Attach addItem and removeItem functions to the global scope
  window.addItem = addItem;
  window.removeItem = removeItem;
});