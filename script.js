console.log("Portfolio Loaded Successfully!");

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        console.log(link.textContent + " clicked");
    });

});
