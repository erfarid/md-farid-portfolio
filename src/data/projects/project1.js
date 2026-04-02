const project1 = {
  id: "project1",
  title:
    "Smart Parking: Full-Stack Parking Management Platform with AI Plate Detection, Dynamic Pricing, and Real-Time Zone Monitoring",
  dates: "Feb 2026 - Apr 2026",
  description: [
    "Built a full-stack smart parking management platform with role-based dashboards, session tracking, and digital payment workflows.",
    "Integrated YOLOv8 and EasyOCR for AI-powered license plate detection with seamless session creation from uploaded images.",
    "Implemented zone-based pricing, overstay penalties, repeat-user surcharges, and real-time congestion monitoring for Budapest districts.",
    "Developed analytics and reporting modules with FastAPI, React, SQLite, and Docker-ready architecture for scalable deployment."
  ],
  techStack: ["python", "fastapi", "react", "docker", "ai", "gitlab"],
  thumbnail: process.env.PUBLIC_URL + "/images/projects/projects1.png"
};

export default project1;