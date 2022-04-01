import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import styles from "./Cartoons.module.css";

function Cartoons(props) {

    return (
        <div className={styles.bg}>
            <Container>
                <Row xs={2} md={4} lg={6} className={styles.align}>
                    <Col>
                        <Link to="/2d">
                            <Card className={styles.outer}>
                                <Card.Img className={styles.image} variant="top" src="/images/2d.png" />
                                <Card.Body>
                                    <Card.Text>2D Cartoons</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/3d">
                            <Card className={styles.outer}>
                                <Card.Img className={styles.image} variant="top" src="/images/3d.png" />
                                <Card.Body>
                                    <Card.Text>3D Cartoons</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cartoons;