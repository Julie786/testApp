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
import Font from '../constant/Font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const NewPassword = (props) => {
  return (
    <View style={{flex: 1, paddingHorizontal: wp('6%')}}>
      <View style={{flex: 0.1, justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Text style={{fontSize: hp('3%'), fontWeight: 'bold'}}>{`<`}</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.4, justifyContent: 'flex-start'}}>
        <Text style={styles.enterLabel}>Enter New Password</Text>
        <Text style={styles.detLabel}>
          Please enter your new password below, a strong password adds more
          security
        </Text>
      </View>

     <View style={{flex:0.3,alignSelf:'center'}}>
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
          backgroundColor: Font.bdrColor,
          width: wp('90%'),
          justifyContent:'center',
          height:Font.btnHeight,
          borderRadius: Font.radius,
          marginTop: hp('1%'),
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

  newPasswordText: {
    width: wp('90%'),
    height: Font.inputHeight,
    marginTop: hp('3%'),
    paddingLeft: wp('1%'),
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth: Font.bdrWidth,
  },
  enterLabel: {
    fontFamily: 'Noto Sans',
    marginTop: hp('4%'),
    textAlign: 'center',
    fontSize: wp('5%'),
    color: '#000',
  },
  detLabel: {
    fontFamily: 'Noto Sans',
    marginTop: hp('3'),
    paddingHorizontal: wp('10%'),
    textAlign: 'center',
    fontSize: wp('4%'),
    color: '#000',
  },
});
