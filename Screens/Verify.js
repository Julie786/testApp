import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity
} from 'react-native';


const Verify = (props) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View
        style={{flex: 0.1,  justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>{`<`}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.5,justifyContent:'center'}}>
          <Image
          resizeMode='cover'
          source={{uri:'https://www.th-wildau.de/files/_processed_/f/a/csm_Email_01_42a7aaf613.png'}}
          style={{height:80,width:100,alignSelf:'center'}}
          />
        <Text style={styles.enterLabel}>Verification Code Send to Email</Text>
        <Text style={styles.detLabel}>
          If valid, you'll recieve an email with an verification code
        </Text>
      </View>

      <View style={{flex: 0.3,alignItems:'center', justifyContent: 'space-between',flexDirection:'row'}}>
        <TextInput style={styles.emailText}  />
        <TextInput style={styles.emailText}  />
        <TextInput style={styles.emailText}  />
        <TextInput style={styles.emailText}  />
        <TextInput style={styles.emailText}  />

      </View>
      <View style={{flex: 0.15, justifyContent: 'flex-end'}}>
        <TouchableOpacity
        disabled={false}
        onPress={() => props.navigation.navigate('NewPass')}
        style={{
          backgroundColor: '#19A5D3',
          width: '100%',
          justifyContent:'center',
          height:60,
          borderRadius: 8,
          marginTop: 10,
          alignSelf: 'center',
        }}>
          <Text style={{color: '#fff', textAlign: 'center',fontSize:18,fontWeight:'bold'}}>Verify</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 0.15, justifyContent: 'center'}}>
        <TouchableOpacity
        disabled={false}
        onPress={() => alert('Ms Saira')}
        style={{
          borderColor: '#19A5D3',
          width: '100%',
          justifyContent:'center',
          height:60,
          borderRadius: 8,
          marginTop: 10,
          borderWidth:1,
          alignSelf: 'center',
        }}>
          <Text style={{color: '#19A5D3', textAlign: 'center',fontSize:18,fontWeight:'bold'}}>Resend Code</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default Verify;

const styles = StyleSheet.create({

  emailText: {
    width: '15%',
    height: 60,
    textAlign:'center',
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
    fontSize: 22,
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
