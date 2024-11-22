// Get all container divs
var containers = document.querySelectorAll('.container');

// Iterate through each container
containers.forEach(container => {
    // Get the question-card div within the container
   var questionCard = container.querySelector('.question-card');

    if (questionCard) {
        // Get the option-list within the question-card
        var optionList = questionCard.querySelector('.option-list');

        if (optionList) {
            // Get the 5th child of the option-list (index 4)
            var fifthOption = optionList.children[4]; // Use index 4 for the 5th child
            
            if (fifthOption) {
                // Find the input element inside the 5th child
           var input = fifthOption.querySelector('input');
                
                if (input) {
                    // Set the input type to checkbox and check it
                    input.type = 'checkbox';
                    input.checked = true;

                    // Log the input element to the console
                    
                }
            }
        }
    }
});
