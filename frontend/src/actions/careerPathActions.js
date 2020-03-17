export function fetchCareerPaths() {
  return dispatch => {
    dispatch({ type: "START_ADDING_CAREER_PATHS_REQUEST" });
    fetch("http://localhost:3000/api/v1/career_paths")
      .then(response => response.json())
      .then(careerPaths => {
        return dispatch({
          type: "ADD_CAREER_PATHS",
          careerPaths: careerPaths
        });
      })
      .catch(error => console.log(error));
  };
}

const addCareerPath = careerPath => {
  return {
    type: "ADD_CAREER_PATH",
    careerPath
  };
};

export const createCareerPath = careerPath => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/career_paths", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(careerPath)
    })
      .then(res => res.json())
      .then(careerPath => {
        dispatch(addCareerPath(careerPath));
      })
      .catch(error => console.log(error));
  };
};

export const editCareerPath = (careerPath, courseId) => {
  return dispatch => {
    return fetch(
      `http://localhost:3000/api/v1/career_paths/${careerPath.id}/courses/${courseId}`,
      {
        method: "PATCH"
      }
    )
      .then(res => res.json())
      .then(careerPath => {
        dispatch({ type: "EDIT_CAREER_PATH", careerPath });
      })
      .catch(error => console.log(error));
  };
};
