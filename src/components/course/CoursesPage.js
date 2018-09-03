import React, {PropTypes}  from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
    }    

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
       return (
       <div>
            <h1>Courses</h1>
            {this.props.courses.map(this.courseRow)}
        </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired

};

function mapStateToProps(state, ownProps) {
   return { 
    courses: state.courses
   };
}

 function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(courseActions, dispatch)
    };

 }
//ownProps usefull with react-router
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
//if we delete mDTP it will inject it automatically and we dispatch direct i.e this.props.dispatch,okay not best way