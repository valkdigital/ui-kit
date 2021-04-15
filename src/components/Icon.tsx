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
import type { IconProps } from "react-native-vector-icons/Icon";

import IconSet from "../style/iconSet";

import { omit } from "lodash";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface CustomIconProps extends IconProps {
  solid?: boolean;
}

/* ========================================================================== *\
    METHODS
\* ========================================================================== */
/**
 * getIcomoonConfig
 * @param isSolid
 */
const getIcomoonConfig = (isSolid: boolean) => {
  return isSolid
    ? require("../media/icomoon/icomoon_solid.json")
    : require("../media/icomoon/icomoon_outline.json");
};

/**
 * getIcomoonType
 * @param isSolid
 */
const getIcomoonType = (isSolid: boolean) => {
  return isSolid ? IconSet.iconTypes.solid : IconSet.iconTypes.outline;
};

/**
 * Icon
 * @param props properties
 */
const Icon: React.FC<CustomIconProps> = (props) => {
  const { size = IconSet.iconSizes.medium, solid = false } = props;

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
/* == EXPORTS =============================================================== */
