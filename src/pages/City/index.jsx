import { SquarePurple } from "../../components/Square/style";
import { CityContent } from "./style";
import sun from "../../assets/sol.png";
import cloud from "../../assets/nuvem.png";

function City() {
  const city = "Syros";
  const country = "Greece";
  const fact =
    "Here is a fun fact about Syros. Ermoupoli in Syros, is the capital of the island and of the Cyclades!";

  return (
    <CityContent>
      <p>SOULFUL</p>
      <main>
        <div className="content">
          <h1>
            {city.toUpperCase()} <br /> <span>{country.toUpperCase()}</span>
          </h1>
          <p className="fact">{fact}</p>
          <button className="scan">SCAN THE QR CODE TO GET YOURS!</button>
        </div>
        <div className="code">
          <img src={sun} alt="Sol" id="sun" />
          <SquarePurple />
          <img src={cloud} alt="nuvem" id="cloud" />
        </div>
      </main>
    </CityContent>
  );
}

export default City;
