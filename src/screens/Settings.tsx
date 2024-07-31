import React from "react"
import { StyleSheet, View } from "react-native"
import ScreenWrapper from "@components/ScreenWrapper"
import Typography from "@components/Typography"
import FadingButton from "@components/FadingButton"
import Input from "@components/Input"

const Settings = () => {
  const [name, setName] = React.useState("")
  const handleChangeName = (text: string) => {
    setName(text)
  }

  const handleSelect = (mood: string) => {
    console.log(mood)
  }
  return (
    <ScreenWrapper headerShown lotieAnimation="devotion">
      <Typography font="semiBold">Settings</Typography>
      <Typography font="regular">Your name</Typography>
      <Input value={name} onChange={handleChangeName} />
      <Typography font="semiBold">Your pronouns</Typography>

      <View style={styles.buttons}>
        <FadingButton
          title="Content"
          bgColors={["#7B304A00", "#81032F"]}
          onPress={() => handleSelect("Content")}
        />
        <FadingButton
          title="Anxious"
          bgColors={["#FB587A00", "#9B21A3"]}
          onPress={() => handleSelect("Anxious")}
          varient="outline"
        />
        <FadingButton
          title="Brave"
          bgColors={["#66453000", "#F5853F"]}
          onPress={() => handleSelect("Brave")}
          varient="outline"
        />
        <FadingButton
          title="Lonely"
          bgColors={["#58CCFB00", "#217EA3"]}
          onPress={() => handleSelect("Lonely")}
          varient="outline"
        />
      </View>
    </ScreenWrapper>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {},
  buttons: {
    width: "100%",
    paddingHorizontal: 20,
    rowGap: 20,
    marginVertical: 20
  }
})
