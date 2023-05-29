import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className = "footer py-5 bg-dark">
        <div className = "container">
            <div className = "footer-content text-white grid">
                <div className = "footer-item text-center">
                    <h6 className = "fs-17 fw-6">Links</h6>
                    <ul>
                        <li><Link to="/" className = "fs-15">About Us</Link></li>
                        <li><Link to="/" className = "fs-15">Contact Us</Link></li>
                        <li><Link to="/" className = "fs-15">Blog</Link></li>
                        <li><Link to="/" className = "fs-15">FAQ's</Link></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Policies</h6>
                    <ul>
                        <li><Link to="/" className = "fs-15">Terms & Conditions</Link></li>
                        <li><Link to="/" className = "fs-15">Cookies Policy</Link></li>
                        <li><Link to="/" className = "fs-15">Data Policy</Link></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>About Shopping Hub</h6>
                    <ul>
                        <li><Link to="/" className = "fs-15">Company Info</Link></li>
                        <li><Link to="/" className = "fs-15">Branches</Link></li>
                        <li><Link to="/" className = "fs-15">Store</Link></li>
                    </ul>
                </div>

                <div className = "footer-item text-center">
                    <h6 className='fs-17 fw-6'>Contact</h6>
                    <ul>
                        <li>
                            <span><i className = "fas fa-phone"></i></span>
                            <span className = "fs-15">+678 004 5754</span>
                        </li>
                        <li>
                            <span><i className = "fas fa-envelope"></i></span>
                            <span className = "fs-15">info@shophub.com</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer