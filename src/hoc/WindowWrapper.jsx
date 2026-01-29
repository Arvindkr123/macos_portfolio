import useWindowStore from '#store/window'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'
import { Draggable } from 'gsap/Draggable'

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, width, height } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            if (isOpen) {
                el.style.display = 'block';
                gsap.fromTo(
                    el,
                    { scale: 0.85, opacity: 0, y: 30 },
                    { scale: 1, opacity: 1, y: 0, duration: 0.25, ease: 'power3.out' }
                );
            } else {
                gsap.to(el, {
                    scale: 0.85,
                    opacity: 0,
                    y: 30,
                    duration: 0.2,
                    ease: 'power3.in',
                    onComplete: () => (el.style.display = 'none'),
                });
            }
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            gsap.to(el, {
                width: `${width}%`,
                height: `${height}%`,
                duration: 0.35,
                ease: 'power3.inOut',
            });
        }, [width, height]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;
            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey)
            })
            return () => {
                instance.kill()
            }
        }, []);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) {
                return;
            }
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen])

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className="absolute will-change-transform"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
    return Wrapped;
};

export default WindowWrapper;
