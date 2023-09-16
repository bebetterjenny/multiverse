import React, { useRef, useCallback, useState, useEffect } from 'react';
import './Cards.scss';
import { CardProps } from '../Card/types.d';
import { mockCards } from './mock';
import { getComments } from './api';
import Card from '../Card';

type Props = {
    
}

const countPerLayer = 3;
const askForMore = 5;

const Cards = (props: Props) => {
    const [cards, setCards] = useState<CardProps[]>([]);
    const cardsRef = useRef<HTMLElement[]>([]);
    const [hiddenCards, setHiddenCards] = useState<CardProps[]>([]);
    const [countBeforeAskForMore, setCountBeforeAskForMore] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const hiddenCard = useCallback((card: CardProps) => {
        setHiddenCards(hiddenCards => [...hiddenCards, card]);
        setCountBeforeAskForMore(prev => prev + 1);
    }, []);

    useEffect(() => {
        setLoading(true);
        getComments(1).then((newCards: Omit<CardProps, "index">[]) => {
            setCards(newCards.map((card, index) => ({...card, index})));
            setPage(prev => prev + 1);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cards.length);
    }, [cardsRef, cards]);

    useEffect(() => {    
        if (hiddenCards.length === countPerLayer) {
            setCards(prevCards => prevCards.slice(countPerLayer).map((card, index) => ({...card, index})));
            setHiddenCards([]);
        }
    }, [hiddenCards]); 

    useEffect(() => {
        if (countBeforeAskForMore === askForMore) {
            getComments(page).then((moreCards: Omit<CardProps, "index">[]) => {
                setCards((prevCards: CardProps[]) => {
                    const lastIndex = prevCards.at(-1)?.index!;
                    const moreCardsIndexed: CardProps[] = moreCards.map((card, index) => ({...card, index: lastIndex + index + 1})) as CardProps[];
                    const newCards: CardProps[] = [...prevCards, ...moreCardsIndexed];
                    return newCards;
                });
                setCountBeforeAskForMore(0);
            });
        }
        
    }, [page, countBeforeAskForMore]);

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
            {loading && <div className="loading"></div>}
        </div>
    );
}

export default Cards;
