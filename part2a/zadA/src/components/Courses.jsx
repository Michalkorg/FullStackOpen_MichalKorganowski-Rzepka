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
    {/*map pobiera wszystkie wartosci exercises
     (w tabele) */}
  </p>
);
const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

{/*nadanie odpowiedniego name i exercise*/}
const Content = ({ parts }) => (
  <>
    {parts.map((par, index) => (
      <Part key={index} name={par.name} exercises={par.exercises} />
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
{/*przekazanie course jako wlasciwosc*/}
const Courses = ({ courses }) => (
  <div>
    {courses.map((course) => (
      <Course course={course} />
    ))}
  </div>
);

export default Courses;