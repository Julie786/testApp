import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity,
} from 'react-native';

const NewPassword = (props) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View style={{flex: 0.1, justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{`<`}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.4, justifyContent: 'flex-start'}}>
        <Text style={styles.enterLabel}>Enter New Password</Text>
        <Text style={styles.detLabel}>
          Please enter your new password below, a strong password adds more
          security
        </Text>
      </View>

     <View style={{flex:0.3}}>
     <TextInput style={styles.newPasswordText} placeholder="New Password" />
      <TextInput
        style={styles.newPasswordText}
        placeholder="Re-enter Pasword"
      />
     </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <TouchableOpacity
        disabled={false}
        onPress={() => props.navigation.popToTop()}
        style={{
          backgroundColor: '#19A5D3',
          width: '100%',
          justifyContent:'center',
          height:60,
          borderRadius: 8,
          marginTop: 10,
          alignSelf: 'center',
        }}>
          <Text style={{color: '#fff', textAlign: 'center',fontWeight:'bold'}}>Save</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default NewPassword;

const styles = StyleSheet.create({
  btnSave: {
    alignContent: 'center',
    backgroundColor: 'blue',
    width: '80%',
    height: 53,
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 8,
  },
  newPasswordText: {
    width: '100%',
    height: 60,
    marginTop: 30,
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
    color: '#000',
  },
  detLabel: {
    fontFamily: 'Noto Sans',
    // width: '60%',
    marginTop: 30,
    paddingHorizontal:'10%',
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
  },
});
