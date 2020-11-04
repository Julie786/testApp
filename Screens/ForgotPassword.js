import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import Font from '../constant/Font';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const ForgotPassword = (props) => {
  console.log(props.route.params.name);
  return (
    <View style={{flex: 1, paddingHorizontal: wp('6%'),alignSelf:'center'}}>
      <View
        style={{flex: 0.1,  justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={{color: '#000',
                fontSize: wp('7%'),
                fontWeight: 'bold',}}>{`<`}</Text>
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
        <TextInput autoFocus={true} style={styles.emailText} placeholder="Email" />
      </View>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <TouchableOpacity
        disabled={false}
        onPress={() => props.navigation.navigate('Verify')}
        style={{
          backgroundColor: Font.bdrColor,
          width: wp('90%'),
          justifyContent:'center',
          height: Font.inputHeight,
          borderRadius: Font.radius,
          marginTop: hp('1%'),
          alignSelf: 'center',
        }}>
          <Text style={{color: '#fff', textAlign: 'center',fontWeight:'bold',fontSize:Font.btnFontSize}}>Continue</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default ForgotPassword;

const styles = StyleSheet.create({

  emailText: {
    width: wp('90%'),
    height: Font.inputHeight,
    borderRadius: Font.radius,
    marginTop: hp('1%'),
    paddingLeft:wp('5%'),
    fontSize:Font.inputFontSize,
    borderColor: Font.bdrColor,
    borderWidth: hp('0.1%'),
  },
  enterLabel: {
    fontFamily: 'Noto Sans',
    paddingVertical:hp('5%'),
    textAlign: 'center',
    fontSize: wp('10%'),
    color: 'black',
  },
  detLabel: {
    fontFamily: 'Noto Sans',
    lineHeight:hp('3%'),
    marginHorizontal:wp('10%'),
    textAlign: 'center',
    fontSize: wp('4%'),
    color: 'black',
  },
});
