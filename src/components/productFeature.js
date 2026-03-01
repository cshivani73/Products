import React from "react";

const features = [
  {
    title: "Fast Performance",
    description: "Our product loads quickly and performs smoothly."
  },
  {
    title: "Modern UI",
    description: "Clean and modern interface with user-friendly design."
  },
  {
    title: "Secure Data",
    description: "Advanced protection to keep user data safe."
  },
  {
    title: "Customizable",
    description: "Easily customizable to fit your needs."
  }
];

function ProductFeatures() {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Product Features</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              width: "250px"
            }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductFeatures;