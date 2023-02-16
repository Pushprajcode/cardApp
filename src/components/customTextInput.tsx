import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {forwardRef} from 'react';
import {useState} from 'react';
import {COLORS} from '@cardapp/themes/colors';
import {normalize, vh, vw} from '@cardapp/utils/dimensions';

interface props {
  value?: string | undefined;
  inputStyle?: any;
  onchange?: any;
  placeholder: any;
  placeholdertextColor?: any;
  onBlur?: () => void;
  onFocus?: () => void;
  keyboardType?: KeyboardTypeOptions;
  onSubmitEditing?: any;
  multiline?: boolean;
  autoFocus?: boolean;
  maximumLength?: number;
  customInputStyle?: any;
  ContentContainerStyle?: any;
  onChangeText?: Function;
  autoCapitalize?: any;
  //   maxLength?: any;
  returnKeyType?: ReturnKeyTypeOptions;
  isSecure?: boolean;
  secureTextEntry?: boolean;
  dropDownIcon?: any;
}
/**
 *  * this is used for common field component
 * @param {string | undefined} returnKeyType - show keyboard button text label
 * @param {string} label - field label
 * @param {string | undefined} keyboardType - keyboard type like alpha-numerical, numpad and so on
 * @param customStyle - custom styling for field
 * @param {string | undefined} error - error string for particular field if any error present at the time
 * @param {string} error - error string for particular field if any error present at the time
 * @param {string} value - field value
 * @param {booelan} isSecure - field secure in the case of password managing by this key
 * @param {boolean} starStatus - render asterisk symbol with field lable for showing that field is mandatory or non-mandatory
 * @param {Function} onSubmitEditing - on hit submit/enter button of keyboard event handler
 * @param {Function} onChangeText - on change and update field value event handler
 * @param {string} fieldName - field name so we can identify field and update value
 * @param {boolean} multiline - to control line of field in the case of text area field/ description field
 * @param {boolean} disabled - to set field in the enabled/disabled mode
 * @param {number} maxLength - to control max length of characters for field
 * @param {string} autoCapitalize - keyboard features
 * @param {Function} onBlur - on blur event handler
 * @param {Function} onFocus - on focus event handler
 * @param componentContainerStyle - container styling
 * @param customTextStyle - field value styling
 *  * @param autoFocus - when we reached to screen the cursor will be on  specific field which we given this property
 */

const CustomTextInput = forwardRef((props: props, ref: any) => {
  const [toggle, setToggle] = useState(false);
  const {
    value,
    inputStyle,
    onchange,
    placeholder,
    placeholdertextColor,
    keyboardType,
    maximumLength,
    multiline,
    secureTextEntry,
    autoFocus,
    dropDownIcon,
    onSubmitEditing,
  } = props;
  console.log('dropdeown', dropDownIcon);
  return (
    <View style={styles.containerView}>
      <TextInput
        ref={ref}
        style={[styles.input, inputStyle]}
        onChangeText={onchange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholdertextColor}
        keyboardType={keyboardType}
        maxLength={maximumLength}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        onSubmitEditing={onSubmitEditing}
      />
      <TouchableOpacity>
        <Image
          style={styles.dropIconStyle}
          source={dropDownIcon}
          resizeMode={'contain'}
          resizeMethod={'resize'}
        />
      </TouchableOpacity>
    </View>
  );
});
export default CustomTextInput;
const styles = StyleSheet.create({
  containerView: {
    margin: normalize(16),
    paddingVertical: normalize(16),
    borderWidth: vw(1),
    borderRadius: normalize(28),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: normalize(10),
    borderColor: COLORS.lightGrey,
    color: COLORS.red,
    paddingLeft: normalize(6),
    paddingVertical: 0,
    width: '84%',
    // justifyContent: 'center',
  },
  dropIconStyle: {
    height: vh(10),
    width: vw(10),
    justifyContent: 'flex-end',
    // borderWidth: 2,
    // right: 10,
    // borderWidth: 1,
  },
});
