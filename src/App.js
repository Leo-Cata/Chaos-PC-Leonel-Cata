import "./App.css";
import NavBar from "./components/NavBar";
// import ItemListContainer from "./containers/ItemListContainer";

function App() {
  const categories = ["Electronics", "Audio & Video", "Clothing"]
  const temperatura = 18;
  return (
    <>
      <NavBar 
        categories={categories} 
        temp ={temperatura}
      />
      {/* <ItemListContainer 
        greeting={"asd"}
      /> */}
    </>
  );
}

export default App;