import { useRef } from 'react';
import TextareaFiled from '../Forms/TextareaFiled';
import TextFiled from '../Forms/TextFiled';
import Button from './Button';

function TasksForm({ isCounterStarted, counterStarted, onSubmit }) {
  const title = useRef();
  const description = useRef();

  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit({
      title: title.current.value,
      description: description.current.value,
    });
    title.current.value = '';
    description.current.value = '';
    console.log(title.current, description.current);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='mb-3'>
        <TextFiled ref={title} title='Titre' placeholder='Titre simple..' />
      </div>
      <div className='mb-3'>
        <TextareaFiled
          ref={description}
          description='Description'
          placeholder='Décrivez votre Story..'
        />
      </div>
      <Button type='button' isCounterStarted={isCounterStarted}>
        {counterStarted ? 'Stop' : 'Start'}
      </Button>
    </form>
  );
}

export default TasksForm;
