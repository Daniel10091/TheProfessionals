import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Colors.bgColor1,
  },
  navigation: {
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    backgroundColor: Colors.bgColor3,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  button: {
    width: 64,
    height: 64,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonIcon: {
    fontSize: 24,
    color: Colors.textColor1,
  },
  buttonAvatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  buttonLabel: {
    marginTop: 8,
    fontSize: 12,
    color: Colors.textColor1,
  },
  profileLabel: {
    marginTop: 6,
  },
});

export default styles;
