const CareerPathsReducer = (
  state = {
    careerPaths: [],
    courses: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
    // load all career paths
    case "START_ADDING_CAREER_PATHS_REQUEST":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: true
      };
    case "ADD_CAREER_PATHS":
      return {
        ...state,
        careerPaths: action.careerPaths,
        courses: [...state.courses],
        loading: false
      };
    // load courses
    case "START_ADDING_COURSES_REQUEST":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: true
      };
    case "ADD_COURSES":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: action.courses,
        loading: false
      };
    // create new course
    case "START_CREATE_COURSE_REQUEST":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: true
      };
    case "ADD_COURSE":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses, action.course],
        loading: false
      };
    case "CREATE_COURSE":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: false
      };
    // create new career path
    case "START_CREATE_CAREER_PATH_REQUEST":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: true
      };
    case "ADD_CAREER_PATH":
      return {
        ...state,
        careerPaths: [...state.careerPaths, action.careerPath],
        courses: [...state.courses],
        loading: false
      };
    case "CREATE_CAREER_PATH":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: false
      };
    // delete career path
    case "DELETE_CAREER_PATH":
      let careerPaths = state.careerPaths.filter(
        careerPath => careerPath.id !== action.id
      );
      return { ...state, careerPaths: careerPaths };
    // update career path
    case "EDIT_CAREER_PATH":
      let editedCareerPaths = state.careerPaths.map(careerPath => {
        if (careerPath.id === action.careerPath.id) {
          return action.careerPath;
        } else {
          return careerPath;
        }
      });
      return {
        ...state,
        careerPaths: editedCareerPaths,
        courses: [...state.courses],
        loading: false
      };
    default:
      return state;
  }
};

export default CareerPathsReducer;
