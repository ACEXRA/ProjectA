import "./App.css";
import Header from "./components/main/Header";
import Content from "./components/main/Content";
import UserContextProvider from "./components/context/UserContextProvider";
import DataContextProvider from "./components/context/DataContextProvider";

function App() {
  return (
    <div className="app">
      <DataContextProvider>
        <UserContextProvider>
          <Header />
          <Content />
        </UserContextProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
