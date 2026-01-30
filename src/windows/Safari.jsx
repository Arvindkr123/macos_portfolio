import { WindowControls } from '#components'
import { blogPosts } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react'
import React from 'react'

const Safari = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target={'safari'} />
                <PanelLeft className='ml-10 icon'/>
                <div className="flex items-center gap-1 ml-5">
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>
                <div className="flex-1 flex-center gap-3">
                    <ShieldHalf className='icon'/>
                    <div className="search">
                        <Search className='icon'/>
                        <input type='text' placeholder='Search or enter website name' className='flex-1'/>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Share className='icon'/>
                    <Plus className='icon'/>
                    <Copy className='icon'/>
                </div>
            </div>
            <div className="h-screen overflow-scroll overflow-y-scroll">
                <div className="blog mb-28">
                    <h2>My Developer Blog</h2>
                    <div className="space-y-8 h-lvh overflow-y-auto">
                        {
                            blogPosts.map((blog) => {
                                return <div className={"blog-post"} key={blog.id}>
                                    <div className="col-span-2">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="content">
                                        <p>{blog.date}</p>
                                        <h3>{blog.title}</h3>
                                        <a href={blog.link} target='_blank' rel='noopnnernoreferrer'>
                                            Check out the full post <MoveRight className='icon-hover' />
                                        </a>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')

export default SafariWindow