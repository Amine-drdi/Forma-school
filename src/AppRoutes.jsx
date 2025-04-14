import React from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";


const Home = React.lazy(() => import("./pages/home"));
const AllTrainings = React.lazy(() => import("./pages/home/AllTrainings"));
const AllFinance = React.lazy(() => import("./pages/home/AllFinance"));
 const Trainings3 = React.lazy(() => import("./pages/trainingsBtp"));
const SearchTrainings = React.lazy(() => import("./pages/searchTrainings"));
 const TrainingBtpDetails = React.lazy(() => import("./pages/trainingBtpDetails"));
const Contact = React.lazy(() => import("./pages/contact"));
const About = React.lazy(() => import("./pages/about"));
const Cpf = React.lazy(() => import("./pages/Financements/Cpf"));
const Opco = React.lazy(() => import("./pages/Financements/Opco"));
const Fiphfp = React.lazy(() => import("./pages/Financements/Fiphfp"));
const Agefiph = React.lazy(() => import("./pages/Financements/Agefiph"));
const PoleEmploi = React.lazy(() => import("./pages/Financements/PoleEmploi"));
const LegalNotices = React.lazy(() => import("./pages/legalNotices"));
const PrivacyPolicy = React.lazy(() => import("./pages/privacyPolicy"));
const TermsOfUse = React.lazy(() => import("./pages/termsAndConditionsOfUse"));
 
const CandidateDashboard = React.lazy(() =>
  import("./pages/candidateDashboard")
);
const Authentication = React.lazy(() => import("./pages/authentication"));
const Login = React.lazy(() =>
  import("./pages/authentication/components/Login")
);
const Register = React.lazy(() =>
  import("./pages/authentication/components/Register")
);
const ForgotPassword = React.lazy(() =>
  import("./pages/authentication/components/ForgotPassword")
);

 
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Home />
          </React.Suspense>
        }
      />
      <Route
          path="/AllTrainings"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <AllTrainings />
          </React.Suspense>
        }
      />
      
        <Route
          path="/AllFinance"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <AllFinance/>
          </React.Suspense>
        }
      />
   
       <Route
        path="/cpf"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Cpf/>
          </React.Suspense>
        }
      />
        <Route
        path="/opco"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Opco/>
          </React.Suspense>
        }
      />
      <Route
        path="/fiphfp"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Fiphfp/>
          </React.Suspense>
        }
      />
      <Route
        path="/poleEmploi"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PoleEmploi/>
          </React.Suspense>
        }
      />
       <Route
        path="/agefiph"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Agefiph/>
          </React.Suspense>
        }
      />
       <Route
        path="/formations/categorie/btp"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Trainings3 />
          </React.Suspense>
        }
      />
   
      <Route
        path="/formations/recherches"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <SearchTrainings />
          </React.Suspense>
        }
      />
     
       <Route
        path="/formations/btp/:id"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TrainingBtpDetails/>
          </React.Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </React.Suspense>
        }
      />
      <Route
        path="/a-propos"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <About />
          </React.Suspense>
        }
      />
      <Route
        path="/mentions-legales"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <LegalNotices />
          </React.Suspense>
        }
      />
      <Route
        path="/politiques-de-confidentialite"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicy />
          </React.Suspense>
        }
      />
      <Route
        path="/conditions-generales"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <TermsOfUse />
          </React.Suspense>
        }
      />

 
 
      <Route
        path="/compte/profil"
        element={
          <React.Suspense fallback={<LoadingSpinner />}>
            <CandidateDashboard />
          </React.Suspense>
        }
      >
        <Route index element={<React.Suspense fallback={<LoadingSpinner />}>
          <CandidateDashboard />
        </React.Suspense>} />
      </Route>
      <Route path="/connexion" element={<Authentication />}>
        <Route index element={<Login />} />
        <Route path="inscrire" element={<Register />} />
        <Route path="mot-de-passe-oublie" element={<ForgotPassword />} />
       
       
      </Route>
    </Routes>
  );
};

export default AppRoutes;
