import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../login/Login";
import Signup from "../signup/Signup";
import Forgot from "../forgot/Forgot";
import Reset from "../reset/Reset";
import VeriSuccess from "../verification/success/VeriSuccess";
import Verification from "../verification/Verification";
import LandingPage from "../landingPage/LandingPage";
import NewApplication from "../newApplication/NewApplication";
import CreateApplication from "../createApplication/CreateApplication";
import MyApplications from "../myApplications/MyApplications";
import AppOverview from "../appOverview/AppOverview";
import OverviewComp from "../appOverview/overviewComp/OverviewComp";
import CalculateFee from "../appOverview/calculateFee/CalculateFee";
import Pwd from "../appOverview/calculateFee/pwd/Pwd";
import UploadPwd from "../appOverview/calculateFee/uploadPwd/UploadPwd";
import UploadDocs from "../appOverview/uploadDocs/UploadDocs";
import VehParking from "../appQuestions/vehParking/VehParking";
import VehParkingYes from "../appQuestions/vehParking/vehParkingYes/VehParkingYes";
import UploadComp from "../appOverview/uploadDocs/uploadComp/UploadComp";
import AppQuestions from "../appQuestions/AppQuestions";
import SiteLocation from "../appQuestions/siteLocation/SiteLocation";
import BngQues from "../appQuestions/bngQues/BngQues";
import TreesHedges from "../appQuestions/treeshedges/TreesHedges"
import SiteInfo from "../appQuestions/siteInfo/SiteInfo";
import SiteVisit from "../appQuestions/siteVisit/SiteVisit";
import PreAdvice from "../appQuestions/preAdvice/PreAdvice";
import EmpAuthority from "../appQuestions/empAuthority/EmpAuthority";
import OwnerCert from "../appQuestions/ownerCert/OwnerCert";
import AChecked from "../appQuestions/ownerCert/checked/aChecked/AChecked";
import BChecked from "../appQuestions/ownerCert/checked/bchecked/BChecked";
import CChecked from "../appQuestions/ownerCert/checked/cChecked/CChecked";
import DChecked from "../appQuestions/ownerCert/checked/dChecked/DChecked";
import B2 from "../appQuestions/ownerCert/checked/bchecked/b2/B2";
import PreAdviceYes from "../appQuestions/preAdvice/preAdviceYes/PreAdviceYes";
import OtherQues from "../appQuestions/siteVisit/other/OtherQues";
import YesQues from "../appQuestions/siteInfo/yesQues/YesQues";
import AppDetails from "../appQuestions/appDetails/AppDetails";
import DetailComp from "../appQuestions/detailComp/DetailComp";
import DevQues from "../appQuestions/devQues/DevQues";
import PedQues from "../appQuestions/pedQues/PedQues";
import MaterialQues from "../appQuestions/materialQues/MaterialQues";
import MaterialQuesYes from "../appQuestions/materialQues/mqYes/MaterialQuesYes";
import DevDates from "../appQuestions/devDates/DevDates";
import ProposedWork from "../appQuestions/proposedWork/ProposedWork";
import PwYes from "../appQuestions/proposedWork/pwYes/PwYes";
import PwYes2 from "../appQuestions/proposedWork/pwYes/PwYes2";
import PFcheck from "../preFlight/PFcheck";
import Applicant from "../preFlight/presentationMode/applicant/Applicant"
import EditQuestions from "../preFlight/editQuestions/EditQuestions";
import EditDocuments from "../preFlight/editDocuments/EditDocuments";
import Descriptionreview from "../preFlight/descriptionPW/Descriptionreview";
import Redirecting from "../redirecting/Redirecting";
import PaymentSuccess from "../redirecting/paymentSuccess/PaymentSuccess";
import ESign from "../eSignature/ESign";
import Notification from "../notification/Notification";
import Header from "../header/Header";
import "./Main.css";
import BngOverview from "../bngMetrics/bngQuestionsOverview/bngOverview";
import SiteDetails from "../bngMetrics/siteDetails/siteDetails";
import Assessments from "../bngMetrics/assessments/assessments";

export default function Main() {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/notification" element={<Notification></Notification>}></Route>
      <Route path="/header" element={<Header></Header>}></Route>
      <Route path="/forgot" element={<Forgot></Forgot>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/reset" element={<Reset></Reset>}></Route>
      <Route path="/verification/success" element={<VeriSuccess></VeriSuccess>}></Route>
      <Route path="/verification" element={<Verification></Verification>}></Route>
      <Route path="/landingPage" element={<LandingPage></LandingPage>}></Route>
      <Route path="/newApplication" element={<NewApplication></NewApplication>}></Route>
      <Route path="/createApplication" element={<CreateApplication></CreateApplication>}></Route>
      <Route path="/myApplications" element={<MyApplications></MyApplications>}></Route>
      <Route path="/appOverview" element={<AppOverview></AppOverview>}></Route>
      <Route path="/appOverview/overviewComp" element={<OverviewComp />} />
      <Route path="/appOverview/calculateFee" element={<CalculateFee />} />
      <Route path="/appOverview/calculateFee/pwd" element={<Pwd />} />
      <Route path="/appOverview/calculateFee/uploadPwd" element={<UploadPwd />} />
      <Route path="/appOverview/uploadDocs" element={<UploadDocs/>} />
      <Route path="/appQuestions/vehParking" element={<VehParking/>} />
      <Route path="/appQuestions/vehParking/vehParkingYes" element={<VehParkingYes/>} />
      <Route path="/appOverview/uploadDocs/uploadComp" element={<UploadComp/>} />
      <Route path="/appQuestions" element={<AppQuestions></AppQuestions>}></Route>
      <Route path="/appQuestions/ownerCert" element={<OwnerCert></OwnerCert>}></Route>
      <Route path="/appQuestions/ownerCert/checked/achecked" element={<AChecked></AChecked>}></Route>
      <Route path="/appQuestions/ownerCert/checked/bchecked" element={<BChecked></BChecked>}></Route>
      <Route path="/appQuestions/ownerCert/checked/bchecked/b2" element={<B2></B2>}></Route>
      <Route path="/appQuestions/ownerCert/checked/cChecked" element={<CChecked></CChecked>}></Route>
      <Route path="/appQuestions/ownerCert/checked/dchecked" element={<DChecked></DChecked>}></Route>
      <Route path="/appQuestions/siteLocation" element={<SiteLocation></SiteLocation>}></Route>
      <Route path="/appQuestions/preAdvice" element={<PreAdvice></PreAdvice>}></Route>
      <Route path="/appQuestions/empAuthority" element={<EmpAuthority></EmpAuthority>}></Route>
      <Route path="/appQuestions/preAdvice/preAdviceYes" element={<PreAdviceYes></PreAdviceYes>}></Route>
      <Route path="/appQuestions/bngQues" element={<BngQues></BngQues>}></Route>
      <Route path="/appQuestions/treeshedges" element={<TreesHedges></TreesHedges>}></Route>
      <Route path="/appQuestions/siteInfo" element={<SiteInfo></SiteInfo>}></Route>
      <Route path="/appQuestions/siteVisit" element={<SiteVisit></SiteVisit>}></Route>
      <Route path="/appQuestions/siteVisit/other" element={<OtherQues></OtherQues>}></Route>
      <Route path="/appQuestions/siteInfo/yesQues" element={<YesQues/>} />
      <Route path="/appQuestions/appDetails" element={<AppDetails></AppDetails>}></Route>
      <Route path="/appQuestions/detailComp" element={<DetailComp></DetailComp>}></Route>
      <Route path="/appQuestions/devQues" element={<DevQues></DevQues>}></Route>
      <Route path="/appQuestions/pedQues" element={<PedQues></PedQues>}></Route>
      <Route path="/appQuestions/devDates" element={<DevDates></DevDates>}></Route>
      <Route path="/appQuestions/materialQues" element={<MaterialQues/>}></Route>
      <Route path="/appQuestions/materialQues/mqYes" element={<MaterialQuesYes />} />
      <Route path="/appQuestions/proposedWork" element={<ProposedWork></ProposedWork>}></Route>
      <Route path="/appQuestions/proposedWork/pwYes" element={<PwYes/>}></Route>
      <Route path="/appQuestions/proposedWork/pwYes/pwYes2" element={<PwYes2 />} />
      <Route path="/preflight" element={<PFcheck></PFcheck>}></Route>
      <Route path="/preflight/presentationMode/applicant" element={<Applicant></Applicant>}></Route>
      <Route path="/preflight/editQuestions" element={<EditQuestions></EditQuestions>}></Route>
      <Route path="/preflight/editDocuments" element={<EditDocuments></EditDocuments>}></Route>
      <Route path="/preflight/descriptionPW" element={<Descriptionreview></Descriptionreview>}></Route>
      <Route path="/redirecting" element={<Redirecting></Redirecting>}></Route>
      <Route path="/redirecting/paymentSuccess" element={<PaymentSuccess></PaymentSuccess>}></Route>
      <Route path="/eSignature" element={<ESign />} />
      <Route path="/bngMetrics/bngQuestionsOverview" element={<BngOverview></BngOverview>}></Route>
      <Route path="/bngMetrics/siteDetails" element={<SiteDetails></SiteDetails>}></Route>
     <Route path="/bngMetrics/assessments" element={<Assessments></Assessments>}></Route>

      {/*<Route
          path="/thank-you-check"
          element={<ThankYouCheck></ThankYouCheck>}
        ></Route>
        <Route
          path="/check-successful"
          element={<CheckSuccessful></CheckSuccessful>}
        ></Route>
        <Route
          path="/check-failed"
          element={<CheckFailed></CheckFailed>}
        ></Route> */}
    </Routes>
  );
}
