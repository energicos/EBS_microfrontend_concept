import faker from 'faker';

const fetchContacts = async () => {
  return new Promise((resolve) => {
    const contcats = [];
    for (let i = 0; i <= 15; i++) {
      contcats.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
      });
    }

    resolve(contcats);
  });
};

export {
  fetchContacts,
};
