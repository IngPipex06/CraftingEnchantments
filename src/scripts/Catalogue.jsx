import ProductSection from "./ProductSection";
import anchetas from "../model/anchetas.json";
import detalles from "../model/detalles.json";
import arcilla from "../model/arcilla.json";
import crochet from "../model/crochet.json";
import React from 'react';

function Catalogue() {
    const categories = [
      { title: "Anchetas", products: anchetas },
      { title: "Detalles", products: detalles },
      { title: "Arcilla", products: arcilla },
      { title: "Otros", products: crochet }
    ];

    return (
      <React.Fragment>
        {categories.map((category, i) => (
          <ProductSection key={i} {...category} />
        ))}
      </React.Fragment>
    );
}

export default Catalogue;
