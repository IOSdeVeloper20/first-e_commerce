import React from "react";
import { Button, Card } from "react-bootstrap";

function CardComponent({
  data
}) {
  // Function to truncate title to first 4 words
  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ");
    }
    return title;
  };

  return (
    <Card
      data-aos="fade-up"
      className="text-center"
      style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={data.image}
        className="mt-4"
        style={{ objectFit: "contain", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{truncateTitle(data.title)}</Card.Title>
        <Card.Text>{truncateTitle(data.description)}</Card.Text>
        <Card.Subtitle>${data.price}</Card.Subtitle>
        <Button className="mt-2" variant="primary">
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
