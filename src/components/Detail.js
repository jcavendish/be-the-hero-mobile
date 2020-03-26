import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MailComposer from 'expo-mail-composer';

import styles, {contactStyles, actionStyles} from './styles';
import logoImg from '../assets/logo.png';
import Incident from './Incident';
import { useNavigation, useRoute } from '@react-navigation/native';

function Action(props) {
  return (
    <TouchableOpacity
      style={actionStyles.action}
      onPress={props.action}
    >
      <Text style={actionStyles.actionText}>{props.text}</Text>
    </TouchableOpacity>
  )
}

function ContactActions(props) {
  const value = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
      .format(props.incident.value)

  const message = `Olá ${props.incident.name}, estou entrando em contato pois gostaria de ajudar no caso 
      ${props.incident.title} com a soma de ${value}`;

  const sendEmail = (incident) => {
    MailComposer.composeAsync({
      subject: `Herói do caso ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  const sendWhatsapp = (incident) => {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={actionStyles.actions} >
      <Action text='Whatsapp' action={() => sendWhatsapp(props.incident)} />
      <Action text='Email' action={() => sendEmail(props.incident)} />
    </View>
  )
}

function ContactBox(props) {
  return (
    <View style={contactStyles.contactBox}>
      <Text style={contactStyles.heroTitle}>Salve o dia</Text>
      <Text style={contactStyles.heroTitle}>Seja o herói desse caso.</Text>

      <Text style={contactStyles.heroDescription}>Entre em contato:</Text>
      <ContactActions incident={props.incident} />
    </View>
  )
}

export default function Detail() {

  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const DetailedIncident = {
    ...incident,
    name: `${incident.name} de ${incident.city}/${incident.uf}`
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, {marginBottom: 32}]} >
        <Image source={logoImg} />

        <TouchableOpacity 
          style=''
          onPress={() => navigation.goBack()}
        >
          <Feather name='arrow-left' size={28} color='#e82041' />
        </TouchableOpacity>
      </View>
      <Incident 
        styles={{...styles, incident:{...styles.incident, paddingBottom: 0}}}
        item={DetailedIncident}
      />
      <ContactBox incident={incident} />
    </View>
  )
}