
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Benefitslink1 from './pages/benefits/benefitslink1';
import Benefitslink2 from './pages/benefits/benefitslink2';
import Benefitslink3 from './pages/benefits/benefitslink3';
import Businesslink1 from './pages/business/businesslink1';
import Businesslink2 from './pages/business/businesslink2';
import Businesslink3 from './pages/business/businesslink3';
import Healthlink1 from './pages/health/healthlink1';
import Healthlink2 from './pages/health/healthlink2';
import Healthlink3 from './pages/health/healthlink3';
import Immigrationlink1 from './pages/immigration/immigrationlink1';
import Immigrationlink2 from './pages/immigration/immigrationlink2';
import Immigrationlink3 from './pages/immigration/immigrationlink3';
import Jobslink1 from './pages/jobs/jobsLink1';
import Jobslink2 from './pages/jobs/jobsLink2';
import Jobslink3 from './pages/jobs/jobsLink3';
import Moreserviceslink1 from './pages/more_services/more_servicelink1';
import Moreserviceslink2 from './pages/more_services/more_servicelink2';
import Moreserviceslink3 from './pages/more_services/more_servicelink3';
import Taxeslink1 from './pages/taxes/taxeslink1';
import Taxeslink2 from './pages/taxes/taxeslink2';
import Taxeslink3 from './pages/taxes/taxeslink3';
import Travellink1 from './pages/travel/travellink1';
import Travellink2 from './pages/travel/travellink2';
import Travellink3 from './pages/travel/travellink3';

import LandingPage from './pages/landingPage';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>


    <Routes>
    <Route path="" element={<LandingPage />} />
      <Route path="/" element={<App />}>

        <Route path="benefitslink1" element={<Benefitslink1 />}></Route>
        <Route path="benefitslink2" element={<Benefitslink2 />}></Route>
        <Route path="benefitslink3" element={<Benefitslink3 />}></Route>

        <Route path="businesslink1" element={<Businesslink1 />}></Route>
        <Route path="businesslink2" element={<Businesslink2 />}></Route>
        <Route path="businesslink3" element={<Businesslink3 />}></Route>

        <Route path="healthlink1" element={<Healthlink1 />}></Route>
        <Route path="healthlink2" element={<Healthlink2 />}></Route>
        <Route path="healthlink3" element={<Healthlink3 />}></Route>

        <Route path="immigrationlink1" element={<Immigrationlink1 />}></Route>
        <Route path="immigrationlink2" element={<Immigrationlink2 />}></Route>
        <Route path="immigrationlink3" element={<Immigrationlink3 />}></Route>

        <Route path="jobslink1" element={<Jobslink1 />}></Route>
        <Route path="jobslink2" element={<Jobslink2 />}></Route>
        <Route path="jobslink3" element={<Jobslink3 />}></Route>

        <Route path="more_serviceslink1" element={<Moreserviceslink1 />}></Route>
        <Route path="more_serviceslink2" element={<Moreserviceslink2 />}></Route>
        <Route path="more_serviceslink3" element={<Moreserviceslink3 />}></Route>

        <Route path="taxeslink1" element={<Taxeslink1 />}></Route>
        <Route path="taxeslink2" element={<Taxeslink2 />}></Route>
        <Route path="taxeslink3" element={<Taxeslink3 />}></Route>

        <Route path="travellink1" element={<Travellink1 />}></Route>
        <Route path="travellink2" element={<Travellink2 />}></Route>
        <Route path="travellink3" element={<Travellink3 />}></Route>

        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>



  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

