import React, {useState,useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Text,
  TextInput,
  Keyboard,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Font from '../constant/Font';

const HEIGHT = Dimensions.get('screen').height;
const WIDTH = Dimensions.get('screen').width;

const SignIn = (props) => {
  const _refUsername=useRef();
  const _refPassword=useRef();

  const [showPas,setShowPass]=useState(true)
  const [authData, setAuthData] = useState({
    email: '',
    password: '',
  });

  const changeHandler = (key, value) => {
    setAuthData({...authData, [key]: value});
  };
  console.log(authData);
  const errorHandler = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var patt = new RegExp(regex);
    if (!authData.email) {
      return {
        message: 'Oops it seems you forget to enter email',
        status: false,
      };
    } else if (!patt.test(authData.email)) {
      return {
        message: 'Oops it seems your email is not correct',
        status: false,
      };
    } else if (!authData.password || authData.password.length<8 || authData.password.length> 12) {
      return {
        message: 'Oops it seems you forget to enter password',
        status: false,
      };
    } else {
      return {status: true, message: 'all fields are filled correctly'};
    }
  };
  const btnSignInHandler = () => {
    try {
      let returnStatus = errorHandler();
      if (returnStatus.status) {
        alert('Successfully sign in');
      } else {
        alert(returnStatus.message);
      }
    } catch (error) {}
  };
  const emailValidator = (email) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var patt = new RegExp(regex);
    if (!patt.test(email))
        return false
    return true;
  }
  return (
    <View style={{flex: 1,alignSelf:'center'}}>
      <ScrollView contentContainerStyle={{paddingHorizontal: wp('6%')}}>
        <TouchableOpacity
          disabled={false}
          onPress={() => alert('Ms Saira')}
          style={{
            justifyContent: 'center',
            height: hp('5%'),
            borderRadius: Font.radius,
            marginTop: hp('1%'),
            
          }}>
          <View>
            <Text
              style={{
                color: '#000',
                fontSize: wp('7%'),
                fontWeight: 'bold',
              }}>{`<`}</Text>
          </View>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', height: hp('25%')}}>
          <Text style={styles.welcomeLabel}> Welcome!</Text>
          <Text style={styles.hopeLabel}> Hope you enjoy the stay! </Text>
        </View>
        <TextInput
        ref={_refUsername}
        autoFocus={true}
          value={authData.email}
          blurOnSubmit={true}
          returnKeyType='next'
          onChangeText={(txt) => changeHandler('email', txt)}
          style={emailValidator(authData.email) || authData.email.length===0?styles.usernameText:[styles.usernameText,{borderColor:'red'}]}
          placeholder="Username or Email"
          onSubmitEditing={() => _refPassword.current.focus()}
        />
        <View style={{}}>
        <TextInput
        ref={_refPassword}
        blurOnSubmit={true}
          value={authData.password}
          returnKeyType='next'
          secureTextEntry={showPas}
          onChangeText={(txt) => changeHandler('password', txt)}
          style={styles.passwordText}
          placeholder="Password"
          onSubmitEditing={()=>Keyboard.dismiss()}
        />
        <TouchableOpacity 
        onPress={()=>setShowPass(oldFlag=>!oldFlag)}
        style={{position: 'absolute',
            right: wp('3%'),
            top: hp('2%'),}}>
        <Image
          style={{
            width: wp('8%'),
            height: wp('8%'),
          }}
          resizeMode="contain"
          source={require('../assets/eyeImg.jpg')}
        />
        </TouchableOpacity>
        </View>
        <TouchableOpacity 
        activeOpacity={0.9}
            onPress={() => props.navigation.navigate('ForgetPass',{name:'Saira'})}>
            <Text style={styles.forgotPasswordTxt}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => btnSignInHandler()}
          style={{
            backgroundColor: '#19A5D3',
            width: wp('90%'),
            justifyContent: 'center',
            height: hp('6%'),
            borderRadius: Font.radius,
            marginTop: hp('1%'),
            alignSelf: 'center',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Sign In</Text>
        </TouchableOpacity>
        <Text style={styles.accLabel}>
          --------------------Don't have an account?-------------------
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')}
          style={{
            backgroundColor: 'black',
            width: wp('90%'),
            justifyContent: 'center',
            height: hp('6%'),
            borderRadius: Font.radius,
            marginTop: hp('1%'),
            alignSelf: 'center',
          }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.termsLabel}>
          You agree to the following terms & conditions and are of legal age
          above 16.
        </Text>
      </ScrollView>
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({

  termsLabel: {
    width: wp('90%'),
    marginTop: hp('5%'),
    textAlign: 'center',
  },
  accLabel: {
    width: wp('90%'),
    marginVertical: hp('2%'),
    textAlign: 'center',
  },

  forgotPasswordTxt: {
    textAlign: 'right',
    marginVertical:hp('2%')
  },
  usernameText: {
    width: wp('90%'),
    height: Font.btnHeight,
    marginVertical: hp('2%'),
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth:Font.bdrWidth,
    paddingHorizontal: wp('5%'),
    alignSelf:'center'
  },
  passwordText: {
    width: wp('90%'),
    height: Font.btnHeight,
    marginVertical: hp('1%'),
    borderRadius: Font.radius,
    borderColor: Font.bdrColor,
    borderWidth:Font.bdrWidth,
    paddingLeft: wp('5%'),
    paddingRight: wp('20%'),
    alignSelf:'center'
  },
  welcomeLabel: {
    fontFamily: 'Noto Sans',
    // width: wp('100%'),
    marginTop: hp('1%'),
    textAlign: 'center',
    fontSize: wp('10%'),
    color: 'black',
  },
  hopeLabel: {
    fontFamily: 'Noto Sans',
    // width: wp('100%'),
    marginTop: hp('1%'),
    textAlign: 'center',
    fontSize: wp('5%'),
    color: 'black',
  },
 
});
