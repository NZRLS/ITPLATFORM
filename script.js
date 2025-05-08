// Скрипт для обробки форми зворотного зв'язку та навігації за кнопками "Детальніше"
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();
  
      if (!name || !email) {
        alert("Будь ласка, заповніть усі обов'язкові поля.");
        return;
      }
  
      console.log("Ім’я:", name);
      console.log("Email:", email);
      console.log("Повідомлення:", message);
  
      alert(`Дякуємо, ${name}! Ваше повідомлення надіслано.`);
      form.reset();
    });
  
    // Переадресація на сторінки з деталями епізодів
    const infoButtons = document.querySelectorAll(".info-button");
  
    infoButtons.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        window.location.href = `episode${index + 1}.html`;
      });
    });
  
    // Анімація появи елементів
    const animatedItems = document.querySelectorAll(".animate-pop, .fade-in, .pulse");
  
    animatedItems.forEach((el, index) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transition = "opacity 1s ease, transform 1s ease";
        el.style.transform = "translateY(0)";
      }, 300 + index * 300);
    });
  });