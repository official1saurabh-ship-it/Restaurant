import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Restaurants from './Restaurants';
import POSBillingPage from './pages/POSBillingPage';
import KitchenDisplayPage from './pages/KitchenDisplayPage';
import TableManagementPage from './pages/TableManagementPage';
import InventoryPage from './pages/InventoryPage';
import CRMPage from './pages/CRM-LayoutPage';
import ReportsPage from './pages/ReportsPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsofServicePage from './pages/TermsofServicePage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import SecurityPage from './pages/SecurityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Restaurants />} />
        <Route path="/pos" element={<POSBillingPage />} />
        <Route path="/kds" element={<KitchenDisplayPage />} />
        <Route path="/tables" element={<TableManagementPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/crm" element={<CRMPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsofServicePage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
        <Route path="/security" element={<SecurityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
