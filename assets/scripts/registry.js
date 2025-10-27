document.addEventListener('DOMContentLoaded', function() {
    const togglePasswordIcons = document.querySelectorAll(".toggle-password");

    togglePasswordIcons.forEach(icons => {
        icons.addEventListener("click", function() {
            const targetId = this.getAttribute("data-target");
            const targetInput = document.getElementById(targetId);

            if (targetInput) {
                const newType = targetInput.getAttribute("type") === "password" ? "text" : "password";
                targetInput.setAttribute("type", newType);

                this.classList.toggle("fa-eye");
                this.classList.toggle("fa-eye-slash");
            };
        })
    });
}); 