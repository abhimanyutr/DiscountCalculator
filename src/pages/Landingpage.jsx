import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Landingpage() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(null);
  const [showResult, setShowResult] = useState(false); // ✅ control visibility

  const calculateDiscount = () => {
    if (price === "" || discount === "") {
      alert("Please enter both Price and Discount!");
      return;
    }

    let discountValue = (price * discount) / 100;
    let newPrice = price - discountValue;

    setDiscountAmount(discountValue.toFixed(2));
    setFinalPrice(newPrice.toFixed(2));

    // delay showing result
    setShowResult(false);
    setTimeout(() => setShowResult(true), 200);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "70px",
        marginBottom: "30px",
       
      }}
    >
      <Card style={{ width: "28rem", border:"0px"}}>
        <Card.Img 
          variant="top"
          style={{ height: "230px", width: "100%", borderRadius:"10px"}}
          src="https://digisatish.com/wp-content/uploads/2025/02/Discount-calculator.png"
        />
        <Card.Body>
          <Card.Title className="text-center"><u>Discount Calculator</u></Card.Title>

          <div className="mb-3">
            <label className="form-label">Original Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Discount %</label>
            <input
              type="number"
              className="form-control"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
              placeholder="Enter percentage"
            />
          </div>

          <Button
            className="w-100 btn btn-success"
            type="submit"
            onClick={calculateDiscount}
          >
            Calculate
          </Button>

          {/* Show results only if calculated */}
          {showResult && finalPrice !== null && (
            <div className="mt-4 p-3 border rounded bg-light">
              <h5>Results:</h5>
              <p>
                Discount Amount: <strong>₹{discountAmount}</strong>
              </p>
              <p>
                Final Price: <strong>₹{finalPrice}</strong>
              </p>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Landingpage;
