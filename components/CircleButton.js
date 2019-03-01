import React from 'react';

const CircleButton = props => (
  <div>
    <button className="circle-btn">
      <span className="circle-btn__text">+</span>
    </button>
    <style jsx>{`
      .circle-btn {
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        border: none;
        color: rgb(156 182 212);
        background-color: rgb(188 140 118);
        box-shadow: 1px 2px 5px rgba(156, 182, 212, 0.4);
        position: absolute;
        bottom: 3rem;
        right: 3rem;
        cursor: pointer;
        transition: 0.4s;
        font-size: 2rem;
        overflow: hidden;
      }

      .circle-btn:hover {
        background-color: rgb(156 182 212);
        color: rgb(188 140 118);
      }
      .circle-btn:active {
        transform: translateX(1px) translateY(2px);
        box-shadow: none;
        outline: none;
        border: none;
      }

      .circle-btn__text {
        font-size: 5rem;
        line-height: 3.5rem;
      }
    `}</style>
  </div>
);

export default CircleButton;
