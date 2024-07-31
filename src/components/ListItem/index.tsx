import * as C from './styles';
import { Item } from '../../types';
import DeleteButton from '../button';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
    onDelete: (id: number) => void
}

export const ListItem = ({ item, onChange,onDelete }: Props) => {
    return (
        <C.Container done={item.done}>
            <input
                type="checkbox"
                checked={item.done}
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>{item.name}</label>
            <DeleteButton onClick={()=>onDelete(item.id)}/>

        </C.Container>
    );
}
