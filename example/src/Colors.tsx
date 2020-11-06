import { ThemeContext, Text } from "@valkdigital/ui-kit";
import React, { useContext } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface Color {
  label: string;
  code: string;
  labelColor?: string;
  labelPosition?: ViewStyle["alignItems"];
}

const Color: React.FC<Color> = ({
  label,
  code,
  labelColor,
  labelPosition = "center",
}) => (
  <View style={[styles.color, { backgroundColor: code }]} key={code}>
    <View style={[styles.labelContainer, { alignItems: labelPosition }]}>
      <Text style={styles.label} color={labelColor}>
        {label}
      </Text>
      <Text style={styles.label} color={labelColor}>
        {label}
      </Text>
    </View>
  </View>
);

const Colors: React.FC = () => {
  const theme = useContext(ThemeContext);
  const topics = ["success", "error", "info", "cta", "warning"];
  return (
    <View
      style={{ backgroundColor: theme.background, flex: 1, paddingLeft: 32 }}
    >
      {topics.map((topic) => {
        //   @ts-ignore
        const labels: string[] = Object.keys(theme[topic]);
        //   @ts-ignore
        const colors: string[] = Object.values(theme[topic]);
        return (
          <View key={topic}>
            <Text type="h2" style={styles.topic}>
              {topic}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={styles.colorsContainer}>
                <Color
                  label={`${topic} ${labels[0]}`}
                  code={colors[0]}
                  labelPosition="flex-end"
                />
              </View>
              <View style={styles.colorsContainer}>
                {colors.slice(1).map((color, i) => (
                  <Color code={color} label={labels[i + 1]} key={color} />
                ))}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  colorsContainer: {
    width: 280,
    backgroundColor: "green",
    marginRight: 32,
  },
  topic: {
    marginBottom: 8,
  },
  color: {
    flex: 1,
    alignSelf: "stretch",
    minHeight: 50,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },

  labelContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },

  label: {
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
});

export default Colors;
