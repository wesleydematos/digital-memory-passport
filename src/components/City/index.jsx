import { SquarePurple } from "../Square/style";
import { CityContent } from "./style";

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
          <p className="scan">SCAN THE QR CODE TO GET YOURS!</p>
        </div>
        <div className="code">
          <SquarePurple />
        </div>
      </main>
    </CityContent>
  );
}

export default City;
