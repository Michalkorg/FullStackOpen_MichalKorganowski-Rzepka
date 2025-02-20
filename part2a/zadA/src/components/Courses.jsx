const Header = ({ course }) => (
  <div>
    <br /> <h2>{course}</h2> {/*w naglowku*/}
  </div>
);
const Total = ({ parts }) => (
  <p>
    <b>
      total of {parts.map((mp) => mp.exercises).reduce((suma, exercises) => suma + exercises)}{' '}
      exercises
    </b>
    {/*map pobiera wartosc exercises
    suma kursow */}
  </p>
);
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((p, i) => (
      <Part key={i} name={p.name} exercises={p.exercises} />
    ))}
  </>
);
const Course = ({ course }) => (
  <div>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
);
const Courses = ({ courses }) => (
  <div>
    {courses.map((course) => (
      <Course course={course} />
    ))}
  </div>
);

export default Courses;