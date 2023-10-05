import React from 'react';
import styles from './index.module.css'
import { FirstTable, Thead, Tr, Th, Td, Tbody } from '../../styles/table';

function Table() {
    return(
       <FirstTable>
            <Thead>
                <Tr>
                    <Th scope="col"> Nome </Th>
                    <Th scope="col"> Valor </Th>
                </Tr> 
        
            </Thead>
  
            <Tbody>
                
            </Tbody>
        </FirstTable>
    )
}

export default Table