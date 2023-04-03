import React, { useState, useEffect } from 'react';
import { unstable_HistoryRouter as HistoryRouter, Routes, Route, redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import TodoPage from './pages/TodoPage';
import './App.css';
import history from './BrowserHistory';
import { connect } from 'react-redux';
import { authUserRequest } from './actions/actionCreator';

function App(props) {
  useEffect(() => {
    if (!props.user) {
      props.authUserRequest();
    }
  }, [])

  useEffect(() => {
    if (props.notification) {
      console.log(props.notification);
      toast(props.notification.notification, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    }
  }, [props.notification])

  return (
      <HistoryRouter history={history}>
        <ToastContainer position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    
        <Routes>
          <Route path="/" element={<Home />} />
          {/* localhost:3000/ -> Home component */}
          <Route path="/tasks/" element={<TodoPage />} />
          {/* localhost:3000/tasks/ -> TodoPage component */}
        </Routes>
      </HistoryRouter>
  );
}

const mapStateToProps = ({ user, notification }) => ({ user, notification });

const mapDispatchToProps = {
  authUserRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
