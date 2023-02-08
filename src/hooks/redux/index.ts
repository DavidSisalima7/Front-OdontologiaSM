import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux';
import { Dispatch, RootState } from '../../redux/store';

export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
