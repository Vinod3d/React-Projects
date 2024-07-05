import Mountain1 from "../assets/5.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/8.jpg";
import Mountain4 from "../assets/4.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tour give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a large caldera in Batangas that was formed by
        prehistoric eruptions. In the wake of the eruptions, it was
        eventually filled by Taal Lake. Throughout history it has erupted
        about 38 times, making it the second most active volcano in the
        Philippines. While it is usually known to only have one crater, the
        volcano is actually a complex volcano system that consists of 47
        volcanic craters. Its most popular crater is the Binintiang Malaki
        cone on the volcano's northwestern tip. This now dormant crater is
        also what you can see from nearby Tagaytay City and nearby towns.
        Meanwhile, its Main Crater Lake is the biggest crater in the system.
        This lake used to contain a small island called Vulcan Point, but it
        eventually disappeared after the main crater had a Phreatomagmatic
        eruption in 2020. A phreatomagmatic eruption is caused by the
        interaction of magma and water."
        img1={Mountain4}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Mt. Daguldol is among the many less popular mountains in Batangas, for newbies at least. The famous choices were always Mt. Batulao and Mt. Maculot. But if you’re one of those who have come to love the outdoors, Mt. Daguldol could be one of your favorites. It’s the kind of mountain that offers a balanced terrain. Just the right amount of challenging trails to make you drop to your knees and equal amount of easy parts to let you breathe. This mountain is also home to a small community that you will get to interact with good-natured locals, have a meal over a hearty conversation and videoke and get plenty of snacks on every stop. The view up its summit is also one of the best you’ll see. Deep blue water of the coast on one side and lush greens and peaks of the nearby mountains on the other."
        img1={Mountain1}
        img2={Mountain3}
      />
    </div>
  );
};

export default Destination;
