// Cambia la sección visible cuando se pulsa un botón del menú.
const navigationButtons = document.querySelectorAll("[data-section]");
const contentSections = document.querySelectorAll(".content-section");

navigationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		const sectionId = button.dataset.section;

		contentSections.forEach((section) => {
			section.hidden = section.id !== sectionId;
		});
	});
});
