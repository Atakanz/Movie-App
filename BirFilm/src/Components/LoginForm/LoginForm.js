import React from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import FormUnit from '../TextInputs/TextInputs';
import Buttons from '../Buttons';
import styles from './LoginForm.style';

const LoginForm = props => {
  return (
    <SafeAreaView style={styles.enabledDirection}>
      <View>
        <View style={styles.logoView}>
          {props.isLogoExist && (
            <Image style={styles.logo} source={props.isLogoExist} />
          )}
          {/* if isLogoExist is undefined then not show here */}
        </View>
        <View style={styles.nameInput}>
          <FormUnit
            labelName="E-mail"
            holder={props.holder1}
            value={props.value1}
            task={props.emailFormTask}
            visibility={props.visibilityFalse}
          />
          <FormUnit
            labelName="Password"
            value={props.value2}
            holder={props.holder2}
            task={props.passwordFormTask}
            visibility={props.visibilityTrue}
          />

          {props.holder3 && (
            <FormUnit
              labelName="PasswordAgain"
              value={props.value3}
              holder={props.holder3}
              task={props.repasswordFormTask}
              visibility={props.visibilityTrue}
            />
            // passwordagain is shown only signup page
          )}
          <FormUnit
            labelName="User Name"
            value={props.value4}
            holder={props.holder4}
            task={props.userNameFormTask}
            visibility={props.visibilityFalse}
          />
        </View>
      </View>
      <View style={styles.buttonRow}>
        {props.name1 && <Buttons name={props.name1} task={props.task1} />}
        {props.name2 && <Buttons name={props.name2} task={props.task2} />}
        {/* signup page only has one button to navigate re-signın page. */}
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;
