import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { startClearAllShops } from "../../actions/actions";
import { clearCart } from "../../actions/cart";
import { toastifyConfig } from "../../helpers/toastifyConfig";



export const Cart = ({ history }) => {
  

  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.cart);
  const [toggleValues, setToggleValues] = useState(false);

  const handleBack = () => {
    history.goBack();
  };

  let subTotal = 0;
  let discount = 0;
  let total = 0;

  products.map((pro) => {
    subTotal += pro.Precio * pro.count;
    discount = subTotal * 0.05;
    total = subTotal - discount;
    return {subTotal, total, discount}
  });

  const handleClearCart = ()=>{
    dispatch(clearCart())
    dispatch(startClearAllShops())
    toast.info("Carrito limpiado correctamente.", toastifyConfig)
  }

  const toggleQuote =()=>{
    setToggleValues(true)
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-info mb-3" onClick={handleBack}>
        <i className="far fa-arrow-alt-circle-left fa-2x"></i>
      </button>
      {
        products.length !== 0 &&(
          <button className="btn btn-danger mb-3 float-right" onClick={handleClearCart}>
          <i className="far fa-trash-alt fa-2x"></i>
        </button>
        )
      }

      {/* TABLE */}
      {products.length !== 0 ? (
        <>
          <h1 className="text-center mt-3 mb-5">Carrito de compras</h1>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">SKU</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">PRECIO</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr key={i}>
                    <td>{product.Nombre}</td>
                    <td>{product.SKU}</td>
                    <td>{product.count}</td>
                    <td>${product.Precio}</td>
                    <td>${product.Precio *product.count}</td>
                  </tr>
                ))}

                {toggleValues && (
                  <>
                    <tr>
                      <td colSpan="3"></td>
                      <td>Sub-Total:</td>
                      <td>${subTotal}</td>
                    </tr>
                    <tr>
                      <td colSpan="3"></td>
                      <td>Descuento 5%:</td>
                      <td>${Math.round(discount)}</td>
                    </tr>
                    <tr>
                      <td colSpan="3"></td>
                      <td>Total:</td>
                      <td>${Math.round(total)}</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          {
            !toggleValues&&(
              <button
              className="btn btn-primary btn-block mb-5"
              onClick={toggleQuote}
            >
              Cotizar
            </button>
            )
          }


        </>
      ) : (
        <div className="alert alert-warning" role="alert">
          Ups, no tiene productos en su carrito.
        </div>
      )}
    </div>
  );
};
