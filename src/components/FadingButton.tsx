import React from "react"
import { View, TouchableOpacity, StyleSheet, Text } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Typography from "./Typography"
import colors from "@constants/colors"

interface FadingButtonProps {
  onPress: () => void;
  title: string;
  bgColors: string[];
  varient?: "filled" | "outline";
  outlinedFill?: any;
}

const FadingButton = ({
  onPress,
  title,
  bgColors,
  varient = "filled",
  outlinedFill = colors.secondary
}: FadingButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <LinearGradient
        colors={bgColors} // Start and end colors for the gradient
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} // Adjust the gradient direction
      >
        <View
          style={[
            styles.inner,
            varient === "outline" && {
              ...styles.innerOutLine,
              backgroundColor: outlinedFill
            }
          ]}
        >
          <Typography>{title}</Typography>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    overflow: "hidden"
  },
  gradient: {
    height: 63,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15
  },
  inner: {
    position: "absolute",

    justifyContent: "center",
    alignItems: "center"
  },
  innerOutLine: {
    position: "absolute",
    top: 2,
    left: 0,
    right: 2,
    bottom: 2,
    backgroundColor: colors.secondary,
    borderRadius: 15,
    zIndex: 1
  }
})

export default FadingButton
