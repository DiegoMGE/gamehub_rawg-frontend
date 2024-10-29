import { Dropdown, DropdownButton } from 'react-bootstrap'

import style from "./PlatformSelector.module.css"

import usePlatforms from '@/hooks/usePlatforms';
import { Platform } from '@/types/Game';

interface PlatformProps {
  selectedPlatform: Platform | null;
  onSelectedPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: PlatformProps) => {
  const { data } = usePlatforms();

  return (
    <div className={style.cntPlatformList}>
      <DropdownButton title={selectedPlatform?.name || "Platforms"}>
      {data.map(platform => 
        <Dropdown.Item onClick={() => onSelectedPlatform(platform)} key={platform.id} as="button">{platform.name}</Dropdown.Item>
      )}
    </DropdownButton>
    </div>
  )
}

export default PlatformSelector