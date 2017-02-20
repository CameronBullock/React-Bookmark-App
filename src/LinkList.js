import React from 'react';
import Link from './Link';


const LinkList = ({ links, selectedTopic, onVoteUp, onVoteDown }) => {
    const linkNodes = links.map(link => (
        <Link
            key={link.id}
            link={link}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown}
        />
    ));

    return (
        <div
            style={{
              fontFamily: 'Roboto',
              padding: 30,
            }}
          >
          <div>
              <h1
                  style= {{
                    fontFamily: 'Roboto',
                    fontWeight: 100,
                    fontSize: 50,
                    marginBottom: 0,
                    color: '#444',
                  }}
                >{selectedTopic.name}</h1>
              <h3
                  style= {{
                    color: '#777',
                    fontWeight: 300,
                    marginTop: 0,
                    marginBottom: 25,
                  }}
                >{selectedTopic.description}</h3>
          </div>
          <div>
              {linkNodes}
          </div>
        </div>
    );
};

LinkList.propTypes = {
    links: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            voteCount: React.PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    selectedTopic: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    }),
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
};

export default LinkList;
