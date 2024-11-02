import { Dropdown, DropdownButton } from 'react-bootstrap'

import style from './SortSelector.module.css'

const SortSelector = () => {
  return (
    <div className={style.cntPlatformList}>
      <DropdownButton title={"Select"}>
        <Dropdown.Item>Relevance</Dropdown.Item>
        <Dropdown.Item>Date added</Dropdown.Item>
        <Dropdown.Item>Name</Dropdown.Item>
        <Dropdown.Item>Release date</Dropdown.Item>
        <Dropdown.Item>Popularity</Dropdown.Item>
        <Dropdown.Item>Average rating</Dropdown.Item>
      {/* {data.map(platform => 
        <Dropdown.Item onClick={() => onSelectedPlatform(platform)} key={platform.id} as="button">{platform.name}</Dropdown.Item>
      )} */}
    </DropdownButton>
    </div>
  )
}

export default SortSelector