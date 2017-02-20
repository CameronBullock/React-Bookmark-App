import React from 'react';
import Card from 'material-ui/Card/Card'
import {ListItem} from 'material-ui/List';
import UpArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

const Link = ({ link, onVoteUp, onVoteDown }) => {
    return (
        <Card>
          <div className="Outer_card"
              style={{
                display: 'flex',
                padding: '10px 30px',
              }}
            >
            <div  className="left_container"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',

                }}
              >


                  <a
                    href="#"
                    onClick={(e) =>{
                      e.preventDefault();
                      onVoteUp({ link });

                    }}
                    >
                      <UpArrow
                        style={{
                          width: 50,
                          height: 50,
                          padding: 0,
                        }}
                      />
                  </a>

              <div className="vote_number"
                  style={{
                    fontSize: 35,
                    textAlign: 'center',
                  }}
                >
                  {link.voteCount}

              </div>

              <a
                href="#"
                onClick={(e) =>{
                  e.preventDefault();
                  onVoteDown({ link });

                }}

                >
                  <DownArrow
                    style={{
                      width: 50,
                      height: 50,
                      padding: 0,
                    }}
                  />
              </a>

            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',

              }}
              ><ListItem
                primaryText={link.url}
                secondaryText={link.description}
            /></div>
          </div>

        </Card>
    );
};

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        voteCount: React.PropTypes.number.isRequired,
    }).isRequired,
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
};

export default Link;
