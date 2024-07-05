import "./TripStyles.css";
import Trip1 from "../assets/9.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/1.jpg";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Mapa.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonessia"
          text="Indonesia is the largest archipelago in the world. It consists of five major islands and about 30 smaller groups. The islands are located at a crossroads between two oceans, the Pacific and Indian Oceans, and straddles two continents, Asia and Australia/Oceania. Its strategic location in maritime Southeast Asia has always shaped the cultural, social, political and economic life of the country, which only gained independence from the Netherlands in 1949."
        />

        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="The country of Malaysia is two separate areas of land known as Peninsular Malaysia and East Malaysia. The two regions are separated by the South China Sea by about 400 miles. Combined, they’d be roughly the size of the state of New Mexico.

          Peninsular Malaysia is on the tip of the Malay Peninsula, a long, thin landmass that snakes south from the country of Thailand toward the South China Sea. East Malaysia stretches across northern Borneo, an island Malaysia shares with the country of Indonesia."
        />

        <TripData
          image={Trip3}
          heading="Trip in France"
          text="France, the largest country in Western Europe, has long been a gateway between the continent's northern and southern regions. Its lengthy borders touch Germany and Belgium in the north; the Atlantic Ocean in the west; the Pyrenees Mountains and Spain in the south."
        />
      </div>
    </div>
  );
}

export default Trip;
