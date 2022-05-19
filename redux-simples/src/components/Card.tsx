import './Card.css'
import React from 'react'

function getColor(props: CardProps) {
    if (props.red) return "Red";
    if (props.green) return "Green";
    if (props.blue) return "Blue";
    if (props.purple) return "Purple";

    return "";
}

interface CardProps {
    title: string;
    children: React.ReactNode,
    red?: boolean;
    green?: boolean;
    blue?: boolean;
    purple?: boolean;
}

export default function Card(props: CardProps) {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className='Title'>{props.title}</span>
            </div>
            <div className="Content">{props.children}</div>
        </div>
    )
}