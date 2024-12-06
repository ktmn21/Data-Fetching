import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import FetchingData1Page from "./pages/FetchingData1Page";
import FetchingData2Page from "./pages/FetchingData2Page";
import FetchingData3Page from "./pages/FetchingData3Page";
import AuthPage from "./pages/AuthPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserPage from "./pages/UserPage";

// Fetching Data 1 Features
import FetchUsers from "./features/FetchingData1/FetchUsers";
import LoadingState from "./features/FetchingData1/FetchWithLoading";
import ErrorHandling from "./features/FetchingData1/HandleApiErrors";

// Fetching Data 2 Features
import DynamicDataFetch from "./features/FetchingData2/DynamicDataFetch";
import PaginatedFetch from "./features/FetchingData2/PaginatedFetch";
import SearchableData from "./features/FetchingData2/SearchablePosts";

// Fetching Data 3 Features
import FetchWithCache from "./features/FetchingData3/FetchWithCache";
import MasterDetailView from "./features/FetchingData3/MasterDetailView";
import DebouncedSearch from "./features/FetchingData3/DebouncedSearch";
import InfiniteScroll from "./features/FetchingData3/InfiniteScroll";


const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* Fetching Data 1 */}
          <Route path="/fetching-data-1" element={<FetchingData1Page />} />
          <Route path="/fetching-data-1/users" element={<FetchUsers />} />
          <Route path="/fetching-data-1/loading-state" element={<LoadingState />} />
          <Route path="/fetching-data-1/error-handling" element={<ErrorHandling />} />

          {/* Fetching Data 2 */}
          <Route path="/fetching-data-2" element={<FetchingData2Page />} />
          <Route path="/fetching-data-2/dynamic-fetch" element={<DynamicDataFetch />} />
          <Route path="/fetching-data-2/paginated-fetch" element={<PaginatedFetch />} />
          <Route path="/fetching-data-2/searchable-data" element={<SearchableData />} />

          {/* Fetching Data 3 */}
          <Route path="/fetching-data-3" element={<FetchingData3Page />} />
          <Route path="/fetching-data-3/fetch-with-cache" element={<FetchWithCache />} />
          <Route path="/fetching-data-3/master-detail" element={<MasterDetailView />} />
          <Route path="/fetching-data-3/debounced-search" element={<DebouncedSearch />} />
          <Route path="/fetching-data-3/infinite-scroll" element={<InfiniteScroll />} />

          {/*/!* Authorization *!/*/}
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/auth/user" element={<UserPage />} />
        </Routes>
      </Router>
  );
};

export default App;
