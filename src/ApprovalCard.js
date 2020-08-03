import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default function ApprovalCard(props) {
  console.log(props);
  return (
    <div>
      <Card>
        <Card.Content>
          {" "}
          {props.children}
          <Image floated="right" size="mini" src="" />
          <Card.Header></Card.Header>
          <Card.Meta></Card.Meta>
          <Card.Description>
            <strong>best friends</strong>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="black">
              Approve
            </Button>
            <Button basic color="red">
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}
