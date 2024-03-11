import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';

// CSS
import './PrimeReactTable.scss'; // Importez vos styles PrimeReact personnalisés ici
import styles from './PrimeReactTable.module.scss';


const PrimeReactTable = () => {

    // Data
    const data = [
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "12854", "NOM_CLIENT": "SEBILEAU CAROLE", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RSO-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "4821", "NOM_CLIENT": "EARL HEGRON", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RS-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "4667", "NOM_CLIENT": "MOREAU DIDIER", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RN-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "5867", "NOM_CLIENT": "EARL MAEL", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RN-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "14321", "NOM_CLIENT": "EARL SOFADE", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RN-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "5093", "NOM_CLIENT": "EARL GIBIER DE LA CLE DES CHAMPS", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RNO-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "6672", "NOM_CLIENT": "ASLI TRINCTIERE", "DP_IS": null, "LIB_COURT_REGIME_IMPOT": "BIC-NF" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "5853", "NOM_CLIENT": "PICARD MARCEL", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RN-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "22748", "NOM_CLIENT": "MARTIN CHRISTINE", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RS-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "6470", "NOM_CLIENT": "CHEVALIER ALEXIA", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RSO-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "6912", "NOM_CLIENT": "CHAMPAIN JEAN-CLAUDE", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RS-IR" },
        { "NOM_PRENOM_TITULAIRE": "BARON PIERRICK", "NUM_CLIENT": "7048", "NOM_CLIENT": "EARL MAINELO", "DP_IS": "0", "LIB_COURT_REGIME_IMPOT": "BA-RN-IR" }];

    // Columns
    const dynamicColumns = [
        { field: 'NOM_PRENOM_TITULAIRE', header: 'Nom et prénom'},
        { field: 'NUM_CLIENT', header: 'Numéro client'},
        { field: 'NOM_CLIENT', header: 'Nom du client'},
        { field: 'DP_IS', header: 'DP/IS'},
        { field: 'LIB_COURT_REGIME_IMPOT', header: 'Regime impot'},
    ].map(col => {
        return <Column key={col.field} field={col.field} header={col.header} filter sortable />;
    });

    // State
    const [selectedRows, setSelectedRows] = useState([]);
    const [globalFilter, setGlobalFilter] = useState(null);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);

    // Fonction pour le rendu du filtre
    const renderHeader = () => {
        return (
            <div className="table-header">
                <h2 className="p-mr-2">Liste des Clients</h2>
                <span className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Rechercher..." style={{paddingLeft: '1.75em'}}/>
                </span>
            </div>
        );
    };

    // Fonction pour la pagination
    const onCustomPage = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
            <DataTable 
                value={data} 
                paginator 
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" 
                first={first}
                rows={rows} 
                onPage={onCustomPage} 
                selectionMode="multiple" 
                selection={selectedRows}
                onSelectionChange={e => setSelectedRows(e.value)}
                globalFilter={globalFilter} 
                header={renderHeader()} 
                responsiveLayout="scroll"
                style={{ marginTop: '100px', marginBottom: '50px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px'}}
            >
                {dynamicColumns}
            </DataTable>
        </PrimeReactProvider>
    );
};

export default PrimeReactTable;