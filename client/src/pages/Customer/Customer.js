import React, { useEffect, useState } from 'react'
import styled from './Customer.module.scss';
import classNames from "classnames/bind";
import Table from '../../components/DataTable/Table';


import axios from "axios";
const Customer = () => {
    const cx = classNames.bind(styled);

    const [contractData, setContractData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const contract = await axios.get('/contract');
            setContractData(contract.data);
        };
        fetchData();

    }, []);



    // console.log(contractData)
    const columns = [
        { field: 'ID', headerName: 'ID', width: 90 },
        {
            field: 'Customer_Name',
            headerName: 'Customer Name',
            width: 160,

        },
        {
            field: 'Full_Contract_Code',
            headerName: 'Full Contract Code',
            width: 110,

        },
        {
            field: 'SSN',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
        },
        {
            field: 'Customer_Address',
            headerName: 'Customer Address',
            width: 200,
        },
        {
            field: 'Mobile',
            headerName: 'Mobile',
            width: 150,
        },
    ];



    return (
        <div className={cx('Customer')}>
            <div className={cx('info')} >
                <h3>CUSTOMER</h3>
            </div>
            <Table columns={columns} rows={contractData} />
        </div>
    )
}

export default Customer