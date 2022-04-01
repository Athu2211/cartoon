import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { get3Dcartoons } from "../../redux/actions/cartoons";
import styles from './Cartoon2D.module.css';

function Cartoon3D(props) {
    const dispatch = useDispatch();
    const cartoons = useSelector(state => state.cartoons);

    useEffect(() => {
        dispatch(get3Dcartoons());
    })

    return (
        <Container>
            <Row>
                {cartoons.map(c => (
                    <Col xs={6} md={4} lg={3}>
                        <Card className={styles.card}>
                            <Card.Img className={styles.image} variant="top" src={c.image} />
                            <Card.Body>
                                <Card.Title>{c.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {c.creator}
                                </Card.Subtitle>
                                <Card.Text>{c.genre}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cartoon3D;