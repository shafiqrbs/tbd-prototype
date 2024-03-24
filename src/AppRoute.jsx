import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Layout from './components/layout/Layout'
import SampleDashboard from "./components/modules/sample-module/DashBoard";
import './lang/i18next';
import CustomerIndex from "./components/modules/core/customer/CustomerIndex";
import DamageIndex from './components/modules/core/damage/DamageIndex';
import BankAccountIndex from './components/modules/core/bankAccount/BankAccountIndex';
function AppRoute() {

    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route path="/sample/">
                    <Route path="" element={<SampleDashboard />} />
                </Route>
                <Route path="/core/">
                    <Route path="customer" element={<CustomerIndex />} />
                    <Route path="damage" element={<DamageIndex />} />
                    <Route path="bankAccount" element={<BankAccountIndex />} />
                </Route>
            </Route>
        </Routes>

    )
}

export default AppRoute
