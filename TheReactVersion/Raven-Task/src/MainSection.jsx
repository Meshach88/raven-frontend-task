import React from "react";
import {
  logo,
  arrowDown,
  arrowUp,
  chart,
  coindrop,
  line,
  order_book,
  Trading_view,
} from "../src/assets";

const MainSection = () => {
  return (
    <main>
      <section>
        <div class="coin-pair">
          <img src={coindrop} alt="trading pair" />
          <select>
            BTC/USD
            <option></option>
          </select>
          <p>$20,634</p>
        </div>
        <div>
          <div class="clock-change">
            <img src={line} alt="clock" />
            <p class="change">24h change</p>
          </div>
          <p class="time-change">520.80+1.25%</p>
        </div>
        <div>
          <div class="clock-change">
            <img src={arrowUp} alt="change" />
            <p class="change">24h high</p>
          </div>
          <p class="price-change">520.80+1.25%</p>
        </div>
        <div>
          <div class="clock-change">
            <img src={arrowDown} alt="change" />
            <p class="change">24h low</p>
          </div>
          <p class="price-change">520.80+1.25%</p>
        </div>
        <div>
          <div class="clock-change">
            <img src={chart} alt="change" />
            <p class="change">24h volume</p>
          </div>
          <p class="price-change">75,655.26</p>
        </div>
      </section>
      <article>
        <div id="chart"></div>
        <img src={Trading_view} alt="" />
        <div>
          <img src={order_book} alt="order book" />
        </div>
        <div>
          <form>
            <div>
              <button class="buy-btn">Buy</button>
              <button class="sell-btn">Sell</button>
            </div>
            <div class="form-tabs">
              <p>Limit</p>
              <p>Market</p>
              <p>Stop Limit</p>
            </div>
            <input
              type="text"
              placeholder="Amount                  0.00 USD"
              class="form-input"
            />
            <div class="form-total">
              <p>Total</p>
              <p>0.00</p>
            </div>
            <button class="buy-btc-btn">Buy BTC</button>
            <hr />
            <div class="account">
              <p>Total account value</p>
              <p>NGN</p>
            </div>
            <h4 class="account-value">0.00</h4>
            <div class="account">
              <p>Open Orders</p>
              <p>Available</p>
            </div>
            <div class="order-value">
              <h4 class="account-value">0.00</h4>
              <h4 class="account-value">0.00</h4>
            </div>
            <button class="deposit-btn">Deposit</button>
          </form>
        </div>
      </article>
      <div class="sub-section">
        <div class="order-tabs">
          <button>Open Orders</button>
          <button disabled>Positions</button>
          <button disabled>Order History</button>
          <button disabled>Trade History</button>
        </div>
        <div class="order-text">
          <h2>No Open Orders</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit est,
            culpa consequatur quo dolore eveniet cupiditate harum odit, saepe
            suscipit quaerat, cum velit neque numquam voluptas hic eos quia
            quasi.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
