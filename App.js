import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#EEF3F9" />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>

          {/* Logo et nom de l'école */}
          <View style={styles.header}>
            <Image
              source={require('./assets/emsi.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.schoolSubtitle}>
              École Marocaine des Sciences de l'Ingénieur
            </Text>
          </View>

          <View style={styles.divider} />

          {/* Titre de la carte */}
          <Text style={styles.cardTitle}>
            CARTE ÉTUDIANT
          </Text>

          {/* Photo de l'étudiant */}
          <View style={styles.photoContainer}>
            <Text style={styles.studentEmoji}>👩🏻‍🎓</Text>
          </View>

          {/* Informations de l'étudiant */}
          <View style={styles.infoContainer}>

            <Text style={styles.label}>Nom</Text>
            <Text style={styles.value}>Marwa</Text>

            <Text style={styles.label}>Prénom</Text>
            <Text style={styles.value}>Bougarn</Text>

            <Text style={styles.label}>ID Étudiant</Text>
            <Text style={styles.value}>BH649375</Text>

            <Text style={styles.label}>Année universitaire</Text>
            <Text style={styles.value}>2026 / 2027</Text>

          </View>

          <View style={styles.divider} />

          <Text style={styles.footer}>
            CARTE D'ÉTUDIANT
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEF3F9',
  },

  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    padding: 24,
    width: '100%',
    alignSelf: 'center',
    elevation: 5,
  },

  header: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },

  logo: {
    width: 250,
    height: 100,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },

  schoolSubtitle: {
    fontSize: 14,
    color: '#526782',
    textAlign: 'center',
    marginTop: 10,
  },

  divider: {
    height: 2,
    backgroundColor: '#DDE5EF',
    marginVertical: 20,
  },

  cardTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#174478',
    textAlign: 'center',
    marginVertical: 20,
  },

  photoContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#DFEAF8',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },

  studentEmoji: {
    fontSize: 65,
  },

  infoContainer: {
    marginTop: 20,
  },

  label: {
    fontSize: 17,
    color: '#718198',
    marginTop: 15,
  },

  value: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#202C40',
    marginTop: 4,
  },

  footer: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 4,
    color: '#174478',
    textAlign: 'center',
    marginVertical: 15,
  },
});