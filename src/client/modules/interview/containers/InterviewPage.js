import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '~/modules/interview/state/interview.ducks';
import TodoList from '~/modules/interview/components/TodoList';

import { textCenterStyle } from '~/styles/inline';

class InterviewPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div style={{ marginTop: 40 }}>
        <TodoList
          onAddClick={ this.props.actions.addTodoSaga }
          onDeleteClick={ this.props.actions.deleteTodoSaga }
          content={ this.props.interviewState.todoList } />
      </div>
    );
  }
}

InterviewPage.propTypes = {
  actions: PropTypes.object.isRequired,
  interviewState: PropTypes.object.isRequired
};

InterviewPage.contextTypes = {
  viewportHeight: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    interviewState: state.interviewAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterviewPage);
