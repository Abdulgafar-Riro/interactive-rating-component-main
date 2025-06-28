document.addEventListener("DOMContentLoaded", () => {
  const ratingButtons = document.querySelectorAll(".rating-btn");
  const submitButton = document.querySelector(".submit-btn");
  const ratingContainer = document.querySelector(".rating-container");
  const messageSection = document.querySelector(".message-section");
  const selectedRatingText = document.querySelector(".selected-rating");

  let selectedRating = null;

  // Handle rating selection
  ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      ratingButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to selected button
      button.classList.add("active");
      selectedRating = button.textContent;
    });
  });

  // Handle submit
  submitButton.addEventListener("click", () => {
    if (!selectedRating) {
      alert("Please select a rating before submitting.");
      return;
    }

    // Hide rating section and show thank-you message
    ratingContainer.style.display = "none";
    messageSection.style.display = "block";

    // Update message with selected rating
    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
  });
});
