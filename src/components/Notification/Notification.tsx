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
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  ViewProps,
  ImageSourcePropType,
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
enum NotificationColorTypes {
  default = "default",
  informative = "informative",
  negative = "negative",
  positive = "positive",
}

enum NotificationIconTypes {
  default = "default",
  error = "error",
  info = "info",
  success = "success",
  warning = "warning",
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
  contentStyle?: StyleProp<ViewStyle>;
  content?: string;
  cueArrow?: StyleProp<ViewStyle>;
  hasIcon?: boolean;
  heading?: string;
  isBanner?: boolean;
  isCloseable?: boolean;
  iconType?: keyof typeof NotificationIconTypes;
  colorType?: keyof typeof NotificationColorTypes;
  textStyle?: StyleProp<TextStyle>;
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
    content,
    hasIcon,
    heading,
    isBanner,
    isCloseable,
    iconType = NotificationIconTypes.default,
    colorType = NotificationColorTypes.default,
  } = props;

  const passNotificationProps = omit(props, "type");
  const themeColors = useContext(ThemeContext);
  const notificationStyleByType: {
    [key in NotificationColorTypes]: ViewStyle;
  } = {
    [NotificationColorTypes.default]: { borderColor: themeColors.info.midDark },
    [NotificationColorTypes.informative]: {
      borderColor: themeColors.warning.primary,
    },
    [NotificationColorTypes.negative]: {
      borderColor: themeColors.error.midDark,
    },
    [NotificationColorTypes.positive]: {
      borderColor: themeColors.success.midDark,
    },
  };

  const textColorByType: { [key in NotificationColorTypes]: string } = {
    [NotificationColorTypes.default]: themeColors.info.dark,
    [NotificationColorTypes.informative]: colors.grey8,
    [NotificationColorTypes.negative]: themeColors.error.dark,
    [NotificationColorTypes.positive]: themeColors.success.dark,
  };

  const backgroundColorByType: { [key in NotificationColorTypes]: string } = {
    [NotificationColorTypes.default]: themeColors.info.light,
    [NotificationColorTypes.informative]: themeColors.warning.midLight,
    [NotificationColorTypes.negative]: themeColors.error.light,
    [NotificationColorTypes.positive]: themeColors.success.light,
  };

  const iconByType: { [key in NotificationIconTypes]: ImageSourcePropType } = {
    [NotificationIconTypes.default]: require("../../media/iconInfo.png"),
    [NotificationIconTypes.error]: require("../../media/iconError.png"),
    [NotificationIconTypes.info]: require("../../media/iconInfo.png"),
    [NotificationIconTypes.success]: require("../../media/iconSuccess.png"),
    [NotificationIconTypes.warning]: require("../../media/iconWarning.png"),
  };

  /* eslint-disable prettier/prettier */
  //Format on save keeps messing up ;)
  const bannerStyle: ViewStyle = isBanner
    ? {
      borderRadius: 0,
      margin: 0,
    }
    : {
      borderRadius: 4,
      ...shadow({ x: 0, y: 2, blurRadius: 8, opacity: 0.16 }),
    };
  /* eslint-enable prettier/prettier */

  const arrowPostionStyle: { [key in NotificationArrowPosition]: ViewStyle } = {
    [NotificationArrowPosition.top]: {
      left: 16,
      top: -10,
      borderBottomWidth: 10,
      borderBottomColor: backgroundColorByType[colorType],
    },
    [NotificationArrowPosition.bottom]: {
      right: 16,
      bottom: -10,
      borderTopWidth: 10,
      borderTopColor: backgroundColorByType[colorType],
    },
  };

  return (
    <View
      style={[
        styles.notificationStyle,
        notificationStyleByType[colorType],
        bannerStyle,
        { backgroundColor: backgroundColorByType[colorType] },
      ]}
      {...passNotificationProps}
    >
      {arrowEnabled && (
        <View style={[styles.arrowStyle, arrowPostionStyle[arrowPosition]]} />
      )}

      <View style={[styles.wrapperIconStyle]}>
        {hasIcon && (
          <View style={[styles.iconHolder]}>
            <Image
              source={iconByType[iconType]}
              style={[
                styles.iconStyle,
                { tintColor: textColorByType[colorType] },
              ]}
            />
          </View>
        )}

        <View style={[styles.wrapperContentStyle]}>
          <View style={styles.contentStyle}>
            {!isEmpty(heading) && (
              <Text
                style={[{ color: textColorByType[colorType] }]}
                type="subtextSemiBold"
              >
                {heading}
              </Text>
            )}

            {!isEmpty(content) && (
              <Text
                style={[{ color: textColorByType[colorType] }]}
                type="subtextRegular"
              >
                {content}
              </Text>
            )}

            {children}
          </View>

          {isCloseable && (
            <TouchableOpacity>
              <Image
                source={require("../../media/close.png")}
                style={[
                  styles.closeStyle,
                  { tintColor: textColorByType[colorType] },
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
