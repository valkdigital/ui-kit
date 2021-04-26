/*
 |------------------------------------------------------------------------------
 | Icon component
 |------------------------------------------------------------------------------
 |
 */

/* ========================================================================== *\
  IMPORTS
\* ========================================================================== */
import React from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import IconSet from "../style/iconSet";
import { omit } from "lodash";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    TYPES
\* ========================================================================== */
import type { IconProps as DefaultIconProps } from "react-native-vector-icons/Icon";

enum IconSizes {
  small = IconSet.iconSizes.small,
  medium = IconSet.iconSizes.medium,
  large = IconSet.iconSizes.large,
  xlarge = IconSet.iconSizes.xlarge,
}
/* == TYPES ================================================================= */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface IconProps extends Omit<DefaultIconProps, "size" | "name"> {
  name: typeof IconSet.iconNames[number];
  solid?: boolean;
  size?: IconSizes;
}
/* == INTERFACE ============================================================= */

/* ========================================================================== *\
    METHODS
\* ========================================================================== */
/**
 * getIcomoonConfig
 * @param isSolid
 */
const getIcomoonConfig = (isSolid: boolean) =>
  isSolid
    ? require("../media/icomoon/icomoon_solid.json")
    : require("../media/icomoon/icomoon_outline.json");

/**
 * getIcomoonType
 * @param isSolid
 */
const getIcomoonType = (isSolid: boolean) =>
  isSolid ? IconSet.iconTypes.solid : IconSet.iconTypes.outline;

/**
 * Icon
 * @param props properties
 */
const Icon: React.FC<IconProps> = (props) => {
  const { size = IconSizes.medium, solid = false } = props;

  const passIconProps = omit(props, "solid", "size");

  const VectorIcon = createIconSetFromIcoMoon(
    getIcomoonConfig(solid),
    getIcomoonType(solid)
  );

  return <VectorIcon size={size} {...passIconProps} />;
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Icon;
export { IconSizes };
/* == EXPORTS =============================================================== */
