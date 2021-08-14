import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import { TAppDispatch, TAppState } from 'store/store.types';

export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<TAppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
