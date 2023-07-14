import PgUnlockPassport from "../../components/Home/PgUnlockPassport";
import PgHowGet from "../../components/Home/PgHowGet";
import PgYourMemory from "../../components/Home/PgYourMemory";
import PgJoinUs from "../../components/Home/PgJoinUs";
import StStep from "../../components/Home/PgRoadMap/StStep";
import NdStep from "../../components/Home/PgRoadMap/NdStep";
import RdStep from "../../components/Home/PgRoadMap/RdStep";
import Footer from "../../components/Footer";

function Home() {
  const divStyle = {
    overflow: "hidden",
  };

  return (
    <div style={divStyle}>
      <PgUnlockPassport />
      <PgHowGet />
      <PgYourMemory />
      <PgJoinUs />
      <StStep />
      <NdStep />
      <RdStep />
      <Footer />
    </div>
  );
}

export default Home;
