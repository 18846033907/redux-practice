import { connect } from 'react-redux';
import { AddNumber, DeNumber } from '../../actions';
import Counter from '../../components/counter/Counter';

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  AddNumber: () => dispatch(AddNumber()),
  DeNumber: () => dispatch(DeNumber()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
