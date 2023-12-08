import React from "react";
import { Link } from "expo-router";
import { Button, Card, Paragraph } from "react-native-paper";

interface BoardItemProps {
  id: string;
  name: string;
  user_id: string;
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
        <Link
          href={{
            pathname: `/boards/[id]`,
            params: { id: props.id },
          }}
        >
          View board
        </Link>
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
