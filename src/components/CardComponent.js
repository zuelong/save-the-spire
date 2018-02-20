import React, {Component} from "react";
import cards from "./Cards";

class CardComponent extends Component {

    render() {

        let cardsList = [];

        for(let card in cards) {
            cardsList.push(
                <li>
                    {card}
                    <ul>
                        <li>
                            {cards[card]['DESCRIPTION']}
                        </li>
                    </ul>
                </li>
            )}

        return (
            <ul>
                {cardsList}
            </ul>
        );
    }
}

export default CardComponent