import {
  Container,
  CardDeck,
  Card,
  Button,
  Badge,
  Row,
  Col,
} from "react-bootstrap";
import { Rating } from "./Rating.js";
import { CardData } from "./CardData.js";

export function CardComp({ item, setItem }) {
  const Add = (data) => {
    const items = [...item];
    items.push(data);
    setItem(items);
  };
  return (
    <div className="main">
      <Container>
        <Row>
          <CardDeck>
            {CardData.map((data, index) => {
              const { title, ratings, striked, price, sale, options } = data;

              return (
                <Col xs={12} md={6} lg={3} key={index}>
                  <Card className="cards">
                    <Badge
                      className="saleBdg"
                      variant="dark"
                      style={{
                        padding: "0.35em 0.65em",
                        display: sale === true ? "block" : "none",
                      }}
                    >
                      Sale
                    </Badge>

                    <Card.Img
                      variant="top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    />

                    <Card.Body className="cardBody">
                      <h5>{title}</h5>
                      <Rating ratings={ratings} />
                      <p>
                        <span className="striked">{striked}</span>
                        {price}
                      </p>
                    </Card.Body>

                    <div>
                      {options === true ? (
                        <Button variant="outline-dark">View Options</Button>
                      ) : (
                        <Button
                          variant="outline-dark"
                          onClick={() => Add(data)}
                        >
                          Add to cart
                        </Button>
                      )}
                    </div>
                  </Card>
                </Col>
              );
            })}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}
