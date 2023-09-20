// JavaScript code for handling image upload and removal
document.getElementById('upload-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the uploaded image file
    const fileInput = document.querySelector('input[type="file"]');
    const imageFile = fileInput.files[0];

    if (imageFile) {
        // Display the uploaded image in the modal
        const modalImage = document.getElementById('modalImage');
        const imageList = document.getElementById('image-list');
        modalImage.src = URL.createObjectURL(imageFile);

         // Create an element for the uploaded image
         const uploadedImage = document.createElement('div');
         uploadedImage.classList.add('uploaded-image');

         // Create an img element
         const img = document.createElement('img');
         img.src = URL.createObjectURL(imageFile);
         uploadedImage.appendChild(img);

         // Create a remove button
         const removeButton = document.createElement('button');
         removeButton.textContent = 'Remove';
         removeButton.addEventListener('click', function () {
             // Remove the uploaded image from the list and reset modal
             imageList.removeChild(uploadedImage);
             modalImage.src = '';
             $('#imageModal').modal('hide');
         });

         uploadedImage.appendChild(removeButton);

                // Append the uploaded image to the image list
                imageList.appendChild(uploadedImage);

                // Show the modal
                $('#imageModal').modal('show');
            }
        });