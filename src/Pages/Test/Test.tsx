// @ts-nocheck
import './Test.scss';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { cards } from './constants';

    /*--------------------
    Contants
    --------------------*/
    const speedWheel = 0.02
    const speedDrag = -0.1

    /*--------------------
    Get Z
    --------------------*/
    const getZindex = (array, index) => (array.map((_, i) => (index === i) ? array.length : array.length - Math.abs(index - i)))

    


const Test = () => {

     /*--------------------
    Vars
    --------------------*/
    const [progress, setProgress] = useState(50);
    const [startX, setStartX] = useState(0);
    const [active, setActive] = useState(0);
    const [isDown, setIsDown] = useState(false);


    /*--------------------
    Items
    --------------------*/
    const itemsRef = useRef([]);
    const $items = useMemo(() => itemsRef.current, [itemsRef]);
    const cursor1Ref = useRef(null);
    const cursor2Ref = useRef(null);
    const $cursors = useMemo(() => [cursor1Ref.current, cursor2Ref.current], [cursor1Ref, cursor2Ref]);

    const displayItems = useCallback((item, index, active) => {
        if (item) {
            const gotZindex = getZindex([...$items], active);
            console.log(gotZindex)
            const zIndex = getZindex([...$items], active)[index]
            item.style.setProperty('--zIndex', zIndex)
            item.style.setProperty('--active', (index - active) / $items.length)
        }
    }, [$items]);

    /*--------------------
    Animate
    --------------------*/
    const animate = useCallback(() => {
        setProgress(Math.max(0, Math.min(progress, 100)));
        setActive(Math.floor(progress / 100 * ($items.length - 1)));

        $items.forEach((item, index) => displayItems(item, index, active))
    }, [progress, active, $items, displayItems]);

    useEffect(() => {
        animate();
    }, [animate]);


    /*--------------------
    Click on Items
    --------------------*/
    
    const handleClickItem = useCallback((item, i) => () => {
        setProgress((i / $items.length) * 100 + 10);
        animate();
    }, [$items, animate]);

    /*--------------------
    Handlers
    --------------------*/
    const handleWheel = useCallback(e => {
        const wheelProgress = e.deltaY * speedWheel
        setProgress(progress + wheelProgress);
        animate()
    }, [progress, animate]);

    const handleMouseMove = useCallback((e) => {
        if (e.type === 'mousemove') {
            $cursors.forEach(($cursor) => {
                if ($cursor) {
                    $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
                }
                
            })
        }
        if (!isDown) return
        const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
        const mouseProgress = (x - startX) * speedDrag;
        setProgress(progress + mouseProgress)
        setStartX(x);
        animate()
    }, [isDown, startX, progress, $cursors, animate]);

    const handleMouseDown = useCallback(e => {
        console.log('handleMouseDown')
        setIsDown(true);
        setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsDown(false);
    }, []);


    return (
        <div className="test"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
        >
            <div className="carousel">
                {cards.map((card, index) => {
                    return (
                        <div 
                            key={index} 
                            className="carousel-item"
                            ref={(el) => {
                                if (!itemsRef.current?.[index]) {
                                    itemsRef.current[index] = el;
                                }
                            }}
                            onClick={handleClickItem(card, index)}
                        >
                            <div className="carousel-box">
                                <div className="title">{card.title}</div>
                                <div className="num">{card.num}</div>
                                <img src={card.img} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="cursor" ref={cursor1Ref}></div>
            <div className="cursor cursor2" ref={cursor2Ref}></div>
        </div>
    );
}

export default Test;