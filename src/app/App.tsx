import React from "react";
import "./App.css";

import { Calendar } from "../components/calendar/calendar.component";

function App() {
  return (
    <div className="App">
      <Calendar month={5} year={2021} />
    </div>
  );
}

export default App;
