import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState, TypedDispatch } from '.';

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
