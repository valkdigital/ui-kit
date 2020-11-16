import { ThemeContext, Text, Spacing } from "@valkdigital/ui-kit";
import React, { useContext } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface Color {
  label: string;
  code: string;
  labelPosition?: ViewStyle["alignItems"];
}

const Color: React.FC<Color> = ({ label, code, labelPosition = "center" }) => (
  <View style={[styles.color, { backgroundColor: code }]} key={code}>
    <View style={[styles.labelContainer, { alignItems: labelPosition }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.label}>{code}</Text>
    </View>
  </View>
);

const Colors: React.FC = () => {
  const theme = useContext(ThemeContext);

  const getColors = (theme: Object) => {
    const groupedColors: {
      label: string;
      colors: { label: string; code: string }[];
    }[] = [];

    const generalColors: { code: string; label: string }[] = [];
    const entries = Object.entries(theme);

    entries.forEach((entry) => {
      const label = entry[0];
      if (typeof entry[1] === "object") {
        // @ts-ignore
        const colorGroup = Object.keys(theme[label]).map((k) => {
          // @ts-ignore
          const color: string = theme[label][k];
          return {
            label: k,
            code: color,
          };
        });
        groupedColors.push({ label, colors: colorGroup });
        return;
      }
      generalColors.push({ label, code: entry[1] });
    });

    return { groupedColors, generalColors };
  };

  const { groupedColors, generalColors } = getColors(theme);
  return (
    <View
      style={{ backgroundColor: theme.background, flex: 1, paddingLeft: 32 }}
    >
      {groupedColors.map(({ label, colors }) => (
        <View key={label}>
          <Text type="h2" style={styles.topic}>
            {label}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.colorsContainer}>
              <Color
                label={colors[0].label}
                code={colors[0].code}
                labelPosition="flex-end"
              />
            </View>
            {colors.length > 1 && (
              <View style={styles.colorsContainer}>
                {colors.slice(1).map(({ code, label }) => (
                  <Color code={code} label={label} key={`${label} ${code}`} />
                ))}
              </View>
            )}
          </View>
        </View>
      ))}

      <Text type="h2" style={styles.topic}>
        others
      </Text>
      {generalColors.map((c) => (
        <View style={[styles.colorsContainer, { height: 100 }]}>
          <Color {...c} key={c.label} labelPosition="flex-end" />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  colorsContainer: {
    width: 280,
    marginRight: Spacing.sp4,
  },
  topic: {
    marginTop: Spacing.sp2,
    marginBottom: 8,
  },
  color: {
    flex: 1,
    alignSelf: "stretch",
    minHeight: 50,
    paddingBottom: Spacing.sp1,
    paddingHorizontal: Spacing.sp2,
  },

  labelContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },

  label: {
    color: "black",
    backgroundColor: "rgba(255,255,255,0.4)",
  },
});

export default Colors;
