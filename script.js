
// Define an array of image URLs
const imageUrls = [
    './images/image-1.jpg',
    './images/image-2.jpg',
    './images/image-3.jpg',
    './images/image-4.jpg',
    './images/image-5.jpg',
    './images/image-6.jpg',
    './images/image-7.jpg',
    './images/image-8.jpg',
    './images/image-9.jpg'
];

// Function to create and display images in the grid
function displayImages() {
    const imageGrid = document.getElementById('images');

    // Clear any existing content in the grid
    imageGrid.innerHTML = '';

    // Loop through the image URLs and create image elements
    imageUrls.forEach((imageUrl) => {
        const imageElement = document.createElement('img');
        imageElement.classList.add('image');
        imageElement.src = imageUrl;
        imageGrid.appendChild(imageElement);
    });
}

// Call the function to display images when the page loads
window.addEventListener('load', displayImages);


$(document).ready(function(){
    $('a').on('click',function(event){
        if(this.hash !==""){
                    event.preventDefault();
                    var hash =this.hash;
                    $('html, body').animate({scrollTop:$(hash).offset().top
                },800,function(){
                window.location.hash=hash;
            });
        }
    });
});

var myindex = 0; // Initialize the index variable.
carousel();
function carousel() {
    var y = document.getElementById("images");
    var x = imageUrls; // Assuming imageUrls is an array of image URLs.

    // Hide all images initially.
    for (var i = 0; i < x.length; i++) {
        y.style.display = "none";
    }
    myindex++; // Increment the index.
    if (myindex+1 == x.length) {
     
        myindex = 1; // Reset the index if it goes beyond the array length.
    }

    // Create a new image element.
    const imageElement = document.createElement('img');
    imageElement.classList.add('image');
    imageElement.src = x[myindex-1]; 
    y.style.transition = "transform 2s ease-in-out";
    // Display the current image.
    y.style.display = "inline-block";
    y.classList.add("image")
    // Append the new image to the container.
    y.innerHTML = ''; // Clear the container before adding a new image.
    y.appendChild(imageElement);

    // Call the function again after a delay (e.g., 2000 milliseconds).
    setTimeout(carousel, 2000);
}

