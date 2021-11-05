import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
StatusBar.setHidden(true);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  image: {
    width: 200,
    height: 150,
  },
  header: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  headerText: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
  },
  footer: {
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
  },
  button: {
    padding: 5,
  },
  textStyle: {
    fontSize: 20,
    textDecorationLine: "line-through",
  },
});

const App = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const onPress = () => {
    setData([{ value, selected: false }, ...data]);
  };
  const onPressText = (index) => {
    const selectedItem = [...data];
    selectedItem[index].selected = !selectedItem[index].selected;
    setData(selectedItem);
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <TextInput
          style={styles.headerText}
          onChangeText={setValue}
          value={value}
          placeholder="Enter a destination"
        />
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map(({ value, selected }, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onPressText(index)}
            style={styles.button}
          >
            <Text
              style={[
                styles.textStyle,
                { textDecorationLine: selected ? "line-through" : "none" },
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

export default App;

