import type { ReactNode } from "react";
import styles from "./Home.module.scss";

const data = [
	{ title: "Total", stat: "152 ", icon: "assignment" },
	{ title: "In Progress", stat: "42", icon: "progress_activity" },
	{ title: "Overdue", stat: "6", icon: "assignment_late" },
	{ title: "Completed", stat: "104", icon: "beenhere" },
];

export default function Home(): ReactNode {
	return (
		<section className={styles["home"]}>
			<h1>Welcome back!</h1>

			<div className={styles["dashboard"]}>
				{data.map((ele, i) => (
					<div key={i} className={styles["dashboard-element"]}>
						<div className={styles["element-header"]}>
							<div className={styles.icon}>
								<span className="material-symbols-outlined">{ele.icon}</span>
							</div>
							<p>{ele.title}</p>
						</div>
						<h2>{ele.stat}</h2>
					</div>
				))}
			</div>
		</section>
	);
}
