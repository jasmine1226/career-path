export const fetchCourses = () => {
  return dispatch => {
    dispatch({ type: "START_ADDING_COURSES_REQUEST" });
    fetch("http://localhost:3000/api/v1/courses")
      .then(response => response.json())
      .then(courses => {
        return dispatch({ type: "ADD_COURSES", courses: courses });
      })
      .catch(error => console.log(error));
  };
};

const addCourse = course => {
  return {
    type: "ADD_COURSE",
    course
  };
};

export const createCourse = course => {
  console.log("createCourse action called");
  return dispatch => {
    dispatch({ type: "START_CREATE_COURSE_REQUEST" });
    return fetch("http://localhost:3000/api/v1/courses", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(course)
    })
      .then(res => res.json())
      .then(course => {
        dispatch(addCourse(course));
      })
      .catch(error => console.log(error));
  };
};
