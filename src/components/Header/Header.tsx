import { useEffect, useState, type ReactNode } from "react";
import styles from "./Header.module.scss";
import { applyTheme, toggleTheme } from "../../libs/utils";

export default function Header({
	isSidebarOpen,
	setIsSidebarOpen,
}: {
	isSidebarOpen: boolean;
	setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): ReactNode {
	const [dataTheme, setDataTheme] = useState<"dark" | "light">(
		localStorage.getItem("data-theme") as "dark" | "light" | "dark"
	);

	useEffect(() => {
		applyTheme(dataTheme);
	}, []);

	return (
		<header>
			<div
				className={styles["toggle-menu"]}
				onClick={() => setIsSidebarOpen((prev) => !prev)}
			>
				<span className="material-symbols-outlined">
					{isSidebarOpen ? "close" : "menu"}
				</span>
			</div>

			<div
				className={styles["toggle-theme"]}
				onClick={() => {
					setDataTheme((prev) => (prev == "dark" ? "light" : "dark"));
					toggleTheme();
				}}
			>
				<span className="material-symbols-outlined">
					{dataTheme == "dark" ? "brightness_empty" : "dark_mode"}
				</span>
			</div>
		</header>
	);
}
