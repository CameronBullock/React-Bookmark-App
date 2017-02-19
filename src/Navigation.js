import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List/List';


class Navigation extends React.Component {
    state = {
        open: false,
    };

    toggle = () => this.setState({ open: !this.state.open });

    render() {
        const topicNodes = this.props.topics.map(topic => {
            return (
                <MenuItem
                    linkButton={true}
                    key={topic.id}
                    onTouchTap={() => {
                        this.props.onTopicSelected({ topic });
                        this.setState({ open: false });
                    }}
                >
                    {topic.name}
                </MenuItem>
            );
        });

        return (
            <div>
                <AppBar
                    title="Cameron's Web App"
                    onTitleTouchTap={this.toggle}
                    onLeftIconButtonTouchTap={this.toggle}
                >
                </AppBar>

                <Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={open => this.setState({ open })}
                >
                    <List>
                        {topicNodes}
                    </List>
                </Drawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    topics: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            id: React.PropTypes.number.isRequired,
        })
    ).isRequired,
    onTopicSelected: React.PropTypes.func.isRequired,
};

export default Navigation;
