import React from "react";
import Header from "../../components/header";
import Lead from "../../components/lead";
import SavedList from "../../components/savedlist";
import Footer from "../../components/footer";
import "./style.css";

function Saved() {
  // const [saved, setSaved] = useState();

  // useEffect(() => {
  //   if (!saved) {
  //     return;
  //   }
  //   DB.getList().then((res) => {
  //     setSaved(res);
  //   });
  // }, []);

  return (
    <div>
      <Header />
      <Lead />
      <SavedList />
      <Footer />
    </div>
  );
}

export default Saved;
