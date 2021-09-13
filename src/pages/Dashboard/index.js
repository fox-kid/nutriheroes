import Home from "../../components/Home";
import Exercise from "../../components/Exercise";
import Nutrition from "../../components/Nutrition";
import Expertise from "../../components/Expertise";
import App from "../../components/App";
import GetStarted from "../../components/GetStarted";

function Dashboard() {
  return (
    <main>
      <Home />
      <Exercise />
      <Nutrition />
      <Expertise />
      <App />
      <GetStarted />
    </main>
  );
}

export default Dashboard;
