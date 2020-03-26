import React from 'react';
import { View, Text } from 'react-native';

export default function Incident(props) {
  const styles = props.styles;
  const incident = props.item;
  return (
    <View style={styles.incident}>
      <Text style={styles.incidentProperty}>ONG:</Text>
      <Text style={styles.incidentValue}>{incident.name}</Text>

      <Text style={styles.incidentProperty}>CASO:</Text>
      <Text style={styles.incidentValue}>{incident.title}</Text>

      <Text style={styles.incidentProperty}>VALOR:</Text>
      <Text style={styles.incidentValue}>{
        Intl.NumberFormat('pt-BR', 
        { 
          style: 'currency',
          currency: 'BRL' 
        })
        .format(incident.value)}</Text>

      <View>{props.children}</View>
    </View>
  )
}