import { WindowControls } from '#components';
import { locations } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper'
import useLocationStore from '#store/location';
import useWindowStore from '#store/window';
import clsx from 'clsx';
import { Search } from 'lucide-react';
import React from 'react'

const Finder = () => {
    const { activeLocation, setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore()
    console.log('active location', activeLocation);

    const renderList = (name, items) => {
        return <div>
            <h3>{name}</h3>
            <ul>
                {items.map((item) => {
                    return <li className={clsx(item.id === activeLocation.id ? "active" : 'not-active')} key={item.id} onClick={() => setActiveLocation(item)}>
                        <img src={item.icon} alt={item.name} className={'w-4'} />
                        <p className='text-sm font-medium truncate'>{item.name}</p>
                    </li>
                })}
            </ul>
        </div>
    };

    const openItem = (item) => {
        console.log(item);
        if (item.fileType === 'pdf') {
            return openWindow('resume')
        }
        if (item.kind === 'folder') {
            setActiveLocation(item)
        }
        if (['fig', 'url'].includes(item.fileType) && item.href) {
            return window.open(item.href, '_blank')
        }

        openWindow(`${item.fileType}${item.kind}`, item)
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target={'finder'} />
                <Search className='icon' />
            </div>
            <div className="bg-white flex h-full">
                <div className="sidebar">
                    {
                        renderList('Favorites', Object.values(locations))
                    }
                    {
                        renderList(activeLocation.name ? activeLocation.name :
                            'Work', locations[activeLocation.type ? activeLocation.type :
                                'work'
                            ].children)
                    }
                </div>
                <ul className="content">
                    {
                        activeLocation?.children.map((item) => {
                            return <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                                <img src={item.icon} alt={item.name} />
                                <p>{item.name}</p>
                            </li>
                        })
                    }
                </ul>
            </div>

        </>
    )
}
const FinderWrapper = WindowWrapper(Finder, 'finder');
export default FinderWrapper