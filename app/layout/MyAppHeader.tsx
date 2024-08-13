import { Text, View } from 'react-native';
import {
  useTheme,
} from '@aws-amplify/ui-react-native';

const MyAppHeader = () => {
  const {
    tokens: { space, fontSizes },
  } = useTheme();

  return (
    <View>
      <Text
        style={{
          fontSize: fontSizes.xxl,
          paddingBottom: space.xxl,
          textAlign: 'center'
        }}
      >
        My Custom Header
      </Text>
    </View>
  );

}
export default MyAppHeader
