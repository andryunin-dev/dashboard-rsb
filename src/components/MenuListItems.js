import React, {Component} from 'react';
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {myData} from "./items";
import { NavLink as RouterLink } from 'react-router-dom';


class MenuListItems extends Component {
    state = { settings: [
        { id: "1", open: false },
        { id: "2", open: false },
        { id: "3", open: false },
        ] };

    handleClick = id => {
        this.setState(state => ({
            ...state,
            settings: state.settings.map(item =>
                item.id === id ? { ...item, open: !item.open } : item
            )
        }));
    };

    render() {
        const { settings } = this.state;
        return (
            <List>
                {myData.map(each => (
                    <React.Fragment key={each.id}>
                        <ListItem button onClick={() => this.handleClick(each.id)}>
                            <ListItemIcon>
                                {each.iconHeader}
                            </ListItemIcon>
                            <ListItemText primary={each.nameHeader} />
                            {settings.find(item => item.id === each.id).open
                                ? <ExpandLess />
                                : <ExpandMore />}
                            {/*{openCollapse ? <ExpandLess /> : <ExpandMore />}*/}
                        </ListItem>
                        <Collapse
                            in={settings.find(item => item.id === each.id).open}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                {each.subMenu.map(subData => (
                                    <ListItem key={subData.id} button component={RouterLink} to={subData.href}>
                                        <ListItemText primary={subData.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </React.Fragment>
                ))}
            </List>
        );
    }
}

export default MenuListItems;