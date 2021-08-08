import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import _ from 'lodash';
import {Board} from './Board';

const initialCardList = [{
  id: 45,
  title: 'Order No:#45',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
},
{
  id: 201,
  title: 'Order No:#201',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorRed: true,
},{
  id: 1,
  title: 'Order No:#1',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
},{
  id: 600,
  title: 'Order No:#600',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
},{
  id: 456,
  title: 'Order No:#456',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
},{
  id: 23,
  title: 'Order No:#23',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
},{
  id: 27,
  title: 'Order No:#27',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
},{
  id: 33,
  title: 'Order No:#33',
  descriptions: 'In publishing and graphic design.',
  due: 'Due: May 31, 2019 3:39 PM',
  status: 'Response due',
  borderColorGreen: true,
}];

const initialColumnList = [{
  id: 0,
  title: 'Received Orders(19)',
  cardIds: [45, 201, 1, 600, 27, 33, 23]
},{
  id: 1,
  title: 'Order In Progress(1)',
  cardIds: [456]
}
,{
  id: 2,
  title: 'Orders Is Already for delivery(0)',
  cardIds: []
},{
  id: 3,
  title: 'Order Picked Up(0)',
  cardIds: []
}];

class BoardApp extends Component {
  state = {
    cards: initialCardList,
    columns: initialColumnList,
  };

  moveCard = (cardId, destColumnId, index) => {
    this.setState(state => ({
      columns: state.columns.map(column => ({
        ...column,
        cardIds: _.flowRight(
          // 2) If this is the destination column, insert the cardId.
          ids =>
            column.id === destColumnId
              ? [...ids.slice(0, index), cardId, ...ids.slice(index)]
              : ids,
          // 1) Remove the cardId for all columns
          ids => ids.filter(id => id !== cardId)
        )(column.cardIds),
      })),
    }));
  };

  render() {
    
    return (
  

      <Board
        cards={this.state.cards}
        columns={this.state.columns}
        moveCard={this.moveCard}
      />
    );
  }
}

export default DragDropContext(HTML5Backend)(BoardApp);
