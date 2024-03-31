import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
    Group,
    Box,
    ActionIcon, Text, Grid, Button, Flex
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { IconEye, IconEdit, IconTrash, IconPrinter } from "@tabler/icons-react";
import { DataTable } from 'mantine-datatable';
import { useDispatch, useSelector } from "react-redux";
import {
    editEntityData,
    getIndexEntityData,
    setFetching, setFormLoading,
    setInsertType,
    showEntityData
} from "../../../../store/core/crudSlice.js";
import KeywordSearch from "../../filter/KeywordSearch";
import { modals } from "@mantine/modals";
import { deleteEntityData } from "../../../../store/core/crudSlice";


const data = [
    {
        "Name": "Tablet Tofacent 5 5 mg",
        "SalesPrice": "35",
        "Quantity": "60",
        "SubTotal": "2,100"
    },
    {
        "Name": "Pregaba ER Capsule 82.5mg Opsonin Pharma Limited",
        "SalesPrice": "25",
        "Quantity": "30",
        "SubTotal": "750"
    },
    {
        "Name": "Capsule Indomet SR 75 mg",
        "SalesPrice": "4.2",
        "Quantity": "60",
        "SubTotal": "252"
    },
    {
        "Name": "Tablet Tofacent 5 5 mg",
        "SalesPrice": "10",
        "Quantity": "60",
        "SubTotal": "600"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    },
    {
        "Name": "Tablet Dulox 20 20 mg",
        "SalesPrice": "8",
        "Quantity": "60",
        "SubTotal": "480"
    }
]



function TableInvoice() {

    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const { isOnline, mainAreaHeight } = useOutletContext();
    const height = mainAreaHeight - 500; //TabList height 104

    const perPage = 10;
    const [page, setPage] = useState(1);
    const [newClientViewModel, setNewClientViewModel] = useState(false)

    const fetching = useSelector((state) => state.crudSlice.fetching)
    const searchKeyword = useSelector((state) => state.crudSlice.searchKeyword)
    const indexData = useSelector((state) => state.crudSlice.indexEntityData)
    const customerFilterData = useSelector((state) => state.crudSlice.customerFilterData)

    useEffect(() => {
        setTimeout(() => {
            dispatch(setFetching(false))
        }, 1000)
    })

    useEffect(() => {
        const value = {
            url: 'core/customer',
            param: {
                term: searchKeyword,
                name: customerFilterData.name,
                mobile: customerFilterData.mobile,
                page: page,
                offset: perPage
            }
        }
        dispatch(getIndexEntityData(value))
    }, [fetching]);

    return (
        <>
            <Box >


                <Box bg={`white`} >
                    <Box >
                        <DataTable
                            withTableBorder
                            records={data}
                            columns={[
                                {
                                    accessor: 'index',
                                    title: 'S/N',
                                    textAlignment: 'right',
                                    render: (item) => (data.indexOf(item) + 1)
                                },
                                { accessor: 'Name', title: "Name" },
                                { accessor: 'SalesPrice', title: "Sales Price" },
                                { accessor: 'Quantity', title: "Quantity" },
                                { accessor: 'SubTotal', title: "Sub-Total" },
                            ]}
                            fetching={fetching}
                            totalRecords={indexData.total}
                            recordsPerPage={perPage}
                            page={page}
                            onPageChange={(p) => {
                                setPage(p)
                                dispatch(setFetching(true))
                            }}
                            loaderSize="xs"
                            loaderColor="grape"
                            height={height}
                            scrollAreaProps={{ type: 'never' }}
                        />
                    </Box>
                </Box>
            </Box >

        </>
    );
}

export default TableInvoice;