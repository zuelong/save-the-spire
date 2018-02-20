import React, {Component} from "react";
import relics from "./Relics";

class RelicComponent extends Component {
    render() {

        let relicsList = [];

        for(let relic in relics) {
            relicsList.push(
                <li>
                    {relic}
                    <ul>
                        <li>
                            {relics[relic]['DESCRIPTIONS']}
                        </li>
                    </ul>
                </li>
            )};

        return (
            <ul>
                {relicsList}
            </ul>
        );
    }
}

export default RelicComponent