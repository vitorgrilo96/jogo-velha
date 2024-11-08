import { Button, StyleSheet, Text, View } from "react-native";
import { Square } from "./Square";
import { calculateWinner } from "./utils/boardUtils";
import { useState } from "react";


export function Board() {
    const [isXNext, setIsXNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(""));

    function handleClick(i: number) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (isXNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }

        setSquares(nextSquares);
        setIsXNext(!isXNext);
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Vencedor: ' + winner;
    } else {
        status = 'Próximo jogador: ' + (isXNext ? 'X' : 'O');
    }

    return (
        <>
            <Text style={styles.status}>{status}</Text>
            <View style={styles.container}>
                {squares.map((value, index) => (
                    <Square key={index} value={value} onPress={() => handleClick(index)} />
                ))}
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 300
    },
    status: {
        fontSize: 18
    }
});