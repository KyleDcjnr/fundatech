import {FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope} from 'react-icons/fa'
import Styles from '../styles/adbanner.module.scss'

const AdBanner = () => {
    return(
        <section className={Styles.bannerContainer}>
            <div className={Styles.contacts}>
                <a href="tel:+234 807 265 8726"><span><FaPhone /></span></a>
                <a href="tel:+234 803 472 0852"><span><FaPhone /></span></a>
                {/* <p><span><FaPhone /></span>+234 807 265 8726</p>
                <p><span><FaPhone /></span>+234 803 472 0852</p> */}
                <a href="mailto:Fundapaints@yahoo.com"><span><FaEnvelope /></span></a>
                {/* <a><span><FaEnvelope /></span>Fundapaints@yahoo.com</a> */}
            </div>
            <ul className={Styles.social}>
              <li>
                <a>
                <FaFacebookF />
                </a>
              </li>
              <li>
                <a>
                <FaTwitter />
                </a>
              </li>
              <li>
                <a>
                <FaInstagram />
                </a>
              </li>
            </ul>
        </section>
    )
}


export default AdBanner