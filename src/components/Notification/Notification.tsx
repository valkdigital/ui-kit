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
  Image,
  StyleSheet,
  StyleProp,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewProps,
  ImageSourcePropType,
} from "react-native";
import colors from "../../style/colors";
import ThemeContext from "../../style/ThemeContext";
import shadow from "../../style/shadow";
import hitSlop from "../../style/hitSlop";
import Spacing from "../../style/spacing";
import Text from "../Text";
import { isEmpty, omit } from "lodash";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    TYPES
\* ========================================================================== */
enum NotificationType {
  default = "default",
  warning = "warning",
  negative = "negative",
  positive = "positive",
}

enum NotificationTooltip {
  above = "above",
  below = "below",
}
/* == TYPES ================================================================= */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface NotificationProps extends ViewProps {
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  content?: string;
  cueArrow?: StyleProp<ViewStyle>;
  hasCta?: boolean;
  hasIcon?: boolean;
  heading?: string;
  icon?: ImageSourcePropType;
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
    icon = require("../../media/iconInfo.png"),
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
      "tooltipPosition",
      "type"
    ),
    themeColors = useContext(ThemeContext),
    colorsByType: { [key in NotificationType]: any } = {
      [NotificationType.default]: {
        bg: themeColors.info.light,
        border: themeColors.info.primary,
        contentText: themeColors.info.dark,
        ctaText: colors.white,
        ctaBg: themeColors.info.primary,
      },
      [NotificationType.warning]: {
        bg: themeColors.warning.midLight,
        border: themeColors.warning.primary,
        contentText: colors.grey8,
        ctaText: colors.grey8,
        ctaBg: themeColors.warning.primary,
      },
      [NotificationType.negative]: {
        bg: themeColors.error.light,
        border: themeColors.error.primary,
        contentText: themeColors.error.dark,
        ctaText: colors.white,
        ctaBg: themeColors.error.primary,
      },
      [NotificationType.positive]: {
        bg: themeColors.success.light,
        border: themeColors.success.primary,
        contentText: themeColors.success.dark,
        ctaText: colors.white,
        ctaBg: themeColors.success.primary,
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
      right: Spacing.sp2,
      bottom: -10,
      borderTopWidth: 10,
      borderTopColor: colorsByType[type].bg,
    },
    [NotificationTooltip.below]: {
      left: Spacing.sp2,
      top: -10,
      borderBottomWidth: 10,
      borderBottomColor: colorsByType[type].bg,
    },
  };

  return (
    <View
      style={[
        styles.notificationStyle,
        bannerStyle,
        {
          backgroundColor: colorsByType[type].bg,
          borderColor: colorsByType[type].border,
        },
      ]}
      {...passNotificationProps}
    >
      {isTooltip && (
        <View style={[styles.arrowStyle, arrowPostionStyle[tooltipPosition]]} />
      )}

      <View style={[styles.wrapperIconStyle, containerStyle]}>
        {hasIcon && (
          <View style={[styles.iconHolder]}>
            <Image
              source={icon}
              style={[
                styles.iconStyle,
                { tintColor: colorsByType[type].contentText },
              ]}
            />
          </View>
        )}

        <View style={[styles.wrapperContentStyle]}>
          <View style={styles.contentStyle}>
            {!isEmpty(heading) && (
              <Text
                style={[{ color: colorsByType[type].contentText }]}
                type="subtextSemiBold"
              >
                {heading}
              </Text>
            )}

            {!isEmpty(content) && (
              <Text
                style={[{ color: colorsByType[type].contentText }]}
                type="subtextRegular"
              >
                {content}
              </Text>
            )}

            {children}
          </View>

          {isCloseable && (
            <TouchableOpacity onPress={onPressClose} hitSlop={hitSlop}>
              <Image
                source={require("../../media/close.png")}
                style={[
                  styles.closeStyle,
                  { tintColor: colorsByType[type].contentText },
                ]}
              />
            </TouchableOpacity>
          )}

          {hasCta && (
            <TouchableOpacity
              style={[
                styles.ctaStyle,
                { backgroundColor: colorsByType[type].ctaBg },
              ]}
              onPress={onPressCta}
            >
              <Image
                source={require("../../media/arrow_right.png")}
                style={[
                  styles.ctaImgStyle,
                  { tintColor: colorsByType[type].ctaText },
                ]}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
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
    margin: Spacing.sp1,
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
  ctaImgStyle: {
    height: 14,
    marginLeft: Spacing.sp1,
    marginRight: Spacing.sp1,
    resizeMode: "contain",
    width: 14,
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
  iconStyle: {
    flex: 1,
    height: undefined,
    resizeMode: "contain",
    width: undefined,
  },
  closeStyle: {
    height: 12,
    marginLeft: Spacing.sp1,
    marginTop: 2,
    marginRight: Spacing.sp1,
    width: 12,
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
