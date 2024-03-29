import React from 'react'
import { Table, Button, Icon } from "semantic-ui-react";
import { map } from "lodash";
import { ModalBasic } from "../../../Common"
import "./TableTablesAdmin.scss";

export function TableTablesAdmin(props) {
  const { tables, updateTable, deleteTable } = props;


  return (
      <Table className="table-tables-admin">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Mesa numero</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {map(tables, (table, index) => (
            <Table.Row key={index}>
              <Table.Cell>{table.number}</Table.Cell>
              <Actions
                table={table}
                updateTable={updateTable}
                deleteTable={deleteTable}
                //showQr={showQr}
              />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
  );
}

function Actions(props) {
  const { table, updateTable, deleteTable } = props;

  return (
    <Table.Cell textAlign="right">
      <Button icon onClick={() => console.log(table)}>
        <Icon name="qrcode" />
      </Button>
      <Button icon onClick={() => updateTable(table)}>
        <Icon name="pencil" />
      </Button>

      <Button icon negative onClick={() => deleteTable(table)}>
        <Icon name="close" />
      </Button>
    </Table.Cell>
  );
}


