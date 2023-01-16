export const getEmailList = async (pageNo = 1) => {
  try {
    console.log({ pageNo });
    return await fetch(`https://flipkart-email-mock.now.sh/?page=${pageNo}`)
      .then((res) => res.json())
      .then((data) => data);
  } catch (error) {
    console.log({ error });
    return error;
  }
};
