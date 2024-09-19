    // Used this method to fine the id with the ID and then find the elements inside it  
    const sortBackground = document.querySelector("#selectCollection select");
    const sortText = document.querySelector("#textSelection select");
    const sortPictures = document.querySelector("#pictureSelection select");
    
   
    // This function is to sort the options alphabetically
      function sortModelCollection() {    
      
       // Used the spread operator to convert the options into an array
         const sortedBackground = [...sortBackground.options];
         const sortedText = [...sortText.options];
         const sortedPictures = [...sortPictures.options];

       // Sorts the options based on the title
       sortedBackground.sort((a, b) => a.textContent.localeCompare(b.textContent));
       sortedText.sort((a, b) => a.textContent.localeCompare(b.textContent));
       sortedPictures.sort((a, b) => a.textContent.localeCompare(b.textContent));
          
       // Appends sorted options           
         sortedBackground.forEach((option) => sortBackground.appendChild(option));
         sortedText.forEach((option) => sortText.appendChild(option));
         sortedPictures.forEach((option) => selectCollection.appendChild(option));
       
      };
    

        // Add event listener to the parent container
        sortBackground.addEventListener("click", sortModelCollection);
        sortText.addEventListener("click", sortModelCollection);
        sortPictures.addEventListener("click", sortModelCollection);
