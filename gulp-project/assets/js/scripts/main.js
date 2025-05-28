document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "Натисни мене";
    document.body.appendChild(button);

    const message = document.createElement("p");
    document.body.appendChild(message);

    button.addEventListener("click", () => {
        message.textContent = "Ти натиснув кнопку! 🚀";
    });
});