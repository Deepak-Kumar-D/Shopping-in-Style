import { Card, Button, Row, Col } from "react-bootstrap";

export function CartPanel({ show, setShow, item }) {
  return (
    <Card>
      <div className="cartPanel" style={{ display: show }}>
        <div className="checkout">
          <div>
            <h2 style={{ marginBottom: "0" }}>Cart</h2>
            <Button
              className="closebtn"
              variant="outline-dark"
              size="sm"
              onClick={() => setShow("none")}
            >
              X
            </Button>
          </div>
          <hr style={{ width: "100%" }} />

          <div style={{ width: "100%" }}>
            {item.map((cartItems, index) => {
              return (
                <>
                  <Row key={index}>
                    <Col className="cartRow">
                      <h6>{cartItems.title}</h6>
                    </Col>
                    <Col className="cartRow">
                      <p>{cartItems.price}</p>
                    </Col>
                    <Col className="cartRow">
                      <Button variant="outline-danger" block>
                        X
                      </Button>
                    </Col>
                  </Row>
                  <hr />
                </>
              );
            })}
          </div>
          <hr />
          <div style={{ width: "100%" }}>
            <Button variant="outline-info" block>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
