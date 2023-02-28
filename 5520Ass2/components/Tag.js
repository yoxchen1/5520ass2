import { View, Text } from "react-native";
import React from "react";
import CommonStyles from "../styles/CommonStyles";

/**
 * This is the tag component that will be used
 * @param content the data from the call
 */ 

const Tag = ({ content, customizedStyle }) => {
  return (
    <>
      <Text
        style={[CommonStyles.fontWhite, { fontWeight: "bold"}, customizedStyle]}
      >
        {content}
      </Text>
    </>
  );
};

export default Tag;