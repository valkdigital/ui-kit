/*
 |------------------------------------------------------------------------------
 | Icon component
 |------------------------------------------------------------------------------
 |
 */

/* ========================================================================== *\
  IMPORTS
\* ========================================================================== */
import React, { useContext } from "react";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import IconSet from "../style/iconSet";
import ThemeContext from "../style/ThemeContext";
import { omit } from "lodash";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
TYPES
\* ========================================================================== */
import type { Fonts } from "../style/typography";
import type { IconProps as DefaultIconProps } from "react-native-vector-icons/Icon";

type IconSizes = keyof typeof IconSet.sizes;
type IconNames = typeof IconSet.names[number];
/* == TYPES ================================================================= */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface IconProps extends Omit<DefaultIconProps, "size" | "name"> {
  name: IconNames;
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
  isSolid ? Fonts.IconSetSolid : Fonts.IconSetOutline;

/**
 * Icon
 * @param props properties
 */
const Icon: React.FC<IconProps> = (props) => {
  const { typography } = useContext(ThemeContext);

  const { size = "medium", solid = false, color = typography.color } = props;

  const passIconProps = omit(props, "solid", "size", "color");

  const VectorIcon = createIconSetFromIcoMoon(
    getIcomoonConfig(solid),
    getIcomoonType(solid)
  );

  return (
    <VectorIcon size={IconSet.sizes[size]} color={color} {...passIconProps} />
  );
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Icon;
export { IconSizes, IconNames };
/* == EXPORTS =============================================================== */
