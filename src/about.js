export function loadAboutPage() {
  const content = document.querySelector('#content');

  const aboutSection = document.createElement('div');
  aboutSection.classList.add('about-section');

  aboutSection.innerHTML = `
    <div class="about-information">
      <h1>About Us</h1>
      <p>At Bethel Restaurant, we are passionate about creating unforgettable dining experiences. Our culinary team crafts each dish with care, using the freshest ingredients to bring out the finest flavors. We believe that dining is not just about food, but about creating moments of joy and connection. Whether you're joining us for a romantic dinner, a family celebration, or a casual meal with friends, we strive to make every visit special. Our commitment to excellence extends beyond our kitchen, as we aim to provide exceptional service in a warm and inviting atmosphere. Thank you for choosing Bethel Restaurant – we look forward to serving you and making your dining experience truly memorable.</p>
    </div>
    <div class="contact-us">
      <div class="contact-heading">
        <h1>Contact Us</h1>
      </div>
      <div class="contact-information">
        <div class="address">
          <h2>Address</h2>
          <p>123 Culinary Avenue, Foodie City, FL 12345</p>
        </div>
        <div class="phone-number">
          <h2>Phone</h2>
          <p>+(123) 456-7890</p>
        </div>
        <div class="email">
          <h2>Email</h2>
          <p>info@bethelrestaurant.com</p>
        </div>
      </div>
    </div>
  `;

  content.appendChild(aboutSection);
}