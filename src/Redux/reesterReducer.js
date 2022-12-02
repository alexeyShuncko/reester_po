import foto from '../image/profileFoto.svg';

const ADD_USERS = 'ADD_USERS';
const ADD_AUT = 'ADD_AUT';
const ADD_NOT = 'ADD_NOT';

let initialState = {
  users: {
    name: 'Захар',
    famili: 'Палазник',
    tel: '+375 22 111 33 44',
    pass: '1234',
    faser: 'Геннадьевич',
    sity: 'Минск',
    country: 'Беларусь',
  },
  foto: foto,
  autorize: false,
  notifications: ['Вы сохранили Имя', 'Вы сохранили Фамилию'],
};

const reesterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: action.data,
      };
    case ADD_AUT:
      return {
        ...state,
        autorize: action.data,
      };
    case ADD_NOT:
      return {
        ...state,
        notifications: [...state.notifications, action.data],
      };
    default:
      return state;
  }
};

export const updateNot = (data) => {
  return { type: ADD_NOT, data };
};
export const addUsers = (data) => {
  return { type: ADD_USERS, data };
};
export const addAut = (data) => {
  return { type: ADD_AUT, data };
};

export default reesterReducer;
