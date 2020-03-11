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
    case "START_CREATE_COURSE_REQUEST":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: true
      };
    case "ADD_COURSE":
      const course = {
        id: action.course.id,
        attributes: {
          title: action.course.title,
          url: action.course.url,
          length: action.course.length
        }
      };
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses, course],
        loading: false
      };
    case "CREATE_COURSE":
      return {
        ...state,
        careerPaths: [...state.careerPaths],
        courses: [...state.courses],
        loading: false
      };
    default:
      return state;
  }
};

export default CareerPathsReducer;
