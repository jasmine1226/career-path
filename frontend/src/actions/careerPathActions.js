export function fetchCareerPaths() {
  return dispatch => {
    dispatch({ type: "START_ADDING_CAREER_PATHS_REQUEST" });
    fetch("http://localhost:3000/api/v1/career_paths")
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(careerPaths => {
        console.log(careerPaths);
        return dispatch({ type: "ADD_CAREER_PATHS", careerPaths: careerPaths });
      });
  };
}
