export const getProductsFromApi = async () => {
  const response = await fetch("https://ecommercetesting-70802-default-rtdb.europe-west1.firebasedatabase.app/products/-N__57-_D1ajNxQ4SEc3.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
