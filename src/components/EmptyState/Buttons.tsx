import React from "react";
import { View, StyleSheet } from "react-native";
import Button, { ButtonProps } from "../Button/Button";
import Spacing from "../../style/spacing";

interface ButtonsProps {
  buttons: ButtonProps[];
}

const Buttons: React.FC<ButtonsProps> = ({ buttons }) => {
  const disabled = buttons.find((button) => button.loading) !== undefined;

  return (
    <View>
      {buttons.map((props, index) => {
        const isFirstButton = index === 0;
        const isLastButton = index !== buttons.length - 1;

        return (
          <Button
            key={index}
            size="medium"
            type={isFirstButton ? "default" : "ghost"}
            containerStyle={isLastButton && styles.button}
            disabled={disabled}
            {...props}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: Spacing.sp2,
  },
});

export default Buttons;
