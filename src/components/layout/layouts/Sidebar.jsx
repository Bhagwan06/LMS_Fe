import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";

export const Sidebar = () => {
  return (
    <Stack gap={2}>
      <div className="p-2">
        <Link className="nav-link" to="/user">
          <RiDashboardLine className="me-2" />
          <span>Dashboard</span>
        </Link>
      </div>

      <div className="p-2">
        <Link className="nav-link" to="/user/books">
          <FaBook className="me-2" />
          <span>Books</span>
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/reviews">
          <FaBook className="me-2" />
          <span>Reviews</span>
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/all">
          <FaUsers className="me-2" />
          <span> All User</span>
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/borrow-history">
          <FaHistory className="me-2" />
          <span> Borrow History</span>
        </Link>
      </div>
      <div className="p-2">
        <Link className="nav-link" to="/user/profile">
          <FaUser className="me-2" />
          <span>Profile</span>
        </Link>
      </div>
    </Stack>
  );
};
