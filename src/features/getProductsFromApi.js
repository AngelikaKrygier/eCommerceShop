export const getProductsFromApi = async () => {
  const response = await fetch("/eCommerceShop/products.json");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
