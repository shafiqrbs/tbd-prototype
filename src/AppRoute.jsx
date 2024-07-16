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
import MarketingIndex from "./components/modules/health/marketing-executive/MarketingIndex.jsx";
import ServicesIndex from "./components/modules/health/services/ServicesIndex.jsx";
import EmergencyServicesIndex from "./components/modules/health/emergency-services/EmergencyServicesIndex.jsx";
import ServiceGroupIndex from "./components/modules/health/services-group/ServiceGroupIndex.jsx";
import ComissionIndex from "./components/modules/health/comission/ComissionIndex.jsx";
import HealthConfigurationIndex from "./components/modules/health/configuraton/HealthConfigurationIndex.jsx";
import BookingIndex from "./components/modules/booking/booking-entry/BookingIndex.jsx";
import BookingIPDIndex from "./components/modules/booking/booking-IPD/BookingIPDIndex.jsx";
import BookingOPDIndex from "./components/modules/booking/booking-opd/BookingOPDIndex.jsx";
import BookingDiagnosticIndex from "./components/modules/booking/booking-diagnostic/BookingDiagnosticIndex.jsx";
import BookingDoctorVisitIndex from "./components/modules/booking/booking-doctor-visit/BookingDoctorVisitIndex.jsx";
import BookingBillingIndex from "./components/modules/booking/booking-billing/BookingBillingIndex.jsx";
import BookingAccountsIndex from "./components/modules/booking/booking-accounts/BookingAccountsIndex.jsx";
import BookingPharmacyIndex from "./components/modules/booking/booking-pharmacy/BookingPharmacyIndex.jsx";
import BookingHumanResourceIndex from "./components/modules/booking/booking-human-resource/BookingHumanResourceIndex.jsx";
import BookingInventoryIndex from "./components/modules/booking/booking-inventory/BookingInventoryIndex.jsx";
import BookingMedicalRecordIndex from "./components/modules/booking/booking-medical-record/BookingMedicalRecordIndex.jsx";
import BookingSampleCollectionIndex from "./components/modules/booking/booking-sample-collection/BookingSampleCollectionIndex.jsx";
import BookingNotesMessagingIndex from "./components/modules/booking/booking-notes-messaging/BookingNotesMessagingIndex.jsx";
import BookingReferrelCommissionIndex from "./components/modules/booking/booking-refferel-commission/BookingReferrelCommissionIndex.jsx";
import BookingAssetsPurchaseIndex from "./components/modules/booking/booking-assets-purchase/BookingAssetsPurchaseIndex.jsx";
import BookingReportsIndex from "./components/modules/booking/booking-reports/BookingReportsIndex.jsx";
import BookingDashboardIndex from "./components/modules/booking/booking-dashboard/BookingDashboardIndex.jsx";

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
          <Route path="marketing-executive" element={<MarketingIndex />} />
          <Route path="services" element={<ServicesIndex />} />
          <Route
            path="emergency-services"
            element={<EmergencyServicesIndex />}
          />
          <Route path="service-group" element={<ServiceGroupIndex />} />
          <Route path="commission" element={<ComissionIndex />} />
          <Route path="configuration" element={<HealthConfigurationIndex />} />
        </Route>

        {/* booking routes start */}
        <Route path="/booking/">
          <Route path="booking-dashboard" element={<BookingDashboardIndex />} />
          <Route path="booking-entry" element={<BookingIndex />} />
          <Route path="booking-ipd" element={<BookingIPDIndex />} />
          <Route path="booking-opd" element={<BookingOPDIndex />} />
          <Route
            path="booking-diagnostic"
            element={<BookingDiagnosticIndex />}
          />
          <Route
            path="booking-doctor-visit"
            element={<BookingDoctorVisitIndex />}
          />
          <Route path="booking-billing" element={<BookingBillingIndex />} />
          <Route path="booking-accounts" element={<BookingAccountsIndex />} />
          <Route path="booking-pharmacy" element={<BookingPharmacyIndex />} />
          <Route
            path="booking-human-resource"
            element={<BookingHumanResourceIndex />}
          />
          <Route path="booking-inventory" element={<BookingInventoryIndex />} />
          <Route
            path="booking-medical-record"
            element={<BookingMedicalRecordIndex />}
          />
          <Route
            path="booking-sample-collection"
            element={<BookingSampleCollectionIndex />}
          />
          <Route
            path="booking-notes-messaging"
            element={<BookingNotesMessagingIndex />}
          />
          <Route
            path="booking-refferal-commission"
            element={<BookingReferrelCommissionIndex />}
          />
          <Route
            path="booking-assets-purchase"
            element={<BookingAssetsPurchaseIndex />}
          />
          <Route path="booking-reports" element={<BookingReportsIndex />} />
        </Route>
        {/* booking routes end */}

        <Route path="/test" element={<TestIndex />} />
      </Route>
    </Routes>
  );
}

export default AppRoute;
