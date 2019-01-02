import {connect} from "../EventBus";

describe('EventBus', () => {
  let iframe1;
  let iframe2;
  beforeEach(() => {
    iframe1 = document.createElement('iframe');
    document.body.appendChild(iframe1);

    iframe2 = document.createElement('iframe');
    document.body.appendChild(iframe2);

    connect(iframe1.contentWindow);
    connect(iframe2.contentWindow);
  });

  it('sends messages to other consumers', () => {
    jest.spyOn(iframe2.contentWindow, 'postMessage');

    const message = {type: 'app.test'};

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: message
    }));

    expect(iframe2.contentWindow.postMessage).toHaveBeenCalledWith(
      expect.objectContaining(message),
      expect.anything()
    );
  });

  it('allows to unsubscribe from messages', () => {
    const iframe3 = document.createElement('iframe');
    document.body.appendChild(iframe3);

    const unsubscribe = connect(iframe3.contentWindow);

    jest.spyOn(iframe3.contentWindow, 'postMessage');

    const message = {type: 'app.test'};

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: message
    }));

    expect(iframe3.contentWindow.postMessage).toHaveBeenCalledWith(
      expect.objectContaining(message),
      expect.anything()
    );

    unsubscribe();

    iframe3.contentWindow.postMessage.mockClear();

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: {type: 'app.new-message'}
    }));

    expect(iframe3.contentWindow.postMessage).not.toHaveBeenCalled();

    iframe3.remove();
  });

  it('does not send the message to the source', () => {
    jest.spyOn(iframe1.contentWindow, 'postMessage');

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: {type: 'app.test'}
    }));

    expect(iframe1.contentWindow.postMessage).not.toHaveBeenCalled();
  });

  it('only broadcasts app messages', () => {
    jest.spyOn(iframe2.contentWindow, 'postMessage');

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: {type: 'test'}
    }));

    expect(iframe2.contentWindow.postMessage).not.toHaveBeenCalled();
  });

  it('does not crash when posting other data types', () => {
    jest.spyOn(iframe2.contentWindow, 'postMessage');

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: 'string'
    }));

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: {}
    }));

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message'));
  });

  it('does not alter the original message', () => {
    const message = {type: 'app.test'};
    const originalJson = JSON.stringify(message);

    iframe1.contentWindow.dispatchEvent(new MessageEvent('message', {
      data: message
    }));

    expect(JSON.stringify(message)).toEqual(originalJson);
  })

  afterEach(() => {
    iframe1.remove();
    iframe2.remove();

    jest.clearAllMocks();
  })
});
