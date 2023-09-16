import React, { useRef, useCallback, useState, useEffect } from 'react';
import './Cards.scss';
import { CardProps } from '../Card/types.d';
import { mockCards } from './mock';
import { getAdditionalComments, getFirstComments } from './api';
import Card from '../Card';

type Props = {
    
}

const countPerLayer = 3;
const askForMore = 5;

const Cards = (props: Props) => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const cardsRef = useRef<HTMLElement[]>([]);
    const [hiddenCards, setHiddenCards] = useState<CardProps[]>([]);

    const hiddenCard = useCallback((card: CardProps) => {
        console.log('setHiden')
        setHiddenCards(hiddenCards => [...hiddenCards, card]);
    }, []);

    useEffect(() => {
        getFirstComments().then((cards: CardProps[]) => {
            setCards(cards);
        });
    }, []);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cards.length);
    }, [cardsRef, cards]);

    useEffect(() => {
        if (hiddenCards.length === askForMore) {
            getAdditionalComments(cards.at(-1)!.index).then((moreCards: CardProps[]) => {
                setCards(prevCards => [...prevCards.slice(askForMore), ...moreCards]);
                setHiddenCards([]);
            });
        }
        
    }, [hiddenCards, cards, cardsRef]);

    return (
        <div className="cards">
            {cards.map((card: CardProps, index) => <Card 
                key={card.eventId} 
                ref={el => cardsRef.current[index] = el as HTMLElement}
                countPerLayer={countPerLayer}
                zIndexReverse={index}
                onHidden={hiddenCard}
                {...card}
            />)}
        </div>
    );
}

export default Cards;
