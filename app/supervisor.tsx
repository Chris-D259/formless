import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

export default function Supervisor() {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logoImage} source={require('../assets/images/KBM.png')} />
      <View style={styles.orangeBar}></View>
      <Text style={styles.openingText}>Welcome Supervisor!</Text>
      <Text className='text-2xl'>Track Team Members</Text>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button1} >
          <Text style={{color: 'white'}} >Team Member 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} >
          <Text style={{color: 'white'}} >Team Member 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} >
          <Text style={{color: 'white'}} >Team Member 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} >
          <Text style={{color: 'white'}} >Team Member 4</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerNav}>
        <View style={styles.navButton}>
        <Image style={styles.navImages}source={require('../assets/images/reports.png')} />
          <Text style={styles.navButtonText}>Team Reports</Text>
        </View>
        <View style={styles.navButton}>
        <Image style={styles.navImages}source={require('../assets/images/submissions.png')} />
          <Text style={styles.navButtonText}>Team Submissions</Text>
        </View>
        <View style={styles.navButton}>
        <Image style={styles.navImages}source={require('../assets/images/Team.png')} />
          <Text style={styles.navButtonText}>Your Team</Text>
        </View>
        <View style={styles.navButton}>
        <Image style={styles.navImages}source={require('../assets/images/submit.png')} />
          <Text style={styles.navButtonText}>Submit Forms</Text>
        </View>
      </View>
    </SafeAreaView>
  );

}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  orangeBar: {
    backgroundColor: '#D15617',
    width: '100%',
    height: 20,
    position: 'absolute',
    top: 80,
  },
  openingText:{
    fontSize: 50,
    marginTop: 20,
    justifyContent: 'center',
    
  },
  logoImage: {
    position: 'absolute',
    top:20,
  },
  button1:{
    backgroundColor: '#666566',
    color: 'white',
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    margin: 10,
    
  },
  container2: {
    
  },
  containerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    bottom:0,
    position: 'absolute',
  },
  navButton: {
    backgroundColor: '#D15617',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
  navButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  navImages: {
    width: 50,
    height: 50,
  }
})
