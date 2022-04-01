import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Cartoon2D.module.css';

function Cartoon3D(props) {
    const cartoons = useSelector(state => state.cartoons);

    return (
        <Container>
            <Row>
                {cartoons.map(c => (
                    <Col xs={6} md={4} lg={3}>
                        {/* <Link to={`/goodcartoons/${c.id}`} style={{ cursor: 'pointer', textDecoration: 'none' }} onClick={handleShowModal}> */}
                        <Card className={styles.outer}>
                            <Card.Img className={styles.image} variant="top" src={c.image} />
                            <Card.Body>
                                <Card.Title>{c.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {c.creator}
                                </Card.Subtitle>
                                <Card.Text>{c.genre}</Card.Text>
                            </Card.Body>
                        </Card>
                        {/* </Link> */}
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cartoon3D;