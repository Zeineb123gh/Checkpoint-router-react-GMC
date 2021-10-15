import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

import { useHistory } from "react-router-dom";

function Descriptiob({ history, movie }) {
  const myid = useParams();
  console.log("myid", myid);
  const item = movie.find((el) => el.id == myid.myid);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "560px" }}>
        <iframe
          width="560"
          height="315"
          src={item.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Rating:{item.rating} /5 </Card.Text>
        </Card.Body>

        <Button onClick={() => history.goBack()} variant="primary">
          Back
        </Button>
      </Card>
    </div>
  );
}

export default Descriptiob;
