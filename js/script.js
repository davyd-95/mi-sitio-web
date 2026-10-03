// Elementos que forman la navegación por pestañas.
const navigationButtons = document.querySelectorAll("[data-section]");
const contentSections = document.querySelectorAll(".content-section");

// Actualiza la pestaña activa y deja visible únicamente su sección.
function showSection(sectionId) {
	navigationButtons.forEach((button) => {
		const isActive = button.dataset.section === sectionId;

		button.classList.toggle("active", isActive);
		button.setAttribute("aria-selected", String(isActive));
	});

		contentSections.forEach((section) => {
			section.hidden = section.id !== sectionId;
		});
}

// Cada botón cambia de pestaña sin recargar la página.
navigationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		showSection(button.dataset.section);
	});
});

// Inicio es la pestaña visible por defecto al cargar la página.
showSection("inicio");
