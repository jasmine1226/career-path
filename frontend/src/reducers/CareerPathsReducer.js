const CareerPathsReducer = (
  state = {
    careerPaths: [
      { title: "Software Developer" },
      { title: "Solution Archtect" },
      { title: "UI/UX Designer" },
      { title: "Product Manager" },
      { title: "Technical Program Manager" }
    ],
    courses: [
      {
        title: "AWS re:Invent 2019 - Keynote with Andy Jassy",
        url: "https://www.youtube.com/watch?v=7-31KgImGgU&t=120s",
        length: 160
      },
      {
        title: "AWS Certified Cloud Practitioner Training 2020 - Full Course",
        url: "https://www.youtube.com/watch?v=3hLmDS179YE",
        length: 240
      },
      {
        title: "How to Know Your Customers by Amazon Sr Product Manager",
        url: "https://www.youtube.com/watch?v=JCmOKM8wZnE",
        length: 67
      },
      {
        title: "Amazon's 14 Leadership Principles via Jeff Bezos",
        url: "https://www.youtube.com/watch?v=B-xdfQv3I1k&t=9s",
        length: 20
      },
      {
        title:
          "Amazon's Sr. UX Designer, Ankur Sardana, on Innovation, Design & Ethics",
        url: "https://www.youtube.com/watch?v=tr_mT9-T3hM",
        length: 23
      },
      {
        title: "What is Agile?",
        url: "https://www.youtube.com/watch?v=Z9QbYZh1YXY&t=12s",
        length: 12
      }
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
