import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer';
const useWindowStore = create(immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    height:70,
    width:60,
    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
    }),
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
        win.isFullscreen = false
    }),
    toggleFullscreen: (key) =>
        set((state) => {
            const win = state.windows[key]

            win.isFullscreen = !win.isFullscreen
            win.zIndex = state.nextZIndex++

            if (win.isFullscreen) {
                win.prevWidth = win.width
                win.prevHeight = win.height
                win.width = 87
                win.height = 90
            } else {
                win.width = win.prevWidth
                win.height = win.prevHeight
            }
        }),
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        win.zIndex = state.nextZIndex++;
    }),
})));

export default useWindowStore;