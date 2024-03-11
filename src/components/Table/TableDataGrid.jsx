import { useMemo } from 'react';
import { Counter } from '../../features/Counter/Counter';
import { DataGrid, frFR, GridActionsCellItem } from '@mui/x-data-grid';
import data from './data';

const TableDataGrid = () => {
	const columns = useMemo(
		() => [
			{
				field: 'NOM_PRENOM_TITULAIRE',
				headerName: 'Nom titulaire',
				flex: 1,
			},
			{
				field: 'NUM_CLIENT',
				renderCell: (params) => <p className="font-semibold">{params.value}</p>,
				headerName: 'Numéro',
				flex: 1,
			},
			{
				field: 'NOM_CLIENT',
				headerName: 'Nom client',
				minWidth: '300px',
				flex: 1,
			},
		],
		[]
	);

	return (
		<div className="my-6" style={{ height: '400px', width: '100%' }}>
			<Counter/>
			<div className="mt-8">
				<DataGrid
					sx={{
						'& .MuiDataGrid-columnHeader': {
							backgroundColor: 'rgba(24, 160, 150,0.1)',
						},
						'& .MuiDataGrid-row': { cursor: 'pointer' },
					}}
					localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
					rows={data}
					columns={columns}
					// checkboxSelection={true}
					onRowClick={(params) => {
						// faire qqch
					}}
				/>
			</div>
		</div>
	);
};

export default TableDataGrid;
