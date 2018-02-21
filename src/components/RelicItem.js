import React, {Component} from "react";

class RelicItem extends Component {

    render() {

        const styles = {
            relicitem: {
                grid: this.props.grid,
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#27cecb',
                border: '1px solid #17bebb'
            },
            span: {
                flex: 'none',
                textAlign: 'center',
                width: '100%'
            }
        };

        return (
            <div style={styles.relicitem}>
                <span style={styles.span}>{this.props.value}</span>
            </div>
        );
    }
}

export default RelicItem