
const Total = ({parts}) => {
    let sum = 0
    const output = parts.reduce((sum, part)=>{
        return sum + part.exercises
    },0)
    return (
        <h3>{"total of " + output + " exercises"}</h3>
    )
}

export default Total