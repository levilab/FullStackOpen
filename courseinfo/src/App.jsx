const App = () => {
 const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header courseName = {course.name}/>
      <Content parts = {course.parts}/>     
      <Total parts = {course.parts} />
    </div>
  )
}

const Header = (title) => {
  return (
    <h1>{title.courseName}</h1>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part name = {parts[0].name} exercises = {parts[0].exercises} />
      <Part name = {parts[1].name} exercises = {parts[1].exercises} />
      <Part name = {parts[2].name} exercises = {parts[2].exercises} />
    </div>
  )
}


const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}


const Total = ({parts}) => {
  /*
  props = [
    {name: part1, exercises: exercises1},
    {name: part2, exercises: exercises2},
    {name: part3, exercises: exercises3}
  ]

  if argument passed without braces, it would be:
  props = {parts: [...]}
  Then the code must retrieve the array via props.parts
  */
  const total = parts.reduce((sum, part)=> sum + part.exercises,0)
  return (<p>
    Number of exercises {total}
  </p>)
        
}


export default App