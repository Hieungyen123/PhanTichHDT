import React, { useState, useContext, useEffect } from 'react'
import styled from './Add.module.scss';
import axios from "axios";
import classNames from "classnames/bind";
import MyContext from '../../contexts/MyContext';
const Add = ({ columns, setOpen, slug, fetchData }) => {
    const cx = classNames.bind(styled);

    const Context = useContext(MyContext);


    const [limit, setLimit] = useState("")
    const [fields, setField] = useState("")

    var apiArray = {}

    const handleSubmit = (e) => {
        e.preventDefault();

        if (limit === "limit") {
            console.log('no submit')
            return false
        } else {
            for (var i = 0; i <= 9; i++) {
                var placeholderInput = e.target[i].placeholder
                console.log(apiArray[placeholderInput] = e.target[i].value)
                // console.log(e.target[i].placeholder)
                // console.log(e.target[i].value)
            }
            axios.post('/contract', apiArray).then((res) => {
                const result = res.data;
                console.log(result)
                if (result) {
                    Context.SetnotifySuccess(result)

                } else {
                    Context.SetnotifySuccess('Some thing wrong')
                }
            });
            fetchData()
            setOpen(false)
        }



    };
    const checkLenght = (value, limit, field) => {
        if (value.length > limit) {
            setLimit("limit")
            setField(field)
        } else {
            setLimit("")
            setField('')
        }
    }
    return (
        <div className={cx("add")}>
            <div className={cx("modal")}>
                <span className={cx("close")} onClick={() => setOpen(false)}>
                    X
                </span>
                <h1>Add new {slug}</h1>
                <form onSubmit={handleSubmit}>
                    {columns
                        .filter((item) => item.field !== "ID" && item.field !== "img" && item.field !== "Date_Of_Contract" && item.field !== "Full_Contract_Code")
                        .map((column) => (
                            <div key={column.field} className={cx("item")} >
                                <label>{column.headerName}</label>

                                <input type={column.type} required placeholder={column.field} onKeyUp={(e) => checkLenght(e.target.value, column.limit, column.field)} />
                                {
                                    column.limit && (<p className={fields === column.field ? cx(limit) : ''}  >* Character smaller than {column.limit} </p>)
                                }
                            </div>
                        ))}
                    <button  >Send</button>
                </form>
            </div >
        </div >
    )
}

export default Add
