const items = document.querySelectorAll(".item");

items.forEach((faq) => {
	faq.addEventListener("click", (e) => {
		let active = document.querySelectorAll(".item.active");
		faq.classList.toggle("active");
		active.forEach((e) => {
			if (e.classList.contains("active")) {
				e.classList.remove("active");
			}
		});
	});
});
