import React from 'react';
import './App.css';
import Navigation from "./Navigation"
import LinkList from "./LinkList"

const links = [{
    id: 1,
    url: 'https://google.com',
    description: 'The Link Description',
    voteCount: 10,
    topicId: 1,
}, {
    id: 2,
    url: 'https://cameronbullock.com',
    description: 'My Resume Site',
    voteCount: 3,
    topicId: 2,
}];

const topics = [{
    name: 'Apps',
    description: 'Links to interesting apps',
    id: 1,
}, {
    name: 'Libraries',
    description: 'Links to interesting libraries',
    id: 2,
}];

let selectedTopic;
let selectedTopicLinks;

function onTopicSelected({ topic }) {
    selectedTopic = topic;
    selectedTopicLinks = links.filter(l => l.topicId === topic.id);
}

onTopicSelected({ topic: topics[0] });

class App extends React.Component {

  state = {
    topics,
    selectedTopic,
    links: selectedTopicLinks,
  };

  handleTopicSelected = ({ topic }) => {
    onTopicSelected({ topic });
    this.setState({
      selectedTopic,
      links: selectedTopicLinks,
    });
  }

  onVoteUp = ({ link }) => {
    link.voteCount += 1;
    this.setState({
      links:selectedTopicLinks,
    });
  }

  onVoteDown = ({ link }) => {
    link.voteCount -= 1;
    this.setState({
      links:selectedTopicLinks,
    });
  }

  render() {

    return (
        <div>
            <Navigation
                topics={this.state.topics}
                onTopicSelected={this.handleTopicSelected}
            />
            <LinkList
                links={this.state.links}
                selectedTopic={this.state.selectedTopic}
                onVoteUp={this.onVoteUp}
                onVoteDown={this.onVoteDown}
            />
        </div>
    );
  }
}


export default App;
