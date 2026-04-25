import "../styles/coursesPage.css";

const CoursesPage = () => {
  const subjects = [
    "AI and ML",
    "Static Web Development",
    "Dynamic Web Development",
    "C Programming",
    "Introduction to OOP",
    "Database",
    "Network Communication and Administration",
    "Routing and Switching",
  ];

  return (
    <div className="courses-page">
      <div className="courses-page-header">
        <h1 className="courses-page-title">Our Courses</h1>
      </div>

      {/* ── Hero Banner ── */}
      <div className="courses-hero">
        <div className="courses-hero-overlay" />
        <div className="courses-hero-text">
          <p>
            Learn new skills at your own pace with our structured and
            beginner-friendly courses. We provide clear, step-by-step lessons to
            help you grow in technology and creativity.
          </p>
        </div>
      </div>

      {/* ── Subjects ── */}
      <div className="courses-subjects">
        <h2 className="courses-subjects-title">Our Subjects</h2>
        <div className="courses-subjects-grid">
          {subjects.map((s, i) => (
            <div key={i} className="courses-subject-card">
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
