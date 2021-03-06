import React from "react";
import tata from '../../assets/img/tata.jpg';
class Custamer extends React.Component{
    render() {
        return (
            <main id="main">
            <section id="about" className="about">
             <div className="container">

        <div className="section-title">
            <h2>About</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
                <img src={tata} className="img-fluid" alt=""/>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>UI/UX Designer &amp; Web Developer.</h3>
                <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore
                    magna aliqua.
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"/> <strong>Birthday:</strong> 18 fev 1991</li>
                            <li><i className="icofont-rounded-right"/> <strong>Website:</strong> www.example.com</li>
                            <li><i className="icofont-rounded-right"/> <strong>Phone:</strong> +91 9160971031 </li>
                            <li><i className="icofont-rounded-right"/> <strong>City:</strong> City : hyderabade, USA
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"/> <strong>Age:</strong> 30</li>
                            <li><i className="icofont-rounded-right"/> <strong>Degree:</strong> Master</li>
                            <li><i className="icofont-rounded-right"/> <strong>PhEmailone:</strong> email@example.com
                            </li>
                            <li><i className="icofont-rounded-right"/> <strong>Freelance:</strong> Available</li>
                        </ul>
                    </div>
                </div>
                <p>
                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci
                    omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque
                    neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni
                    laudantium dolores.
                </p>
            </div>
         </div>
      </div>
    </section>
    </main>
      );
    }

   }
     export default Custamer;
