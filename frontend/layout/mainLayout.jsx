import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children, appState, setAppState }) {
	return (
		<div>
            <Navbar setAppState={setAppState}/>
            {children}
		</div>
	);
}
