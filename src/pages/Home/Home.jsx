import "../../styles/main.scss";
import { Sidebar, Navbar } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Container
      </div>
    </div>
  );
};

export default Home;
