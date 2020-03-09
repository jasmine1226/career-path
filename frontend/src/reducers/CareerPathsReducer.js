const CareerPathsReducer = (
  state = {
    careerPaths: [
      { title: "Software Developer" },
      { title: "Solution Archtect" },
      { title: "UI/UX Designer" },
      { title: "Product Manager" },
      { title: "Technical Program Manager" }
    ]
  },
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CareerPathsReducer;
