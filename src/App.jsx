import OrganizationChart from "@dabeng/react-orgchart";
import { useState } from "react";
import data from "./employees.json";

const initialDataSource = data;

function App() {
  const [datasrc, setDatasrc] = useState(initialDataSource);

  return (
    <div className="App">
      <OrganizationChart
        containerClass="orgchart-container custom-container"
        datasource={datasrc.ds}
        collapsible={true}
        pan={true}
        zoom={true}
      />
    </div>
  );
}

export default App;
