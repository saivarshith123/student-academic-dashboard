import { useState } from "react";
import {
  FileText,
  Download,
  Eye,
  BookOpen,
  Award,
  GraduationCap,
  Briefcase,
  X,
} from "lucide-react";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("Grade Sheets");
  const [selectedDocument, setSelectedDocument] = useState(null);

  const gradeSheets = [
    {
      title: "Semester 1 Grade Sheet",
      subtitle: "Semester 1",
      file: "/certificates/grade-sheets/semester-1-grade-sheet.pdf",
    },
    {
      title: "Semester 2 Grade Sheet",
      subtitle: "Semester 2",
      file: "/certificates/grade-sheets/semester-2-grade-sheet.pdf",
    },
    {
      title: "Semester 3 Grade Sheet",
      subtitle: "Semester 3",
      file: "/certificates/grade-sheets/semester-3-grade-sheet.pdf",
    },
    {
      title: "Semester 4 Grade Sheet",
      subtitle: "Semester 4",
      file: "/certificates/grade-sheets/semester-4-grade-sheet.pdf",
    },
    {
      title: "Semester 5 Grade Sheet",
      subtitle: "Semester 5",
      file: "/certificates/grade-sheets/semester-5-grade-sheet.pdf",
    },
    {
      title: "Semester 6 Grade Sheet",
      subtitle: "Semester 6",
      file: "/certificates/grade-sheets/semester-6-grade-sheet.pdf",
    },
    {
      title: "Semester 7 Grade Sheet",
      subtitle: "Semester 7",
      file: "/certificates/grade-sheets/semester-7-grade-sheet.pdf",
    },
    {
      title: "Semester 8 Grade Sheet",
      subtitle: "Semester 8",
      file: "/certificates/grade-sheets/semester-8-grade-sheet.pdf",
    },
  ];

  const transcripts = [
    {
      title: "Semester 1 Transcript",
      subtitle: "Semester 1",
      file: "/certificates/transcripts/semester-1-transcript.pdf",
    },
    {
      title: "Semester 2 Transcript",
      subtitle: "Semester 2",
      file: "/certificates/transcripts/semester-2-transcript.pdf",
    },
    {
      title: "Semester 3 Transcript",
      subtitle: "Semester 3",
      file: "/certificates/transcripts/semester-3-transcript.pdf",
    },
    {
      title: "Semester 4 Transcript",
      subtitle: "Semester 4",
      file: "/certificates/transcripts/semester-4-transcript.pdf",
    },
    {
      title: "Semester 5 Transcript",
      subtitle: "Semester 5",
      file: "/certificates/transcripts/semester-5-transcript.pdf",
    },
    {
      title: "Semester 6 Transcript",
      subtitle: "Semester 6",
      file: "/certificates/transcripts/semester-6-transcript.pdf",
    },
    {
      title: "Semester 7 Transcript",
      subtitle: "Semester 7",
      file: "/certificates/transcripts/semester-7-transcript.pdf",
    },
    {
      title: "Semester 8 Transcript",
      subtitle: "Semester 8",
      file: "/certificates/transcripts/semester-8-transcript.pdf",
    },
  ];

  const finalDocuments = [
    {
      title: "Provisional Certificate",
      subtitle: "Final Academic Document",
      file: "/certificates/final-documents/provisional-certificate.pdf",
    },
    {
      title: "Transfer Certificate",
      subtitle: "Final Academic Document",
      file: "/certificates/final-documents/transfer-certificate.pdf",
    },
    {
      title: "Degree Certificate",
      subtitle: "Final Academic Document",
      file: "/certificates/final-documents/degree-certificate.pdf",
    },
    {
      title: "Consolidated Grade Sheet",
      subtitle: "Final Academic Document",
      file: "/certificates/final-documents/consolidated-grade-sheet.pdf",
    },
  ];

  const nptelCertificates = [
    {
      title: "Conservation Economics",
      subtitle: "NPTEL Certification",
      file: "/certificates/nptel/conservation-economics.pdf",
    },
    {
      title: "Python for Data Science",
      subtitle: "NPTEL Certification",
      file: "/certificates/nptel/python-for-data-science.pdf",
    },
    {
      title: "Education for Sustainable Development",
      subtitle: "NPTEL Certification",
      file: "/certificates/nptel/education-for-sustainable-development.pdf",
    },
  ];

  const summerInternship = [
    {
      title: "Internship Completion Certificate",
      subtitle: "Summer Internship",
      file: "/certificates/summer-internship/internship-completion-certificate.pdf",
    },
    {
      title: "Internship Marks Sheet",
      subtitle: "Summer Internship",
      file: "/certificates/summer-internship/internship-marks-sheet.pdf",
    },
    {
      title: "Project Completion Certificate",
      subtitle: "Summer Internship",
      file: "/certificates/summer-internship/project-completion-certificate.pdf",
    },
  ];

  const categories = [
    {
      name: "Grade Sheets",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      name: "Transcripts",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      name: "Final Documents",
      icon: <Award className="w-5 h-5" />,
    },
    {
      name: "NPTEL",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      name: "Summer Internship",
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  const getDocuments = () => {
    if (activeCategory === "Grade Sheets") {
      return gradeSheets;
    }

    if (activeCategory === "Transcripts") {
      return transcripts;
    }

    if (activeCategory === "Final Documents") {
      return finalDocuments;
    }

    if (activeCategory === "NPTEL") {
      return nptelCertificates;
    }

    if (activeCategory === "Summer Internship") {
      return summerInternship;
    }

    return [];
  };

  const getCategoryIcon = () => {
    if (activeCategory === "Grade Sheets") {
      return <FileText className="w-6 h-6" />;
    }

    if (activeCategory === "Transcripts") {
      return <BookOpen className="w-6 h-6" />;
    }

    if (activeCategory === "Final Documents") {
      return <Award className="w-6 h-6" />;
    }

    if (activeCategory === "NPTEL") {
      return <GraduationCap className="w-6 h-6" />;
    }

    if (activeCategory === "Summer Internship") {
      return <Briefcase className="w-6 h-6" />;
    }

    return <FileText className="w-6 h-6" />;
  };

  const documents = getDocuments();

  return (
    <div className="min-h-full p-6 text-white">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-8">
        CERTIFICATES
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center mb-10">

        <div className="flex flex-wrap justify-center gap-4">

          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`
                flex
                items-center
                justify-center
                gap-2
                px-7
                py-3
                rounded-lg
                font-semibold
                text-base
                whitespace-nowrap
                transition-all
                duration-300
                ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }
              `}
            >
              {category.icon}
              {category.name}
            </button>
          ))}

        </div>

      </div>

      {/* Category Container */}
      <div
        className="
          rounded-xl
          border
          border-white/10
          bg-slate-900/30
          overflow-hidden
        "
      >

        {/* Category Header */}
        <div
          className="
            bg-gradient-to-r
            from-blue-900
            via-blue-500
            to-blue-900
            px-6
            py-4
            text-xl
            font-bold
            flex
            items-center
            gap-3
          "
        >
          {getCategoryIcon()}

          <span>
            {activeCategory}
          </span>
        </div>

        {/* Documents */}
        <div className="p-8">

          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
              gap-6
            "
          >

            {documents.map((document) => (

              <div
                key={document.title}
                className="
                  bg-slate-800
                  border
                  border-white/10
                  rounded-xl
                  overflow-hidden
                  transition-all
                  duration-300
                  hover:border-blue-500/50
                  hover:shadow-lg
                  hover:shadow-blue-500/10
                  hover:-translate-y-1
                "
              >

                {/* Card Header */}
                <div
                  className="
                    bg-gradient-to-r
                    from-blue-900
                    via-blue-500
                    to-blue-900
                    p-4
                  "
                >

                  <div className="flex items-center gap-3">

                    <div className="text-cyan-300 shrink-0">
                      {getCategoryIcon()}
                    </div>

                    <div className="min-w-0">

                      <h2 className="font-bold text-lg leading-tight">
                        {document.title}
                      </h2>

                      <p className="text-blue-100 text-sm mt-1">
                        {document.subtitle}
                      </p>

                    </div>

                  </div>

                </div>

                {/* Card Body */}
                <div className="p-5">

                  <div className="flex items-center gap-2 text-gray-400 mb-5">

                    <FileText className="w-4 h-4" />

                    <span className="text-sm">
                      PDF Document
                    </span>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    {/* View Button */}
                    <button
                      onClick={() => setSelectedDocument(document)}
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-gradient-to-r
                        from-cyan-500
                        to-blue-600
                        text-white
                        font-semibold
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>

                    {/* Download Button */}
                    <a
                      href={document.file}
                      download
                      className="
                        flex-1
                        flex
                        items-center
                        justify-center
                        gap-2
                        px-4
                        py-2
                        rounded-lg
                        bg-slate-700
                        border
                        border-slate-600
                        text-white
                        font-semibold
                        hover:bg-slate-600
                        transition-all
                        duration-300
                      "
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* PDF Viewer Modal */}
      {selectedDocument && (

        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/80
            backdrop-blur-sm
            flex
            items-center
            justify-center
            p-4
          "
        >

          <div
            className="
              bg-slate-900
              rounded-xl
              w-full
              max-w-6xl
              h-[90vh]
              border
              border-blue-500/50
              shadow-2xl
              shadow-blue-500/10
              overflow-hidden
            "
          >

            {/* Modal Header */}
            <div
              className="
                h-20
                flex
                items-center
                justify-between
                px-6
                border-b
                border-slate-700
                bg-slate-900
              "
            >

              <div className="min-w-0">

                <h2 className="text-xl font-bold truncate">
                  {selectedDocument.title}
                </h2>

                <p className="text-sm text-gray-400">
                  {selectedDocument.subtitle}
                </p>

              </div>

              <div className="flex items-center gap-3 ml-4">

                {/* Modal Download */}
                <a
                  href={selectedDocument.file}
                  download
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-lg
                    bg-gradient-to-r
                    from-cyan-500
                    to-blue-600
                    text-white
                    font-semibold
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="
                    p-2
                    rounded-lg
                    text-red-400
                    hover:text-red-300
                    hover:bg-red-500/10
                    transition-all
                  "
                >
                  <X className="w-7 h-7" />
                </button>

              </div>

            </div>

            {/* PDF Viewer */}
            <div className="w-full h-[calc(90vh-80px)] bg-white">

              <iframe
                src={selectedDocument.file}
                title={selectedDocument.title}
                className="w-full h-full border-0"
              />

            </div>

          </div>

        </div>

      )}

    </div>
  );
}