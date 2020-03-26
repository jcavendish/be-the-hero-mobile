import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

import logoImg from '../assets/logo.png';
import Incident from './Incident';
import styles from './styles';
import axios from '../services/api'

function LinkToDetails(props) {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('Detail', { incident: props.incident })
  }

  return (
    <TouchableOpacity 
      style={styles.detailsButton} 
      onPress={navigateToDetails}
    >
      <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
      <Feather name='arrow-right' size={16} color='#e02041' />
    </TouchableOpacity>
  )
}

export default function Incidents() {

  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function shouldGet() {
    if(loading) {
      return false;
    }
    if (total > 0 && incidents.length >= total) {
      return false;
    }
    return true;
  }

  async function getIncidents() {
    if(!shouldGet()) {
      return;
    }
    setLoading(true);
    const response = await axios.get('incidents', {
      params: {
        page
      }
    });
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => { 
    getIncidents(page);
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Image source={logoImg} />
        <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{total} casos</Text>.</Text>
      </View>
      
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

      <FlatList 
        style={styles.incidentsList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={getIncidents}
        onEndReachedThreshold={0.8}
        renderItem={({item}) => 
          <Incident styles={styles} item={item}><LinkToDetails incident={item} /></Incident>}
      />
    </View>
  )
}