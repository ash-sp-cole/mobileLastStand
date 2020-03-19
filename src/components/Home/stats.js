 
 import React from 'react';
 import {  Statistic} from 'semantic-ui-react';
 
const Stats = () =>{

    return(
        <div>
             
<Statistic.Group horizontal>
    <Statistic>
      <Statistic.Value>427</Statistic.Value>
      <Statistic.Label>home craft beers</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>3,322</Statistic.Value>
      <Statistic.Label>wings eaten</Statistic.Label>
    </Statistic>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Tasks</Statistic.Label>
    </Statistic>
  </Statistic.Group> 
        </div>
    )
}

export default Stats;