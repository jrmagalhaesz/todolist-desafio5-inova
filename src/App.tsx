import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    const newList = list.map(item => 
      item.id === id ? { ...item, done } : item
    );
    setList(newList);
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
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;










