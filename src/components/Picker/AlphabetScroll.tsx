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

interface AlphabetScrollProps {
  onLetterChange: (letter: string) => void;
}

const AlphabetScroll: React.FC<AlphabetScrollProps> = ({ onLetterChange }) => {
  const [height, setHeight] = useState<number>(0);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (event) => {
          getTouchedLetter(event.nativeEvent.locationY);
        },
        onPanResponderMove: (event) => {
          getTouchedLetter(event.nativeEvent.locationY);
        },
      }),
    [height]
  );

  const getTouchedLetter = (y: number) => {
    let index = Math.floor((y / height) * ALPHABET.length);
    if (index > ALPHABET.length || index < 0) return;
    onLetterChange(ALPHABET[index]);
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeight(height);
  };

  return (
    <View style={styles.container}>
      <View {...panResponder.panHandlers} onLayout={onLayout}>
        {ALPHABET.map((letter) => (
          <View pointerEvents="none" key={letter}>
            <Text
              type="subtextRegular"
              color={colors.brandBluePrimary}
              textAlign="center"
            >
              {letter}
            </Text>
          </View>
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
  },
});

export default AlphabetScroll;
