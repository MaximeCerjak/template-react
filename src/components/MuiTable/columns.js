const columns = [
    { field: 'NOM_PRENOM_TITULAIRE', headerName: 'Nom et prénom', flex:1, headerClassName: 'header-cell', filterMode: 'server'},
    { field: 'NUM_CLIENT', headerName: 'Numéro client', flex:1, headerClassName: 'header-cell', filterMode: 'server' },
    { field: 'NOM_CLIENT', headerName: 'Nom du client', flex:1, headerClassName: 'header-cell', filterMode: 'server'},
    { field: 'DP_IS', headerName: 'DP/IS', flex:1, headerClassName: 'header-cell', filterMode: 'server' },
    { field: 'LIB_COURT_REGIME_IMPOT', headerName: 'Regime impot', flex:1, headerClassName: 'header-cell', filterMode: 'server'},
];

export default columns;