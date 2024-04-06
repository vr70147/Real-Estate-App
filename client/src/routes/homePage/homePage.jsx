import { useContext } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import './homePage.scss';
import { AuthContext } from '../../context/AuthContext';

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Real Estate Project By Raanan Adut</h1>
          <p>
            The Real Estate Project is a cutting-edge web application that
            transforms real estate interactions for buyers and sellers.
            Leveraging a powerful tech stack with{' '}
            <b>React, Node.js, MongoDB, and Socket.io</b>, it offers a
            responsive, user-friendly interface and efficient backend
            operations. React ensures a seamless user experience, while Node.js
            and MongoDB handle data management and server-side logic
            efficiently. Socket.io introduces real-time features like live chats
            and instant notifications, making the platform interactive and
            dynamic.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
