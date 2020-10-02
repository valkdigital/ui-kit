import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

const DismissKeyboard: React.FC = ({ children }) => {
  if (Platform.OS === "web") return <>{children}</>;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
