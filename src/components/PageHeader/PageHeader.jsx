import { CircleButton } from '../Button/Button';
import { InputWithSuffix } from '../Input/Input';
import plusIcon from '../../assets/plus-icon.svg';
import searchLogo from '../../assets/search-icon.svg';

import {
  pageHeaderCTAButton,
  PageHeaderContainer,
  PageHeaderPlusIcon,
  PageHeaderSearchIcon,
  PageHeaderTitle,
  PageHeader as SPageHeader,
} from './PageHeader.styles';

export const PageHeader = ({ onNavigate }) => {
  return (
    <SPageHeader>
      <PageHeaderContainer>
        <PageHeaderTitle>Seus favorecidos</PageHeaderTitle>
        <CircleButton
          $size={41}
          $customCss={pageHeaderCTAButton}
          onClick={onNavigate}
        >
          <PageHeaderPlusIcon src={plusIcon} />
        </CircleButton>
      </PageHeaderContainer>
      <InputWithSuffix placeholderText="Nome, CPF, agência ou conta">
        <PageHeaderSearchIcon src={searchLogo} />
      </InputWithSuffix>
    </SPageHeader>
  );
};
