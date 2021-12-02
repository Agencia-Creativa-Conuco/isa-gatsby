import React from "react";
import styled from "@emotion/styled";
import { SearchIcon } from "../icons";
import {
  BaseToggle,
  Icon,
  ToggleWrapper,
} from "../navigation/nav-toggle";

const SearchButton = ({ isSearchModalOpen, toggleSearchModal }) => {

  const openSearchModal = ()=>{
    toggleSearchModal(!isSearchModalOpen);
  };

  return (
    <HeaderToggle>
      <ToggleWrapper>
        <BaseToggle
          aria-expanded={isSearchModalOpen}
          onClick={ openSearchModal }
          aria-label="Click para abrir la barra de búsqueda..."
        >
          <Icon icon={SearchIcon} />
        </BaseToggle>
      </ToggleWrapper>
    </HeaderToggle>
  );
};

export default SearchButton;

const HeaderToggle = styled.div`
  font-size: 0;
  margin: 0 5px;
  position: relative;
  z-index: 5;
`;

