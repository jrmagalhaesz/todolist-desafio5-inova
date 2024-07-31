import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>(JSON.parse(localStorage.getItem('items') || "[]"));

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
    localStorage.setItem('items', JSON.stringify(newList));
  }

  const handleTaskChange = (id: number, done: boolean) => {
    const newList = list.map(item =>
      item.id === id ? { ...item, done } : item
    );
    setList(newList);
    localStorage.setItem('items', JSON.stringify(newList));
  }

  const handleDeleteTask = (id: number) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
    localStorage.setItem('items', JSON.stringify(newList));
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>To-do List | Desafio 5</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map(item => (
          <ListItem
            key={item.id}
            item={item}
            onChange={handleTaskChange}
            onDelete={handleDeleteTask}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
