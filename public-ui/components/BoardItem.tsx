import React from "react";
import { Button, Card, Paragraph } from "react-native-paper";

interface BoardItemProps {
  id: string;
  name: string;
  user_id: string;
  onClick: () => void;
}

function BoardItem(props: BoardItemProps) {
  return (
    <Card style={styles.card}>
      <Card.Title title={props.name} />
      <Card.Content>
        <Paragraph>{props.name}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
      <Card.Actions>
        <Button onPress={props.onClick}>Select</Button>
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

export default BoardItem;
