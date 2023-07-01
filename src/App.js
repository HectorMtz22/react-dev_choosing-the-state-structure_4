import { useState, useEffect } from 'react';
import { letters } from './data.js';
import Letter from './Letter.js';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState({});
  const [selectedCount, setSelectedCount] = useState(1)
  useEffect(() => {
    letters.map(({isStarred, id}) => {
      setSelectedIds(array => ({...array , [id]: isStarred}))
    })
  }, [])

  function handleToggle(toggledId) {
    // TODO: allow multiple selection
    const newSelect = {...selectedIds, [toggledId]: !selectedIds[toggledId]}
    setSelectedIds(newSelect);

    let counter = 0
    Object.values(newSelect).forEach((value) => {
      console.log(value)
      if (value) counter++
    })
    setSelectedCount(counter)
    console.log(newSelect)
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              // TODO: allow multiple selection
              selectedIds[letter.id]
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
