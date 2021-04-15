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
}

/* ========================================================================== *\
    METHODS
\* ========================================================================== */
const getIcomoonConfig = (isSolid: boolean) => {
  if (isSolid) {
    return require("../media/icomoon/icomoon_solid.json");
  }

  return require("../media/icomoon/icomoon_outline.json");
};

const getIcomoonType = (isSolid: boolean) => {
  if (isSolid) {
    return "icomoon_solid";
  }

  return "icomoon_outline";
};

/**
 * Icon
 * @param props properties
 */
const Icon: React.FC<CustomIconProps> = (props) => {
  const { solid = false } = props;

  const passIconProps = omit(props, "solid");

  const VectorIcon = createIconSetFromIcoMoon(
    getIcomoonConfig(solid),
    getIcomoonType(solid)
  );

  return <VectorIcon {...passIconProps} />;
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Icon;
/* == EXPORTS =============================================================== */
