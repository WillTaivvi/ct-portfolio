// Import Assets
import profile from '../assets/profile-new.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="PsiPhi1337" />

            <div className='header__content'>
                <h1>Hi, I'm Will</h1>
                <p>Portfolio page built using React.js
                    
                </p>
                <a href="mailto:paulimathison@proton.me" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;