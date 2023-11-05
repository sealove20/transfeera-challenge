import { Button, CircleButton } from '../Button/Button';
import plusIcon from '../../assets/plus-icon.svg';

import {
  PageHeaderCTAButton,
  PageHeaderContainer,
  PageHeaderPlusIcon,
  PageHeaderTitle,
  PageHeader as SPageHeader,
} from './PageHeader.styles';

export const PageHeader = () => {
  return (
    <SPageHeader>
      <PageHeaderContainer>
        <PageHeaderTitle>Seus favorecidos</PageHeaderTitle>
        <Button>Salvar</Button>
        <CircleButton $size={41} $customCss={PageHeaderCTAButton}>
          <PageHeaderPlusIcon src={plusIcon} />
        </CircleButton>
      </PageHeaderContainer>
    </SPageHeader>
  );
};
