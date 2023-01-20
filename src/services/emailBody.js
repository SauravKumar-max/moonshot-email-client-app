export const getEmailBody = async (id) => {
  try {
    return await fetch(`https://flipkart-email-mock.now.sh/?id=${id}`)
      .then((res) => res.json())
      .then((data) => data);
  } catch (error) {
    return error;
  }
};
