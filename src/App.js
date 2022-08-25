import "./App.css";
import NavBar from "./components/NavBar";
// import ItemListContainer from "./containers/ItemListContainer";

function App() {
  const brandName = "Chaos Gaming";
  return (
    <>
      <NavBar 
        brand ={brandName}
      />
      {/* <ItemListContainer 
        greeting={"asd"}
      /> */}
    </>
  );
}

export default App;