import { act, fireEvent, render, waitFor } from '@testing-library/react';
import ImageList from '../../../components/ChattingRoom/ImageUploader/ImageList';

describe('<ImageList />', () => {
  it('이미지 아이템을 클릭하면 handlePostMessage가 호출된다', () => {
    // given
    const handlePostMessage = jest.fn();
    const ImageListData = ['/source1.png', '/source2.png'];

    const component = render(
      <ImageList
        isOpend={true}
        imageList={ImageListData}
        handlePostMessage={handlePostMessage}
      />,
    );

    const imageSourceItem = component.getAllByTestId('image-item');

    // when
    act(() => {
      fireEvent.click(imageSourceItem[0]);
    });

    // then
    waitFor(() => {
      const messageContent = {
        contentId: new Date().getTime().toString(),
        type: 'image',
        value: ImageListData[0],
      };
      expect(handlePostMessage).toBeCalledTimes(1);
      expect(handlePostMessage).toBeCalledWith(messageContent);
    });
  });
});
