import React from 'react'
import { NavLink } from '@mantine/core';
import {
    IconGauge,
} from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Navbar() {
    const navigate = useNavigate()
    const { t, i18n } = useTranslation();

    return (
        <>
            <NavLink
                href="#required-for-focus"
                label={t('Core')}
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink
                    href="customer"
                    label={t('Customer')}
                    component="button"
                    onClick={(e) => { navigate('core/customer') }}
                />
                <NavLink
                    href="damage"
                    label={t('Damage')}
                    component="button"
                    onClick={(e) => { navigate('core/damage') }}
                />
            </NavLink>

            <NavLink
                href="#required-for-focus"
                label="Sample"
                leftSection={<IconGauge size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink href="sample" label="sample" component="button" onClick={(e) => { navigate('sample') }} />
            </NavLink>
        </>
    )
}

export default Navbar