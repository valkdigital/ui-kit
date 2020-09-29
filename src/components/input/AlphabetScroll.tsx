import React, { useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  PanResponder,
  LayoutChangeEvent,
} from "react-native";
import colors from "../../style/colors";
import Spacing from "../../style/spacing";
import Text from "../Text";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");
const TOP_OFFSET = 140;

interface AlphabetScrollProps {
  onLetterChange: (letter: string) => void;
}

const AlphabetScroll: React.FC<AlphabetScrollProps> = ({ onLetterChange }) => {
  const [height, setHeight] = useState<number>(0);
  const [yOffset, setYOffset] = useState<number>(0);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (_, gestureState) => {
          getTouchedLetter(gestureState.y0);
        },
        onPanResponderMove: (_, gestureState) => {
          getTouchedLetter(gestureState.moveY);
        },
      }),
    [height, yOffset]
  );

  const getTouchedLetter = (y: number) => {
    const scrollY = y - yOffset - TOP_OFFSET;
    let index = Math.floor((scrollY / height) * ALPHABET.length);
    if (index > ALPHABET.length || index < 0) return;
    onLetterChange(ALPHABET[index]);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const { y, height } = event.nativeEvent.layout;
    setYOffset(y);
    setHeight(height);
  };

  return (
    <View style={styles.container}>
      <View {...panResponder.panHandlers} onLayout={onLayout}>
        {ALPHABET.map((letter) => (
          <Text
            key={letter}
            type="subtextRegular"
            color={colors.brandBluePrimary}
            textAlign="center"
          >
            {letter}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: Spacing.sp1,
    top: 0,
    bottom: 0,
    paddingHorizontal: Spacing.sp1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AlphabetScroll;
