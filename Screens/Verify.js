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
import Font from '../constant/Font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Verify = (props) => {
  return (
    <View style={{flex: 1, paddingHorizontal: wp('2%')}}>
      <View
        style={{flex: 0.1,  justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>{`<`}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.5,justifyContent:'center'}}>
          <Image
          resizeMode='cover'
          source={{uri:'https://www.th-wildau.de/files/_processed_/f/a/csm_Email_01_42a7aaf613.png'}}
          style={{height:hp('10%'),width:wp('20%'),alignSelf:'center'}}
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
          backgroundColor: Font.bdrColor,
          width: wp('90%'),
          justifyContent:'center',
          height:Font.btnHeight,
          borderRadius: Font.radius,
          marginTop: hp('1%'),
          alignSelf: 'center',
        }}>
          <Text style={{color: '#fff', textAlign: 'center',
                  fontSize:Font.btnFontSize,fontWeight:'bold'}}>Verify</Text>
      </TouchableOpacity>
      </View>
      <View style={{flex: 0.15, justifyContent: 'center'}}>
        <TouchableOpacity
        disabled={false}
        onPress={() => alert('Ms Saira')}
        style={{
          borderColor: Font.bdrColor,
          width: wp('90%'),
          justifyContent:'center',
          height:Font.btnHeight,
          borderRadius: Font.radius,
          marginTop: hp('1%'),
          borderWidth: wp('0.5%'),
          alignSelf: 'center',
        }}>
          <Text style={{color: Font.bdrColor, textAlign: 'center',fontSize:Font.btnFontSize,fontWeight:'bold'}}>Resend Code</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};
export default Verify;

const styles = StyleSheet.create({

  emailText: {
    width: wp('15%'),
    height: wp('15%'),
    textAlign:'center',
    marginTop: hp('1%'),
    paddingLeft: wp('1%'),
    borderRadius: wp('2%'),
    borderColor: Font.bdrColor,
    borderWidth: wp('0.1%'),
  },
  enterLabel: {
    fontFamily: 'Noto Sans',
    marginTop: hp('4%'),
    textAlign: 'center',
    fontSize: wp('5%'),
    color: 'black',
  },
  detLabel: {
    fontFamily: 'Noto Sans',
    lineHeight: hp('3%'),
    marginTop: hp('3%'),
    marginHorizontal: wp('10%'),
    textAlign: 'center',
    fontSize: wp('4%'),
    color: 'black',
  },
});
