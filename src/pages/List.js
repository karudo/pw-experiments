import React from 'react';

import ForEach from '../components/ForEach';
import Value from '../components/Value'

const qwe = [{
  asd: 19998
}, {
  asd: 'sss',
  zxc: 9
}];


export default function () {
  return (
    <div>
      <table className="table is-bordered is-striped is-narrow">
        <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
        </thead>
        <ForEach collection={qwe} wrap="tbody">
          <tr>
            <td><Value prop="asd"/></td>
            <td><Value prop="zxc"/></td>
          </tr>
        </ForEach>
      </table>
    </div>
  );
}
