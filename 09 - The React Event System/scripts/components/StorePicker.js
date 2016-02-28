import React from 'react';

import { History } from 'react-router';
import h from '../helpers';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

/* 
  StorePicker
  This will let us make <StorePicker/>
*/

@autobind
class StorePicker extends React.Component {
  goToStore(e){
    e.preventDefault();
    var storeID = this.refs.storeId.value;

    this.history.pushState(null, '/store/' + storeID);   
  }
  render () {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
};

reactMixin.onClass(StorePicker, History);

export default StorePicker;