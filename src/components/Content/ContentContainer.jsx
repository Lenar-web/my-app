import {compose} from 'redux';
import Content from './Content';
import { widthAuthRedirect } from '../../hoc/withAuthRedirect';

export default compose(
  widthAuthRedirect
)(Content)