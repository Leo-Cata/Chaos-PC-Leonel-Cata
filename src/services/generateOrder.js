//funcion auxiliar, toma datos y genera un objeto

const generateOrder = (name, email, phone, cart, total) => {
  return {
    buyer: {
      name: name,
      email: email,
      phone: phone,
    },
    items: cart,
    total: total,
    createdTime: new Date().toLocaleString(),
  };
};

export default generateOrder;
