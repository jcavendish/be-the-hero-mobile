import { StyleSheet } from 'react-native';
import  Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold: {
    fontWeight: 'bold'
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  incidentsList: {
    marginTop: 32
  },
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },
  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    color: '#737380'
  },
  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailsButtonText: {
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export const contactStyles = StyleSheet.create({
  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },
  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },
  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  }
})

export const actionStyles = StyleSheet.create({
  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  }
})