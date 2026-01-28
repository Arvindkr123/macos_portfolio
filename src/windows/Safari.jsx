import { WindowControls } from '#components'
import WindowWrapper from '#hoc/WindowWrapper'
import { PanelLeft } from 'lucide-react'
import React from 'react'

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target={'safari'} />
                <PanelLeft className='ml-10 icon'/>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')

export default SafariWindow