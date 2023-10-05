import React from 'react';
import Form from '../form';
import Table from '../table/table'
import { Titulo } from '../../styles/project';

function Project() {

    return(
        <div>
            <Titulo> Lista de produtos </Titulo>
            <Form/>
            <Table/>
        </div>
    )
}

export default Project