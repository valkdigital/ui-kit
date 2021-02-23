/*
 |------------------------------------------------------------------------------
 | Notification component
 |------------------------------------------------------------------------------
 |
 | Description
 |
 | ---------------------------------------------------------------------------
 |
 |
 |
 */
/* ========================================================================== *\
  IMPORTS
\* ========================================================================== */
import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewProps,
} from "react-native";
import colors from "../../style/colors";
import ThemeContext from "../../style/ThemeContext";
import shadow from "../../style/shadow";
import Spacing from "../../style/spacing";
import Text from "../Text";
import { isEmpty, omit } from "lodash";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    TYPES
\* ========================================================================== */
enum NotificationTypes {
  default = "default",
  informative = "informative",
  negative = "negative",
  positive = "positive",
}

enum NotificationArrowPosition {
  bottom = "bottom",
  top = "top",
}
/* == TYPES ================================================================= */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface NotificationProps extends ViewProps {
  arrowEnabled?: boolean;
  arrowPosition?: keyof typeof NotificationArrowPosition;
  closeable?: boolean;
  contentStyle: StyleProp<ViewStyle>;
  content?: string;
  cueArrow?: StyleProp<ViewStyle>;
  heading?: string;
  type?: keyof typeof NotificationTypes;
  textStyle: StyleProp<TextStyle>;
}
/* == INTERFACE ============================================================= */

/* ========================================================================== *\
    METHODS
\* ========================================================================== */
/**
 * Notification
 * @param props properties
 */
const Notification: React.FC<NotificationProps> = (props) => {
  const {
    arrowEnabled,
    arrowPosition = NotificationArrowPosition.top,
    children,
    heading,
    content,
    closeable,
    type = NotificationTypes.default,
  } = props;

  const passNotificationProps = omit(props, "type");
  const themeColors = useContext(ThemeContext);
  const contentStyleByType: { [key in NotificationTypes]: ViewStyle } = {
    [NotificationTypes.default]: { borderColor: themeColors.info.midDark },
    [NotificationTypes.informative]: {
      borderColor: themeColors.warning.midDark,
    },
    [NotificationTypes.negative]: { borderColor: themeColors.error.midDark },
    [NotificationTypes.positive]: { borderColor: themeColors.success.midDark },
  };

  const textColorByType: { [key in NotificationTypes]: string } = {
    [NotificationTypes.default]: themeColors.info.dark,
    [NotificationTypes.informative]: colors.grey8,
    [NotificationTypes.negative]: themeColors.error.dark,
    [NotificationTypes.positive]: themeColors.success.dark,
  };

  const backgroundColorByType: { [key in NotificationTypes]: string } = {
    [NotificationTypes.default]: themeColors.info.light,
    [NotificationTypes.informative]: themeColors.warning.midLight,
    [NotificationTypes.negative]: themeColors.error.light,
    [NotificationTypes.positive]: themeColors.success.light,
  };

  const arrowPostionStyle: { [key in NotificationArrowPosition]: ViewStyle } = {
    [NotificationArrowPosition.top]: {
      left: 16,
      top: -18,
      borderBottomWidth: 18,
      borderBottomColor: backgroundColorByType[type],
    },
    [NotificationArrowPosition.bottom]: {
      right: 16,
      bottom: -18,
      borderTopWidth: 18,
      borderTopColor: backgroundColorByType[type],
    },
  };

  return (
    <View
      style={[
        styles.notification,
        contentStyleByType[type],
        { backgroundColor: backgroundColorByType[type] },
      ]}
      {...passNotificationProps}
    >
      {arrowEnabled && (
        <View style={[styles.arrow, arrowPostionStyle[arrowPosition]]} />
      )}
      <View style={[styles.wrapper]}>
        <View style={styles.content}>
          {!isEmpty(heading) && (
            <Text
              style={[{ color: textColorByType[type] }]}
              type="subtextSemiBold"
            >
              {heading}
            </Text>
          )}
          {!isEmpty(content) && (
            <Text
              style={[{ color: textColorByType[type] }]}
              type="subtextRegular"
            >
              {content}
            </Text>
          )}
        </View>

        {closeable && (
          <TouchableOpacity>
            <Image
              source={require("../../media/close.png")}
              style={[styles.closeImg, { tintColor: textColorByType[type] }]}
            />
          </TouchableOpacity>
        )}

        {children}
      </View>
    </View>
  );
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  STYLES
\* ========================================================================== */
const styles = StyleSheet.create({
  notification: {
    borderRadius: 4,
    borderWidth: 0,
    borderLeftWidth: 4,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    margin: 8,
    paddingBottom: Spacing.sp2,
    paddingLeft: Spacing.sp2,
    paddingRight: Spacing.sp1,
    paddingTop: Spacing.sp2,
    ...shadow({ x: 0, y: 4, blurRadius: 14, opacity: 0.24 }),
  },
  content: {
    flexShrink: 1,
  },
  arrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderLeftWidth: 12,
    borderLeftColor: "transparent",
    borderRightWidth: 12,
    borderRightColor: "transparent",
  },
  closeImg: {
    display: "flex",
    width: 12,
    height: 12,
    marginLeft: 12,
    marginTop: 2,
    marginRight: Spacing.sp1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
/* == STYLES ================================================================ */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Notification;
/* == EXPORTS =============================================================== */
