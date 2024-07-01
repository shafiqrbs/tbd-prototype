import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/layout/Layout";
import SampleDashboard from "./components/modules/sample-module/DashBoard";
import "./lang/i18next";
import CustomerIndex from "./components/modules/core/customer/CustomerIndex";
import UserIndex from "./components/modules/core/user/UserIndex";
import VendorIndex from "./components/modules/core/vendor/VendorIndex";
import ConfigurationIndex from "./components/modules/inventory/configuraton/ConfigurationIndex";
import CategoryGroupIndex from "./components/modules/inventory/category-group/CategoryGroupIndex";
import CategoryIndex from "./components/modules/inventory/category/CategoryIndex";
import ProductIndex from "./components/modules/inventory/product/ProductIndex.jsx";
import SalesIndex from "./components/modules/inventory/sales/SalesIndex";
import __SalesForm from "./components/modules/inventory/sales/__SalesForm.jsx";

import SampleInvoice from "./components/modules/sample-module/sample-layout/SampleInvoice";
import SampleIndex from "./components/modules/sample-module/sample-layout/SampleIndex";
import DomainIndex from "./components/modules/domain/domain/DomainIndex";
import TransactionModeIndex from "./components/modules/accounting/transaction-mode/TransactionModeIndex.jsx";
import SalesInvoice from "./components/modules/inventory/sales/SalesInvoice";
import Sitemap from "./components/modules/dashboard/SItemap";
import PurchaseIndex from "./components/modules/inventory/purchase/PurchaseIndex";
import PurchaseInvoice from "./components/modules/inventory/purchase/PurchaseInvoice";
import VoucherIndex from "./components/modules/accounting/voucher-entry/VoucherIndex";
import HeadGroupIndex from "./components/modules/accounting/head-group/HeadGroupIndex";
import HeadSubGroupIndex from "./components/modules/accounting/head-subgroup/HeadSubGroupIndex";
import LedgerIndex from "./components/modules/accounting/ledger/LedgerIndex";
import ProductionIndex from "./components/modules/inventory/production/ProductionIndex.jsx";
import InhouseIndex from "./components/modules/inventory/production-inhouse/InhouseIndex.jsx";
import ReceipeIndex from "./components/modules/inventory/receipe/ReceipeIndex.jsx";
import SalesEdit from "./components/modules/inventory/sales/SalesEdit.jsx";
import PurchaseEdit from "./components/modules/inventory/purchase/PurchaseEdit.jsx";
import SampleModalIndex from "./components/modules/sample3Grid/SampleModalIndex.jsx";
import OpeningApproveIndex from "./components/modules/inventory/opening-stock/OpeningApproveIndex";
import OpeningStockIndex from "./components/modules/inventory/opening-stock/OpeningStockIndex";
import InvoiceBatchIndex from "./components/modules/inventory/invoice-batch/InvoiceBatchIndex.jsx";
import TestIndex from "./components/modules/health/crud-form/PathologyTestIndex.jsx";
import PathologyTestIndex from "./components/modules/health/pathology-test/PathologyTestIndex.jsx";
import LabUserIndex from "./components/modules/health/lab-user/LabUserIndex.jsx";
import DoctorIndex from "./components/modules/health/doctor/DoctorIndex.jsx";
import ReferredIndex from "./components/modules/health/referred/ReferredIndex.jsx";
import CabinIndex from "./components/modules/health/cabin-ward/CabinIndex.jsx";
import SurgeryIndex from "./components/modules/health/surgery/SurgeryIndex.jsx";

function AppRoute() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="/sample/">
          <Route path="" element={<SampleDashboard />} />
          <Route path="invoice" element={<SampleInvoice />} />
          <Route path="index" element={<SampleIndex />} />
        </Route>
        <Route path="/core/">
          <Route path="customer" element={<CustomerIndex />} />
          <Route path="user" element={<UserIndex />} />
          <Route path="vendor" element={<VendorIndex />} />
        </Route>
        <Route path="/inventory/">
          <Route path="sales/edit/:id" element={<SalesEdit />} />
          <Route path="sales" element={<SalesIndex />} />
          <Route path="sales-invoice" element={<SalesInvoice />} />
          <Route path="purchase/edit/:id" element={<PurchaseEdit />} />
          <Route path="purchase" element={<PurchaseIndex />} />
          <Route path="purchase-invoice" element={<PurchaseInvoice />} />
          <Route path="opening-stock" element={<OpeningStockIndex />} />
          <Route
            path="opening-approve-stock"
            element={<OpeningApproveIndex />}
          />
          <Route path="product" element={<ProductIndex />} />
          <Route path="category" element={<CategoryIndex />} />
          <Route path="category-group" element={<CategoryGroupIndex />} />
          <Route path="config" element={<ConfigurationIndex />} />
          <Route path="production" element={<ProductionIndex />} />
          <Route path="production-inhouse" element={<InhouseIndex />} />
          <Route path="production-receipe" element={<ReceipeIndex />} />
          <Route path="invoice-batch" element={<InvoiceBatchIndex />} />
        </Route>
        <Route path="/domain/">
          <Route path="" element={<DomainIndex />} />
        </Route>
        <Route path="/accounting/">
          <Route path="voucher-entry" element={<VoucherIndex />} />
          <Route path="ledger" element={<LedgerIndex />} />
          <Route path="head-group" element={<HeadGroupIndex />} />
          <Route path="head-subgroup" element={<HeadSubGroupIndex />} />
          <Route path="transaction-mode" element={<TransactionModeIndex />} />
          <Route path="modalIndex" element={<SampleModalIndex />} />
        </Route>
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="/health/">
          <Route path="pathology-test" element={<PathologyTestIndex />} />
          <Route path="doctor" element={<DoctorIndex />} />
          <Route path="lab-user" element={<LabUserIndex />} />
          <Route path="referred" element={<ReferredIndex />} />
          <Route path="cabin-ward" element={<CabinIndex />} />
          <Route path="surgery" element={<SurgeryIndex />} />
          <Route path="marketing-executive" element={<PathologyTestIndex />} />
          <Route path="services" element={<PathologyTestIndex />} />
          <Route path="emergency-services" element={<PathologyTestIndex />} />
          <Route path="service-group" element={<PathologyTestIndex />} />
          <Route path="commission" element={<PathologyTestIndex />} />
          <Route path="congiguration" element={<PathologyTestIndex />} />
        </Route>
        <Route path="/test" element={<TestIndex />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
