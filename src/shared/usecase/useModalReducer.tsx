import { useReducer } from 'react';
import { type FormInstance } from 'antd';

const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SET_FEEDBACK = 'SET_FEEDBACK';

export interface IModalState {
  isOpen: boolean;
  feedback: string;
  id?: string;
}

export interface IModalReducerReturn {
  modalState: IModalState;
  openModal: (id: string) => void;
  closeModal: () => void;
  setFeedback: (feedback: string) => void;
}

type Action =
  | { type: 'OPEN_MODAL'; id: string }
  | { type: 'CLOSE_MODAL' }
  | { type: 'SET_FEEDBACK'; feedback: string };

const modalReducer = (state: IModalState, action: Action): IModalState => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        id: action.id,
        feedback: '',
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        id: undefined,
        feedback: '',
      };
    case SET_FEEDBACK:
      return {
        ...state,
        feedback: action.feedback,
      };
    default:
      return state;
  }
};

const initialState: IModalState = {
  isOpen: false,
  feedback: '',
  id: undefined,
};

const useModalReducer = (form?: FormInstance<any>): IModalReducerReturn => {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  const openModal = (id: string) => {
    dispatch({ type: OPEN_MODAL, id });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
    if (form) form.resetFields(['feedback']);
  };

  const setFeedback = (feedback: string) => {
    dispatch({ type: SET_FEEDBACK, feedback });
  };

  return { modalState, openModal, closeModal, setFeedback };
};

export default useModalReducer;
