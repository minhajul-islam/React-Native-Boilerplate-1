import {StyleSheet} from 'react-native';
import {textStyle} from '../../constants';
import {theme} from '../../theme';

const {colors} = theme;

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    backgroundColor: colors.primary,
  },
  tab: {justifyContent: 'center', alignItems: 'center'},
  tabText: {color: colors.white, ...textStyle.medium, paddingTop: 3},
});
