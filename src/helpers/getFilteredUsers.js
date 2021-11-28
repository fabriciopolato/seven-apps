const getFilteredUsers = (users, filters) =>
  users.reduce((accumulator, user) => {
    let shouldPush = true;

    const nameDoesNotMatch = !user.name
      .toLowerCase()
      .includes(filters.name.toLowerCase());

    const ageDoesNotMatch =
      filters.age.trim() !== "" && user.age !== Number(filters.age);

    if (nameDoesNotMatch || ageDoesNotMatch) {
      shouldPush = false;
    }

    if (shouldPush) {
      accumulator.push(user);
    }

    return accumulator;
  }, []);

export default getFilteredUsers;
