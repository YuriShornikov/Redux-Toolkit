import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './components/Store';

// Создаем типизированный хук для useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Создаем типизированный хук для useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
 