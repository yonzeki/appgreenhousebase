import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function DashboardScreen() {
  const [systemStatus, setSystemStatus] = useState({
    lightsOn: false,
    temperature: 24, // Example temperature in Celsius
    waterLevel: 50, // Example percentage
    nutrientLevel: 70 // Example percentage
  });

  const [toDoList, setToDoList] = useState([
    { id: '1', task: 'Check pH levels', completed: false },
    { id: '2', task: 'Inspect water pump', completed: false }
  ]);

  const [activityLog, setActivityLog] = useState([
    { id: '1', log: 'Lights turned on at 6:00 AM' },
    { id: '2', log: 'Watering started at 7:30 AM' }
  ]);

  const [customAlerts, setCustomAlerts] = useState([
    { id: '1', alert: 'Nutrient level low' },
    { id: '2', alert: 'Temperature too high' }
  ]);

  // Quick action handlers
  const toggleLights = () => {
    setSystemStatus(prevStatus => ({
      ...prevStatus,
      lightsOn: !prevStatus.lightsOn
    }));
    setActivityLog([...activityLog, { id: (activityLog.length + 1).toString(), log: `Lights turned ${!systemStatus.lightsOn ? 'on' : 'off'}` }]);
  };

  const adjustTemperature = () => {
    // Simulated temperature adjustment
    let newTemp = systemStatus.temperature + 1;
    setSystemStatus(prevStatus => ({ ...prevStatus, temperature: newTemp }));
    setActivityLog([...activityLog, { id: (activityLog.length + 1).toString(), log: `Temperature adjusted to ${newTemp}°C` }]);
  };

  const startWatering = () => {
    setActivityLog([...activityLog, { id: (activityLog.length + 1).toString(), log: 'Watering started' }]);
  };

  const toggleNetShading = () => {
    setActivityLog([...activityLog, { id: (activityLog.length + 1).toString(), log: 'Net shading toggled' }]);
  };

  const data = [
    { title: 'Real-Time Monitoring Overview', content: (
      <View>
        <Text>Temperature: {systemStatus.temperature}°C</Text>
        <Text>Water Level: {systemStatus.waterLevel}%</Text>
        <Text>Nutrient Level: {systemStatus.nutrientLevel}%</Text>
      </View>
    )},
    { title: 'System Status', content: (
      <Text>Lights: {systemStatus.lightsOn ? 'On' : 'Off'}</Text>
    )},
    { title: 'Quick Actions', content: (
      <View>
        <TouchableOpacity style={styles.quickActionButton} onPress={toggleLights}>
          <Image
            source={systemStatus.lightsOn ? require('../../assets/lights-on.png') : require('../../assets/lights-off.png')}
            style={styles.quickActionIcon}
          />
          <Text style={styles.quickActionText}>
            {systemStatus.lightsOn ? "Turn off Lights" : "Turn on Lights"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionButton} onPress={adjustTemperature}>
          <Image
            source={require('../../assets/temperature.png')}
            style={styles.quickActionIcon}
          />
          <Text style={styles.quickActionText}>Adjust Temperature</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionButton} onPress={startWatering}>
          <Image
            source={require('../../assets/water.png')}
            style={styles.quickActionIcon}
          />
          <Text style={styles.quickActionText}>Watering</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionButton} onPress={toggleNetShading}>
          <Image
            source={require('../../assets/net-shade.png')}
            style={styles.quickActionIcon}
          />
          <Text style={styles.quickActionText}>Toggle Net Shading</Text>
        </TouchableOpacity>
      </View>
    )},
    { title: 'To-Do List', content: (
      <FlatList
        data={toDoList}
        renderItem={({ item }) => (
          <View style={styles.toDoItem}>
            <Text>{item.task}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    )},
    { title: 'System Health Monitoring', content: (
      <Text>All systems operational</Text>
    )},
    { title: 'Custom Alerts', content: (
      <FlatList
        data={customAlerts}
        renderItem={({ item }) => (
          <View style={styles.alertItem}>
            <Text>{item.alert}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    )},
    { title: 'Activity Log', content: (
      <FlatList
        data={activityLog}
        renderItem={({ item }) => (
          <View style={styles.logItem}>
            <Text>{item.log}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    )},
    { title: 'Water / Nutrient Levels', content: (
      <View>
        <Text>Water Level: {systemStatus.waterLevel}%</Text>
        <Text>Nutrient Level: {systemStatus.nutrientLevel}%</Text>
      </View>
    )}
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{item.title}</Text>
          {item.content}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  quickActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  quickActionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  quickActionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  toDoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  alertItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FFCCCB',
  },
  logItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
});
