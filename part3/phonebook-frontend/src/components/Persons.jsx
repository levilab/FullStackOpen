const Persons = ({person, deletePerson}) => {
    return (
        <div>
            <p key = {person.id}> {person.name} {person.number} 
                <button onClick={deletePerson}>delete</button>
            </p>                 </div>
    )
}

export default Persons