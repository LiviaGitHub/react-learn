import React from 'react';

const CourseList = () => {
  const courses = [
    {
      name: 'react',
      description:
        'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
      name: 'angular',
      description:
        'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
      name: 'vue',
      description:
        'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions get executed for which event.',
    },
  ];

  return (
    <div>
      <h1>Course List</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.name}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
