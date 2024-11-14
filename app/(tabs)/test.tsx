import { Input } from "native-base"
import { useState } from "react"
import { View, Text } from "react-native"

export default function Test() {
  const [teste, setTeste] = useState("")

  console.log(teste)

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 20 }}>
      <Text>Impossible to type on the input below, it's happening only on iOS</Text>

      <Input value={teste} placeholder="Try to type here..." onChangeText={(text) => setTeste(text)} />
    </View>
  )
}
