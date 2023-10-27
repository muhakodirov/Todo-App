import Button from "../UI/Button";
import { AiFillDelete } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';


function TodoActions() {

    return <>

        <Button title='Delete all Todos'> <BiReset /> </Button>
        <Button title='Delete completed Todos'> <AiFillDelete /> </Button>

    </>
}

export default TodoActions;