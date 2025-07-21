export const toggleTheme = () => {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const nextTheme = currentTheme === "dark" ? "light" : "dark";
	localStorage.setItem("data-theme", nextTheme);
	applyTheme(nextTheme);
};

export const applyTheme = (theme: "light" | "dark") => {
	document.documentElement.setAttribute("data-theme", theme);
};
