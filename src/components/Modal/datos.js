import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

const dataSource1 = [
  {
    text: 'text-value1',
    value: (
      <MenuItem
        primaryText="text-value1"
        secondaryText="&#9786;"
      />
    ),
  },
  {
    text: 'text-value2',
    value: (
      <MenuItem
        primaryText="text-value2"
        secondaryText="&#9786;"
      />
    ),
  },
];

const dataSource2 = [];

const dataSource3 = [];

const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

const DatosNewEvent = () => (
  <div>
    <AutoComplete
      hintText="Nombre de Evento"
      filter={AutoComplete.noFilter}
      dataSource={dataSource1}
    /><br />
    <AutoComplete
      floatingLabelText="Horario"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource2}
    /><br />
    <AutoComplete
      floatingLabelText="Same text, different values"
      filter={AutoComplete.noFilter}
      openOnFocus={true}
      dataSource={dataSource3}
      dataSourceConfig={dataSourceConfig}
    />
  </div>
);

export default DatosNewEvent;