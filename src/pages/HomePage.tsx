import { homeObjOne } from "./HomePage.data";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Roadmap from "../components/Roadmap/Roadmap";
import FAQ from "../components/FAQ";
import Team from "../components/Team";

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Home {...homeObjOne} />
            <Roadmap />
          
            <FAQ />
            <Team /> 
           
        </>
    );
};

export default HomePage;
