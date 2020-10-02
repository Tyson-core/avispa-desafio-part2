import React, { useEffect } from "react";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addPreviousShop, startGetProducts } from "../../actions/actions";
import { clearCart, startAddProductToCart } from "../../actions/cart";
import { toastifyConfig } from "../../helpers/toastifyConfig";
import './Products.css'

export const Products = ({history}) => {
  const { nameShop } = useParams();
  const { products,previousShop,shop } = useSelector((state) => state.shop);
  const { products:productCart } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetProducts(nameShop));
    products.map((res,i)=>{
      const filterCart = productCart.filter(prod=> prod.Id === res.Id)

      const mapCartCount = filterCart.map(prod=>prod.count)

      if(filterCart.length>=0){
        if(mapCartCount>=10 ){
          document.querySelectorAll('.btn-card')[i].disabled = true
        }
      }
      return {}
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch,productCart,shop]);

  const handleBack=()=>{
    history.goBack()
  }

  const handleAddCart=(product)=>{
  

    if(previousShop===shop || previousShop === null){
    product.Stock--

      dispatch(addPreviousShop(nameShop))
      dispatch(startAddProductToCart(product))

      toast.success('Producto agregado al carrito', toastifyConfig);
    }else{
      Swal.fire({
        icon:'question',
        title: 'Has cambiado de tienda, ¿Seguro que quieres vaciar tu carro?',
        showCancelButton: true,
        confirmButtonText: `Acepto`,
      }).then((result) => {
        if (result.isConfirmed) {
          product.Stock--
          dispatch(clearCart())
          dispatch(addPreviousShop(nameShop))
          dispatch(startAddProductToCart(product))

          toast.info('Carrito limpiado correctamente.', toastifyConfig);
        }
      })
    }

  }

  const imgStyle = {
    width: "40%",
    padding: "20px",
  };

  return products.length >0?(
    <div className="container mt-5">
        <button className="btn btn-info mb-3" onClick={handleBack}>
          <i className="far fa-arrow-alt-circle-left fa-2x"></i>
        </button>
      <h1 className="text-center mb-5">Productos de la tienda '{nameShop}'</h1>
      <div className="row row-cols-1 row-cols-md-2">
        {products.map((product) => (
          <div className="col mb-4" key={product.Id}>
            <div className={product.Stock === 0 ? "card card-disabled":"card"}>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src="/box_product.png"
                  style={imgStyle}
                  alt="product"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{lineHeight:'20px'}}>
                  {product.Nombre.length >= 20
                    ? product.Nombre.slice(0, 21)
                    : product.Nombre}
                </h5>
                <p className="card-text">
                  <span className="text-muted">Precio: ${product.Precio}</span>
                </p>
                {/* <p >
                  Stock: {product.Stock}<br/>
                  SKU: {product.SKU} 
                </p> */}
                <div className="d-flex justify-content-center align-items-center">
                  {product.Stock === 0 ? (
                    <button className="btn btn-primary btn-card" disabled>
                      Agregar al carrito
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-card" onClick={()=> handleAddCart(product)}>
                      Agregar al carrito
                    </button>
                  )}
                </div>
                {product.Stock < 10 && (
                  <p className="card-text mt-3">
                    <small className="text-danger align-self-end">
                      {product.Stock === 0? '':'Quedan pocas unidades'}
                    </small>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  ):(
     <div className="container text-center mt-5">
       <h1 className="display-1">Error 404!</h1>
       <p>La pagina solicitada no existe o se ha borrado</p>
     </div>
  );
};
