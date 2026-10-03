// Elementos que forman la navegación por pestañas.
const navigationButtons = document.querySelectorAll("[data-section]");
const contentSections = document.querySelectorAll(".content-section");
const sectionTransitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 360;
let transitionId = 0;

// Actualiza la pestaña activa y deja visible únicamente su sección.
function showSection(sectionId) {
	const nextSection = document.getElementById(sectionId);

	if (!nextSection) {
		return;
	}

	const currentTransitionId = ++transitionId;

	navigationButtons.forEach((button) => {
		const isActive = button.dataset.section === sectionId;

		button.classList.toggle("active", isActive);
		button.setAttribute("aria-selected", String(isActive));
	});

	contentSections.forEach((section) => {
		if (section !== nextSection) {
			section.classList.remove("section-active");
			section.classList.add("section-exit");
		}
	});

	nextSection.hidden = false;
	nextSection.classList.remove("section-exit");
	nextSection.classList.add("section-active");

	window.setTimeout(() => {
		if (currentTransitionId !== transitionId) {
			return;
		}

		contentSections.forEach((section) => {
			if (section !== nextSection) {
				section.hidden = true;
				section.classList.remove("section-exit");
			}
		});
	}, sectionTransitionDuration);
}

// Cada botón cambia de pestaña sin recargar la página.
navigationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		showSection(button.dataset.section);
	});
});

// Inicio es la pestaña visible por defecto al cargar la página.
showSection("inicio");
