import { useState } from 'react'

// using array
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.lo g is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) // use array to store votes

  const handleRandomIndex = () => {
    let newIndex;
    do {
    newIndex = Math.floor(Math.random()  * anecdotes.length)

    } while (newIndex === selected)
    setSelected(newIndex)
  }

  const handleVote = () => {
    votes[selected] +=1
    setVotes([...votes])
  }

  const handleMostVoteindex = (votes) => votes.indexOf(Math.max(...votes))
  console.log(handleMostVoteindex(votes))
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>{"has " + votes[selected] + " votes"}</div>
      <button onClick = {handleRandomIndex}>next anecdote</button>
      <button onClick = {handleVote}>Vote</button>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[handleMostVoteindex(votes)]}</div>
      <div>{"has " + votes[handleMostVoteindex(votes)] + " votes"}</div>
    </div>
  )
}


// using object

const Vote = {0:0}
const newApp = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.lo g is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Vote)  // use object to store votes

  console.log("votes object", votes)

  const handleRandomIndex = () => {
    let newIndex;
    do {
    newIndex = Math.floor(Math.random()  * anecdotes.length)

    } while (newIndex === selected)
    
    setSelected(newIndex)
    if (votes[newIndex]===undefined) {votes[newIndex] = 0 }
    setVotes({...votes})
  }

  const handleVote = () => {
    votes[selected] +=1
    setVotes({...votes})
  }

  const handleMostVoteindex = (votes) => {
    let maxVotes = 0
    let maxIndex = 0
    for (const [index, count] of Object.entries(votes)){  // Object entries will
      if (count > maxVotes) {
        maxIndex = index
      }
    }
    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>{"has " + votes[selected] + " votes"}</div>
      <button onClick = {handleRandomIndex}>next anecdote</button>
      <button onClick = {handleVote}>Vote</button>

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[handleMostVoteindex(votes)]}</div>
      <div>{"has" + votes[handleMostVoteindex(votes)] + " votes"}</div>
    </div>
  )
}

export default App