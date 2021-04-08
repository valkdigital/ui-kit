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

import { omit } from "lodash";
/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface CustomIconProps extends IconProps {
  solid?: boolean;
  outline?: boolean;
}

/* ========================================================================== *\
    METHODS
\* ========================================================================== */
const getIcomoonConfig = (isSolid: boolean, isOutline: boolean) => {
  if (isSolid) {
    return require("../media/icomoon/icomoon_solid.json");
  }
  if (isOutline) {
    return require("../media/icomoon/icomoon_outline.json");
  }

  return require("../media/icomoon/icomoon.json");
};

/**
 * Icon
 * @param props properties
 */
const Icon: React.FC<CustomIconProps> = (props) => {
  const { solid = false, outline = false } = props;

  const passIconProps = omit(props, "solid", "outline");

  const VectorIcon = createIconSetFromIcoMoon(
    getIcomoonConfig(solid, outline),
    "icomoon"
  );

  return <VectorIcon {...passIconProps} />;
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Icon;
/* == EXPORTS =============================================================== */
