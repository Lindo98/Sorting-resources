    // Used this method to fine the id with the ID and then find the elements inside it  
    const selectCollection = document.querySelector("#selectCollection select");
    const sortText = document.querySelector("#textSelection select");
    const sortPictures = document.querySelector("#pictureSelection select");
    
   
    // This function is to sort the options alphabetically
      function sortModelCollection() {    
      
       // Used the spread operator to convert the options into an array
         const sortedOptions = [...selectCollection.options];
         const sortedText = [...sortText.options];
         const sortedPictures = [...sortPictures.options];

       // Sorts the options based on the title
       sortedOptions.sort((a, b) => a.textContent.localeCompare(b.textContent));

       
       // Clears the current options
         selectCollection.innerHTML = "";
         sortText.innerHTML = "";
         sortPictures.innerHTML = "";
          
       // Appends sorted options           
         sortedOptions.forEach((option) => selectCollection.appendChild(option));
         sortedText.forEach((option) => sortText.appendChild(option));
         sortedPictures.forEach((option) => selectCollection.appendChild(option));
       
      };
    

        // Add event listener to the parent container
        selectCollection.addEventListener("click", sortModelCollection);
        sortText.addEventListener("click", sortModelCollection);
        sortPictures.addEventListener("click", sortModelCollection);