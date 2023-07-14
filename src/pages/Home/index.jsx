import PgUnlockPassport from "../../components/Home/PgUnlockPassport";
import PgHowGet from "../../components/Home/PgHowGet";
import PgYourMemory from "../../components/Home/PgYourMemory";
import PgJoinUs from "../../components/Home/PgJoinUs";
import StStep from "../../components/Home/PgRoadMap/StStep";
import NdStep from "../../components/Home/PgRoadMap/NdStep";
import RdStep from "../../components/Home/PgRoadMap/RdStep";

function Home() {
  return (
    <>
      <PgUnlockPassport />
      <PgHowGet />
      <PgYourMemory />
      <PgJoinUs />
      <StStep />
      <NdStep />
      <RdStep />
    </>
  );
}

export default Home;
