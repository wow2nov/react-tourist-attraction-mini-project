import HompageContainer from "./pages/Homepage.container";
// import FetchTripsDemo from "./pages/FetchTripsDemo";
import "./App.css";

function App() {
  return (
    <div>
      {/* หน้าตัวอย่าง fetch + state — อยากกลับหน้าเดิมให้สลับเป็น HompageContainer */}
      {/* <FetchTripsDemo /> */}
      <HompageContainer />
    </div>
  );
}

// App.js > HompageContainer > HompageComponent > Title, title.css
//                                              > input, input.css
//        > Footer

export default App;
