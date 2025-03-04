import { BrowserRouter } from "react-router-dom";

import { 
  Navbar,
  NewsSection,
  Highlight,
  Footer
} from "./components";
import {
  highlightsgroupone,
  newsgroupone,
  newsgrouptwo
} from "./constants/index"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black h-full"> 
        <div className="mb-[120px]">
          <Navbar />
        </div>
        <div className="css-183cm4p">
          <NewsSection newsData={newsgroupone} />
        </div>
        <div className="css-183cm4p">
          <NewsSection 
            newsData={newsgrouptwo}
            layoutOrder={[ "side-one", "side-two", "main"]}
          />
        </div>
        <div className="css-183cm4p py-14">
          <Highlight highlightsData={highlightsgroupone} />
        </div>
       <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
