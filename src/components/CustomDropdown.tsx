import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import { WIN_WIDTH } from "../utils/constant";
import { Colors } from "../assets/colors";

export interface DropdownItem {
  label: string;
  value: number | string;
}

type Props = {
  data: DropdownItem[];
  placeholder?: string;
  value: string | number | null;
  onSelect: (item: DropdownItem) => void;
};

const CustomDropdown = ({
  data,
  placeholder = "Select item",
  value,
  onSelect,
}: Props) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");

  const selectedItem = data?.find((item) => item.value === value);

  const filteredData = useMemo(() => {
    return data?.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
    <View style={styles.wrapper}>
      {/* 🔘 Dropdown Button */}
      {/* <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setVisible(!visible)}
        activeOpacity={0.7}
      >
        <Text style={styles.text}>
          {selectedItem ? selectedItem.label : placeholder}
        </Text>
      </TouchableOpacity> */}

      {/* 📜 Dropdown List */}
      {visible && (
        <View style={styles.dropdownList}>
          {/* 🔍 Search */}
          <TextInput
            placeholder="Search..."
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
            placeholderTextColor="#999"
          />

          {/* 📃 List */}
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.value.toString()}
            style={styles.list}
            nestedScrollEnabled
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  onSelect(item);
                  setVisible(false);
                  setSearch("");
                }}
              >
                <Text style={styles.itemText}>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  wrapper: {
    width: WIN_WIDTH * 0.85,
    alignSelf: "center",
  },

  dropdownButton: {
    height: 55,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },

  text: {
    fontSize: 16,
    color: Colors.dropDownTextColor || "#333",
  },

  dropdownList: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 5,

    // Shadow (iOS)
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },

    // Elevation (Android)
    elevation: 3,
  },

  searchInput: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingHorizontal: 12,
    fontSize: 14,
  },

  list: {
    maxHeight: 200,
  },

  listItem: {
    paddingVertical: 14,
    paddingHorizontal: 15,
    borderBottomWidth: 0.5,
    borderColor: "#eee",
  },

  itemText: {
    fontSize: 15,
    color: "#333",
  },
});