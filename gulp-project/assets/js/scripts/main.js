document.addEventListener("DOMContentLoaded", () => {
    const button = document.createElement("button");
    button.textContent = "Натисни мене";
    button.classList.add("interactive-button"); // Добавляем класс для стилизации
    document.body.appendChild(button);

    const message = document.createElement("p");
    document.body.appendChild(message);

    button.addEventListener("click", () => {
        message.textContent = "Ти натиснув кнопку! 🚀";
        message.style.opacity = 1; // Добавляем эффект появления
    });
});