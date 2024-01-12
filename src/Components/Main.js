// src\Components\Main.js
import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "./Auth/Auth";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        token: state.token,
    };
};

const Main = (props) => {
    let routes = null;
    // user not authenticated
    if (props.token === null) {
        routes = (
            <Routes>
                <Route path="/login" element={<Auth />} />
                {/* kono kisur sathe match na hole login */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        );
    } else {
        routes = (
            <Routes>
                <Route path="/" element={<BurgerBuilder />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
                {/* kono kisur sathe match na hole "/" */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        );
    }
    return (
        <div>
            <Header />

            {/* container class left right kisu padding dey */}
            <div className="container">{routes}</div>
        </div>
    );
};

export default connect(mapStateToProps)(Main);
