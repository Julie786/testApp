import React, {useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Picker,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Font from '../constant/Font';

const SignUp = (props) => {
  const _refFname = useRef();
  const _refLastName = useRef();
  const _refEmail = useRef();
  const _refGender = useRef();
  const _refDob = useRef();
  const _refCountry = useRef();
  const _refPassword = useRef();
  const _refReEnterPassword = useRef();

  const [openDateModal, setOpenDateModal] = useState(false);
  const [showPas, setShowPass] = useState(true);
  const [showRePas, setShowRePass] = useState(true);
  const [selectedValue, setSelectedValue] = useState('Country');
  const [authData, setAuthData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'Gender',
    country: 'Country',
    password: '',
    reEnterPassword: '',
  });

  const changeHandler = (key, value) => {
    setAuthData({...authData, [key]: value});
  };
  console.log(authData);
  const errorHandler = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var patt = new RegExp(regex);
    if (!authData.firstName || !authData.lastName) {
      return {
        message: 'Oops it seems you forget to enter name',
        status: false,
      };
    } else if (new Date(authData.dob).getTime() > new Date().getTime()) {
      //getTime returns a number against selected date.
      return {
        message: 'Oops it seems you forget to picked the past date',
        status: false,
      };
    } else if (authData.gender === 'Gender') {
      return {
        message: 'Oops it seems you forget to select gender',
        status: false,
      };
    } else if (authData.country === 'Country') {
      return {
        message: 'Oops it seems you forget to select country',
        status: false,
      };
    } else if (!authData.email) {
      return {
        message: 'Oops it seems you forget to enter email',
        status: false,
      };
    } else if (!patt.test(authData.email)) {
      return {
        message: 'Oops it seems your email is not correct',
        status: false,
      };
    } else if (
      !authData.password ||
      authData.password.length < 8 ||
      authData.password.length > 12
    ) {
      return {
        message: 'Oops it seems you forget to enter password',
        status: false,
      };
    } else if (authData.reEnterPassword !== authData.password) {
      return {
        message: 'Oops it seems you enter the re-password is not corerct',
        status: false,
      };
    } else {
      return {status: true, message: 'all fields are filled correctly'};
    }
  };
  const btnSignUpHandler = () => {
    try {
      let returnStatus = errorHandler();
      if (returnStatus.status) {
        alert('Successfully Sign Up');
      } else {
        alert(returnStatus.message);
      }
    } catch (error) {}
  };
  const emailValidator = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var patt = new RegExp(regex);
    if (!patt.test(email)) return false;
    return true;
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: hp('2%'),
        paddingBottom: hp('2%'),
        backgroundColor: '#cecece',
      }}>
      <DateTimePicker
        date={new Date()}
        isVisible={openDateModal}
        mode="date"
        onCancel={() => {
          setOpenDateModal(false);
        }}
        onConfirm={(date) => {
          setOpenDateModal(false);
          setAuthData({...authData, dob: new Date(date).toLocaleDateString()});
        }}
      />
      <TouchableOpacity
        style={{marginTop: 40}}
        onPress={() => props.navigation.pop()}>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{`<`}</Text>
      </TouchableOpacity>
      <View
        style={{alignSelf: 'center', justifyContent: 'center', height: hp('12%')}}>
        <Text style={styles.enterLabel}> Hello!</Text>
        <Text style={styles.detLabel}>
          Get started in few seconds for free{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: wp('90%')
        }}>
        <TextInput
          ref={_refFname}
          autFocus={true}
          style={styles.nameText}
          placeholder="First Name*"
          returnKeyType='next'
          onChangeText={(txt) => changeHandler('firstName', txt)}
          onSubmitEditing={() => _refLastName.current.focus()}
          blurOnSubmit={true}
        />
        <TextInput
        ref={_refLastName}
          style={styles.nameText}
          placeholder="Last Name*"
          returnKeyType='next'
          onChangeText={(txt) => changeHandler('lastName', txt)}
          onSubmitEditing={() => setOpenDateModal(true)}
          blurOnSubmit={true}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: wp('90%')
        }}>
        <View style={styles.dobText}>
          <TouchableOpacity
            onPress={() => setOpenDateModal(true)}
            style={{
              width: wp('37%'),
              height: hp('100%'),
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: Font.radius,
              marginLeft: wp('0.5%'),
              alignSelf: 'flex-start',
              flexDirection: 'row',
            }}>
            <Text>{authData.dob ? authData.dob : `DOB`}</Text>
            <View>
              <Image
                style={{width: wp('4%'), height: wp('4%')}}
                resizeMode="contain"
                source={require('../assets/calendarImg.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: wp('0.2%'),
            width: wp('45%'),
            marginTop: hp('1%'),
            borderColor: Font.bdrColor,
            borderRadius: Font.radius,
            justifyContent: 'space-between'
          }}>
          <Picker
            selectedValue={authData.gender}
            style={{
              height: hp('6%'),
              width: wp('46%'),
              justifyContent: 'space-around',
              borderColor: Font.bdrColor,
            }}
            onValueChange={(itemValue, itemIndex) =>
              changeHandler('gender', itemValue)
            }>
            <Picker.Item label="Gender" value=" " />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
          </Picker>
        </View>
      </View>

      <View
        style={{
          borderWidth: wp('0.2%'),
          width: wp('90%'),
          marginTop: hp('1%'),
          borderColor: Font.bdrColor,
          borderRadius: Font.radius,
        }}>
        <Picker
          selectedValue={authData.country}
          style={{
            height: hp('6%'),
            width: wp('90%'),
            borderWidth: wp('0.2%'),
            justifyContent: 'space-around',
            borderColor: Font.bdrColor,
            marginLeft: wp('1%'),
          }}
          onValueChange={(itemValue, itemIndex) =>{
            changeHandler('country', itemValue)
            _refEmail.current.focus()
          }
          }>
          <Picker.Item label="Country" value="country" />
          <Picker.Item label="Afghanistan" value="Afghan" />
          <Picker.Item label="Bangladesh" value="Bng" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Pakistan" value="Pak" />
        </Picker>
      </View>
      <TextInput
      ref={_refEmail}
        style={styles.emailText}
        placeholder="Email*"
          onSubmitEditing={() => _refPassword.current.focus()}
          blurOnSubmit={true}
          returnKeyType='next'
        onChangeText={(txt) => changeHandler('email', txt)}
      />

      <View style={{marginVertical: hp('1%')}}>
        <TextInput
        ref={_refPassword}
          style={[styles.passwordText, {paddingRight: wp('4.5%')}]}
          secureTextEntry={showPas}
           onSubmitEditing={() => _refReEnterPassword.current.focus()}
          blurOnSubmit={true}
          returnKeyType='next'
          placeholder="Password*"
          value={authData.password}
          onChangeText={(txt) => changeHandler('password', txt)}
        />
        <TouchableOpacity
          onPress={() => setShowPass((oldFlag) => !oldFlag)}
          style={{position: 'absolute', right: wp('5%'), top: hp('2.3%')}}>
          <Image
            style={{
              width: wp('4%'),
              height: wp('4%'),
            }}
            resizeMode="contain"
            source={require('../assets/eyeImg.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Text style={{width: wp('90%'), marginLeft: wp('2%')}}>
        Password must be at least 8 characters long. To make it stronger, use
        upper and lower case letters, numbers and symbols
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
        ref={_refReEnterPassword}
          secureTextEntry={showRePas}
          style={[styles.passwordText, {paddingRight: wp('4.5%')}]}
          placeholder="Re-enter Password*"
          value={authData.reEnterPassword}
          onChangeText={(txt) => changeHandler('reEnterPassword', txt)}
        />
        <TouchableOpacity
          onPress={() => setShowRePass((oldFlag) => !oldFlag)}
          style={{position: 'absolute', right: wp('5%'), top: hp('2.3%')}}>
          <Image
            style={{
              width: wp('4%'),
              height: wp('4%'),
            }}
            resizeMode="contain"
            source={require('../assets/eyeImg.jpg')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={false}
        onPress={() => btnSignUpHandler()}
        style={{
          backgroundColor: Font.bdrColor,
          width: wp('90%'),
          justifyContent: 'center',
          height: hp('6%'),
          borderRadius: Font.radius,
          marginTop: hp('1%'),
          alignSelf: 'center',
          marginLeft: wp('0.1%')
        }}>
        <View>
          <Text style={{color: '#fff', textAlign: 'center'}}>NEXT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  enterLabel: {
    fontFamily: 'Noto Sans',
    height: hp('5.5%'),
    textAlign: 'center',
    fontSize: wp('10%'),
    color: 'black',
    marginBottom: hp('1%')
  },
  detLabel: {
    fontFamily: 'Noto Sans',
    marginTop: hp('1%'),
    textAlign: 'center',
    fontSize: wp('3%'),
    color: 'black',
  },
  dobText: {
    paddingLeft: wp('1%'),
    width: wp('44%'),
    height: hp('6%'),
    justifyContent: 'center',
    marginTop: hp('1%'),
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth: wp('0.2%'),
  },
  genderPicker: {
    paddingLeft: wp('0.1%'),
    width: wp('44%'),
    height: hp('6%'),
    marginTop: hp('1%'),
    justifyContent: 'space-between',
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth: wp('0.2%'),
  },
  nameText: {
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    width: wp('44%'),
    height: Font.btnHeight,
    marginTop: hp('1%'),
    justifyContent: 'space-between',
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth: wp('0.2%'),
  },

  emailText: {
    width: wp('90%'),
    height: Font.btnHeight,
    marginTop: wp('2%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    marginRight: wp('1%'),
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth: wp('0.2%'),
  },
  passwordText: {
    width: wp('90%'),
    height: Font.btnHeight,
    marginTop: wp('0.6%'),
    paddingLeft: wp('1%'),
    paddingRight: wp('1%'),
    marginRight: wp('1%'),
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth: wp('0.2%'),
  },
});
