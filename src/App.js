import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body  className="w-screen overflow-x-hidden"/>
    </Provider>
  );
}

export default App;
