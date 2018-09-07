import React, {PropTypes}  from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
class CoursesPage extends React.Component {
    constructor(props) {
        super(props);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    }   

 courseRow(course, index) {
     return <div key={index}>{course.title}</div>;
 }

 redirectToAddCoursePage() {
     browserHistory.push('/course');
 }
    render() {
        const {courses} = this.props;

       return (
       <div>
            <h1>Courses</h1>
            <input type="submit"
            valaue="add Course"
            className="btn btn-primary"
            onClick={this.redirectToAddCoursePage} />
            <CourseList courses={courses} />
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
//line 44 state is from redux root reducer not react state