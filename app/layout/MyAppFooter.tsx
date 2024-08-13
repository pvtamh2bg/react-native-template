import { Text, View } from 'react-native';
import {
  useTheme,
} from '@aws-amplify/ui-react-native';

const MyAppFooter = () => {
  const {
    tokens: { space, fontSizes },
  } = useTheme();

  return (
    <View>
      <Text
        style={{
          fontSize: fontSizes.xxl,
          paddingTop: space.xxl,
          textAlign: 'center'
        }}
      >
        My Custom Footer
      </Text>
    </View>
  );
}

export default MyAppFooter
