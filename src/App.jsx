import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Footter from "./components/Footter";

function App() {
  // getting all the data
  const coffees = useLoaderData();

  return (
    <>
      <Header></Header>
      <TopBanner></TopBanner>
      <div className="m-20">
        <h1 className="text-5xl  text-orange-950 font-bold text-center">
          Hot & Cold Coffees: {coffees.length}
          <p className="text-sm mt-5">Make Your Mood Better and Smooth!</p>
          <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
            ))}
          </div>
        </h1>
      </div>

      {/* footer */}
      <Footter></Footter>
    </>
  );
}

export default App;
