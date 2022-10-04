import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaBlock,
  MetaNumber,
  MetaText,
  MetaBlockText,
  Flex,
} from './MetaTwo.styled';

const MetaTwoPoints = () => {
  return (
    <>
      <MetaBody>
        <MetaHeader>
          <HeaderText>Моя мета прочитати</HeaderText>
        </MetaHeader>
        <Flex>
          <div>
            <MetaBlock>
              <MetaNumber>00</MetaNumber>
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість книжок</MetaText>
            </MetaBlockText>
          </div>

          <div>
            <MetaBlock>
              <MetaNumber>00</MetaNumber>
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість днів</MetaText>
            </MetaBlockText>
          </div>
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaTwoPoints;
