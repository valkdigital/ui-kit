/*
 |------------------------------------------------------------------------------
 | Skeleton view/items
 |------------------------------------------------------------------------------
 |
 */

import Spacing from "../../style/spacing";
import shadow from "../../style/shadow";
import colors from "../../style/colors";
import Card from "../Card";
import React, { useEffect, useState } from "react";
import { View, ViewProps, StyleSheet, Text } from "react-native";

import SkeletonContent from "react-native-skeleton-content-nonexpo";
/* ========================================================================== *\
  IMPORTS
\* ========================================================================== */

/* == IMPORTS =============================================================== */

/* ========================================================================== *\
    TYPES
\* ========================================================================== */
/* == TYPES ================================================================= */

/* ========================================================================== *\
    INTERFACE
\* ========================================================================== */
interface SkeletonProps extends ViewProps {}
/* == INTERFACE ============================================================= */

/* ========================================================================== *\
    METHODS
\* ========================================================================== */
const INTERVAL_REFRESH = 3000;
const skeletonBlock0 = [
  {
    width: "100%",
    height: 90,
    borderRadius: 10,
  },
];

const skeletonBlock1 = [
  {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  {
    flexDirection: "column",
    marginRight: 10,
    children: [
      {
        width: "100%",
        height: "50%",
        marginBottom: 10,
      },
      {
        width: "50%",
        height: "20%",
        marginBottom: 10,
      },
      {
        width: 100,
        height: 20,
      },
    ],
  },
];
const skeletonBlock2 = [
  {
    width: 240,
    height: "20%",
    marginBottom: 20,
  },
  {
    width: "100%",
    height: 60,
  },
];
const skeletonBlock3 = [
  {
    width: 220,
    height: 50,
    marginBottom: 8,
  },
];

const Skeleton: React.FC<SkeletonProps> = () => {
  const [isLoading, setIsLoading] = useState(true);

  // only for example purposes
  useEffect(() => {
    if (!isLoading) {
      const timeoutId = setTimeout(() => setIsLoading(true), INTERVAL_REFRESH);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => setIsLoading(false), INTERVAL_REFRESH);
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <View style={[styles.container]}>
      <SkeletonContent
        containerStyle={[styles.card]}
        layout={skeletonBlock0}
        isLoading={isLoading}
      >
        <Card
          image={{
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          }}
          header="Sprightly Spring"
          subHeader="Available for 37 hotels"
          imageHeader="Diner"
          size="small"
          onPress={() => null}
          wrapperStyle={{ width: 300 }}
        />
      </SkeletonContent>

      <SkeletonContent
        containerStyle={[styles.card]}
        layout={skeletonBlock0}
        isLoading={isLoading}
      >
        <Card
          image={{
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          }}
          header="Sprightly Spring"
          subHeader="Available for 37 hotels"
          imageHeader="Diner"
          size="small"
          onPress={() => null}
          wrapperStyle={{ width: 300 }}
        />
      </SkeletonContent>

      <SkeletonContent
        containerStyle={[styles.card]}
        layout={skeletonBlock0}
        isLoading={isLoading}
      >
        <Card
          image={{
            uri: "https://mediabank.valkenhorst.nl/images/0/image32335.jpg",
          }}
          header="Sprightly Spring"
          subHeader="Available for 37 hotels"
          imageHeader="Diner"
          size="small"
          onPress={() => null}
          wrapperStyle={{ width: 300 }}
        />
      </SkeletonContent>

      <View style={[styles.example]}>
        <SkeletonContent
          containerStyle={[styles.top]}
          layout={skeletonBlock1}
          isLoading={isLoading}
        >
          <View style={[styles.imageContainer]} />

          <View style={styles.nested}>
            <Text style={styles.normalText}>Nested 1</Text>
            <Text style={styles.normalText}>Nested 2</Text>
            <Text style={styles.normalText}>Nested 3</Text>
          </View>
        </SkeletonContent>

        <SkeletonContent
          containerStyle={styles.titleContainer}
          layout={skeletonBlock2}
          isLoading={isLoading}
        >
          <Text>Title block</Text>
          <Text>Subtitle lorem ipsum text.</Text>
        </SkeletonContent>

        <SkeletonContent
          containerStyle={styles.descContainer}
          layout={skeletonBlock3}
          isLoading={isLoading}
        >
          <Text style={styles.normalText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac tempus odio. Donec non dolor metus.
          </Text>
        </SkeletonContent>
      </View>
    </View>
  );
};
/* == METHODS =============================================================== */

/* ========================================================================== *\
  STYLES
\* ========================================================================== */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Spacing.sp1,
    padding: Spacing.sp2,
  },
  card: {
    width: "100%",

    flex: 1,
    marginBottom: Spacing.sp2,
  },
  example: {
    height: 400,
    width: 300,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 2, opacity: 0.13, blurRadius: 8 }),
  },
  top: {
    width: 300,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  titleContainer: {
    width: 300,
    padding: 20,
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: Spacing.sp1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.grey7,
  },
  normalText: {},
  nested: {
    flexDirection: "column",
    marginRight: 20,
  },
  descContainer: {
    width: 300,
    padding: 20,
    flex: 1,
  },
});
/* == STYLES ================================================================ */

/* ========================================================================== *\
  EXPORTS
\* ========================================================================== */
export default Skeleton;
/* == EXPORTS =============================================================== */
