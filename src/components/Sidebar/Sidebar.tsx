import { useRef, useState, type ReactNode } from "react";
import styles from "./Sidebar.module.scss";

const links = [
	{ title: "Dashboard", icon: "dashboard" },
	{ title: "Profile", icon: "account_circle" },
	{ title: "Projects", icon: "folder_copy" },
	{ title: "Notifications", icon: "notifications" },
	{ title: "Settings", icon: "settings" },
];

export default function Sidebar({
	isSidebarOpen,
}: {
	isSidebarOpen: boolean;
}): ReactNode {
	const [active, setActive] = useState<number>(0);
	const selectorRef = useRef<HTMLDivElement | null>(null);

	const selectActive = (index: number) => {
		setActive(index);

		if (selectorRef.current)
			selectorRef.current.style.top = `${index * 2.5}rem`;
	};

	return (
		<aside className={isSidebarOpen ? styles.open : ""}>
			<h1>tf.</h1>

			<ul>
				<div className={styles.selector} ref={selectorRef}></div>
				{links.map((link, i) => (
					<li
						key={i}
						className={active == i ? styles.selected : ""}
						onClick={() => selectActive(i)}
					>
						<span className="material-symbols-outlined">{link.icon}</span>
						{isSidebarOpen && <p>{link.title}</p>}
					</li>
				))}
			</ul>
		</aside>
	);
}
