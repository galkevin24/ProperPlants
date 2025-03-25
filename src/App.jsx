import { useState } from "react";
import { plants } from "./plants./data";
import PlantSelection from "./plants/PlantSelection";


export default function App() {
  const [plants] = useState(plants);
  const [selectedPlant, setSelectedPlant] = useState());
 
  return <>
  <header>
    <p>Proper Plants</p>
    <PlantSelection 
      plants={plants}
      selectedPlant={selectedPlant}
      setSelectedPlant={setSelectedPlant}
    />
    </header>
    </>;
}
