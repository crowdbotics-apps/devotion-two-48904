import React from "react"
import { SafeAreaView, ScrollView, StyleSheet, ViewStyle } from "react-native"
import FeatherIcon from "react-native-vector-icons/Feather"
import LonelyLottieAnimation from "@assets/lottie/lonely.json"
import BraveLottieAnimation from "@assets/lottie/brave.json"
import ContentLottieAnimation from "@assets/lottie/content.json"
import AnxiousLottieAnimation from "@assets/lottie/anxious.json"
import DevotionLottieAnimation from "@assets/lottie/devotion.json"

import colors from "@constants/colors"
import Header from "@components/Header"
import Lottie from "./Lottie"
import { useNavigation } from "@react-navigation/native"

interface ScreenWrapperProps {
  children: React.ReactNode;
  headerShown?: boolean;
  style?: ViewStyle;
  lotieAnimation?: "anxious" | "brave" | "content" | "devotion" | "lonely";
  showInfoIcon?: boolean;
  contentContainerStyle?: ViewStyle;
}

const ScreenWrapper = ({
  children,
  headerShown = false,
  style,
  lotieAnimation,
  showInfoIcon,
  contentContainerStyle
}: ScreenWrapperProps) => {
  const navigation = useNavigation<any>();

  const renderLottie = () => {
    let source

    switch (lotieAnimation) {
      case "anxious":
        source = AnxiousLottieAnimation
        break

      case "brave":
        source = BraveLottieAnimation
        break

      case "content":
        source = ContentLottieAnimation
        break

      case "devotion":
        source = DevotionLottieAnimation
        break

      case "lonely":
        source = LonelyLottieAnimation

        break

      default:
        break
    }

    if (source) {
      return <Lottie source={source} autoPlay loop />
    }

    return null
  }

  return (
    <SafeAreaView style={[styles.container, style]}>
      <ScrollView
        contentContainerStyle={[styles.contentContainerStyle,
          contentContainerStyle
        ]}
        style={{ flex: 1 }}
      >
        {headerShown && <Header />}
        {showInfoIcon && (
          <FeatherIcon
            name="info"
            onPress={() => {
              navigation.navigate("About")
            }}
            size={26}
            style={styles.infoIcon}
          />
        )}
        {renderLottie()}

        {children}
      </ScrollView>
    </SafeAreaView>
  )
}
export default ScreenWrapper

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    flex: 1
  },
  contentContainerStyle: {
    flexGrow: 1, alignItems: "center"
  },
  infoIcon: {
    color: colors.white,
  },
})
