import './App.css';
import CustomAccordion from './Accordion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const cake = require('../src/images/cake.jpeg');
const github = require('../src/images/github.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Brazilian Carrot Cake with Chocolate
        </p>

        <img src={cake} />
        <br></br>
        <div className="accordion">
          <CustomAccordion title={"Ingredients"} content={"Eggs, flour"} />
          <CustomAccordion title={"Recipe"} content={"Eggs, flour"} />

        </div>
        <br></br>
        <footer className="footer">
          <div className="footer-container">
            <a>
              <FontAwesomeIcon icon={faGithub} size="xs" />
              <a className="link" href="https://github.com/mgrinstein/recipe-app" target="_blank"> Made with love by a back-end dev (can you tell? lol)
              </a>
            </a>

          </div>
        </footer>
      </header>

    </div>
  );
}

export default App;
