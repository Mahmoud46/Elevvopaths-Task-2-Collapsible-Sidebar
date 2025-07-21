import { useState, type ReactNode } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";

function App(): ReactNode {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

	return (
		<>
			<Sidebar isSidebarOpen={isSidebarOpen} />
			<main>
				<Header
					isSidebarOpen={isSidebarOpen}
					setIsSidebarOpen={setIsSidebarOpen}
				/>
				<Home />
				<p className="copy">Copyright &copy; Mahmoud Zakaria</p>
			</main>
		</>
	);
}

export default App;
