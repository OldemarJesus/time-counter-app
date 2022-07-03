import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [formatedTime, setFormatedTime] = useState("00 : 00 : 00");

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text style={styles.text}>Timer</Text>
        <StatusBar style={styles.statusbar} />
      </View>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerTime}>{formatedTime ? `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}` : formatedTime}</Text>
        <Text style={styles.timerDate}>{date.toLocaleDateString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14191f',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 54,
    paddingLeft: 20
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  statusbar: 'light',
  timerContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timerTime: {
    fontSize: 64,
    color: '#fff',
    marginTop: -90
  },
  timerDate: {
    fontSize: 28,
    color: '#fff'
  }
});
