

    // Capture form submission
    document.getElementById('rentalForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Show the modal
        document.getElementById('successModal').style.display = 'flex';
    });

    // Close modal functionality
    document.getElementById('closeModalBtn').addEventListener('click', function() {
        document.getElementById('successModal').style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.onclick = function(event) {
        var modal = document.getElementById('successModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
