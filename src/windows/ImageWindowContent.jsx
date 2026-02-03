import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React from 'react'

const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;
    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            {/* Header */}
            <div id="window-header" className="select-none cursor-default" >
                <WindowControls target="imgfile" />
                <h2 className="truncate pointer-events-none" >{name}</h2>
            </div>
            <div className="w-full h-[calc(100%-48px)] overflow-auto flex items-center justify-center p-5">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt={name}
                        className="w-full h-full object-contain"
                    />
                )}
            </div>
        </>
    );
};

export default WindowWrapper(ImageWindowContent, 'imgfile')