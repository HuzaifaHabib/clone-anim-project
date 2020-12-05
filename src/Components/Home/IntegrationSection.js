import React from 'react';
import './IntegrationSection.css';
import { Container, Row, Col, Form } from 'reactstrap';



function IntegrationSection() {
    return (
        <div className='integration-section'>
            <div className='container int-container'>
                <Container>
                    <Col xs="6" sm="4" className="col-a">
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#191c3c" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-facebook.png" alt="logo facebook" title="logo facebook" />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#fdfdfd" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-wordpress.png" alt="logo wordpress" title="logo wordpress" />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#fff1bf" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-analytics.png" title="logo analytics" />
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col xs="6" sm="4" className='col-b'>
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#dff7fe" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-databox.png" title="logo facebook" />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#fcdacc" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-sem-rush.png" title="logo wordpress" />
                                </div>
                            </div>
                        </Row>
                    </Col>
                    <Col xs="6" sm="4">
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#d7e3f5" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-adwords-1.png" title="logo facebook" />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#efefef" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-hubspot.png" title="logo wordpress" />
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <div className='platform'>
                                <div class='platform-logo' style={{ backgroundColor: "#ffffff" }}>
                                    <img className="platform-img" src="https://junto.digital/wp-content/uploads/2018/09/logo-ahrefs.png" title="logo wordpress" />
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Container>
                <div className='int-right-sec'>
                    <div class="platforms__content">
                        <span className="platforms-subtitle">CONSTANTLY INNOVATING</span>
                        <h2 className="platforms-title">Our toolbox helps businesses grow.</h2>
                        <div className="platforms__description">
                            <p>We are always looking for ways to provide more value to our clients by experimenting with the most advanced tools in digital marketing.</p>
                        </div>
                        {/* <div className="platforms-buttons">
                            <a className="platform-button-1" href="#junto-start">Let's get started</a>
                            <a className="paltform-button2" href="https://junto.digital/about">How we work</a>
                        </div> */}
                        <div className='btn-container'>
                        <a href='/' className='hero-home-btn home-btn-1'>Let's get started</a>
                        <a href='/' className='hero-home-btn home-btn-2'>How we work <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntegrationSection;
