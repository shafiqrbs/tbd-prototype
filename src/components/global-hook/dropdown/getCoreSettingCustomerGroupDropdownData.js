import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {coreSettingDropdown} from "../../../store/core/utilitySlice.js";

const getCoreSettingCustomerGroupDropdownData = () => {
    const dispatch = useDispatch();
    const [settingDropdown, setSettingDropdown] = useState([]);

    useEffect(() => {
        const value = {
            url: 'core/select/setting',
            param: { 'dropdown-type': 'customer-group' }
        }
        dispatch(coreSettingDropdown(value))
    }, [dispatch]);

    const dropdownData = useSelector((state) => state.utilitySlice.customerGroupDropdownData);

    useEffect(() => {
        if (dropdownData && dropdownData.length > 0) {
            const transformedData = dropdownData.map(type => {
                return { 'label': type.name, 'value': String(type.id) }
            });
            setSettingDropdown(transformedData);
        }
    }, [dropdownData]);

    return settingDropdown;
};

export default getCoreSettingCustomerGroupDropdownData;
