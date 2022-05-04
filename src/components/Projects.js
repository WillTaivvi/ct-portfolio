// Import Assets
import ctlogo from '../assets/ctlogo.png';
import cryptotitle from '../assets/cryptotitle.png';
import forttest from '../assets/fort-test.png';
import hhter from '../assets/hhter.png';
import hht from '../assets/hht.png';
import studre from '../assets/studre.png';
import Encwall from '../assets/jetseed.png';
import Wallson from '../assets/jetson.png';
import truffle from '../assets/truffle.png';
import framer from '../assets/framer.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

            <div className="projects__card">
                    <h3>Encrypted EthersJs Wallet</h3>
                    <img src={Encwall} alt="ethers encrypted" />
                    <img src={Wallson} alt="ethers json" />
                    <p>Start of an EthersJs encrypted wallet.
                    </p>

                    <a href="https://github.com/WillTaivvi/buffalo/blob/main/jetson.js" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Fortmatic Wallet</h3>
                    <img src={forttest} alt="CryptoTitle Logo" />
                    <p>Basic Fortmatic wallet example using codepen.
                    </p>

                    <a href="https://codepen.io/willtaivvi/pen/KKZvJKb" target="_blank" className="button">Site</a>
                    <a href="https://github.com/WillTaivvi/wallette" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Solidity Basic Wallet</h3>
                    <img src={studre} alt="Solidity wallet remix" />
                    <p>Will add this Solidity wallet to Hardhat ethers.js project,
                        and make frontend. Made and tested with both Visual Code 
                        Studio and Remix IDE. This wallet also needs encryption.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Hardhat React App</h3>
                    <img src={hhter} alt="hardhat ethers react" />
                    <img src={hht} alt="hardhat ethers react" />
                    <p>Wallet and token contracts. Working on modifying frontend
                        specifically, the bootstrap CSS. Planning new project.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Truffle Ganache</h3>
                    <img src={truffle} alt="Truffle Ganache VS code" />
                    <p>I have copied, configured and deployed more
                        than a few Truffle projects on Ganache
                        for testing.
                    </p>
                </div>

                <div className="projects__card">
                    <h3>Crypto Title</h3>
                    <img src={cryptotitle} alt="CryptoTitle Landing Page" />
                    <p>This site is a personal project for testing and expansion.
                    </p>

                    <a href="https://www.cryptotitle.io" target="_blank" className="button">Site</a>
                
                </div>

                <div className="projects__card">
                    <h3>Framer Wallet </h3>
                    <img src={framer} alt="Framer cryptotitle wallet" />
                    <p>Using Framer to start a wallet frontend. ~ two hours work so far.
                    </p>

                    <a href="https://framer.com/projects/CryptoTitleWallet--odUe7rlkKJaxOkEB61Mm-dEVww?node=Hkzwg6b6q-page" target="_blank" className="button">Site</a>
                    </div>
   
            </div>
        </section>
    );
}

export default Projects;