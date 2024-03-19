import React, {useEffect, useState} from "react";
import {useOutletContext} from "react-router-dom";
import {
    Group,
    Box,
    ActionIcon, Text
} from "@mantine/core";
import {useTranslation} from "react-i18next";
import {IconEye, IconEdit, IconTrash} from "@tabler/icons-react";
import {DataTable} from 'mantine-datatable';
import {useDispatch, useSelector} from "react-redux";
import {
    editEntityData,
    getIndexEntityData,
    setFetching, setFormLoading,
    setInsertType,
    showEntityData
} from "../../../../store/core/crudSlice.js";
import KeywordSearch from "../../filter/KeywordSearch";
import {modals} from "@mantine/modals";
import {deleteEntityData} from "../../../../store/core/crudSlice";
import CustomerViewModel from "./CustomerViewModel.jsx";

const data = [
    {
        "id": 67351,
        "name": "Shihab",
        "mobile": "01732170052",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 67349,
        "name": "Mosjidur Rahman Jame Mosjid",
        "mobile": "01976619943",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 67347,
        "name": "",
        "mobile": "01714499522",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 67345,
        "name": "",
        "mobile": "01918192769",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 67343,
        "name": "",
        "mobile": "01680996539",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63992,
        "name": "Anisur Rahman",
        "mobile": "01874955244",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63991,
        "name": "Haider Ali",
        "mobile": "01611348106",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63990,
        "name": "Arif",
        "mobile": "01719550567",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63989,
        "name": "Mubarak Hossain",
        "mobile": "01711970854",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63988,
        "name": "Mustafizur Rahman",
        "mobile": "01711860399",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63987,
        "name": "Jalal Uddin",
        "mobile": "01917284160",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63983,
        "name": "Javed",
        "mobile": "01716249774",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63979,
        "name": "Shamim",
        "mobile": "01918713315",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63978,
        "name": "Arif Hossain",
        "mobile": "01914901808",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63977,
        "name": "Shofiqul islam",
        "mobile": "01913531544",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63976,
        "name": "Moslem Uddin",
        "mobile": "01711361582",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63965,
        "name": "Shiplu",
        "mobile": "01919351957",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63914,
        "name": "Makk Electronics",
        "mobile": "01728963192",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63671,
        "name": "Milon",
        "mobile": "01705500355",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63669,
        "name": "Saiful Islam",
        "mobile": "01644262422",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63668,
        "name": "Mahbub Rahman",
        "mobile": "01712021929",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63667,
        "name": "Jasim",
        "mobile": "01819322388",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63666,
        "name": "Shamsuddin",
        "mobile": "01554315009",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63665,
        "name": "Biplob Sarker",
        "mobile": "01711582847",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63663,
        "name": "Shamim",
        "mobile": "01724086341",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63662,
        "name": "FH Khan",
        "mobile": "01847255828",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63661,
        "name": "Humayan",
        "mobile": "01912648818",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63658,
        "name": "Siddik",
        "mobile": "01994823444",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63651,
        "name": "Mamun",
        "mobile": "01906870062",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63650,
        "name": "Badal Bhuiya",
        "mobile": "01712844506",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63645,
        "name": "Raiyan",
        "mobile": "01686878393",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 63015,
        "name": "Prantor roy",
        "mobile": "70423128",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62997,
        "name": "Nathanie noel",
        "mobile": "04114920",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62995,
        "name": "Akash asif",
        "mobile": "26292932",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62993,
        "name": "Heron Hero",
        "mobile": "36236280",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62991,
        "name": "Mr Nayan",
        "mobile": "36170936",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62990,
        "name": "Din islam",
        "mobile": "69137456",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62988,
        "name": "subash nandi",
        "mobile": "50639260",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62977,
        "name": "Alamin Mostafa",
        "mobile": "54447336",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62974,
        "name": "Rofiqul Islam",
        "mobile": "40769528",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62973,
        "name": "Ehtesam haque",
        "mobile": "05714947",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62972,
        "name": "Abu raihan",
        "mobile": "67409984",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62958,
        "name": "Out customer",
        "mobile": "14356220",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62957,
        "name": "sultan",
        "mobile": "28122086",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62956,
        "name": "shihab sairas",
        "mobile": "15128922",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62951,
        "name": "Mr Abdullah Al Saba",
        "mobile": "45178156",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62950,
        "name": "Mst Rafiqa",
        "mobile": "96727904",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62949,
        "name": "jahid khan",
        "mobile": "98605936",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62948,
        "name": "Mr Lablu",
        "mobile": "22876168",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    },
    {
        "id": 62947,
        "name": "Nurnabi",
        "mobile": "96070680",
        "created_at": "-000001-11-30T00:00:00.000000Z"
    }
]



function CustomerTable() {

    const dispatch = useDispatch();
    const {t, i18n} = useTranslation();
    const {isOnline, mainAreaHeight} = useOutletContext();
    const height = mainAreaHeight - 80; //TabList height 104

    const perPage = 50;
    const [page, setPage] = useState(1);
    const [customerViewModel, setCustomerViewModel] = useState(false)

    const fetching = useSelector((state) => state.crudSlice.fetching)
    const searchKeyword = useSelector((state) => state.crudSlice.searchKeyword)
    const indexData = useSelector((state) => state.crudSlice.indexEntityData)
    const customerFilterData = useSelector((state) => state.crudSlice.customerFilterData)

    useEffect(() => {
      setTimeout(() => {
          dispatch(setFetching(false))
      },1000)
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
            <Box>
                <div radius="xl">
                    <Box bg={`white`}>
                        <Box pt={'xs'} pb={`xs`} pl={`md`} pr={'xl'}>
                            <KeywordSearch module={'customer'}/>
                        </Box>
                    </Box>
                    <Box bg={`white`}>
                        <Box pb={`xs`} pl={`md`} pr={'md'}>
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
                                    {accessor: 'id', title: "ID"},
                                    {accessor: 'name', title: "Name"},
                                    {accessor: 'mobile', title: "Mobile"},
                                    {
                                        accessor: "action",
                                        title: "Action",
                                        textAlign: "right",
                                        render: (data) => (
                                            <Group gap={4} justify="right" wrap="nowrap">
                                                <ActionIcon
                                                    size="sm"
                                                    variant="subtle"
                                                    color="green"
                                                    onClick={() => {
                                                        setCustomerViewModel(true)
                                                        dispatch(showEntityData('core/customer/' + data.id))
                                                    }}
                                                >
                                                    <IconEye size={16}/>
                                                </ActionIcon>
                                                <ActionIcon
                                                    size="sm"
                                                    variant="subtle"
                                                    color="blue"
                                                    onClick={() => {
                                                        dispatch(setInsertType('update'))
                                                        dispatch(editEntityData('core/customer/' + data.id))
                                                        dispatch(setFormLoading(true))
                                                    }}
                                                >
                                                    <IconEdit size={16}/>
                                                </ActionIcon>
                                                <ActionIcon
                                                    size="sm"
                                                    variant="subtle"
                                                    color="red"
                                                    onClick={() => {
                                                        modals.openConfirmModal({
                                                            title: (
                                                                <Text size="md"> {t("FormConfirmationTitle")}</Text>
                                                            ),
                                                            children: (
                                                                <Text size="sm"> {t("FormConfirmationMessage")}</Text>
                                                            ),
                                                            labels: {confirm: 'Confirm', cancel: 'Cancel'},
                                                            onCancel: () => console.log('Cancel'),
                                                            onConfirm: () => {
                                                                dispatch(deleteEntityData('core/customer/' + data.id))
                                                                dispatch(setFetching(true))
                                                            },
                                                        });
                                                    }}
                                                >
                                                    <IconTrash size={16}/>
                                                </ActionIcon>
                                            </Group>
                                        ),
                                    },
                                ]
                                }
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
                                scrollAreaProps={{type: 'never'}}
                            />
                        </Box>
                    </Box>
                </div>
            </Box>
            {
                customerViewModel &&
                <CustomerViewModel customerViewModel={customerViewModel} setCustomerViewModel={setCustomerViewModel}/>
            }
        </>
    );
}

export default CustomerTable;