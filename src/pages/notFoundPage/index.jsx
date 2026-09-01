import { Link } from "react-router";
import "./notFound.scss";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content">
          <span className="section-eyebrow">404 ERROR</span>

          <h1>Page Not Found</h1>

          <p>
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;