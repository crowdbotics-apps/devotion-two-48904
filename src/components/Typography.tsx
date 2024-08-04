import React from "react"
import { StyleSheet, Text, TextStyle } from "react-native"
import { WIDTH } from "../CONST"
import colors from "@constants/colors"

interface TypographyProps {
  children: React.ReactNode;
  style?: TextStyle;
  font?:
    | "bold"
    | "medium"
    | "regular"
    | "semiBold"
    | "thin"
    | "regularItalic"
    | "thinItalic";
  size?: "small" | "mediumSize" | "large" | number;
}

const Typography = ({
  children,
  style,
  font = "regular",
  size = "mediumSize"
}: TypographyProps) => {
  const fontSizeStyle =
    typeof size === "number" ? { fontSize: size } : styles[size]

  return (
    <Text style={[styles.text, styles[font], fontSizeStyle, style]}>
      {children}
    </Text>
  )
}

export default Typography

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    color: colors.white,
    textAlign: "center",
    width: WIDTH
  },
  bold: {
    fontFamily: "metropolis-bold"
  },
  medium: {
    fontFamily: "metropolis-medium"
  },
  regular: {
    fontFamily: "metropolis-regular"
  },
  semiBold: {
    fontFamily: "metropolis-semi-bold"
  },
  thin: {
    fontFamily: "metropolis-thin"
  },
  regularItalic: {
    fontFamily: "Metropolis-RegularItalic",
    fontStyle: "italic"
  },
  thinItalic: {
    fontFamily: "metropolis-thin-italic"
  },
  small: {
    fontSize: 12
  },
  mediumSize: {
    fontSize: 16
  },
  large: {
    fontSize: 20
  }
})
