document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("DOMContentLoaded", () => {
        const cartItems = document.querySelectorAll(".cart-item");
        const totalPriceElement = document.querySelector("#total-price");
      
        function updateTotalPrice() {
          let totalPrice = 0;
          cartItems.forEach((item) => {
            const quantity = parseInt(item.querySelector(".quantity").textContent, 10);
            const price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
            totalPrice += quantity * price;
          });
          totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
        }
      
        cartItems.forEach((item) => {
          const plusButton = item.querySelector(".plus-btn");
          const minusButton = item.querySelector(".minus-btn");
          const quantityElement = item.querySelector(".quantity");
          const removeButton = item.querySelector(".remove-btn");
          const likeButton = item.querySelector(".like-btn");
      
          // Increment quantity
          plusButton.addEventListener("click", () => {
            const quantity = parseInt(quantityElement.textContent, 10);
            quantityElement.textContent = quantity + 1;
            item.classList.add("highlight");
            setTimeout(() => item.classList.remove("highlight"), 500);
            updateTotalPrice();
          });
      
          // Decrement quantity
          minusButton.addEventListener("click", () => {
            const quantity = parseInt(quantityElement.textContent, 10);
            if (quantity > 1) {
              quantityElement.textContent = quantity - 1;
              updateTotalPrice();
            }
          });
      
          // Remove item
          removeButton.addEventListener("click", () => {
            item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            item.style.opacity = "0";
            item.style.transform = "scale(0.9)";
            setTimeout(() => {
              item.remove();
              updateTotalPrice();
            }, 500);
          });
      
          // Like item
          likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("liked");
          });
        });
      
        updateTotalPrice();
      });