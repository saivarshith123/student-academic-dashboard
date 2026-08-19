import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";
import GradeHistory from "./pages/GradeHistory";
import Grades from "./pages/Grades";
import Marks from "./pages/Marks";
import Certificates from "./pages/Certificates";

function App() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-slate-950 text-white p-2">

      {/* Navbar */}
      <nav
        className="
          h-16
          rounded-2xl
          border
          border-white/10
          bg-white/10
          backdrop-blur-xl
          flex
          items-center
          px-6
          relative
        "
      >

        {/* Logo Left */}
        <h1
          onClick={() => navigate("/")}
          className="
            text-2xl
            font-bold
            cursor-pointer
            whitespace-nowrap
          "
        >
          Student DashBoard
        </h1>

        {/* Navigation Center */}
        <ul
          className="
            absolute
            left-1/2
            -translate-x-1/2
            flex
            items-center
            gap-12
            text-lg
            font-semibold
          "
        >

          {/* Profile */}
          <li>
            <Link
              to="/profile"
              className="
                cursor-pointer
                px-3
                py-1
                rounded-lg
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              Profile
            </Link>
          </li>

          {/* Marks */}
          <li>
            <Link
              to="/marks"
              className="
                cursor-pointer
                px-3
                py-1
                rounded-lg
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              Marks
            </Link>
          </li>

          {/* Grades */}
          <li>
            <Link
              to="/grades"
              className="
                cursor-pointer
                px-3
                py-1
                rounded-lg
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              Grades
            </Link>
          </li>

          {/* Grade History */}
          <li>
            <Link
              to="/history"
              className="
                cursor-pointer
                px-3
                py-1
                rounded-lg
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              Grade History
            </Link>
          </li>

          {/* Certificates */}
          <li>
            <Link
              to="/certificates"
              className="
                cursor-pointer
                px-3
                py-1
                rounded-lg
                transition-all
                duration-300
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              Certificates
            </Link>
          </li>

        </ul>

      </nav>

      {/* Page Content */}
      <div
        className="
          mt-2
          h-[calc(100vh-80px)]
          rounded-2xl
          border
          border-white/10
          bg-[#030b2d]
          overflow-auto
        "
      >
        <Routes>

          {/* Default Page */}
          <Route
            path="/"
            element={<Profile />}
          />

          {/* Profile */}
          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* Marks */}
          <Route
            path="/marks"
            element={<Marks />}
          />

          {/* Grades */}
          <Route
            path="/grades"
            element={<Grades />}
          />

          {/* Grade History */}
          <Route
            path="/history"
            element={<GradeHistory />}
          />

          {/* Certificates */}
          <Route
            path="/certificates"
            element={<Certificates />}
          />

        </Routes>
      </div>

    </div>
  );
}

export default App;