import React from 'react';

export default function Question(props) {
    const allItems = [props.item, ...props.otherItems];
    const options = allItems.map(item => {
        const text = item.name.toUpperCase();
        return (
            <div onClick={() => alert(text)} key={text}>
                {text}
            </div>
        );
    });
    return (
        <div>
            <img src={props.item.image}
                 alt={props.item.name}
                 title={props.item.name} />
            {options}
        </div>
    );
}