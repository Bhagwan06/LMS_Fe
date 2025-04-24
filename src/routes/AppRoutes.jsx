import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgetPasswordPage,
  BookLandingPage,
  Books,
  EditBookPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  Profile,
  BorrowPage,
} from "../pages";
import { UserLayout } from "../components/layout/layouts/UserLayout";
import { DefaultLayout } from "../components/layout/layouts/DefaultLayout copy";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBIC PAGES */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
      </Route>

      {/* private pages */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="new-book" element={<NewBookPage />} />
        <Route path="edit-book" element={<EditBookPage />} />
        <Route path="borrow-history" element={<BorrowPage />} />

        <Route path="book-landing" element={<BookLandingPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
