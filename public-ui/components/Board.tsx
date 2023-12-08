import React from "react";
import { Button, Card, Paragraph } from "react-native-paper";

interface BoardProps {
  id: string;
  name: string;
  user_id: string;
}
function Board(props: BoardProps) {
  return (
    <Card style={styles.card}>
      <Card.Title title={props.name} />
      <Card.Content>
        <Paragraph>{props.name}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = {
  card: {
    marginTop: 10,
    marginBottom: 50,
  },
};

export default Board;
