
// JavaScript for form validation and interaction
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Basic validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Simulate success
    document.getElementById("contactForm").classList.add("hidden");
    document.getElementById("successMessage").classList.remove("hidden");
  });

  