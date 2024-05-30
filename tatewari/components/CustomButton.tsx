import React from "react";
import { TouchableOpacity, Text } from "react-native";

const CustomButton = (
    {
        onPress,
        title,
        color
    }:any
)=>{
    return(
        <TouchableOpacity
            style={{
                backgroundColor:color || 'blue',
                padding: 10,
                borderRadius: 5,
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <Text style={{color: "red"}}>{title || "Botón personalizado"}</Text>
        </TouchableOpacity>
    );
}
export default CustomButton;