import AboutUs from "./Components/AboutUs/AboutUs";
import Locations from "./Components/AllLocations/Locations";
import ClientReviews from "./Components/ClientReviews/ClientReviews";
import Footer from "./Components/Footer/Footer";
import GetPreApprovedOnline from "./Components/GetPreApprovedOnline/GetPreApprovedOnline";
import Hero from "./Components/Hero/Hero";
import InterestedWorkingWithUs from "./Components/InterestedWorkingWithUs/InterestedWorkingWithUs";
import LoanProducts from "./Components/LoanProducts/LoanProducts";
import Navbar from "./Components/Navbar/Navbar";
import OtherResources from "./Components/OtherResources/OtherResources";
import PastProjects from "./Components/PastProjects/PastProjects";

const App = () => {
  return (
    <div className="space-y-2 ">
      {/* done */}
      <Navbar></Navbar>
      {/*  */}
      {/* <Hero></Hero> */}
      {/* done */}
      <LoanProducts></LoanProducts>
      {/*  */}
      <Locations></Locations>
      {/*  */}
      {/* <ClientReviews></ClientReviews> */}
      {/*  */}
      {/* <PastProjects></PastProjects> */}
      {/*  */}
      {/* <InterestedWorkingWithUs></InterestedWorkingWithUs> */}
      {/*  */}
      {/* <OtherResources></OtherResources> */}
      {/*  */}
      {/* <GetPreApprovedOnline></GetPreApprovedOnline> */}
      {/*  */}
      {/* <AboutUs></AboutUs> */}
      {/*  */}
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
