import {createContext, useContext} from 'react';

export const EventContext = createContext([]);

export function useEventContext() {
    return useContext(EventContext)
};