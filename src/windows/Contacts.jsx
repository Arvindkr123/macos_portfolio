import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div
                id="window-header"
                className="select-none cursor-default"
            >
                <WindowControls target="contact" />
                <h2 className="pointer-events-none">Contact Me</h2>
            </div>

            <div className="p-5 space-y-5">
                <img src='/images/adrian.jpg' alt='my-image' className='w-20 rounded-full' />
                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk to tech? I'm in.</p>
                <p>thakurarvindkr10@gmail.com</p>
                <ul>
                    {
                        socials.map(({ id, bg, link, icon, text }) => (
                            <li key={id} style={{ backgroundColor: bg }}>
                                <a href={link} target='_blank' rel='noopener noreferrer'>
                                    <img src={icon} alt={text} className='size-5' />
                                    <p>{text}</p>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default WindowWrapper(Contact, 'contact')