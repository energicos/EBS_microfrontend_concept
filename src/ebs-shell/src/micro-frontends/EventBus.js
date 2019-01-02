let apps = [];

const connect = (subscriber) => {
  subscriber.addEventListener('message', (e) => {
    if (isAppMessage(e.data) && typeof e.data.__broadcasted === 'undefined') {
      broadcast(subscriber, e.data)
    }
  });

  apps.push(subscriber);

  return () => {
    apps = apps.filter(app => app !== subscriber);
  }
};

const isAppMessage = (data) => {
  return data &&  typeof data.type !== 'undefined' &&  data.type.indexOf('app.') !== -1;
}

const broadcast = (source, message) => {
  const newMessage = Object.assign({}, message, {
    __broadcasted: true,
  });

  apps
    .filter(app => app !== source)
    .forEach(app => {
      app.postMessage(newMessage, '*')
    });
};

export {
  connect,
}
