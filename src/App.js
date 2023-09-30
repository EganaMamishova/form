import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NewContact from "./components/NewContact";
import MainLayout from "./components/MainLayout";



function App() {
  return (
    <>
    <Routes >
      <Route path="/" element={<MainLayout/>}>

      </Route>
   
      <Route path="newContact" element={<NewContact/>}/>
         
    </Routes>
    </>
    
  );
}

export default App;
