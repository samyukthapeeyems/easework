import {Text} from 'react-native';
export default function _Text(props) {
  return (
    <Text style={{color: 'black', ...props?.style}}>{props.children}</Text>
  );
}
