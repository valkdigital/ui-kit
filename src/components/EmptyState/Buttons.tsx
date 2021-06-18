import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Button from "../Button/Button";
import Spacing from "../../style/spacing";

export type EmptyStateButton = {
  label: string;
  onPress: () => void;
  loading?: boolean;
};

interface ButtonsProps {
  buttons: EmptyStateButton[];
}

const Buttons: React.FC<ButtonsProps> = ({ buttons }) => {
  const disabled = buttons.find((button) => button.loading) !== undefined;

  return (
    <View>
      {buttons.map((button, index) => {
        const { label, onPress, loading } = button;
        const isFirstButton = index === 0;
        const isLastButton = index !== buttons.length - 1;

        return (
          <Button
            key={index}
            label={label}
            onPress={onPress}
            size="medium"
            type={isFirstButton ? "default" : "ghost"}
            containerStyle={isLastButton && styles.button}
            loading={loading}
            disabled={disabled}
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
