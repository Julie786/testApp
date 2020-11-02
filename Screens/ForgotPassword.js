import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity
} from 'react-native';


const ForgotPassword = (props) => {
  console.log(props.route.params.name);
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View
        style={{flex: 0.1,  justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{`<`}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.5,justifyContent:'flex-start'}}>
        <Text style={styles.enterLabel}>Enter Email</Text>
        <Text style={styles.detLabel}>
          Enter your registered email address and we will send you a link to
          reset your password
        </Text>
      </View>

      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <TextInput style={styles.emailText} placeholder="Email" />
      </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <TouchableOpacity
        disabled={false}
        onPress={() => props.navigation.navigate('Verify')}
        style={{
          backgroundColor: '#19A5D3',
          width: '100%',
          justifyContent:'center',
          height:60,
          borderRadius: 8,
          marginTop: 10,
          alignSelf: 'center',
        }}>
          <Text style={{color: '#fff', textAlign: 'center',fontWeight:'bold'}}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({

  emailText: {
    width: '100%',
    height: 60,
    marginTop: 10,
    paddingLeft:10,
    borderRadius: 8,
    borderColor: '#19A5D3',
    borderWidth: 1,
  },
  enterLabel: {
    fontFamily: 'Noto Sans',
    // width: '60%',
    marginTop: 40,
    textAlign: 'center',
    fontSize: 32,
    color: 'black',
  },
  detLabel: {
    fontFamily: 'Noto Sans',
    // width: '60%',
    lineHeight:30,
    marginTop: 30,
    marginHorizontal:'10%',
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});
