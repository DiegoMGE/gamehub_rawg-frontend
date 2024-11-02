import { Dropdown, DropdownButton } from 'react-bootstrap'

import style from './SortSelector.module.css'
import { useState } from 'react';

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: SortSelectorProps) => {
  const [selectedSort, setSelectedSort] = useState('Relevance');

  const sortOrders = [
    {value: '', label: 'Relevance'},
    {value: '-added', label: 'Date added'},
    {value: 'name', label: 'Name'},
    {value: '-released', label: 'Release date'},
    {value: '-metacritic', label: 'Popularity'},
    {value: '-rating', label: 'Average rating'}
  ];

  const currentSortOrder = sortOrders.find(sort => sort.value === sortOrder);

  const handleSelect = (eventKey: any) => {
    console.log('EventKey received:', eventKey, 'Type:', typeof eventKey);

    let selected = sortOrders[Number(eventKey)];
    console.log("Selected order:", selected);

    if (!selected) {
      console.log('Direct access failed, trying to find by value');
      selected = sortOrders.find(order => order.value === eventKey) || sortOrders[0];
      console.log("value found:", selected);
    }

    setSelectedSort(selected.label);
    // onSelectSort?.(selected.value);
  };

  return (
    <div className={style.cntPlatformList}>
      <DropdownButton title={currentSortOrder?.label || "Relevance"} onSelect={handleSelect}>
        {sortOrders.map((sort, index) => (
          <Dropdown.Item
            key={index}
            eventKey={index}
            active={selectedSort === sort.label}
            onClick={() => onSelectSortOrder(sort.value)}
          >
            {sort.label}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default SortSelector