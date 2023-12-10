import { useRouter } from "expo-router";
import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const MusicRoute = () => <Text>Music</Text>;

const ImagesRoute = () => <Text>Images</Text>;

const BoardsRoute = () => <Text>Boards</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNav = () => {
  const navigation = useRouter();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "images", title: "Images", focusedIcon: "image" },
    { key: "boards", title: "Boards", focusedIcon: "history" },
    {
      key: "boards/new",
      title: "New Board",
      focusedIcon: "plus",
      unfocusedIcon: "plus-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    images: ImagesRoute,
    boards: BoardsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      onTabPress={(e) => {
        console.log("onTabPress", e);
        navigation.push(`/${e.route.key}`);
      }}
    />
  );
};

export default BottomNav;
