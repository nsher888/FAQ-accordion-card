const items = document.querySelectorAll(".item");

items.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
	});
});
