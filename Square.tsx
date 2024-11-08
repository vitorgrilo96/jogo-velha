import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    onPress: () => void;
    value: string;
}

export function Square({ value, onPress }: Props) {
    return <TouchableOpacity style={styles.square} onPress={onPress}>
        <Text style={styles.squareText}>{value}</Text>
        </TouchableOpacity >
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center"
    },
    squareText: {
        fontSize: 22,
        fontWeight: "bold"
    }
})

