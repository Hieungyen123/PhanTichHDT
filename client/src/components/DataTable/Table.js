import React from 'react'
import './Table.scss'
import axios from "axios";
import MyContext from '../../contexts/MyContext';
import { useContext } from 'react'

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
const Table = ({ columns, rows, fetchData }) => {
    const Context = useContext(MyContext);

    const handleDelete = (code, id) => {
        axios.delete('/contract/' + id, code).then((res) => {
            const result = res.data;
            // console.log(result)
            if (result) {
                Context.SetnotifySuccess(result)
                fetchData()

            } else {
                Context.SetnotifySuccess('Some thing wrong')
            }
        });
    }
    const actionColumn = {
        field: 'action',
        headerName: 'Action',
        width: 200,
        renderCell: (params) => {
            // console.log(params)
            return (
                <div className='action'>
                    <div className='item' >
                        <BuildCircleOutlinedIcon className='icon' />
                        <HighlightOffOutlinedIcon className='iconDelete' onClick={() => handleDelete(params.row.Full_Contract_Code, params.id)} />
                    </div>
                </div>
            )
        }
    }

    return (
        <div className='Table'>

            <DataGrid
                className='dataTable'
                rows={rows}
                columns={[...columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 6,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                getRowId={(rows) => rows.ID}
                pageSizeOptions={[6]}
                checkboxSelection
                disableRowSelectionOnClick
            />

        </div>
    )
}

export default Table
