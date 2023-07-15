import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../src/database/firebase.config";
import Home from "./pages/Home";
import Memorie from "./pages/Memorie";
import City from "./pages/City";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";

const RoutesMain = () => {
  const [routes, setRoutes] = useState();
  const [routesPayments, setRoutesPayments] = useState();

  useEffect(() => {
    const searchRoutes = onSnapshot(collection(db, 'mints'), snapshot =>{
        var routes = []
        snapshot.docs.map( async function (doc){
          if(doc.data().disponivel=="true"){
            routes.push(
              {
                  link: doc.id,
                  nome: doc.data().nome,
                  descricao: doc.data().descricao,
                  metadata: doc.data().metadata,
                  pais: doc.data().pais,
                  image: doc.data().image,
                  gratis: doc.data().gratis
              }
            ) 
          }
        })
        setRoutes(routes);
    })

    const searchRoutesPayments = onSnapshot(collection(db, 'link-payments'), snapshot =>{
      var routesPayments = []
      snapshot.docs.map( async function (doc){
        routesPayments.push(
          {
            link: doc.id,
            nome: doc.data().nome,
            metadata: doc.data().metadata,
            image: doc.data().image,
          });
        });
        setRoutesPayments(routesPayments);
      }
    );

    return () => {
      searchRoutes();
      searchRoutesPayments();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {
          routesPayments?.map((data) => (
            <Route key={data.link} path={"/memorie/"+data.link} element={<Memorie nome={data.nome} image={data.image} metadata={data.metadata} word={data.link}/>} />
          ))
        }
        {
          routes?.map((data) => (
            <Route key={data.link} path={"/"+data.link} 
              element={<City nome={data.nome} pais={data.pais} descricao={data.descricao} image={data.image} metadata={data.metadata} link={data.link} gratis={data.gratis}/>} 
            />
          ))
        }
        <Route path="/terms" element={<Terms />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default RoutesMain;
