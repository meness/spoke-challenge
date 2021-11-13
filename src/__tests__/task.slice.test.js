import reducer, { addTask, editTaskStatus, editTaskTitle, setTask, setTasks } from '../reducers/task/task.slice';

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({ tasks: [], task: {} });
});

it('should handle a task being added to an empty list', () => {
  const previousState = { tasks: [] };

  expect(reducer(previousState, addTask({ id: 1, userId: 1, title: 'Hello world', completed: false }))).toEqual({
    tasks: [{ id: 1, userId: 1, title: 'Hello world', completed: false }],
  });
});

it('should handle a task being added to an existing list', () => {
  const previousState = { tasks: [{ id: 1, userId: 1, title: 'Hello world', completed: false }] };

  expect(
    reducer(previousState, addTask({ id: 2, userId: 1, title: 'Hello from the other side', completed: true })),
  ).toEqual({
    tasks: [
      { id: 2, userId: 1, title: 'Hello from the other side', completed: true },
      { id: 1, userId: 1, title: 'Hello world', completed: false },
    ],
  });
});

it('should handle a list of tasks being set to an empty list', () => {
  const previousState = { tasks: [] };

  expect(
    reducer(
      previousState,
      setTasks([
        { id: 1, userId: 1, title: 'Hello world 1', completed: false },
        { id: 2, userId: 1, title: 'Hello world 2', completed: true },
        { id: 3, userId: 1, title: 'Hello world 3', completed: true },
      ]),
    ),
  ).toEqual({
    tasks: [
      { id: 1, userId: 1, title: 'Hello world 1', completed: false },
      { id: 2, userId: 1, title: 'Hello world 2', completed: true },
      { id: 3, userId: 1, title: 'Hello world 3', completed: true },
    ],
  });
});

it('should handle a task status being edited', () => {
  const previousState = { tasks: [{ id: 1, userId: 1, title: 'Hello world', completed: false }] };

  expect(reducer(previousState, editTaskStatus({ id: 1, userId: 1, title: 'Hello world', completed: true }))).toEqual({
    tasks: [{ id: 1, userId: 1, title: 'Hello world', completed: true }],
  });
});

it('should handle a task title being edited', () => {
  const previousState = {
    tasks: [{ id: 1, userId: 1, title: 'Hello world', completed: false }],
    task: { id: 1, userId: 1, title: 'Hello world', completed: false },
  };

  expect(
    reducer(previousState, editTaskTitle({ id: 1, userId: 1, title: 'Hello world new', completed: false })),
  ).toEqual({
    tasks: [{ id: 1, userId: 1, title: 'Hello world new', completed: false }],
    task: { id: 1, userId: 1, title: 'Hello world new', completed: false },
  });
});

it('should handle a task being set', () => {
  const previousState = { task: {} };

  expect(reducer(previousState, setTask({ id: 1, userId: 1, title: 'Hello world', completed: true }))).toEqual({
    task: { id: 1, userId: 1, title: 'Hello world', completed: true },
  });
});
