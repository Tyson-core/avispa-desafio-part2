import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGetShops } from "../../actions/actions";
import './Shops.css'

export const Shops = () => {
  const dispatch = useDispatch();
  const shops = useSelector((store) => store.shop.shops);

  useEffect(() => {
    dispatch(startGetShops());
  }, [dispatch]);

  return (
    <div className="container mt-3">
        <h1 className="text-center">Tiendas disponibles</h1>
        {
            shops.map((shop,i)=>(
                <div className="card mt-4 mb-4" key={i}>
                <h5 className="card-header">Tienda N°{i+1}</h5>
                <div className="row">
                <div className="col-md-4 d-flex justify-content-center">
                    <img src="/store_img.png"  className="card-img" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title">{shop}.</h1>
                  <p className="card-text">
                    Este es un texto de ejemplo para la tienda de "{shop}".
                  </p>
                  <Link to={`./shop/${shop}`} className="btn btn-success">
                    Ir a la tienda
                  </Link>
                </div>
                </div>
                </div>

              </div>
            ))
        }

    </div>
  );
};
