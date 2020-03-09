const CareerPathsReducer = (
  state = {
    careerPaths: [],
    courses: [],
    loading: false
  },
  action
) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default CareerPathsReducer;
