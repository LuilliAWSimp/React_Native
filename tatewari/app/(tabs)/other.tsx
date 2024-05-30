import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import React, { Component, useState } from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Other() {
  const insets = useSafeAreaInsets();
  const pressHandler = () => {
    alert("presionaste el botón");
  };
  const [text, onChangeText] = useState("");
  const [number, onChangeNumber] = useState("");
  const storage = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    sync: {},
  });
  const onSave = () => {
    storage.save({
      key: "nombre",
      data: "El muñeco",
    });
  };
  const onGet = () => {
    storage
      .load({
        key: "nombre",
        autoSync: true,
      })
      .then(ret=> {
        alert(ret);
      });
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, paddingTop: insets.top }}>
        <Link style={styles.detalles} href="/(tabs)">
          Te regresa pa atrás
        </Link>
        <Text style={styles.parrafo}>Otra pantalla así rocotota</Text>
        <Text style={styles.parrafo}>
          El perro cochino de Oscar tiene condones usados en su cartera, que
          pedo
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Valor inicial"
        ></TextInput>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Este input es para números solamente"
          keyboardType="numeric"
        ></TextInput>
        <Button title="Mostar texto guardado" onPress={() => alert(text)}></Button>
        <Button title="Guardar datos" onPress={onSave}></Button>
        <Button title="Obtener" onPress={onGet}></Button>
      </View>
      <CustomButton
        title="Guardar datos"
        color="red"
        onPress={pressHandler}
      ></CustomButton>
      <CustomButton onPress={pressHandler}></CustomButton>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  parrafo: {
    color: "red",
    fontSize: 20,
    marginTop: 60,
    marginLeft: 20,
  },
  detalles: {
    color: "yellow",
    marginTop: 30,
    marginLeft: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
