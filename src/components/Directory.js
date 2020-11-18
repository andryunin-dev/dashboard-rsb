import React, {Component} from 'react';
import {directory} from "./directoryItems";
import ListItem from "@material-ui/core/ListItem";
import {NavLink as RouterLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore, Remove} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import {List} from "@material-ui/core";

class Directory extends Component {
    state = { settings: [
            { id: "1", open: false },
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
                {directory.map(each => (
                    <React.Fragment key={each.id}>
                        <ListItem button
                                  onClick={() => this.handleClick(each.id)}
                                  // component={each.href !== undefined ? RouterLink : null}
                                  // to={each.href !== undefined ? each.href : null}
                        >
                            <ListItemIcon>
                                {each.iconHeader}
                            </ListItemIcon>
                            <ListItemText primary={each.nameHeader} />
                            {settings.find(item => item.id === each.id).open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse
                            in={settings.find(item => item.id === each.id).open}
                            timeout="auto"
                            unmountOnExit
                        >
                            <List component="div" disablePadding>
                                {
                                    each.subMenu.map(subData => (
                                            <ListItem key={subData.id} button
                                                      component={RouterLink} to={subData.href}
                                                      divider={subData.divider}
                                            >
                                                <ListItemIcon>
                                                    <Remove />
                                                </ListItemIcon>
                                                <ListItemText secondary={subData.name} />
                                            </ListItem>

                                    ))
                                }
                            </List>
                        </Collapse>
                    </React.Fragment>
                ))}
            </List>
        );
    }
}

export default Directory;