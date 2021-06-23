import React, { useContext } from "react";
import { View, StyleSheet, Image, ViewProps } from "react-native";
import Spacing from "../../style/spacing";
import ThemeContext from "../../style/ThemeContext";
import Buttons from "./Buttons";
import Text from "../Text";
import { omit } from "lodash";
import type { ButtonProps } from "../Button/Button";

interface EmptyStateProps extends ViewProps {
  heading: string;
  content?: string;
  buttons?: ButtonProps[];
}

const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const { grey } = useContext(ThemeContext);

  const passEmptyStateProps = omit(
    props,
    "heading",
    "content",
    "buttons",
    "children",
    "style"
  );
  const { heading, content, buttons, children, style } = props;

  return (
    <View {...passEmptyStateProps} style={[styles.container, style]}>
      <Image source={require("../../media/toucan.png")} style={styles.toucan} />
      <View style={styles.text}>
        <Text type="bodySemiBold" textAlign="center">
          {heading}
        </Text>
        {content !== undefined && (
          <Text color={grey[4]} textAlign="center">
            {content}
          </Text>
        )}
      </View>

      {!!buttons?.length && <Buttons buttons={buttons} />}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: Spacing.sp6,
  },
  toucan: {
    width: 128,
    height: 34,
    marginBottom: Spacing.sp2,
  },
  text: {
    marginBottom: Spacing.sp2,
  },
});

export default EmptyState;
