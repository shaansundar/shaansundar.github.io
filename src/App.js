import './App.css';
import './components/Card.css';
import './components/Heading-Card.css';
import './components/Socials-Card.css';
import './components/Skills-Card.css';
import './components/Experience-Card.css';
import './components/Achievement-Card.css';
import './components/Education-Card.css';
import './components/Projects-Card.css';
import EthWallet from './components/eth-wallet'
import useMediaQuery from '@mui/material/useMediaQuery';
import {GitHub,LinkedIn,Telegram,Email} from '@mui/icons-material';

function App() {
  var s768 = useMediaQuery('(min-width:768px)');
  var s872 = useMediaQuery('(min-width:872px)');
  // var s768 = window.matchMedia("(min-width: s768px)")
  let divStyle = (x,y,h,w) => (
    {
      gridRow: `${x} / span ${h}`,
      gridColumn: `${y} / span ${w}`
}
);
 
  return (
    <div className="App">
      <div className="Card" style={s768 === true ? divStyle(3,1,6,4) : divStyle(3,1,4,10)}>
      <div className="Experience-Flex">
            <h1>Experience</h1>
            <div className='Entry' style={{gridRow: '1'}}>
                  <div>
                        <a href="https://www.linkedin.com/company/crazynft">
                              <img src="img/crazynft.jpg" alt="Founder of CrazyNFT NFT Marketplace" className='Experience-Icon'/>
                        </a>
                        <div>
                              <h2>CrazyNFT</h2>
                              <h3>Founder</h3>
                        </div>
                  </div>
                  <h5> 2021 - Present</h5>
            </div>
            <div className='Entry' style={{gridRow: '2'}}>
                  <div>
                        <a href="https://www.linkedin.com/company/verum-capital-ag/">
                        <img src="img/verum.jpg" alt="Intern at Verum Capital AG" className='Experience-Icon' />
                        </a>
                        <div>
                              <h2>Verum Capital</h2>
                              <h3>Jr. Blockchain Developer</h3>
                        </div>
                  </div>
                  <h5> 2021 - Present</h5>
            </div>
            <div className='Entry' style={{gridRow: '3'}}>
                  <div>
                        <a href="https://www.linkedin.com/company/binance/">
                        <img src="img/bsc.png" alt="Operations Intern at Binance Smart Chain / BSC" className='Experience-Icon'/>
                        </a>
                        <div>
                              <h2>Binance Smart Chain</h2>
                              <h3>Operations Intern</h3>
                        </div>
                  </div>
                  <h5> 2021 - Present</h5>
            </div>
            <div className='Entry' style={{gridRow: '4'}}>
                  <div>
                        <a href="https://www.linkedin.com/company/photomath/">
                        <img src="img/photomath.jpg" alt="Math Expert at Photomath" className='Experience-Icon'/>
                        </a>
                        <div>
                              <h2>Photomath</h2>
                              <h3>Math Expert</h3>
                        </div>
                  </div>
                  <h5> 2021 - Present</h5>
            </div>
            <div className='Entry' style={{gridRow: '5'}}>
                  <div>
                        <a href="https://www.linkedin.com/company/campk12/">
                        <img src="img/ck12.jpg" alt="Javascript Instructor at CampK12" className='Experience-Icon'/>
                        </a>
                        <div>
                              <h2>CampK12</h2>
                              <h3>JavaScript Instructor</h3>
                        </div>
                  </div>
                  <h5> 2021 - Present</h5>
            </div>
          </div>
      </div>
      <div className="Card" style={s768 === true ? divStyle(1,9,3,2) : divStyle(17,1,2,10)}>
            {/* <img src="img/EthWallet.png" alt="" srcset="" style={{height:'min(20vh,20vw)',width:'min(20vh,20vw)'}} /> */}
      </div>
      <div className="Card" style={s768 === true ? divStyle(1,5,3,4) : divStyle(9,1,3,10)}>
            <div className="Achievements-Flex">
                  <h1>Achievements</h1>
                        <div>
                              <img src="img/Mercury.png" alt="Winner of Mercury Asia Hackathon 2021"/>
                              <h2>Winner</h2>
                              <h3>Mercury Asia Hackathon 2021</h3>
                              <h4>Best Usecase of IPFS: CrazyNFT</h4>
                        </div>
                        <div>
                              <img src="img/vision.svg" alt="Winner of Mercury Asia Hackathon 2021"/>
                              <h2>Runner-Up</h2>
                              <h3>Vision NFT Hack 2021</h3>
                              <h4>Best Usecase of Circle: CrazyNFT</h4>
                        </div>
            </div>
      </div>
      <div className="Card" style={s768 === true ? divStyle(4,5,2,3) : divStyle(1,7,2,4)}>
            <div className="Social-Flex">
                  <h1>Social</h1>
                  <a href="https://github.com/shaansundar"> <GitHub className="GitHub" sx={s872? {fontSize: '3.5vw'}  : {fontSize: '32px'} } /></a>
                  <a href="https://linkedin.com/in/notthatsundar"> <LinkedIn className="LinkedIn" sx={s872? {fontSize: '3.5vw'}  : {fontSize: '32px'} }/></a>
                  <a href="https://t.me/notthatsundar"> <Telegram className="Telegram" sx={s872? {fontSize: '3.5vw'}  : {fontSize: '32px'} }/></a>
                  <a href="mailto:shaan.idtindia@gmail.com"> <Email className="Email" sx={s872? {fontSize: '3.5vw'}  : {fontSize: '32px'} }/></a>
          </div>
      </div>
      <div className="Card" style={s768 === true ? divStyle(1,1,2,4) : divStyle(1,1,2,6)}>
          <div className="Heading-Flex">
            <h1>Shaan Sundar</h1>
            <h4>Web3 Dev, Blockchain Architect</h4>
          </div>
      </div>
      <div className="Card" style={s768 === true ? divStyle(4,8,5,4) : divStyle(12,1,3,10)}>
            <div className="Projects-Flex">
                  <h1>Projects</h1>
                  <div className='Projects-List'>
                        <div>
                              <img src="img/crazynft.jpg" alt="CrazyNFT Founding team, Lead executor"/>
                              <div>
                                    <h2>CrazyNFT</h2>
                                    <h3>Founding Team</h3>
                              </div>
                        </div>
                        <div>
                              <img src="img/diceinu.png" alt="DiceINU, blockchain DApp engineer"/>
                              <div>
                                    <h2>DiceINU</h2>
                                    <h3>DApp Engineer - Freelance</h3>
                              </div>
                        </div>
                        <div>
                              <img src="img/metafurkitty.png" alt="MetaFurKitty, Cardano Blockchain Architect"/>
                              <div>
                                    <h2>MetaFurKitty</h2>
                                    <h3>DApp Architect - Freelance</h3>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
      <div className="Card" style={s768 === true ? divStyle(6,5,3,3) : divStyle(15,1,2,10)}>
            <div className='Education-Flex'>
                  <h1>Education</h1>
                  <div>
                        <img src="img/vit.jpg" alt="Student at Vellore Institute of Technology, Chennai Campus" />
                        <h3>VIT Chennai</h3>
                        <h4>Bachelor's in Tech</h4>
                  </div>
                  <div>
                        <img src="img/nvs.jpg" alt="Alumni of Nath Valley School Aurangabad" />
                        <h3>Nath Valley School</h3>
                        <h4>Grade XII CBSE</h4>
                  </div>
            </div>
      </div>
      <div className="Card" style={s768 === true ? divStyle(9,1,2,10) : divStyle(7,1,2,10)}>
            <div className='Skills-Flex'>
            <h1>Skills</h1>
            <img src="img/azure.svg" alt="Azure Cloud Developer Associate" className="Skills-Icon"/>
            <img src="./bsc.png" alt="Binance Smart Chain Consultant and Developer" class="Skills-Icon"/>
            <img src="img/cardano.svg" alt="Cardano Consultant and Developer" class="Skills-Icon"/>
            <img src="img/ethereum-purple.svg" alt="Ethereum / EVM Consultant and Developer" class="Skills-Icon"/>
            <img src="img/solidity-white.svg" alt="Solidity and EVM Developer" class="Skills-Icon"/>
            <img src="img/html.svg" alt="Basic HTML Developer" class="Skills-Icon"/>
            <img src="img/css.svg" alt="Basic CSS Developer" class="Skills-Icon"/>
            <img src="img/React.png" alt="Basic React Developer" class="Skills-Icon"/>
            <img src="img/python.svg" alt="Intermediate Python Developer" class="Skills-Icon"/>
            <img src="img/javascript.svg" alt="Intermediate JavaScript Developer" class="Skills-Icon"/>
            </div>
      </div>
      {/* <div className="Card" style={s768 === true ? divStyle(9,1,2,2) : divStyle(16,1,2,10)}>
            S Sized Card
      </div> */}
      
    </div>
  );
}

export default App;
