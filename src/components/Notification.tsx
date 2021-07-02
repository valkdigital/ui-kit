/*
 |------------------------------------------------------------------------------
 | Notification component
 |------------------------------------------------------------------------------
 |
 */

/* ========================================================================== *\
  IMPORTS
\* ========================================================================== */
import React, { useContext } from "react";
import {
  StyleSheet,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewProps,
} from "react-native";
import ThemeContext from "../style/ThemeContext";
import shadow from "../style/shadow";
import hitSlop from "../style/hitSlop";
import Spacing from "../style/spacing";
import Text from "./Text";
import { isEmpty, omit } from "lodash";
import Icon, { IconNames } from "./Icon";
import colors from "../style/colors";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    TYPES
\* ========================================================================== */
enum NotificationType {
  attention = "attention",
  default = "default",
  negative = "negative",
  positive = "positive",
  warning = "warning",
}

enum NotificationTooltip {
  above = "above",
  aboveCentered = "aboveCentered",
  below = "below",
  belowCentered = "belowCentered",
}
/* == TYPES ================================================================= */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface NotificationProps extends Omit<ViewProps, "style"> {
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  content?: string;
  hasCta?: boolean;
  hasIcon?: boolean;
  heading?: string;
  icon?: IconNames;
  isBanner?: boolean;
  isCloseable?: boolean;
  isTooltip?: boolean;
  onPressClose?: () => void;
  onPressCta?: () => void;
  tooltipPosition?: keyof typeof NotificationTooltip;
  type?: keyof typeof NotificationType;
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
    children,
    containerStyle,
    content,
    hasCta,
    hasIcon,
    heading,
    icon = "information",
    isBanner,
    isCloseable,
    isTooltip,
    onPressClose,
    onPressCta,
    tooltipPosition = NotificationTooltip.above,
    type = NotificationType.default,
  } = props;

  const passNotificationProps = omit(
    props,
    "containerStyle",
    "hasCta",
    "hasIcon",
    "heading",
    "icon",
    "isBanner",
    "isCloseable",
    "isTooltip",
    "onPressClose",
    "onPressCta",
    "style",
    "tooltipPosition",
    "type"
  );
  const { info, cta, warning, error, success, typography } =
    useContext(ThemeContext);

  const colorsByType: { [key in NotificationType]: any } = {
    [NotificationType.default]: {
      bg: info.light,
      border: info.primary,
      contentText: info.dark,
      ctaText: typography.inverted,
      ctaBg: info.primary,
    },
    [NotificationType.attention]: {
      bg: cta.light,
      border: cta.primary,
      contentText: cta.midDark,
      ctaText: typography.inverted,
      ctaBg: cta.primary,
    },
    [NotificationType.warning]: {
      bg: warning.midLight,
      border: warning.primary,
      contentText: colors.grey8,
      ctaText: colors.grey8,
      ctaBg: warning.primary,
    },
    [NotificationType.negative]: {
      bg: error.light,
      border: error.primary,
      contentText: error.dark,
      ctaText: typography.inverted,
      ctaBg: error.primary,
    },
    [NotificationType.positive]: {
      bg: success.light,
      border: success.primary,
      contentText: success.dark,
      ctaText: typography.inverted,
      ctaBg: success.primary,
    },
  };

  const bannerStyle: ViewStyle = isBanner
    ? {
        borderRadius: 0,
        margin: 0,
      }
    : {
        borderRadius: 4,
        ...shadow({ x: 0, y: 2, blurRadius: 8, opacity: 0.16 }),
      };

  const arrowPostionStyle: { [key in NotificationTooltip]: ViewStyle } = {
    [NotificationTooltip.above]: {
      bottom: -10,
      borderTopWidth: 10,
      borderTopColor: colorsByType[type].bg,
      right: Spacing.sp2,
    },
    [NotificationTooltip.aboveCentered]: {
      bottom: -10,
      borderTopWidth: 10,
      borderTopColor: colorsByType[type].bg,
      left: "50%",
      marginLeft: -10,
    },
    [NotificationTooltip.below]: {
      borderBottomWidth: 10,
      borderBottomColor: colorsByType[type].bg,
      left: Spacing.sp2,
      top: -10,
    },
    [NotificationTooltip.belowCentered]: {
      borderBottomWidth: 10,
      borderBottomColor: colorsByType[type].bg,
      left: "50%",
      top: -10,
      marginLeft: -10,
    },
  };

  return (
    <TouchableOpacity
      disabled={!hasCta}
      onPress={onPressCta}
      {...passNotificationProps}
      style={[
        styles.notificationStyle,
        bannerStyle,
        {
          backgroundColor: colorsByType[type].bg,
          borderColor: colorsByType[type].border,
        },
        containerStyle,
      ]}
    >
      {isTooltip && (
        <View style={[styles.arrowStyle, arrowPostionStyle[tooltipPosition]]} />
      )}

      <View style={[styles.wrapperIconStyle]}>
        {hasIcon && (
          <View style={[styles.iconHolder]}>
            <Icon
              name={icon}
              style={[{ color: colorsByType[type].contentText }]}
            />
          </View>
        )}

        <View style={styles.wrapperContentStyle}>
          <View style={styles.contentStyle}>
            {!isEmpty(heading) && (
              <Text
                style={[{ color: colorsByType[type].contentText }]}
                type="bodySemiBold"
              >
                {heading}
              </Text>
            )}

            {!isEmpty(content) && (
              <Text
                style={[{ color: colorsByType[type].contentText }]}
                type="bodyRegular"
              >
                {content}
              </Text>
            )}

            {children}
          </View>

          {isCloseable && (
            <TouchableOpacity onPress={onPressClose} hitSlop={hitSlop}>
              <Icon
                name="close"
                style={[
                  styles.iconMargin,
                  { color: colorsByType[type].contentText },
                ]}
              />
            </TouchableOpacity>
          )}

          {hasCta && (
            <View
              style={[
                styles.ctaStyle,
                { backgroundColor: colorsByType[type].ctaBg },
              ]}
            >
              <Icon
                name="chevron-right"
                style={[
                  styles.iconMargin,
                  { color: colorsByType[type].ctaText },
                ]}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  STYLES
\* ========================================================================== */
const styles = StyleSheet.create({
  notificationStyle: {
    borderWidth: 0,
    borderLeftWidth: Spacing["sp1/2"],
    paddingHorizontal: Spacing.sp1,
    paddingVertical: Spacing.sp2,
  },
  contentStyle: {
    flexShrink: 1,
  },
  ctaStyle: {
    alignItems: "center",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: Spacing.sp1,
    marginRight: -Spacing.sp1,
    marginVertical: -Spacing.sp2,
    paddingHorizontal: Spacing.sp1,
    width: Spacing.sp7,
  },
  arrowStyle: {
    borderLeftWidth: Spacing.sp1,
    borderLeftColor: "transparent",
    borderRightWidth: Spacing.sp1,
    borderRightColor: "transparent",
    position: "absolute",
    height: 0,
    width: 0,
  },
  iconWrapperStyle: {
    flexDirection: "row",
  },
  iconHolder: {
    height: Spacing.sp3,
    marginRight: Spacing.sp1,
    width: Spacing.sp3,
  },
  iconMargin: {
    marginLeft: Spacing.sp1,
    marginRight: Spacing.sp1,
  },
  wrapperContentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexShrink: 1,
    width: "100%",
  },
  wrapperIconStyle: {
    flexDirection: "row",
    flexShrink: 1,
  },
});
/* == STYLES ================================================================ */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Notification;
/* == EXPORTS =============================================================== */
