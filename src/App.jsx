import { Routes, Route } from 'react-router-dom';
import TableDataGrid from './components/Table/TableDataGrid';
import MuiTable from './components/MuiTable/MuiTable';
import PrimeReactTable from './components/PrimeReactTable/PrimeReactTable';
import { Counter } from './features/Counter/Counter';
import ComponentsLibrary from './features/library/ComponentsLibrary';
import ProtectedRoute from './features/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<div className="justify-center p-10">
				<Routes>
					<Route index element={<Counter />} />
					<Route
						path="/tableau1"
						element={
							<ProtectedRoute>
								<TableDataGrid />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/tableau2"
						element={
							<ProtectedRoute>
								<MuiTable />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/tableau3"
						element={
							<ProtectedRoute>
								<PrimeReactTable />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/componentsLibrary"
						element={
							<ProtectedRoute>
								<ComponentsLibrary />
							</ProtectedRoute>
						}
					/>
					{/* <Route path="*" element={<ErrorScreen />} /> */}
				</Routes>
			</div>
			<Footer />
		</>
	);
}

export default App;
