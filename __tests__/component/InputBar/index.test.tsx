import { act, fireEvent, render, waitFor } from '@testing-library/react';
import InputBar from '../../../components/ChattingRoom/InputBar';

describe('<InputBar />', () => {
  it('메세지를 입력하면 Input 값이 반영된다.', () => {
    // given
    const handlePostMessage = jest.fn();

    const component = render(
      <InputBar handlePostMessage={handlePostMessage} />,
    );

    const writingMessage = '안녕하세요.';
    const messageInput = component.getByTestId(
      'message-input',
    ) as HTMLInputElement;

    // when
    act(() => {
      fireEvent.change(messageInput, { target: { value: writingMessage } });
    });

    // then
    waitFor(() => {
      expect(messageInput.value).toBe(writingMessage);
    });
  });

  it('메세지를 입력하고 전송버튼을 누르면 handlePostMessage가 호출된다.', () => {
    // given
    const handlePostMessage = jest.fn();
    const component = render(
      <InputBar handlePostMessage={handlePostMessage} />,
    );

    const writingMessage = '안녕하세요.';
    const messageInput = component.getByTestId(
      'message-input',
    ) as HTMLInputElement;

    const submitButton = component.getByTestId('message-send-button');

    // when
    act(() => {
      fireEvent.change(messageInput, { target: { value: writingMessage } });
      fireEvent.click(submitButton);
    });

    // then
    waitFor(() => {
      expect(handlePostMessage).toBeCalledTimes(1);
      expect(handlePostMessage).toBeCalledWith(writingMessage);
    });
  });

  it('메세지를 입력하고 Enter키를 누르면 handlePostMessage가 호출된다.', () => {
    // given
    const handlePostMessage = jest.fn();
    const component = render(
      <InputBar handlePostMessage={handlePostMessage} />,
    );

    const writingMessage = '안녕하세요.';
    const messageInput = component.getByTestId(
      'message-input',
    ) as HTMLInputElement;

    // when
    act(() => {
      fireEvent.change(messageInput, { target: { value: writingMessage } });
      fireEvent.keyPress(messageInput, { key: 'Enter' });
    });

    // then
    waitFor(() => {
      expect(handlePostMessage).toBeCalledTimes(1);
      expect(handlePostMessage).toBeCalledWith(writingMessage);
    });
  });

  it('메세지를 입력해야만 handlePostMessage가 호출된다.', () => {
    // given
    const handlePostMessage = jest.fn();
    const component = render(
      <InputBar handlePostMessage={handlePostMessage} />,
    );

    const messageInput = component.getByTestId(
      'message-input',
    ) as HTMLInputElement;
    const submitButton = component.getByTestId('message-send-button');

    // when
    act(() => {
      fireEvent.change(messageInput, { target: { value: '' } });
      fireEvent.click(submitButton);
      fireEvent.keyPress(messageInput, { key: 'Enter' });
    });

    // then
    waitFor(() => {
      expect(handlePostMessage).toBeCalledTimes(0);
    });
  });
});
