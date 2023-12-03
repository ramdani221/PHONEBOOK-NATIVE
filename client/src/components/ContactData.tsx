import { useState } from "react";
import { Button, Image, View } from "react-native";

export default function ContactData() {
    const
    const [isEdite, setIsEdite] = useState(false);
    const [newData, setNewData] = useState()
 return (
    <View>
        <View>
                <Image source={{uri: "http://localhost:3000/images/user-tie-solid.svg"}}/>
        </View>
    </View>
 )
}