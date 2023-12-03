import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";


export default function ContactBox() {
    const [filter, setFilter] = useState({ keyword: '', sort: 'asc' });
    
    const filterContact = (keyword: string) => {
        setFilter({ ...filter, keyword });
    };
    
    const sortContact = (sort: string) => {
        setFilter({ ...filter, sort });
    };

    return (
        <View>
            <Text>coba</Text>
        </View>
    )
}

const style = StyleSheet.create({

})