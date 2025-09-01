import createId from './createId';

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT': {
      const newID = createId(state.students);
      const newStudent = { ...action.payload, id: newID };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case 'REMOVE_STUDENT': {
      return {
        ...state,
        students: [state.students].filter((students) => students.id !== action.payload),
      };
    }
    default:
      return state;
  }
}
