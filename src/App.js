import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  const brandName = "Chaos PC";
  const Wip = "Muy Pronto"
  return (
    <>
      <NavBar 
        brand ={brandName}
      />
      <ItemListContainer placeholder ={Wip}/>
    </>
  );
}

export default App;