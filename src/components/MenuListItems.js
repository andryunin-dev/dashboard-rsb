import React, {Component} from 'react';
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {ExpandLess, ExpandMore, Remove} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {myData} from "./items";
import {NavLink as RouterLink} from 'react-router-dom';


class MenuListItems extends Component {
    state = { settings: [
        { id: "1", open: false },
        { id: "2", open: false },
        { id: "3", open: false },
        { id: "4", open: false },
        { id: "5", open: false },
        { id: "6", open: false },
        { id: "7", open: false },
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
            <div>
                <List>
                    {myData.map(each => (
                        <React.Fragment key={each.id}>
                            <ListItem button
                                      onClick={() => this.handleClick(each.id)}
                                      component={each.href !== undefined ? RouterLink : null}
                                      to={each.href !== undefined ? each.href : null}
                            >
                                <ListItemIcon>
                                    {each.iconHeader}
                                </ListItemIcon>
                                <ListItemText primary={each.nameHeader} />
                                {
                                    each.subMenu !== undefined
                                        ? settings.find(item => item.id === each.id).open
                                        ? <ExpandLess />
                                        : <ExpandMore />
                                        : <div />
                                }
                            </ListItem>
                            <Collapse
                                in={settings.find(item => item.id === each.id).open}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {
                                        each.subMenu !== undefined
                                            ? each.subMenu.map(subData => (
                                                <ListItem key={subData.id} button component={RouterLink} to={subData.href}>
                                                    <ListItemIcon>
                                                        <Remove />
                                                    </ListItemIcon>
                                                    <ListItemText secondary={subData.name} />
                                                </ListItem>
                                            ))
                                            : null
                                    }
                                </List>
                            </Collapse>
                        </React.Fragment>
                        ))}
                </List>
            </div>

        );
    }
}

export default MenuListItems;