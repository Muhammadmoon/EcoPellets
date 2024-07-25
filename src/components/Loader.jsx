import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="fire">
        <div className="fire-left">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-center">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-right">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-bottom">
          <div className="main-fire"></div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scaleUpDown {
          0%, 100% {
            transform: scaleY(1) scaleX(1);
          }
          50%, 90% {
            transform: scaleY(1.1);
          }
          75% {
            transform: scaleY(0.95);
          }
          80% {
            transform: scaleX(0.95);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: skewX(0) scale(1);
          }
          50% {
            transform: skewX(5deg) scale(0.9);
          }
        }

        @keyframes particleUp {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            top: -100%;
            transform: scale(0.5);
          }
        }

        @keyframes glow {
          0%, 100% {
            background-color: #3b473a; /* Dark green */
          }
          50% {
            background-color: #74c365; /* Parrot green */
          }
        }

        .fire {
          position: absolute;
          top: calc(50% - 50px);
          left: calc(50% - 50px);
          width: 100px;
          height: 100px;
          background-color: transparent;
          margin-left: auto;
          margin-right: auto;
        }

        .fire-center {
          position: absolute;
          height: 100%;
          width: 100%;
          animation: scaleUpDown 3s ease-out;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }

        .fire-center .main-fire {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(farthest-corner at 10px 0, #2b6e3a 0%, #3b473a 95%); /* Dark green */
          transform: scaleX(0.8) rotate(45deg);
          border-radius: 0 40% 60% 40%;
          filter: drop-shadow(0 0 10px #145c39);
        }

        .fire-center .particle-fire {
          position: absolute;
          top: 60%;
          left: 45%;
          width: 10px;
          height: 10px;
          background-color: #74c365; /* Parrot green */
          border-radius: 50%;
          filter: drop-shadow(0 0 10px #145c39);
          animation: particleUp 2s ease-out 0;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }

        .fire-right {
          height: 100%;
          width: 100%;
          position: absolute;
          animation: shake 2s ease-out 0;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }

        .fire-right .main-fire {
          position: absolute;
          top: 15%;
          right: -25%;
          width: 80%;
          height: 80%;
          background-color: #2b6e3a; /* Dark green */
          transform: scaleX(0.8) rotate(45deg);
          border-radius: 0 40% 60% 40%;
          filter: drop-shadow(0 0 10px #145c39);
        }

        .fire-right .particle-fire {
          position: absolute;
          top: 45%;
          left: 50%;
          width: 15px;
          height: 15px;
          background-color: #74c365; /* Parrot green */
          transform: scaleX(0.8) rotate(45deg);
          border-radius: 50%;
          filter: drop-shadow(0 0 10px #145c39);
          animation: particleUp 2s ease-out 0;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }

        .fire-left {
          position: absolute;
          height: 100%;
          width: 100%;
          animation: shake 3s ease-out 0;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }

        .fire-left .main-fire {
          position: absolute;
          top: 15%;
          left: -20%;
          width: 80%;
          height: 80%;
          background-color: #2b6e3a; /* Dark green */
          transform: scaleX(0.8) rotate(45deg);
          border-radius: 0 40% 60% 40%;
          filter: drop-shadow(0 0 10px #145c39);
        }

        .fire-left .particle-fire {
          position: absolute;
          top: 10%;
          left: 20%;
          width: 10%;
          height: 10%;
          background-color: #74c365; /* Parrot green */
          border-radius: 50%;
          filter: drop-shadow(0 0 10px #145c39);
          animation: particleUp 3s infinite ease-out 0;
          animation-fill-mode: both;
        }

        .fire-bottom .main-fire {
          position: absolute;
          top: 30%;
          left: 20%;
          width: 75%;
          height: 75%;
          background-color: #74c365; /* Parrot green */
          transform: scaleX(0.8) rotate(45deg);
          border-radius: 0 40% 100% 40%;
          filter: blur(10px);
          animation: glow 2s ease-out 0;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default Loader;
