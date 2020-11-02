import React, {useState} from 'react';
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

const SignUp = (props) => {
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
    } else if (!authData.password ||authData.password.length < 8 ||authData.password.length > 12) {
      return {
        message: 'Oops it seems you forget to enter password',
        status: false,
      };
    } else if (authData.reEnterPassword !== authData.password ) {
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
        paddingHorizontal: 20,
        paddingBottom: 20,
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
        style={{alignSelf: 'center', justifyContent: 'center', height: 150}}>
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
        }}>
        <TextInput
          style={styles.nameText}
          placeholder="First Name*"
          onChangeText={(txt) => changeHandler('firstName', txt)}
        />
        <TextInput
          style={styles.nameText}
          placeholder="Last Name*"
          onChangeText={(txt) => changeHandler('lastName', txt)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.dobText}>
          <TouchableOpacity onPress={() => setOpenDateModal(true)}
            style={{
              width: '80%',
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 8,
              marginLeft: 5,
              alignSelf: 'flex-start',
              flexDirection: 'row',
            }}>
            <Text>{authData.dob ? authData.dob : `DOB`}</Text>
            <View >
              <Image
                style={{width: 20, height: 20}}
                resizeMode="contain"
                source={require('../assets/calendarImg.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 1,
            width: '48%',
            marginTop: 10,
            borderColor: '#19A5D3',
            borderRadius: 8,
          }}>
          <Picker
            selectedValue={authData.gender}
            style={{
              height: 60,
              width: '100%',
              justifyContent: 'space-around',
              borderColor: '#19A5D3',
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
          borderWidth: 1,
          width: '100%',
          marginTop: 10,
          borderColor: '#19A5D3',
          borderRadius: 8,
        }}>
        <Picker
          selectedValue={authData.country}
          style={{
            height: 60,
            width: '100%',
            borderWidth: 1,
            justifyContent: 'space-around',
            borderColor: '#19A5D3',
            marginLeft: 10,
          }}
          onValueChange={(itemValue, itemIndex) =>
            changeHandler('country', itemValue)
          }>
          <Picker.Item label="Country" value="country" />
          <Picker.Item label="Afghanistan" value="Afghan" />
          <Picker.Item label="Bangladesh" value="Bng" />
          <Picker.Item label="France" value="France" />
          <Picker.Item label="Pakistan" value="Pak" />
        </Picker>
      </View>
      <TextInput
        style={styles.emailText}
        placeholder="Email*"
        onChangeText={(txt) => changeHandler('email', txt)}
      />

      <View style={{marginVertical: 10}}>
        <TextInput
          style={[styles.passwordText, {paddingRight: 45}]}
          secureTextEntry={showPas}
          placeholder="Password*"
          value={authData.password}
          onChangeText={(txt) => changeHandler('password', txt)}
        />
        <TouchableOpacity
          onPress={() => setShowPass((oldFlag) => !oldFlag)}
          style={{position: 'absolute', right: 20, top: 27}}>
          <Image
            style={{
              width: 20,
              height: 20,
            }}
            resizeMode="contain"
            source={require('../assets/eyeImg.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Text style={{width: '80%', marginLeft: 20}}>
        Password must be at least 8 characters long. To make it stronger, use
        upper and lower case letters, numbers and symbols
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          secureTextEntry={showRePas}
          style={[styles.passwordText, {paddingRight: 45}]}
          placeholder="Re-enter Password*"
          value={authData.reEnterPassword}
          onChangeText={(txt) => changeHandler('reEnterPassword', txt)}
        />
        <TouchableOpacity
          onPress={() => setShowRePass((oldFlag) => !oldFlag)}
          style={{position: 'absolute', right: 20, top: 25}}>
          <Image
            style={{
              width: 20,
              height: 20,
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
          backgroundColor: '#19A5D3',
          width: '100%',
          //  paddingVertical: 13,
          //  paddingHorizontal:
          justifyContent: 'center',
          height: 50,
          borderRadius: 8,
          marginTop: 10,
          alignSelf: 'center',
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
    height: 41,
    textAlign: 'center',
    fontSize: 32,
    color: 'black',
  },
  detLabel: {
    fontFamily: 'Noto Sans',

    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  dobText: {
    paddingLeft: 10,
    width: '50%',
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 8,
    borderColor: '#19A5D3',
    borderWidth: 1,
  },
  genderPicker: {
    paddingLeft: 10,
    width: '48%',
    height: 60,
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 8,
    borderColor: '#19A5D3',
    borderWidth: 1,
  },
  nameText: {
    paddingLeft: 10,
    paddingRight: 10,
    width: '48%',
    height: 60,
    marginTop: 10,
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 8,
    borderColor: '#19A5D3',
    borderWidth: 1,
  },

  emailText: {
    width: '100%',
    height: 60,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight:10,
    marginRight: 10,
    borderRadius: 8,
    borderColor: '#19A5D3',
    borderWidth: 1,
  },
  passwordText: {
    width: '100%',
    height: 60,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
    borderRadius: 8,
    borderColor: '#19A5D3',
    borderWidth: 1,
  },
});
