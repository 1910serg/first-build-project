import React from 'react';
import { connect } from 'react-redux';

import { setCount } from '../actionsAndCreators';

const mapStateToProps = (store) => ({
  count: store.repos.count,
});

const mapDispatchToProps = (dispatch) => ({
  setCount: (count) => dispatch(setCount(count)),
});

function App(props) {
  const { count, setCount } = props;

  return (
    <div className="container">
      <h1 className="container_greetings">
        Hi there! I'm your first webpack build, Sergo!
      </h1>
      <div className="test">TEST!</div>

      <hr />

      <div className="icon"></div>

      <hr />

      <div className="scss_test">
        <h2>I AM THE SCSS</h2>
      </div>

      <div className="counterContainer">
        <button onClick={() => setCount(0)}>Рестарт</button>
        {`Count: ${count}`}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
