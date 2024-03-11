import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { useState } from 'react';

import data from './data';
import columns from './columns';

const rows = [
    ...data,
];

const myLocalText = {
    MuiTablePagination: 
    {
        labelDisplayedRows: ({ from, to, count }) => `${from} - ${to} sur ${count}`, 
        labelRowsPerPage: 'Lignes par page:',
    },
    toolbarDensity: 'Taille',
    toolbarDensityLabel: 'Taille',
    toolbarDensityCompact: 'Serré',
    toolbarDensityStandard: 'Normal',
    toolbarDensityComfortable: 'Aéré',
    toolbarExport: 'Export',
    toolbarExportCSV: 'Télécharger un CSV',
    toolbarExportPrint: "Imprimer",
    toolbarFilters: "Filtres",
    toolbarFiltersColumnField: "Colonnes",
    toolbarFiltersOperator: "Opérateur",
    toolbarColumns: "Colonnes"
}

// const CustomToolbar = styled(GridToolbar)({
//     color: 'red', // Change to the color you want
//     '& .MuiIconButton-root': { // Change the color of the icons
//         color: 'red',
//     },
// });

const MuiTable = () => {
    const getRowId = (row) => row.NUM_CLIENT;
    const [ rowsPerPage, setRowsPerPage ] = useState(5)

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event));
    };

    return (
        <div className='my-12 mt-6'>
        <h2 className="array-title">Mui/Material Array</h2>
        <DataGrid 
            rows={rows} 
            columns={columns} 
            getRowId={getRowId} 
            autoHeight 
            autoWidth
            columnsResizable
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            pageSize={rowsPerPage}
            components={{
                Toolbar: () => (
                    <Box sx={{
                      '& .MuiButton-root': { // Change the color of the buttons
                        color: 'rgb(24, 160, 150)',
                        },
                        '& .MuiIconButton-root': { // Change the color of the icons
                            color: 'rgb(24, 160, 150)',
                        },
                    }}>
                    <GridToolbar />
                    </Box>
                ),
            }}
            classes={{
                headerCell: 'header-cell',
            }}
            className="mui-data-grid"
            onPageSizeChange={handleChangeRowsPerPage}
            localeText={myLocalText}
        />
            <div>
                <style>
                {`
                    .MuiDataGrid-columnHeaderTitle {
                    font-weight: bold;
                    }
                `}
                </style>
            </div>
        </div>
    );
}

export default MuiTable;