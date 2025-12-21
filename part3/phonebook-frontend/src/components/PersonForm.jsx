const PersonForm = ({addPerson, newName, newNumber, handleInputPerson, handleInputPhone}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                name: <input  value = {newName} onChange={handleInputPerson}/>
            </div>
            <div>
                number: <input value = {newNumber} onChange ={handleInputPhone}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm