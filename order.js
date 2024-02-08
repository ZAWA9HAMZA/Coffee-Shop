// shop.js

document.addEventListener("DOMContentLoaded", function() {
    const shopContainer = document.querySelector('.shop-container');
    const cartIcon = document.getElementById('cart-icon');
    const coffeeData = []; // Load data from the JSON file

    // Function to display coffee products
    function displayCoffeeProducts() {
        shopContainer.innerHTML = "";
        coffeeData.forEach(coffee => {
            const coffeeDiv = document.createElement('div');
            coffeeDiv.classList.add('coffee-item');
            coffeeDiv.innerHTML = `
                <img src="${coffee.image}" alt="${coffee.name}">
                <p>${coffee.name}</p>
                <p>$${coffee.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${coffee.id}">Add to Cart</button>
            `;
            shopContainer.appendChild(coffeeDiv);
        });
    }

    // Event to add to cart when the "Add to Cart" button is clicked
    shopContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const coffeeId = parseInt(event.target.getAttribute('data-id'));
            addToCart(coffeeId);
        }
    });

    // Function to add an item to the cart
    function addToCart(coffeeId) {
        // Implement this function to add the selected item to the cart
        // You can use localStorage, sessionStorage, or any other method
        // to store the selected items in the cart
        // For example, you can create an array and push the selected item to it
        // Then, you can retrieve and display the cart items in the cart.html page
    }

    // Event to display the shopping cart when the cart icon is clicked
    cartIcon.addEventListener('click', function() {
        // Implement this function to display the shopping cart
        // Retrieve the cart items and display them in the cart.html page
        // You can use localStorage, sessionStorage, or any other method
    });

    // Load data and display coffee products on page load
    // You need to adjust this to load data from your JSON file
    // Use a method like fetch() if the data is on a server.
    // Assuming you load the data into the variable coffeeData
    displayCoffeeProducts();
});


$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keyprss blur change', function(e){
        update_amounts();
    });

    // Bouton plus
    $('.cart-qty-plus').click(function(){
        var $n = $(this).parent().find(".qty");
        $n.val(Number($n.val()) + 1);
        update_amounts();
    });

    // Bouton moins
    $('.cart-qty-minus').click(function(){
        var $n = $(this).parent().find(".qty");
        var QtyVal = Number($n.val());
        if (QtyVal > 0) {
            $n.val(QtyVal - 1);
        }
        update_amounts();
    });
});

function update_amounts(){
    var sum = 0.0;
    $('#myTable > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty * price)
        sum += amount;
        $(this).find('.amount').text('' + amount);
    });
    $('.total').text(sum);
}



document.addEventListener("DOMContentLoaded", function () {
    // Add event listeners for image hover
    const productImages = document.querySelectorAll('.product-img img');
    
    productImages.forEach(image => {
        image.addEventListener('mouseenter', function () {
            enlargeImage(image.src);
        });

        image.addEventListener('mouseleave', function () {
            hideEnlargedImage();
        });
    });

    // Function to enlarge the image
    function enlargeImage(src) {
        const enlargedImage = document.querySelector('.enlarged-image');
        const overlay = document.querySelector('.overlay');

        enlargedImage.src = src;
        enlargedImage.style.display = 'block';
        overlay.style.display = 'block';
    }

    // Function to hide the enlarged image
    function hideEnlargedImage() {
        const enlargedImage = document.querySelector('.enlarged-image');
        const overlay = document.querySelector('.overlay');

        enlargedImage.style.display = 'none';
        overlay.style.display = 'none';
    }
});
