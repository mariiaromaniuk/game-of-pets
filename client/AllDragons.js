import React from "react";
import { connect } from "react-redux";
// importing the thunk
import { fetchDragons } from "./reducers/dragonReducer";

class AllDragons extends React.Component {

  // We want to move all the AJAX request from React to Redux
  // so React wil be responsible only for the view, not state
  componentDidMount() {
    this.props.fetchDragons();
  }

  render() {
    let dragons = this.props.dragons;
    if (this.props.loading) return <h1>...Loading!!!</h1>
    return (
      <div>
        <ul>
          {dragons.map(dragon => (
            <li key={dragon.id}>
              <h2>Dragon: {dragon.name}</h2>
              <img src={dragon.imageUrl} height="400" width="600" />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  console.log('STATE: ', state);
  return {
    dragons: state.dragons.all,
    loading: state.dragons.loading
  };
};

const mapDispatch = dispatch => ({
  fetchDragons: () => dispatch(fetchDragons())
});

export default connect(
  mapState,
  mapDispatch
)(AllDragons);
