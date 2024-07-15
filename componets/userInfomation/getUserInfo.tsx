import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { Button, Text } from '@rneui/themed';
import { Entypo } from '@expo/vector-icons';
import { Zocial } from '@expo/vector-icons';

const { height: screenHeight } = Dimensions.get('window');

const AddInfo = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.postAdBody}>
      <View style={styles.userInformation}>
        <Text style={styles.text}>Continue with mobile number & OTP</Text>
        <PhoneInput
          defaultCode="LK"
          onChangeFormattedText={(text) => {
            setPhoneNumber(text);
          }}
          containerStyle={styles.phoneContainer}
        />
        <Button
          title='Continue'
          buttonStyle={styles.buttonStyle}
        />

        <Text style={{ textAlign: "center", marginTop: 5, color: "gray"}}>OR</Text>

        <Button
          title={<Text style={{ color: "gray" , fontWeight:"bold"}}>Continue with Facebook</Text>} 
          icon={
            <Image
              source={{ uri: 'https://img.icons8.com/color/100/google-logo.png' }}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
          }
          buttonStyle={styles.googleButtonStyle}
        />

        <Button
          title="Continue with Facebook"
          icon={
            <Entypo name="facebook" size={20} color="white" style={{ marginRight: 10 }} />
          }
          buttonStyle={styles.facebookButtonStyle}
        />
        
        <Button
          title="Continue with Email"
          icon={
            <Zocial name="email" size={20} color="white" style={{ marginRight: 10 }} />
          }
          buttonStyle={styles.emailButtonStyle}
        />

        <View style={styles.conditions}>
          <Text style={{ color:'gray', fontSize: 12 }}>By signing up for an account you agree to our</Text>
          <TouchableOpacity onPress={() => alert('Navigate to Terms and Conditions page')} >
            <Text style={{ color: '#0074ba', fontSize: 12, textDecorationLine: 'underline' }}>Terms and Conditions</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postAdBody: {
    width: "100%",
    
  },
  userInformation: {
    width: "100%",
    padding: 16,
    backgroundColor: "#fff",
  
  },
  text: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 16,
  },
  phoneContainer: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonStyle: {
    backgroundColor: '#AFDBD0',
    opacity: 1,
    borderRadius: 3,
  },
  googleButtonStyle: {
    backgroundColor: 'white',
    marginTop: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 3,
  },
  facebookButtonStyle: {
    backgroundColor: '#3b5998',
    marginTop: 10,
    borderRadius: 3,
  },
  emailButtonStyle: {
    backgroundColor: '#149777',
    marginTop: 10,
    borderRadius: 3,
  },
  conditions: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default AddInfo;
