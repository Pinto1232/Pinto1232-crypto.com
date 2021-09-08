import React from 'react'
import './Style/footer.scss'

const FooterComp = () => {
    return (
        <>
        <section className="contact-area" id="contact">
        <div className="containers">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="contact-content text-center">

                        <div className="contact-social">
                            <ul>
                                <li><a className="hover-target" href=""><i className="fab fa-facebook-f"></i></a></li>
                                <li><a className="hover-target" href=""><i className="fab fa-linkedin-in"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  
    <footer>
        <p>Copyright &copy; 2021 Pinto - Manuel <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="logo"/> All Rights Reserved.</p>
    </footer>
        </>
    )
}

export default FooterComp;
