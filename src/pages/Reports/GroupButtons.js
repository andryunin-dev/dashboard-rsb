import {useStyles} from "../../style/style";
import React, {Component} from "react";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from "@material-ui/core/Button";


const classes = useStyles;

class GroupButtons extends Component {
    buttons = [
        { id: '1', label: 'По типам(ролям)' },
        { id: '2', label: 'По платформам' },
        { id: '3', label: 'По модулям' },
        { id: '4', label: 'По ПО' },
        { id: '5', label: 'По производителям' }
    ];

    render() {
        const { selection, onSelectionChange } = this.props;

        const buttons = this.buttons.map(({id, label}) => {
            const variant = selection === id;
            const param = variant ? 'contained' : null

            return (
                <Button key={id}
                        variant={param}
                        onClick={() => onSelectionChange(id)}
                >
                    {label}
                </Button>
            );
        });

        return (
            <div className={classes.root}>
                <ButtonGroup color="primary" variant="text">
                    {buttons}
                </ButtonGroup>
            </div>
        );
    }
}

export default GroupButtons;




