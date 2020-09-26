import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ViewStyle,
  Image,
  Dimensions,
  Animated,
  PanResponder,
  LayoutChangeEvent,
  Keyboard,
} from "react-native";
import Text from "../Text";
import Spacing from "../../style/spacing";
import shadow from "../../style/shadow";
import Modal from "../Modal";
import colors from "../../style/colors";
import TextInput from "./TextInput";

type Sizes = "responsive" | "full";

const MODAL_STYLE: { [key in Sizes]: ViewStyle } = {
  responsive: {
    maxHeight: Dimensions.get("window").height - Spacing.sp8,
  },
  full: {
    top: Spacing.sp8,
  },
};

interface Option {
  label: string;
  value: any;
}

interface PickerProps {
  title: string;
  label: string;
  placeholder: string;
  options: Option[];
  selectedOption?: Option;
  onSelectChange: (option: Option) => void;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  onSubmit?: () => void;
  error?: string;
  size: Sizes;
}

const Picker = React.forwardRef<View, PickerProps>((props, ref) => {
  const {
    title,
    label,
    placeholder,
    options,
    selectedOption,
    onSelectChange,
    containerStyle,
    disabled,
    onSubmit,
    error,
    size,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [modalHeight, setModalHeight] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const translateY = useRef(new Animated.Value(0)).current;
  const pickerRef = useRef<View>(null);
  if (ref) {
    ref = pickerRef;
  }

  const hasError = !!error;

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => {
          return true;
        },
        onPanResponderMove: (_, gestureState) => {
          translateY.setValue(Math.max(0, 0 + gestureState.dy));
        },
        onPanResponderRelease: (_, gestureState) => {
          const shouldOpen = gestureState.vy <= 0;
          toggleModal(shouldOpen, true);
        },
      }),
    [modalHeight]
  );

  const toggleModal = (shouldOpen: boolean, isSwipeGesture?: boolean) => {
    if (shouldOpen) {
      if (!isSwipeGesture) {
        // set animation start to bottom
        translateY.setValue(modalHeight);
      }
      setShowModal(true);
    } else {
      Keyboard.dismiss();
    }

    Animated.spring(translateY, {
      toValue: shouldOpen ? 0 : modalHeight,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: true,
    }).start(() => {
      if (!shouldOpen) {
        if (onSubmit) onSubmit();
        setShowModal(false);
        setFilteredOptions(options);
      }
    });
  };

  const getModalHeight = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    // + 50 to hide the dropshadow
    setModalHeight(height + 50);
  };

  const selectOption = (option: Option) => {
    onSelectChange(option);
    toggleModal(false);
  };

  const onSearchChange = (text: string) => {
    setSearch(text);
  };

  useEffect(() => {
    const result = options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredOptions(result);
  }, [search]);

  return (
    <>
      <View
        ref={ref}
        style={[styles.container, containerStyle, disabled && { opacity: 0.4 }]}
      >
        <Text type="subtextSemiBold" style={styles.label}>
          {label}
        </Text>
        <View
          style={[
            styles.selectContainer,
            hasError && { borderColor: colors.redDark },
          ]}
        >
          <TouchableOpacity
            onPress={() => toggleModal(true)}
            style={styles.select}
            disabled={disabled}
          >
            <Text
              type="bodyRegular"
              style={
                selectedOption === undefined ? styles.placeholder : undefined
              }
            >
              {selectedOption?.label ?? placeholder}
            </Text>
            <Image
              source={require("../../media/arrow_down.png")}
              style={styles.chevron}
            />
          </TouchableOpacity>
        </View>
        {hasError && (
          <Text
            style={styles.error}
            type="subtextRegular"
            color={colors.redDark}
          >
            {error}
          </Text>
        )}
      </View>
      {showModal && (
        <Modal
          animationType="none"
          onClose={() => toggleModal(false)}
          backgroundColor="transparent"
          style={{ overflow: "hidden" }}
        >
          <Animated.View
            onLayout={getModalHeight}
            style={[
              styles.modal,
              MODAL_STYLE[size],
              { transform: [{ translateY }] },
            ]}
          >
            <View {...panResponder.panHandlers}>
              <View style={styles.handle} />
              <View style={styles.header}>
                <View style={styles.headerLeft} />
                <Text type="h4" textAlign="center">
                  {title}
                </Text>
                <TouchableOpacity onPress={() => toggleModal(false)}>
                  <Image
                    source={require("../../media/close.png")}
                    style={styles.headerRight}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.content}>
              {size === "full" && (
                <TextInput
                  label="none"
                  containerStyle={styles.input}
                  placeholder="Search"
                  onChangeText={onSearchChange}
                />
              )}

              <FlatList
                data={filteredOptions}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => selectOption(item)}
                  >
                    <Text type="bodyRegular">{item.label}</Text>
                    {selectedOption?.value === item.value && (
                      <Image source={require("../../media/checkmark.png")} />
                    )}
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.list}
              />
            </View>
          </Animated.View>
        </Modal>
      )}
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
  },
  label: {
    marginBottom: Spacing["sp1/2"],
  },
  selectContainer: {
    borderWidth: 1,
    borderColor: colors.greyMidDark,
    borderRadius: Spacing["sp1/2"],
  },
  select: {
    paddingHorizontal: Spacing.sp2,
    paddingVertical: Spacing.sp1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chevron: {
    marginLeft: Spacing.sp2,
    width: 14,
    height: 8,
  },
  disabled: {
    color: colors.greyMidDark,
  },
  placeholder: {
    color: colors.greyDark,
  },
  error: { marginTop: Spacing["sp1/2"] },
  modal: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: Spacing.sp3,
    borderTopRightRadius: Spacing.sp3,
    backgroundColor: "#ffffff",
    ...shadow({ x: 0, y: 2, opacity: 0.32, blurRadius: 24 }),
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: Spacing.sp7,
    paddingVertical: Spacing.sp2,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  content: { paddingVertical: Spacing.sp3 },
  list: { marginTop: -Spacing.sp2, marginHorizontal: Spacing.sp3 },
  input: { marginBottom: Spacing.sp3, marginHorizontal: Spacing.sp3 },
  handle: {
    width: Spacing.sp4,
    height: Spacing["sp1/2"],
    alignSelf: "center",
    marginTop: Spacing.sp2,
    backgroundColor: colors.greyMidDark,
    borderRadius: Spacing.sp2,
  },
  header: {
    paddingVertical: Spacing.sp2,
    paddingHorizontal: Spacing.sp3,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  headerLeft: {
    width: 16,
  },
  headerRight: {
    width: 16,
    height: 16,
  },
});

export default Picker;
