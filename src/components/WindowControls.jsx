import useWindowStore from '#store/window';
import { Minimize2, Minus, X } from 'lucide-react';

const WindowControls = ({ target }) => {
    const { closeWindow, toggleFullscreen } = useWindowStore();
    return (
        <div id='window-controls' className='cursor-pointer'>
            <div className='close inline-flex flex-center group cursor-pointer' onClick={() => closeWindow(target)}>
                <X className="size-4 opacity-0 group-hover:opacity-100 text-white" />
            </div>
            <div onClick={() => toggleFullscreen(target)} className='minimize inline-flex flex-center  group cursor-pointer'>
                <Minus className="size-4 opacity-0 group-hover:opacity-100 text-white" />
            </div>
            <div onClick={() => toggleFullscreen(target)} className='maximize inline-flex flex-center  group cursor-pointer'>
                <Minimize2 className="size-4 opacity-0 group-hover:opacity-100 text-white" />
            </div>
        </div>
    )
}

export default WindowControls