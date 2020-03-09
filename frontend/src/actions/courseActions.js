export function fetchCourses() {
  return dispatch => {
    dispatch({ type: "START_ADDING_COURSES_REQUEST" });
    fetch("http://localhost:3000/api/v1/courses")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(courses => {
        return dispatch({ type: "ADD_COURSES", courses: courses });
      });
  };
}
